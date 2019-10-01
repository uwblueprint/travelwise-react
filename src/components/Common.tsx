const userProps = {
    user: { champName: "Joe Smith",
            compName: "ABC Co.",
            address: "123 Any Street",
            phoneNumber: "(123)-456-7890",
            email: "joe@example.com",},
    facilities: { numOffices: "7"},
}

// interface Data {
//     companies: Array<{ id: string; name: string }>;
// };

type ProfProps ={
    user: UserProps,
    facilities: { numOffices: string}
}

type UserProps ={
    champName: string,
    compName: string,
    address: string,
    phoneNumber: string,
    email: string,
    [key: string]: string
}


// TODO: create a class/object for an individual user's info so you don't have to constantly call DB
function updateUser(update: UserProps) {
    userProps.user.champName = update.champName;
    userProps.user.compName = update.compName;
    userProps.user.address = update.address;
    userProps.user.phoneNumber = update.phoneNumber;
    userProps.user.email = update.email;
};

export {userProps, updateUser};
export type ProfileProps = ProfProps;