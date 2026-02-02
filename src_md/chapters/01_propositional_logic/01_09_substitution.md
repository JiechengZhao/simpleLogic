# 1.9 等价替换定理：逻辑的“等量代换”

在代数中，我们经常使用“等量代换”：如果 $a = b$，那么在任何涉及 $a$ 的式子中，我们都可以把 $a$ 换成 $b$。

在逻辑学中，也有类似的规则。本节我们将证明，如果两个命题表达式 $P$ 和 $Q$ 是等价的（即 $P \leftrightarrow Q$），那么我们可以放心地在任何背景下进行替换而不改变整体判定的正确性。

## 1. 替换操作： $S[P \backslash Q]$

为了精确描述替换的过程，我们引入一个操作符号：**$S[P \backslash Q]$**。它不是一个命题符号，而是一个和 $\Gamma$、$\vdash$、$——$ 类似的一种元符号。

- **定义**：它代表将表达式 $S$ 中所有的子表达式 $P$ 全部替换为 $Q$ 后得到的新表达式。
- **直观理解**：这就像文档编辑器里的“全部替换”功能。$S$ 是文档全文，$P$ 是被匹配的旧内容，$Q$ 是换上的新内容。

**例子**：
1. 若 $S$ 为 $P \land R$，则 $S[P \backslash Q]$ 为 $Q \land R$。
2. 若 $S$ 为 $A \to (B \lor A)$，则 $S[A \backslash C]$ 为 $C \to (B \lor C)$。

这个操作有一个直观的性质我们后面需要使用，两次相反的替换等于什么都没做。
$S[P \backslash Q][Q \backslash P] = S$

---

## 2. 引理：等价消去律

在开始证明之前，我们需要先掌握如何“消费”一个等价命题。根据等价的定义 $P \leftrightarrow Q \equiv (P \to Q) \land (Q \to P)$，我们可以得到两条非常有用的引理：

- **等价消去律 1 ($\leftrightarrow$-E $_1$)**：
  $$ \frac{P \quad P \leftrightarrow Q}{Q} $$
  证明：先用合取消去从等价式中拆出 $P \to Q$，再用蕴涵消去得到结论。

- **等价消去律 2 ( $\leftrightarrow$-E $_2$ )**：
  $$ \frac{Q \quad P \leftrightarrow Q}{P} $$
  证明类似。

有了这两条引理，我们之后的证明书写会变得方便一些。

---

## 3. 定理描述

**等价替换定理（Substitution Theorem）**：
如果两个命题表达式 $P$ 和 $Q$ 满足等价关系，那么在一个成立的判定中，我们可以自由地用$Q$替换其中的$P$。

$$ \frac{\Gamma \vdash S \quad \Gamma \vdash P \leftrightarrow Q}{\Gamma \vdash S[P \backslash Q]} $$

这意味着，逻辑等价性具有某种“穿透力”，只要证明部分的等价，就可以应用到任意的整体上。

---

## 4. 证明：结构归纳法

我们要证明：只要部分是等价的，那么无论怎么拼装，整体依然等价。即证明从 $S$ 和 $P \leftrightarrow Q$ 出发，总能推导出 $S[P \backslash Q]$。

### (1) 基础情况
- **情况 A**：$S$ 恰好就是被替换的对象 $P$。替换后 $S[P \backslash Q]$ 就是 $Q$。根据等价消去规则，直接得到结果：
  $$ \frac{P \quad  P \leftrightarrow Q}{Q} \text{($\leftrightarrow$-E$_1$)} $$
  结论成立。



- **情况 B**：$S$ 是一个不含 $P$ 的命题 $R$。替换后它依然是 $R$。由于 $\dfrac{R}{R}$（假设规则）永远成立，结论显然成立。

### (2) 归纳步骤
现在我们只需证明，如果在每一层算符表达式（$\neg, \land, \lor, \to$）中，替换其中的一个**部分**不改变判定的正确性，那么无论嵌套多少层，定理都成立。这是一种数学归纳法。
这里为了让归纳成立，我们先证明 如果 $$ \frac{ \quad \Gamma \vdash P \leftrightarrow Q}{\Gamma \vdash S \leftrightarrow  S[P \backslash Q]} $$ 这个规则成立，那么 


#### 合取 ($\land$)
**1. 替换左侧：**
如果 $P \leftrightarrow Q$，那么替换 $P \land R$ 中的 $P$ 得到 $Q \land R$ 依然等价。
$$ \frac{\displaystyle \frac{\displaystyle \frac{P \land R}{P} \text{($\land$-E$_1$)}   \quad P \leftrightarrow Q}{Q} \text{($\leftrightarrow$-E$_1$)} \quad \frac{P \land R}{R} \text{($\land$-E$_2$)}}{Q \land R} \text{($\land$-I)} $$
**1. 替换右侧：**
同理可证，或者可以使用合取的交换律和之前替换左侧的结论来完成证明。

