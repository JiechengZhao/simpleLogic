# 1.4 合取：事实的叠加与拆分

在几何定义中，我们经常需要多个属性同时满足。在逻辑学中，这种“且”的关系被称为**合取（Conjunction）**，记作 $\land$。

如果我们有两个命题 $P$ 和 $Q$，那么 $P \land Q$ 读作“$P$ 且 $Q$”。它代表了一个更强的复合事实：$P$ 和 $Q$同时成立。

## 1. 制造复合事实：合取引入规则（$\land$-Intro）

当我们要证明一个物体具有多重属性时，我们需要分别证明每一个属性，然后将它们“缝合”在一起。

$$ \frac{\Gamma \vdash P \quad \Gamma \vdash Q}{\Gamma \vdash P \land Q} \text{ ($\land$-Intro)} $$

### 几何案例：等腰直角三角形
假设我们在上下文 $\Gamma$ 中研究一个三角形 $ABC$：
- 命题 $P$：$AB = AC$（等腰）。
- 命题 $Q$：$\angle A = 90^\circ$（直角）。

如果你在证明过程中分别挖掘出了这两个事实（$\Gamma \vdash P$ 和 $\Gamma \vdash Q$），你就可以利用 **合取引入** 规则，宣告这个三角形是一个“等腰直角三角形”：
- **$\Gamma \vdash AB = AC \land \angle A = 90^\circ$**

---

## 2. 提取具体属性：合取消去规则（$\land$-Elim）

反过来，如果我们已经知道了一个复合事实，我们可以根据需要随时提取其中的任何一个部分。

$$ \frac{\Gamma \vdash P \land Q}{\Gamma \vdash P} \text{ ($\land$-Elim}_1\text{)} \quad \frac{\Gamma \vdash P \land Q}{\Gamma \vdash Q} \text{ ($\land$-Elim}_2\text{)} $$

### 几何案例：利用“定义”
假设题目给出的已知条件是：“$\triangle ABC$ 是等腰直角三角形”。这意味着在我们的背景 $\Gamma$ 中，已经持有了复合命题：$\Gamma \vdash P \land Q$。

在后续的证明中，如果你需要用到 $90^\circ$ 的角度，你可以从这个已知中“拆解”出 $Q$。这就是我们在做题时经常说的“由定义可知……”。

---

## 3. 逻辑上的“等价”：双条件算符 ($\leftrightarrow$)

有了合取和蕴涵，我们就可以定义一个新的算符：**当且仅当（if and only if）**，记作 $\leftrightarrow$。

在几何中，如果我们说“$P$ 与 $Q$ 等价”，意思就是既有 $P \to Q$，又有 $Q \to P$。在逻辑学中，我们将这双向的蕴涵“打包”在一起：
- **定义**：$P \leftrightarrow Q \equiv (P \to Q) \land (Q \to P)$

这不仅是一个新算符，也是一种**等价命题**。如果你证明了 $P \leftrightarrow Q$，就意味着你可以合法地在推导中将 $P$ 替换为 $Q$，反之亦然。


## 4. 合取的性质：交换律与结合律

利用引入和消去规则，我们可以证明一些直观的逻辑性质。这些性质在复杂的几何证明中非常有用，能帮我们重新组织已知条件。

### 定理 1.4.1：交换律（Commutativity）
**命题**：如果 $P \land Q$ 成立，那么 $Q \land P$ 也成立。
即：$P \land Q \vdash Q \land P$

**证明**：
我们从已知条件 $P \land Q$ 出发：
1. 利用 $\land$-Elim$_2$，我们从 $P \land Q$ 中提取出 $Q$。
2. 利用 $\land$-Elim$_1$，我们从 $P \land Q$ 中提取出 $P$。
3. 利用 $\land$-Intro，将 $Q$ 和 $P$ 重新组合，得到 $Q \land P$。

$$ \frac{\displaystyle \frac{P \land Q}{Q} \text{($\land$-Elim$_2$)} \quad \displaystyle \frac{P \land Q}{P} \text{($\land$-Elim$_1$)}} {Q \land P} \text{($\land$-Intro)} $$

### 定理 1.4.2：结合律（Associativity）
**命题**：$\vdash ((P \land Q) \land R) \leftrightarrow (P \land (Q \land R))$

结合律告诉我们，当多个命题通过合取连接时，括号的位置并不重要。无论你是先将 $P$ 和 $Q$ 打包，还是先将 $Q$ 和 $R$ 打包，最终表达的都是这三个事实同时成立。在复杂的几何背景中，这意味着你可以根据证明的需要，自由地重新组合已知条件的“分组方式”。（其形式化证明请见本节习题。）

---


## 5. 合取和蕴含的分配律

在第 1.3 节中，我们将蕴涵（$\to$）比作“打包”。当我们将合取加入进来时，会出现一些有趣的交互规则。

### 定理 1.4.3：分配律（推导的拆分）
**在任何上下文中合取的分配律都成立**：$\vdash (P \to (Q \land R)) \leftrightarrow ((P \to Q) \land (P \to R))$
这说明：证明一个复合结论，等同于分别证明它的每一个部分。

**证明（从左到右，即 $\to$ 方向）**：
1. 假设已知 $P \to (Q \land R)$。
2. 为了证明右侧的合取，我们需要分别得到 $P \to Q$ 和 $P \to R$。
3. 证明 $P \to Q$：
   - 临时假设 $P$。
   - 利用 $\to$-Elim，由于我们有 $P$ 和 $P \to (Q \land R)$，得到 $Q \land R$。
   - 利用 $\land$-Elim$_1$，得到 $Q$。
   - 撤销假设 $P$，得到 $P \to Q$。
4. 证明 $P \to R$：过程同上，只需最后改用 $\land$-Elim$_2$。
5. 最后，利用 $\land$-Intro 将两者合成为 $(P \to Q) \land (P \to R)$。

---

## 习题

请使用**推理线（长横线）** 的形式，完整地写出下列推导过程：

**习题 1.4.1**：请模仿交换律的证明，证明**结合律（Associativity）**：
$$ (P \land Q) \land R \vdash P \land (Q \land R) $$

**习题 1.4.2**：请证明**分配律**的另一个方向（即定理 1.4.3 的 $\leftarrow$ 方向）：
$$ (P \to Q) \land (P \to R) \vdash P \to (Q \land R) $$

**习题 1.4.3（挑战）**：证明**柯里化（Currying）** 的一个方向：
$$ (P \land Q) \to R \vdash P \to (Q \to R) $$
（提示：先假设 $(P \land Q) \to R$，再依次做两个临时假设 $P$ 和 $Q$。）

## 总结

- **合取引入（$\land$-Intro）**：将独立事实合并为复合事实。
- **合取消去（$\land$-Elim）**：从复合事实中提取独立事实。
- **等价定义（$\leftrightarrow$）**：通过合取将双向的蕴涵封装在一起。
- **简写约定**：当上下文相同时，我们可以省略 $\Gamma \vdash$，直接专注于命题本身。
- **工具价值**：合取不仅能描述多重属性，还能通过交换律、结合律和分配律来灵活重组推理的前提与结论。
