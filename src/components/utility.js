
const fingerJoints = {
    thumb: [0, 1, 2, 3, 4],
    indexFinger: [0, 5, 6, 7, 8],
    middleFinger: [0, 9, 10, 11, 12],
    ringFinger: [0, 13, 14, 15, 16],
    pinky: [0, 17, 18, 19, 20],
  };

export const drawHand = (prediction, ctx) => {
    if(prediction.length >0){
        prediction.forEach((prediction)=> {
            const landmarks = prediction.landmarks

            //loop fingers

            for (let j=0; j< Object.keys(fingerJoints).length; j++){
                let finger = Object.keys(fingerJoints)[j]
                for (let k=0; k<fingerJoints[finger].length -1 ;k++){
                    const firstJoint = fingerJoints[finger][k]
                    const secondJoint = fingerJoints[finger][k+1]

                    ctx.beginPath()
                    ctx.moveTo(
                        landmarks[firstJoint][0],
                        landmarks[firstJoint][1]
                    )

                    ctx.lineTo(
                        landmarks[secondJoint][0],
                        landmarks[secondJoint][1]
                    )

                    ctx.strokeStyle ="blue"
                    ctx.lineWidth =4
                    ctx.stroke()


                }

            }
            
            for (let i=0; i<landmarks.length; i++ ){
                const x= landmarks[i][0]
                const y= landmarks[i][1]

                ctx.beginPath();
                ctx.arc(x,y,5,0,3 * Math.PI)

                ctx.fillStyle = "aqua"
                ctx.fill();
            }
        })
    }
}