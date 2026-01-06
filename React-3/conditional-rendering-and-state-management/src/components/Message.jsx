// Approach 1: Conditional logic before JSX

// const Message = ({ isLoggedIn }) => {
//   if (isLoggedIn) {
//     return (
//       <>
//         <h1>Welcome Back</h1>
//       </>
//     );
//   }
//   return (
//     <>
//       <h1>Please Log In</h1>
//     </>
//   );
// };
// export default Message;

// Approach 2: Conditional logic inside JSX

// const Message = ({ isLoggedIn }) => {
//   return <>{isLoggedIn ? <h1>Welcome Back</h1> : <h1>Please Log In</h1>}</>;
// };
// export default Message;

// Approach 2: Using logical AND

export default function Message({ isLoggedIn }) {
  return <>{isLoggedIn && <h1>Welcome Back</h1>}</>;
}
