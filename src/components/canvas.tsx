import React from 'react';
import { useRef, useState, useEffect, Fragment } from 'react';
import { Stage, Layer, Image, Transformer, Rect } from 'react-konva';
import useImage from 'use-image';

export default function Canvas () {
    const SIZE = 500;

    const [image] = useImage('https://flyingarchitecture-images.fra1.cdn.digitaloceanspaces.com/40227/01.jpg');

    const transformerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    let dragStart = () => {
        setIsDragging(true);
    }

    const selectImage = (e) => {
        transformerRef.current.node(e.currentTarget);
    }

    const deSelect = (e) => {
            transformerRef.current.node();
        
    }

    return (
        <Stage height={SIZE} width={SIZE}>
            <Layer>
                <Image
                image={image}
                x={0}
                y={0}
                height={SIZE / 2}
                width={SIZE / 2}
                draggable
                onDragStart={() => dragStart}
                onDragEnd={(e) => {
                    setIsDragging(false);
                }}
                onMouseDown={selectImage}
                />
                <Transformer ref={transformerRef} />
            </Layer>
        </Stage>
    )

  }

