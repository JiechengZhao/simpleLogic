# 1.9 等价替换定理：逻辑的“等量代换”

在代数中，我们经常使用“等量代换”：如果 $a = b$，那么在任何涉及 $a$ 的式子中，我们都可以把 $a$ 换成 $b$。

在逻辑学中，也有类似的规则。本节我们将证明，如果两个命题表达式 $P$ 和 $Q$ 是等价的（即 $P \leftrightarrow  Q$），那么我们可以放心地在任何背景下进行替换而不改变整体判定的正确性。

---

## 1. 替换操作： $S[P \backslash Q]$

为了精确描述替换的过程，我们引入一个元符号操作：**$S[P \backslash Q]$**。

- **定义**：它代表将表达式 $S$ 中所有的子表达式 $P$ 全部替换为 $Q$ 后得到的新表达式。
- **直观理解**：这就像文档编辑器里的“全部替换”功能。$S$ 是文档全文，$P$ 是被匹配的旧内容，$Q$ 是换上的新内容。

**例子**：
1. 若 $S$ 为 $P \land R$，则 $S[P \backslash Q]$ 为 $Q \land R$。
2. 若 $S$ 为 $A \to (B \lor A)$，则 $S[A \backslash C]$ 为 $C \to (B \lor C)$。

---

## 2. 引理：等价消去律

根据等价的定义 $P \leftrightarrow  Q \equiv (P \to Q) \land (Q \to P)$，我们可以得到两条基本的引理（$\leftrightarrow $-E）：

- **引理 1 ($\leftrightarrow $-E $_1$)**：$\displaystyle \frac{P \quad P \leftrightarrow  Q}{Q}$
- **引理 2 ( $\leftrightarrow $-E $_2$ )**：$\displaystyle \frac{Q \quad P \leftrightarrow  Q}{P}$

这两条引理本质上是合取消去（$\land $-E）与蕴涵消去（$\to $-E）的组合调用。

---

## 3. 定理描述：等价替换定理

**等价替换定理（Substitution Theorem）**：
如果两个命题表达式 $P$ 和 $Q$ 满足等价关系，那么对于任何包含 $P$ 的命题表达式 $S$，$S$ 与替换后的 $S[P \backslash Q]$ 也是等价的。

$$ \frac{\Gamma \vdash P \leftrightarrow  Q}{\Gamma \vdash S \leftrightarrow S[P \backslash Q]} $$

这意味着，逻辑等价性具有某种“穿透力”，只要证明局部的等价，就可以确保整体的等价。

---

## 4. 证明：结构归纳法

我们要证明：只要 $P \leftrightarrow  Q$ 成立，那么对于任意结构的 $S$，恒有 $S \leftrightarrow  S[P \backslash Q]$。我们对 $S$ 的复杂度进行归纳。

### (1) 基础情况
- **情况 A**：$S$ 恰好就是 $P$。此时 $S[P \backslash Q]$ 是 $Q$。结论为 $P \leftrightarrow  Q \vdash P \leftrightarrow  Q$，显然成立。
- **情况 B**：$S$ 是一个不含 $P$ 的原子命题 $R$。此时 $S[P \backslash Q]$ 依然是 $R$。由于 $\vdash R \leftrightarrow  R$（自反性），结论成立。

### (2) 归纳步骤
假设对于子表达式 $A, B$，定理已经成立（即归纳假设）：
- $A \leftrightarrow  A'$ （其中 $A'$ 记作 $A[P \backslash Q]$）
- $B \leftrightarrow  B'$ （其中 $B'$ 记作 $B[P \backslash Q]$）

#### 情况 1：合取式 ($S = A \land B$)
我们要证明 $A \land B \leftrightarrow  A' \land B'$。根据 $\land $-I 和 $\leftrightarrow $-E，我们可以得到如下推导路径：

$$ \frac{\displaystyle \frac{A \land B}{A} \quad A \leftrightarrow  A'}{A'} \qquad \frac{\displaystyle \frac{A \land B}{B} \quad B \leftrightarrow  B'}{B'} $$

将两条路径合并，即可得到结论 $A' \land B'$。结合反向推导，合取项的替换保持等价。

#### 情况 2：析取式 ($S = A \lor B$)
我们要证明 $(A \lor B) \leftrightarrow  (A' \lor B')$。根据 1.5 节“分类讨论”的逻辑，我们只需证明两条分支路径都能通往目标：

- **路径 1 ($A \to A' \lor B'$)**：
  $$ \frac{A \quad A \leftrightarrow  A'}{ \displaystyle \frac{A'}{A' \lor B'} (\lor\text{-I}) } (\leftrightarrow \text{-E}_1) $$
- **路径 2 ($B \to A' \lor B'$)**：
  同理可证。

有了这两条路径，结合前提 $A \lor B$，利用 **$\lor $-Elim** 规则（简写形式）：
$$ \frac{A \lor B \quad A \to A' \lor B' \quad B \to A' \lor B'}{A' \lor B'} (\lor\text{-E}) $$
结论得证。

