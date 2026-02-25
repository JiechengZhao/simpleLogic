# 1.9 等价替换定理：逻辑的“等量代换”

在代数中，我们经常使用“等量代换”：如果 $a = b$，那么在任何涉及 $a$ 的式子中，我们都可以把 $a$ 换成 $b$。

在逻辑学中，也有类似的规则。本节我们将证明，如果两个命题表达式 $P$ 和 $Q$ 是等价的（即 $P \leftrightarrow Q$），那么我们可以放心地在任何背景下进行替换而不改变整体判定的正确性。这将帮助我们之后绕过主算符的限制，像处理代数式一样方便的处理逻辑问题。

---

## 1. 替换操作： $S[P \backslash Q]$

为了精确描述替换的过程，我们引入一个元符号操作：**$S[P \backslash Q]$**。

- **定义**：它代表将表达式 $S$ 中所有的子表达式 $P$ 全部替换为 $Q$ 后得到的新表达式。
- **直观理解**：这就像文档编辑器里的“全部替换”功能。$S$ 是文档全文，$P$ 是被匹配的旧内容，$Q$ 是换上的新内容。

**例子**：
1. 若 $S$ 为 $P \land R$，则 $S[P \backslash Q]$ 为 $Q \land R$。
2. 若 $S$ 为 $A \to (B \lor A)$，则 $S[A \backslash C]$ 为 $C \to (B \lor C)$。

---

## 2. 工具准备：等价的规则与性质

在深入定理之前，我们需要明确等价算符 $\leftrightarrow$ 的操作规则及其表现出的代数性质。

### 2.1 等价消去律 ($\leftrightarrow$-消去)
根据定义 $P \leftrightarrow Q \equiv (P \to Q) \land (Q \to P)$，我们可以得到两条消去引理：
- **引理 1**：$\displaystyle \frac{P \quad P \leftrightarrow Q}{Q} \text{($\leftrightarrow$-消去)}$
- **引理 2**：$\displaystyle \frac{Q \quad P \leftrightarrow Q}{P} \text{($\leftrightarrow$-消去)}$

这两条引理本质上是合取消去（$\land$-消去）与蕴涵消去（$\to$-消去）的组合调用。

### 2.2 等价关系的代数性质
等价关系在命题集合上表现出类似于“等号”的性质。这些性质在后续的证明中将被调用：

1.  **自反性**：$\vdash P \leftrightarrow P$ （任何命题都与自身等价）
2.  **对称性**：$P \leftrightarrow Q \vdash Q \leftrightarrow P$ （等价是双向的）
3.  **传递性**：$P \leftrightarrow Q, Q \leftrightarrow R \vdash P \leftrightarrow R$ （等价可以传递）

这些性质看起来理所应当，但在严密的逻辑系统中，它们都需要通过最基础的引入（$\leftrightarrow$-引入）和消去（$\leftrightarrow$-消去）规则来确证。我们将它们的严格证明留作本节的习题。

#### 传递性与连等约定
我们在第 1.8 节中提到的**连等（等价链）**写法 $P \leftrightarrow Q \leftrightarrow R$，其逻辑合法性正是建立在**传递性**之上的。因为传递性向我们保证了：只要链条中相邻的两项是等价的，那么链条中任意两项（即使不相邻）在逻辑上也是等价的。这使得我们可以像处理代数连等式一样，通过一系列中间步骤，最终宣告首尾两项的等价关系。

---

## 3. 定理描述：等价替换定理

**等价替换定理（Substitution Theorem）**：
如果两个命题表达式 $P$ 和 $Q$ 满足等价关系，那么对于任何包含 $P$ 的命题表达式 $S$，$S$ 与替换后的 $S[P \backslash Q]$ 也是等价的。

$ \frac{\Gamma \vdash P \leftrightarrow Q}{\Gamma \vdash S \leftrightarrow S[P \backslash Q]} \text{(替换定理)} $ 

这意味着逻辑等价性具有某种“穿透力”，只要局部等价，就能确保整体等价。

---

## 4. 证明：结构归纳法

我们要证明：只要 $P \leftrightarrow Q$ 成立，那么对于任意结构的 $S$，恒有 $S \leftrightarrow S[P \backslash Q]$。我们对 $S$ 的复杂度进行归纳。

（在许多逻辑入门教材中，只给出此定理而不给出证明。觉得证明有难度的读者可以先行跳过本小节。）

### (1) 基础情况
- **情况 A**：$S$ 恰好就是 $P$。此时 $S[P \backslash Q]$ 是 $Q$。结论为 $P \leftrightarrow Q \vdash P \leftrightarrow Q$，显然成立。
- **情况 B**：$S$ 是一个不含 $P$ 的原子命题 $R$。此时 $S[P \backslash Q]$ 依然是 $R$。由于 **自反性** $\vdash R \leftrightarrow R$ 成立，结论成立。

### (2) 归纳步骤
假设对于子表达式 $A, B$，定理已经成立（即归纳假设）：
- $A \leftrightarrow A'$ （其中 $A'$ 记作 $A[P \backslash Q]$）
- $B \leftrightarrow B'$ （其中 $B'$ 记作 $B[P \backslash Q]$）

