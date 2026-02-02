# 1.9 等价替换定理：逻辑的“等量代换”

在几何证明中，我们经常使用“等量代换”：如果线段 $AB = CD$，那么在任何涉及 $AB$ 的等式中，我们都可以把 $AB$换成 $CD$。

在逻辑学中，也有同样的规则。本节我们将证明，如果两个命题表达式 $P$ 和 $Q$ 是等价的（即 $P \leftrightarrow Q$），那么我们可以放心地在任何背景下进行“换件”而不改变整体的意义。

## 1. 元操作：替换 $S[P \backslash Q]$

为了精确描述“换件”的过程，我们引入一个元操作符号：**$S[P \backslash Q]$**。

- **定义**：它代表将表达式 $S$ 中所有的子表达式 $P$ 全部替换为 $Q$ 后得到的新表达式。
- **直观理解**：这就像文档编辑器里的“全部替换”功能。$S$ 是文档全文，$P$ 是你要搜索的旧内容，$Q$ 是你要换上的新内容。

**例子**：
1. 若 $S$ 为 $P \land R$，则 $S[P \backslash Q]$ 为 $Q \land R$。
2. 若 $S$ 为 $A \to (B \lor A)$，则 $S[A \backslash C]$ 为 $C \to (B \lor C)$。

---

## 2. 定理描述

**等价替换定理（Substitution Theorem）**：
如果两个命题表达式 $P$ 和 $Q$ 满足等价关系，那么在一个成立的判定中，我们可以自由替换其中的零件。

$$ \frac{\Gamma \vdash S \quad \Gamma \vdash P \leftrightarrow Q}{\Gamma \vdash S[P \backslash Q]} $$

这意味着，逻辑等价性具有“穿透力”，只要证明部分的等价，就可以应用到任意的整体上。

---

## 3. 证明：结构归纳法

我们要证明：只要零件是等价的，那么无论怎么拼装，整体依然等价。即证明 $\vdash S \leftrightarrow S[P \ Q]$ 始终成立。

### (1) 基础情况
- **情况 A**：$S$ 恰好就是被替换的对象 $P$。替换后 $S[P \backslash Q]$ 就是 $Q$。我们要证 $P \leftrightarrow Q$。
  由于前提就是 $P \leftrightarrow Q$，根据等价消去规则，推导如下：
  $$ \frac{P \quad \displaystyle \frac{P \leftrightarrow Q}{P \to Q} \text{($\land$-E$_1$)}}{Q} \text{($\to$-E)} $$
  结论成立。

  这里，我们顺遍证明了之后会用到的一个重要引理：
    $$ \frac{P \quad P \leftrightarrow Q}{Q} 
    $$ 
    我们把它称作等价的消去律， $\land-E_1$。这样的消去律有两个，还有一个用类似的方法可以证明：
    $$ \frac{P \quad Q \leftrightarrow P}{Q} 
    $$
    // 这里加一段引理的讨论。也可以提前，这样我们后面使用消去会清晰，另外消去律需要增加1 2 角标。

- **情况 B**：$S$ 是一个不含 $P$ 的原子命题 $R$。替换后它依然是 $R$。由于 $\dfrac{R}{R}$（假设规则）永远成立，结论显然成立。

### (2) 归纳步骤
现在我们只需证明，如果在每一层拼装算符（$\neg, \land, \lor, \to$）中，替换一个零件不改变等价性，那么无论嵌套多少层，定理都成立。这是一种数学归纳法的变体。

#### 合取层 ($\land$)
我们要证：如果 $P \leftrightarrow Q$，那么替换 $P \land R$ 中的 $P$ 得到 $Q \land R$ 。
$$\frac{\displaystyle \frac{ P \leftrightarrow Q \quad \displaystyle \frac{P \land R}{P} \text{($\land$-E)} }{Q} \text{($\leftrightarrow$-E)} \quad \frac{P \land R}{R} \text{($\land$-E)}}{Q \land R} \text{($\land$-I)} $$
同理可证右侧替换：从 $R \land P$ 推出 $R \land Q$。
// 这里也是消去律要加角标

#### 蕴涵层 ($\to$) 与 否定层 ($\neg$)
否定可以看作结论为矛盾的蕴涵（$\neg P \equiv P \to \perp$），因此我们只需证明蕴涵的两侧替换。

**1. 结论替换**：
$$ \frac{\displaystyle \frac{P \leftrightarrow Q }{Q \to P} \text{($\land$-E$_2$)} \quad P \to R \quad   }{Q \to R} \text{($\to$传递性)} $$

**2. 前提替换**（注意这里需要对称性）：
$$ \frac{\displaystyle \frac{P \leftrightarrow Q }{P \to Q} \text{($\land$-E$_1$)} \quad R \to P \quad   }{R \to Q} \text{($\to$传递性)} $$


#### 析取层 ($\lor$)
利用分类讨论（$\lor$-E）：
$$ \frac{ P \quad P \leftrightarrow Q } {\displaystyle \frac{Q}{Q \lor R}}  $$
因此我们得到了 $P, P \leftrightarrow Q \vdash Q \lor R $
另外，由or的引入律我们知道 $R \vdash Q \lor R $。所以：
$$ \frac{ P \lor R \quad P \to  Q \lor R \quad R \to Q \lor R} {Q \lor R}  $$

另一边也是一样的。
**结论**：由于每一个拼装算符都“尊重”等价性，等价替换定理对任何复杂的表达式 $S$ 都成立。

---

## 4. 等价关系的优良性质

除了替换性之外，等价算符还有三个和“等于号”一样的优良性质，这些性质会帮助我们更方便地使用等价关系进行演算。

1.  **自反性 (Reflexivity)**：$\vdash P \leftrightarrow P$
2.  **对称性 (Symmetry)**：$\displaystyle \frac{P \leftrightarrow Q}{ Q \leftrightarrow P}$
3.  **传递性 (Transitivity)**：$\displaystyle \frac{ P \leftrightarrow Q \quad Q \leftrightarrow R}{ P \leftrightarrow R}$

利用这三条性质，我们可以像做连等式一样，通过一系列中间步骤完成复杂的等价证明。

---

## 5. 为什么这很重要？

等价替换定理将逻辑从“纯粹的论证”变成了“灵活的计算”。有了它，我们可以像做代数简便运算一样：识别局部、寻找等价物、实施替换。它是所有逻辑简化规则（如德·摩根定律、分配律）能够被实际应用到复杂式子中的合法性前提。

---

## 习题

**习题 1.9.1**：
利用传递性证明：如果 $A \leftrightarrow B$ 且 $B \leftrightarrow C$，那么 $\neg A \leftrightarrow \neg C$。

**习题 1.9.2**：
利用等价替换定理和德·摩根定律，不通过长横线推导，直接通过逐步替换证明：
$$ \vdash \neg(P \land (Q \lor R)) \leftrightarrow (\neg P \lor (\neg Q \land \neg R)) $$



## 总结

-   **$S[P \backslash Q]$** 是替换操作，将 $S$ 中的 $P$ 换成 $Q$。
-   **等价关系** 具有自反、对称、传递性，这使其表现得像“等于号”。
-   **等价替换定理** 是实现“逻辑计算”的基石。
