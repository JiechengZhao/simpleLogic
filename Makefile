.PHONY: all preview1 clean

# 默认操作：运行程序
all:
	cargo run

# 拼接第一章内容用于预览
preview1:
	@mkdir -p tmp
	@echo "Generating Chapter 1 preview..."
	@cat src_md/chapters/01_propositional_logic.md \
		src_md/chapters/01_propositional_logic/01_01_context.md \
		src_md/chapters/01_propositional_logic/01_02_inference_line.md \
		src_md/chapters/01_propositional_logic/01_03_implication.md \
		src_md/chapters/01_propositional_logic/01_04_conjunction.md \
		src_md/chapters/01_propositional_logic/01_05_disjunction.md \
		src_md/chapters/01_propositional_logic/01_06_negation.md \
		src_md/chapters/01_propositional_logic/01_07_classical_logic.md \
		src_md/chapters/01_propositional_logic/01_08_syntax.md \
		src_md/chapters/01_propositional_logic/01_09_substitution.md \
		src_md/chapters/01_propositional_logic/01_10_laws.md \
		> tmp/chapter1_preview.md
	@echo "Preview file created at tmp/chapter1_preview.md"

clean:
	rm -rf tmp/
