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

## 3. 定理描述

**等价替换定理（Substitution Theorem）**：
如果两个命题表达式 $P$ 和 $Q$ 满足等价关系，那么在一个成立的判定中，我们可以自由替换其中的零件。

$$ \frac{\Gamma \vdash S \quad \Gamma \vdash P \leftrightarrow Q}{\Gamma \vdash S[P \backslash Q]} $$

这意味着，逻辑等价性具有极其稳固的“穿透力”，它能保证局部零件的改变不会动摇整体判定的正确性。

---

## 4. 证明：结构归纳法

我们要证明：只要零件是等价的，那么无论怎么拼装，整体依然等价。即证明 $\vdash S \leftrightarrow S[P \backslash Q]$ 始终成立。

### (1) 基础情况
- **情况 A**：$S$ 恰好就是 $P$。替换后 $S[P \backslash Q]$ 是 $Q$。$\dfrac{P \dfrac{P \leftrightarrow Q}{P \to Q}}{Q}$ ，结论成立。
// 帮我补全
- **情况 B**：$S$ 是一个不含 $P$ 的原子命题 $R$。替换后依然是 $R$。由假设规则 $\dfrac{R}{R}$ 成立。

### (2) 归纳步骤
假设零件 $A$ 和 $B$ 已经满足等价替换（即 $A \leftrightarrow A'$ 和 $B \leftrightarrow B'$，其中 $A'$ 是替换后的结果）。

//你这里全错了，我们只要证一个被替换，不是两个被替换，你瞎搞什么。
#### 合取层 ($\land$)
我们要证：
$$
 \frac{ P \leftrightarrow Q \quad  P \land R \quad }{ Q \land R } $$ 

// 证明过程自己补，先用合取消去，然后蕴含消去，再用合取引入

$$
 \frac{ P \leftrightarrow Q \quad  R \land P \quad }{ R \land Q } $$

 // 这个也要证，可以再写一遍，也可以用合取的交换律，然后回到上面的结论。


// 后面全是这样的问题，写的一塌糊涂，没有理解自己到底要证什么。都参考上面重写。


#### 蕴涵层 ($\\to$) 与 否定层 ($\\neg$)
由于 $\\neg A$ 可以看作 $A \to \\perp$，我们只需证明蕴涵层：$(A \to B) \leftrightarrow (A' \to B')$。
展示从左到右的方向：
$$ \frac{A \to B \quad \displaystyle \frac{A' \quad A \leftrightarrow A'}{A} \text{($\\leftrightarrow$-E)}} { \frac{B \quad B \leftrightarrow B'}{B'} \text{($\\leftrightarrow$-E)} } \text{($\\to$-E)} }{A' \to B'} \text{($\\to$-I)} $$

#### 析取层 ($\\lor$)
我们要证：$(A \lor B) \leftrightarrow (A' \lor B')$。
利用分类讨论（$\\lor$-E）：
$$ \frac{A \lor B \quad \frac{A \quad A \leftrightarrow A'}{A \to A' \lor B'} \quad \frac{B \quad B \leftrightarrow B'}{B \to A' \lor B'}}{A' \lor B'} \text{($\\lor$-E)} $$

**结论**：在所有拼装算符下，等价性都能完美传递。因此，等价替换定理对任何复杂的表达式 $S$ 都成立。

---

## 5. 为什么这很重要？

等价替换定理将逻辑从“纯粹的论证”变成了“灵活的计算”。有了它，我们可以像做代数简便运算一样：识别局部、寻找等价物、实施替换。它是所有逻辑简化规则能够被应用的前提。

---
## 2. 等价关系的优良性质

除了替换性之外，等价算符还有三个和“等于号”一样的优良性质，这些性质会帮助我们更方便的使用等价关系。

1.  **自反性 (Reflexivity)**：$\vdash P \leftrightarrow P$
2.  **对称性 (Symmetry)**：$\displaystyle \frac{P \leftrightarrow Q}{ Q \leftrightarrow P}$
3.  **传递性 (Transitivity)**：$\displaystyle \frac{ P \leftrightarrow Q \quad  Q \leftrightarrow R}{ P \leftrightarrow R}$



## 习题

**习题 1.9.1**：
利用传递性证明：如果 $A \leftrightarrow B$ 且 $B \leftrightarrow C$，那么 $\\neg A \leftrightarrow \\neg C$。

**习题 1.9.2**：
利用等价替换定理和德·摩根定律，直接通过逐步替换证明：
$$ \vdash \\neg(P \land (Q \lor R)) \leftrightarrow (\\neg P \lor (\\neg Q \land \\neg R)) $$

**习题 1.9.3（思考题）**：
逻辑等价 $P \leftrightarrow Q$ 与几何全等 $\\triangle ABC \\cong \\triangle DEF$ 有什么相似之处？为什么逻辑系统允许我们使用“长相不同”但“功能相同”的零件？

## 总结

-   **$S[P \\ Q]$** 是替换操作。
-   **等价关系** 具有自反、对称、传递性。
-   **等价替换定理** 保证了逻辑运算的局部合法性。