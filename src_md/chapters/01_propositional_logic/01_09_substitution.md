# 1.9 等价替换定理：逻辑的“等量代换”

在几何证明中，我们经常使用“等量代换”：如果线段 $AB = CD$，那么在任何涉及 $AB$ 的等式中，我们都可以把 $AB$ 换成 $CD$。

在逻辑学中，也有同样的规则。本节我们将证明，如果两个命题表达式 $P$ 和 $Q$ 是等价的（即 $P \leftrightarrow Q$），那么我们可以放心地在任何背景下进行“换件”而不改变整体的意义。

## 1. 元操作：替换 $S[P \backslash Q]$

为了精确描述“换件”的过程，我们引入一个元操作符号：**$S[P \backslash Q]$**。

- **定义**：它代表将表达式 $S$ 中所有的子表达式 $P$ 全部替换为 $Q$ 后得到的新表达式。
- **直观理解**：这就像文档编辑器里的“全部替换”功能。$S$ 是文档全文，$P$ 是你要搜索的旧内容，$Q$ 是你要换上的新内容。

**例子**：
1. 若 $S$ 为 $P \land R$，则 $S[P \backslash Q]$ 为 $Q \land R$。
2. 若 $S$ 为 $A \to (B \lor A)$，则 $S[A \backslash C]$ 为 $C \to (B \lor C)$。

---

## 2. 引理：等价消去律

在开始大规模证明之前，我们需要先掌握如何“消费”一个等价命题。根据等价的定义 $P \leftrightarrow Q \equiv (P \to Q) \land (Q \to P)$，我们可以得到两条非常有用的引理：

- **等价消去律 1 ($\leftrightarrow$-E $_1$)**：
  $$ \frac{P \quad P \leftrightarrow Q}{Q} $$
  证明：先用合取消去从等价式中拆出 $P \to Q$，再对 $P$ 使用蕴涵消去。

- **等价消去律 2 ( $\leftrightarrow$-E $_2$ )**：
  $$ \frac{Q \quad P \leftrightarrow Q}{P} $$
  证明类似

有了这两条引理，我们就拥有了在推导中进行“局部微调”的合法武器。

---

## 3. 定理描述

**等价替换定理（Substitution Theorem）**：
如果两个命题表达式 $P$ 和 $Q$ 满足等价关系，那么在一个成立的判定中，我们可以自由用Q替换其中的P。

$$ \frac{\Gamma \vdash S \quad \Gamma \vdash P \leftrightarrow Q}{\Gamma \vdash S[P \backslash Q]} $$

这意味着，逻辑等价性具有“穿透力”，只要证明部分的等价，就可以应用到任意的整体上。

---

## 4. 证明：结构归纳法

我们要证明：只要部分是等价的，那么无论怎么拼装，整体依然等价。

### (1) 基础情况
- **情况 A**：$S$ 恰好就是被替换的对象 $P$。替换后 $S[P \backslash Q]$ 就是 $Q$。根据等价消去规则，直接得到结果：
  $$ \frac{P \quad  P \leftrightarrow Q}{Q} \text{($\leftrightarrow$-E$_1$)} $$
  结论成立。



- **情况 B**：$S$ 是一个不含 $P$ 的命题 $R$。替换后它依然是 $R$。由于 $\dfrac{R}{R}$（假设规则）永远成立，结论显然成立。

### (2) 归纳步骤
现在我们只需证明，如果在每一层算符中，替换一个部分不改变等价性，那么无论嵌套多少层，定理都成立。这是一种数学归纳法的变体。

#### 合取 ($\land$)
首先我们证明替换左侧：如果 $P \leftrightarrow Q$，那么替换 $P \land R$ 中的 $P$ 得到 $Q \land R$ 依然等价。
$$ \frac{\displaystyle \frac{\displaystyle \frac{P \land R}{P} \text{($\land$-E$_1$)}   \quad P \leftrightarrow Q}{Q} \text{($\leftrightarrow$-E$_1$)} \quad \frac{P \land R}{R} \text{($\land$-E$_2$)}}{Q \land R} \text{($\land$-I)} $$
同理可证替换右侧。

#### 蕴涵 ($\to$) 与 否定 ($\neg$)
利用蕴涵的传递性，证明变得非常简洁：

**1. 替换前提**：
$$ \frac{\displaystyle \frac{P \leftrightarrow Q }{Q \to P} \text{($\land$-E$_2$)} \quad P \to R  }{Q \to R} \text{($\to$ 传递性)} $$

**2. 替换结论**：
$$ \frac{R \to P \quad \displaystyle \frac{P \leftrightarrow Q }{P \to Q} \text{($\land$-E$_1$)} }{R \to Q} \text{($\to$ 传递性)} $$

否定 $\neg P$ 可直接视为 $P \to \perp$，套用上述替换前提的结论即可得证。

#### 析取层 ($\lor$)
利用分类讨论（$\lor$-E）：
$$ \frac{ P \quad P \leftrightarrow Q } {\displaystyle \frac{Q}{Q \lor R}}  $$
因此我们得到了 $P, P \leftrightarrow Q \vdash Q \lor R $
另外，由or的引入律我们知道 $R \vdash Q \lor R $。所以：
$$ \frac{ P \lor R \quad P \to  Q \lor R \quad R \to Q \lor R} {Q \lor R}  $$
// 你改了我看了，我完全不能接受你的写法，你的写法直接破坏了长横线的语法和推理匹配的规则。公式用我的，最多补下括号。然后台南佳文字说明。

**结论**：由于每一个拼装算符都尊重等价性，等价替换定理对任何复杂的表达式 $S$ 都成立。

---

## 5. 等价关系的优良性质

除了替换性之外，等价算符还有三个和“等于号”一样的优良性质，它们支撑起了逻辑演算的灵活性：

1.  **自反性 (Reflexivity)**：$\vdash P \leftrightarrow P$
2.  **对称性 (Symmetry)**：$\displaystyle \frac{P \leftrightarrow Q}{ Q \leftrightarrow P}$
3.  **传递性 (Transitivity)**：$\displaystyle \frac{ P \leftrightarrow Q \quad Q \leftrightarrow R}{ P \leftrightarrow R}$

利用这三条性质，我们可以像做连等式一样进行链式推理。

---

## 6. 为什么这很重要？

等价替换定理将逻辑从“纯粹的论证”变成了“灵活的计算”。有了它，我们可以像做代数简便运算一样：识别局部、寻找等价物、实施替换。它是所有逻辑简化规则（如德·摩根定律、分配律）能够被应用的前提。

---

## 习题

**习题 1.9.1**：
利用传递性证明：如果 $A \leftrightarrow B$ 且 $B \leftrightarrow C$ 成立，那么 $\neg A \leftrightarrow \neg C$ 也成立。

**习题 1.9.2**：
利用等价替换定理和德·摩根定律，直接通过逐步替换（不使用长横线推导）证明：
$$ \vdash \neg(P \land (Q \lor R)) \leftrightarrow (\neg P \lor (\neg Q \land \neg R)) $$

**习题 1.9.3（思考题）**：
逻辑等价 $P \leftrightarrow Q$ 与几何全等 $\triangle ABC \cong \triangle DEF$ 有什么相似之处？为什么逻辑系统允许我们使用“长相不同”但“功能相同”的零件？

## 总结

-   **$S[P \backslash Q]$** 是替换操作。
-   **等价关系** 具有自反、对称、传递性。
-   **等价替换定理** 是实现“逻辑计算”的基石。