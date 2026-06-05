// import Comp1 from "./Comp1.jsx";
// import Map from "./Map.jsx"
// import Prop1 from "./Prop1.jsx"
// import Mypage from "./Mypage.jsx";
/* The line `import My from "./routing/Mypage.jsx"` is importing the `Mypage` component from the file
located at "./routing/Mypage.jsx". This allows the `Myapp` function to use the `Mypage` component
within the file where this import statement is located. */
import Mypage from "./routing/Mypage.jsx"

// function Myapp(){
//     return(<Comp1 />)
// }
function Myapp(){
    return(<Mypage />)
}
export default Myapp;

