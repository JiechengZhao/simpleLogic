use mdbook::MDBook;
use std::path::PathBuf;

fn main() {
    let root_dir = PathBuf::from(".");
    let md = MDBook::load(root_dir).expect("Failed to load book");
    md.build().expect("Failed to build book");
    println!("Book built successfully! Output is in the 'book' directory.");
}