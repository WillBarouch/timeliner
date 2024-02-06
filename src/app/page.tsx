import {motion, useDragControls} from "framer-motion";
import { PointerEvent } from "react";


export default function Home() {
    const controls = useDragControls()

    function startDrag(event: PointerEvent<Element> | PointerEvent) {
        controls.start(event)
    }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <motion.div drag="x" dragControls={controls} className={"w-2 h-screen bg-white"}/>
    </main>
  );
}
