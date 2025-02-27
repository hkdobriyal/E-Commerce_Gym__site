// // "use client";
// // import React from "react";
// // import { useSelector } from "react-redux";
// // import { RootState } from "../redux/store";
// // import { Container, Typography, Button } from "@mui/material";

// // const Profile = () => {
// //   const user = useSelector((state: RootState) => state.auth.user);

// //   return (
// //     <Container className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100">
// //       <Typography variant="h4" className="mb-4">
// //         User Profile
// //       </Typography>
// //       {user ? (
// //         <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
// //           <Typography variant="h6" className="mb-2">
// //             Name: {user.name}
// //           </Typography>
// //           <Typography variant="body1" className="mb-2">
// //             Email: {user.email}
// //           </Typography>
// //           <Typography variant="body1" className="mb-4">
// //             Member Since: {new Date(user.createdAt).toLocaleDateString()}
// //           </Typography>
// //           <Button variant="contained" color="primary">
// //             Edit Profile
// //           </Button>
// //         </div>
// //       ) : (
// //         <Typography variant="body1" className="text-red-500">
// //           No user data available.
// //         </Typography>
// //       )}
// //     </Container>
// //   );
// // };

// // export default Profile;


// "use client";
// import React from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../redux/store";
// import { Container, Typography, Button, Avatar } from "@mui/material";

// const Profile = () => {
//   const user = useSelector((state: RootState) => state.auth.user);

//   return (
//     <Container className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100">
//       <Typography variant="h4" className="mb-4">
//         User Profile
//       </Typography>
//       {user ? (
//         <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
//           <Avatar
//             alt={user.name}
//             src={user.avatarUrl || "/path/to/default/avatar.jpg"}
//             className="mx-auto mb-4 w-24 h-24"
//           />
//           <Typography variant="h6" className="mb-2">
//             Name: {user.name}
//           </Typography>
//           <Typography variant="body1" className="mb-2">
//             Email: {user.email}
//           </Typography>
//           <Typography variant="body1" className="mb-2">
//             Phone: {user.phone || "Not provided"}
//           </Typography>
//           <Typography variant="body1" className="mb-4">
//             Member Since: {new Date(user.createdAt).toLocaleDateString()}
//           </Typography>
//           <Button variant="contained" color="primary">
//             Edit Profile
//           </Button>
//         </div>
//       ) : (
//         <Typography variant="body1" className="text-red-500">
//           No user data available.
//         </Typography>
//       )}
//     </Container>
//   );
// };

// export default Profile;


"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Container, Typography, Button, Avatar } from "@mui/material";

const Profile = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <Container className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100">
      <Typography variant="h4" className="mb-4">
        User Profile
      </Typography>
      {user ? (
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
          <Avatar
            alt={user.name}
            src={user.avatarUrl || "/path/to/default/avatar.jpg"}
            className="mx-auto mb-4 w-24 h-24"
          />
          <Typography variant="h6" className="mb-2">
            Name: {user.name}
          </Typography>
          <Typography variant="body1" className="mb-2">
            Email: {user.email}
          </Typography>
          <Typography variant="body1" className="mb-2">
            Phone: {user.phone || "Not provided"}
          </Typography>
          <Typography variant="body1" className="mb-4">
            Member Since: {new Date(user.createdAt).toLocaleDateString()}
          </Typography>
          <Button variant="contained" color="primary">
            Edit Profile
          </Button>
        </div>
      ) : (
        <Typography variant="body1" className="text-red-500">
          No user data available.
        </Typography>
      )}
    </Container>
  );
};

export default Profile;
