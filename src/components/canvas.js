import React, { useRef, useEffect } from 'react'

const Canvas = (props) => {
  
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    canvas.width = 200
    canvas.height = 140
    //Our first draw
    context.fillStyle = '#730099'
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    context.lineWidth = 2
    context.beginPath();
    context.arc(100, 70, 50, 0, 2 * Math.PI);
    context.fillStyle = '#730099';
    context.strokeStyle = "#ffffff"
    context.stroke();
    context.fill()

    context.beginPath()
    context.arc(100,70,50, Math.PI/2, Math.PI/2+(props.resArr[0]/10)*Math.PI*2, false)
    context.lineTo(100,70)
    context.fillStyle = 'white';
    context.stroke()
    context.fill()
    context.closePath()
//  console.log(props.resArr/10)

  }, [props.resArr])
  
  return <canvas ref={canvasRef} {...props}/>
}

export default Canvas