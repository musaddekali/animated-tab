import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { motion, AnimatePresence } from "framer-motion";

const frutes = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
  { icon: "🥕", label: "Carrot" },
  { icon: "🍌", label: "Banana" },
  { icon: "🥭", label: "Mango" },
  { icon: "🥂", label: "Champers" },
];

function App() {
  const [selectItem, setSelectItem] = useState(frutes[0]);

  return (
    <div className="container">
      <h1>Framer-Motion Animation</h1>
      <nav className="tab-nav">
        <ul>
          {frutes.map((item) => (
            <li
              key={item.label}
              onClick={() => setSelectItem(item)}
              className={item === selectItem ? "selected" : ""}
            >
              {`${item.icon} ${item.label}`}
              {item === selectItem ? (
                <motion.div className="tab-underline" layoutId="tab-underline"/>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main className="tab-body">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectItem ? selectItem.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
          >
            {selectItem ? selectItem.icon : "😃"}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