因此，无论是合取的哪个部分存在等价关系被替换，替换后命题都依然成立。

#### 蕴涵 ($\to$) 与 否定 ($\neg$)

**1. 替换前提**：
$$ \frac{\displaystyle \frac{P \leftrightarrow Q }{Q \to P} \text{($\land$-E$_2$)} \quad P \to R  }{Q \to R} \text{($\to$ 传递性)} $$

**2. 替换结论**：
$$ \frac{R \to P \quad \displaystyle \frac{P \leftrightarrow Q }{P \to Q} \text{($\land$-E$_1$)} }{R \to Q} \text{($\to$ 传递性)} $$

因此，无论是蕴含的哪个部分存在等价关系被替换，替换后命题都依然成立。否定 $\neg P$ 可直接视为 $P \to \perp$，套用上述替换前提的结论即可得证。

#### 析取层 ($\lor$)
我们需要证明：如果 $P \leftrightarrow Q$，那么从 $P \lor R$ 可以推导出 $Q \lor R$（反向同理）。
利用分类讨论（$\lor$-E），我们可以建立如下推导：

$$ \frac{ P \lor R \quad \displaystyle \frac{ [P]^1 \quad P \leftrightarrow Q } {\displaystyle \frac{Q}{Q \lor R} \text{($\lor$-I)}} \text{($\leftrightarrow$-E$_1$)} \quad \frac{[R]^1}{Q \lor R} \text{($\lor$-I)}}{Q \lor R} \text{($\lor$-E)}^1 $$

这里我们首先由 $P \lor R$ 开启分类讨论。在左支中，由假设 $P$ 与等价前提得到 $Q$，再由 $\lor$-I 得到结论；在右支中，由假设 $R$ 直接得到结论。由此证明了析取项局部替换的有效性。


#### 归纳结论

在通过归纳法验证了所有算符（$\neg, \land, \lor, \to$）在局部替换下均保持等价性后，我们完成了定理的证明。在应用定理时，我们通常依赖于以下推导逻辑，它将“判定的有效性”与“命题的等价性”联系起来：

$$ \frac{ \displaystyle \frac{[S]^1 \quad \Gamma, P \leftrightarrow Q \vdash S \leftrightarrow S[P \backslash Q]}{S[P \backslash Q]} \text{($\leftrightarrow$-E$_1$)} \quad \frac{[S[P \backslash Q]]^2 \quad \Gamma, P \leftrightarrow Q \vdash S \leftrightarrow S[P \backslash Q]}{S} \text{($\leftrightarrow$-E$_2$)} }{ \Gamma, P \leftrightarrow Q \vdash S \leftrightarrow S[P \backslash Q] } \text{($\leftrightarrow$-I)}^{1,2} $$

这表明，只要基础情况和递归步骤成立，等价关系就能在表达式的所有层次中自由传递。

---

## 5. 等价关系的优良性质

除了支持局部替换之外，等价算符还有三个和“等于号”一样的优良性质，它们支撑起了逻辑演算的灵活性：

1.  **自反性 (Reflexivity)**：$\vdash P \leftrightarrow P$
2.  **对称性 (Symmetry)**：$\displaystyle \frac{P \leftrightarrow Q}{ Q \leftrightarrow P}$
3.  **传递性 (Transitivity)**：$\displaystyle \frac{ P \leftrightarrow Q \quad Q \leftrightarrow R}{ P \leftrightarrow R}$

利用这三条性质，我们可以像做连等式一样，通过一系列中间步骤完成复杂的等价证明。

---

## 6. 为什么这很重要？

等价替换定理将逻辑从“纯粹的论证”变成了“灵活的计算”。

有了它，我们可以像做代数简便运算一样：识别局部、寻找等价物、实施替换。它是所有逻辑简化规则（如德·摩根定律、分配律）能够被实际应用到复杂式子中的合法性前提。它宣告了：**在推理的过程中，逻辑关注的是命题的“功能”而非“长相”。**

---

## 习题

**习题 1.9.1**：
利用传递性证明：如果 $A \leftrightarrow B$ 且 $B \leftrightarrow C$ 成立，那么 $\neg A \leftrightarrow \neg C$ 也成立。

**习题 1.9.2**：
利用等价替换定理和德·摩根定律，直接通过逐步替换证明：
$$ \vdash \neg(P \land (Q \lor R)) \leftrightarrow (\neg P \lor (\neg Q \land \neg R)) $$

**习题 1.9.3（思考题）**：
逻辑等价 $P \leftrightarrow Q$ 与几何全等 $\triangle ABC \cong \triangle DEF$ 有什么相似之处？为什么逻辑系统允许我们使用“功能相同”但“长相不同”的部分进行替换？

## 总结

-   **$S[P \backslash Q]$** 是替换操作，将 $S$ 中的 $P$ 换成 $Q$。
-   **等价关系** 具有自反、对称、传递性。
-   **等价替换定理** 保证了只要部分等价，替换后的整体判定依然成立。
