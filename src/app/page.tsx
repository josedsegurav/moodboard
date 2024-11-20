"use client";

import Image from "next/image";
import chair from "../../public/images/chair.png";
import { useRef, useState } from "react";
import Konva from "konva";
import dynamic from "next/dynamic";

const Canvas = dynamic(() => import('../components/canvas'), {
  ssr: false,
});

export default function Home() {
  // const dragItem = useRef(null);

  // const handleDragStart = (e) => {
  //   dragItem.current = e.target.id;
  // }

  // const handleDragEnter = (e) => {
  //   dragItem.current = e.currentTarget.id;
  // }

  // const handleDragOver = (e) => {
  //   e.preventDefault();
  // }

  // const handleDragDrop = (e) => {
  //   const canvas = new fabric.Canvas(dragItem.current);
  //     dragItem.current.onload = () => {
  //       canvas.add(dragItem.current);
  //       canvas.setActiveObject(dragItem.current)

  //     }

  // }

  


  return (
    <div className="h-96 w-96 flex justify-center items-center">
      {/* <div className="bg-stone-100 h-48	w-48" onDragEnter={(e) => handleDragEnter(e)}>
        <Image
        ref={dragItem}
        draggable
        onDragStart={(e) => handleDragStart(e)}
        className="h-48 w-48" 
        src={chair}
        alt="chair"
        width="50"
        height="50"
        />
      </div> */}
      <Canvas></Canvas>
    </div>
    
  );
}