#### 情况 3：蕴涵式 ($S = A \to B$)
我们要证明 $(A \to B) \leftrightarrow  (A' \to B')$。根据蕴涵的传递性：

$$ \frac{\displaystyle \frac{\displaystyle \frac{A \leftrightarrow  A'}{A' \to A}(\land\text{-E}_2) \quad A \to B}{A' \to B} (\text{传递性}) \quad \frac{B \leftrightarrow  B'}{B \to B'}(\land\text{-E}_1)}{A' \to B'} (\text{传递性}) $$

通过这种传递性，我们证明了蕴涵关系在替换下也是稳定的。

#### 情况 4：否定式 ($S = \neg A$)
由于否定 $\neg A$ 在逻辑上定义为 $A \to \perp$（其中 $\perp$ 为矛盾），因此它只是蕴涵式的一个特例。根据情况 3 的结论，否定项的替换自然保持等价。

### (3) 讨论：从“判定”到“演算”

随着我们证明了所有算符情况，我们可以做出归纳结论：对于任意 $S$，只要基础部分等价，整体就等价。在数学上，这意味着逻辑系统对于等价关系具有**同余性质**（Well-defined）。

利用本节开头的引理，我们可以直接推导出本章最初描述的替换规则：

**推论：等价替换推导**
$$ \frac{\Gamma \vdash S \quad \Gamma \vdash P \leftrightarrow  Q}{\Gamma \vdash S[P \backslash Q]} $$

**证明路径：**
1. 由等价替换定理知：$\Gamma, P \leftrightarrow  Q \vdash S \leftrightarrow  S[P \backslash Q]$。
2. 调用引理 1 ($\leftrightarrow $-E$_1$)：由前提 $S$ 与这个等价关系，直接推出结论 $S[P \backslash Q]$。

这一推论的意义极其重大：它将逻辑从一种“论证的艺术”正式提升为了“演算的科学”。

---

## 5. 为什么这很重要？

等价替换定理将逻辑从“纯粹的论证”变成了“灵活的计算”。

有了它，我们可以像做代数简便运算一样：识别局部、寻找等价物、实施替换。它是所有逻辑简化规则（如德·摩根定律、分配律）能够被实际应用到复杂式子中的合法性前提。

在 1.6 和 1.7 节中，我们证明了一系列等价命题（如德·摩根定律、排中律等）。在当时，这些定律只能作为独立的判定，用于处理整个命题。而现在，有了等价替换定理，它们瞬间变成了 **“全威力版”** 的工具——你可以将这些定律应用到任何复杂命题的**任何局部**。这种“局部手术”的能力，是逻辑系统能够处理极大规模命题公式的保证。

---

## 6. 等价关系的代数性质

等价算符 $\leftrightarrow $ 在命题集合上表现出类似于等号的性质。这些性质进一步支撑起了逻辑演算的灵活性。

1.  **自反性 (Reflexivity)**：$\vdash P \leftrightarrow  P$
2.  **对称性 (Symmetry)**：$P \leftrightarrow  Q \vdash Q \leftrightarrow  P$
3.  **传递性 (Transitivity)**：$ P \leftrightarrow  Q , Q \leftrightarrow  R \vdash P \leftrightarrow  R$

这些性质看起来理所应当，但在严密的逻辑系统中，它们都需要通过最基础的引入（$\leftrightarrow $-I）和消去（$\leftrightarrow $-E）规则来确证。我们将它们的证明留作本节最重要的习题。

---

## 习题

**习题 1.9.1（核心性质证明）**：
请分别利用 $\leftrightarrow $-I 和 $\leftrightarrow $-E 规则，形式化地证明等价关系的：
1. 自反性
2. 对称性
3. 传递性

**习题 1.9.2**：
利用传递性证明：如果 $A \leftrightarrow  B$ 且 $B \leftrightarrow  C$ 成立，那么 $\neg A \leftrightarrow  \neg C$ 也成立。

**习题 1.9.3**：
利用等价替换定理和德·摩根定律，通过逐步替换证明：
$$ \vdash \neg(P \land (Q \lor R)) \leftrightarrow  (\neg P \lor (\neg Q \land \neg R)) $$

**习题 1.9.4（思考题）**：
逻辑等价 $P \leftrightarrow Q$ 与代数中的等号 $a = b$ 有着类似的性质。为什么我们在复杂的代数式或逻辑公式中，都可以放心地进行“局部代换”？这种能力对于简化复杂问题有什么意义？

## 总结
-   **$S[P \backslash Q]$** 是替换操作，将 $S$ 中的 $P$ 换成 $Q$。
-   **等价替换定理** 保证了局部等价可以向整体等价扩散。
-   这使得逻辑推导可以像**代数运算**一样通过局部简化来完成整体证明。