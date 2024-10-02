import React from 'react';
import MyButton from './MyButton.tsx';

const Type: React.FC  = () => {
   

    const handleClick = (btntext:string)=>{
        console.log(btntext)
    }

    return (
        <div style={{ background:"white" }}>
            <MyButton onClick={()=>handleClick("aksljdf")} text="click here"/>
            {/* <MyButton onClick={()=>handleClick("second")} text="don't click here" />
            <MyButton onClick={()=>handleClick("third")} text="again click here" /> */}
        </div>
    );
};

export default Type;


// import React from 'react';

// const Type: React.FC = () => {
//     const name: string = "kawsar firoz";
//     const number: number = 20;
//     const bool: boolean = true;
//     const obj: { name: string; age: number } = {
//         name: "kawsar",
//         age: 30,
//     };

//     const arr: (number | string | boolean | { name: string; age: number })[] = [2, "firoz", 3, true, obj];

//     return (
//         <div>type</div>
//     );
// };

// export default Type;

