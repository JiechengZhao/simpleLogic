// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="chapters/01_introduction.html"><strong aria-hidden="true">1.</strong> 引言</a></li><li class="chapter-item expanded "><a href="chapters/02_propositional_logic.html"><strong aria-hidden="true">2.</strong> Chapter 2: 命题逻辑——几何判定的骨架</a></li><li class="chapter-item expanded "><a href="chapters/03_first_order_logic.html"><strong aria-hidden="true">3.</strong> Chapter 3: 一阶逻辑——描述“关系”的语言</a></li><li class="chapter-item expanded "><a href="chapters/04_formal_proof.html"><strong aria-hidden="true">4.</strong> Chapter 4: 形式化证明——像算术一样运算思维</a></li><li class="chapter-item expanded "><a href="chapters/05_classical_logic.html"><strong aria-hidden="true">5.</strong> Chapter 5: 回看古典逻辑——三段论的现代翻译</a></li><li class="chapter-item expanded "><a href="chapters/06_conclusion.html"><strong aria-hidden="true">6.</strong> Chapter 6: 总结与升华</a></li><li class="chapter-item expanded "><a href="materials/geometry_mapping.html"><strong aria-hidden="true">7.</strong> Geometry Mapping</a></li><li class="chapter-item expanded "><a href="materials/logic_concepts.html"><strong aria-hidden="true">8.</strong> Logic Concepts</a></li><li class="chapter-item expanded "><a href="materials/proof_techniques.html"><strong aria-hidden="true">9.</strong> Proof Techniques</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