现在我们要观察整体命题 $S \leftrightarrow S'$ 是否成立。由于等价关系具有 **对称性**，证明从 $S$ 推导出 $S'$ 与从 $S'$ 推回 $S$ 的过程是一样的。为了书写简洁，我们主要展示“从左向右”的推导路径。

#### 情况 1：合取式 ($S = A \land B$)
我们要证明 $A \land B \leftrightarrow A' \land B'$。根据 $\land$-引入 和 $\leftrightarrow$-E，我们可以得到如下路径：

$$ \frac{\displaystyle \frac{A \land B}{A} \text{($\land$-消去)} \quad A \leftrightarrow A'}{A'} \text{($\leftrightarrow$-消去)} \qquad \frac{\displaystyle \frac{A \land B}{B} \text{($\land$-消去)} \quad B \leftrightarrow B'}{B'} \text{($\leftrightarrow$-消去)} 
$$ 

将两条路径合并即可得到结论 $A' \land B'$。结合反向推导，合取项的替换保持等价。

#### 情况 2：析取式 ($S = A \lor B$)

我们要证明 $A \lor B \leftrightarrow A' \lor B'$。根据 1.5 节“分类讨论”的逻辑，我们需要展示无论从哪个分支出发，最终都能推导出相同的结论：

- **路径 1 ($A \to A' \lor B'$)**：

 $$ \frac{A \quad A \leftrightarrow  A'}{ \displaystyle \frac{A'}{A' \lor B'} (\lor\text{-引入}) } \text{($\leftrightarrow$-消去$_1$)} $$
- **路径 2 ($B \to A' \lor B'$)**：同理。

利用 $\lor$-消去 规则（简写形式）：
$$ \frac{A \lor B \quad A \to A' \lor B' \quad B \to A' \lor B'}{A' \lor B'} (\lor\text{-消去}) 
$$ 
结论得证。

#### 情况 3：蕴涵式 ($S = A \to B$)
我们要证明 $(A \to B) \leftrightarrow (A' \to B')$。借助 **传递性**：
$$ \frac{\displaystyle
\frac{\displaystyle \frac{A \leftrightarrow A'}{A' \to A} \quad A \to B}{A' \to B} \text{(传递性)} \quad \frac{B \leftrightarrow B'}{B \to B'} }{A' \to B'} \text{(传递性)} 
$$ 
蕴涵关系在替换下保持稳定。

#### 情况 4：否定式 ($S = \neg A$)
由于否定 $\neg A$ 定义为 $A \to \perp$，它是蕴涵式的特例。根据情况 3，替换依然保持等价。

随着我们证明了所有算符情况，我们可以做出归纳结论：对于任意 $S$，只要基础部分等价，整体就等价。

---

## 5. 为什么这很重要？

等价替换定理将逻辑从一种“论证的艺术”正式提升为了“演算的科学”。

通过上面的证明，我们确认命题逻辑对于等价关系是**定义良好**（Well-defined）的。利用引理，我们可以直接推导出本节开头提到的替换规则：

**推论：等价替换推导**
$$ \frac{\Gamma \vdash S \quad \Gamma \vdash P \leftrightarrow Q}{\Gamma \vdash S[P \backslash Q]} \text{(替换规则)} $$ 

证明路径非常直观：由定理知 $\Gamma, P \leftrightarrow Q \vdash S \leftrightarrow S'$，再利用引理 1 即可从前提 $S$ 推出结论 $S'$。

有了它，我们可以像做代数简便运算一样：识别局部、寻找等价物、实施替换。它是所有逻辑简化规则（如德·摩根定律、分配律）能够被实际应用到复杂式子中的合法性前提。

我们之前几节证明的所有等价定律（如德·摩根定律、交换律、结合律等），原本只能用于处理整个命题。而现在，它们变成了 **“全威力版”** 的工具——我们可以将这些定律应用到任何复杂命题的**任何局部**。这种“局部手术”的能力，是逻辑系统处理大规模命题公式的保证。

---

## 习题

**习题 1.9.1（核心性质证明）**：
请分别利用 $\leftrightarrow$-引入 和 $\leftrightarrow$-消去 规则，形式化地证明等价关系的：
1. 自反性
2. 对称性
3. 传递性

**习题 1.9.2**：
利用传递性证明：如果 $A \leftrightarrow B$ 且 $B \leftrightarrow C$ 成立，那么 $\neg A \leftrightarrow \neg C$ 也成立。

**习题 1.9.3**：
利用等价替换定理和德·摩根定律，通过逐步替换证明：
$$ \vdash \neg(P \land (Q \lor R)) \leftrightarrow (\neg P \lor (\neg Q \land \neg R)) 
$$ 

**习题 1.9.4（思考题）**：
逻辑等价 $P \leftrightarrow Q$ 与代数中的等号 $a = b$ 有着类似的性质。这些性质是如何让我们在复杂的代数式或逻辑公式中，放心地进行“局部代换”的？这种能力对于简化复杂问题有什么意义？

## 总结
-   **$S[P \backslash Q]$** 是替换操作，将 $S$ 中的 $P$ 换成 $Q$。
-   **等价关系** 具备自反、对称、传递等代数性质。
-   **等价替换定理** 保证了局部等价可以向整体等价扩散，使逻辑推导可以像代数运算一样进行局部简化。
