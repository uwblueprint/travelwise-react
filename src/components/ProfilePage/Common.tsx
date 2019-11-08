const userProps = {
    user: { champName: "Joe Smith",
            compName: "ABC Co.",
            streetAddress: "123 Any Street",
            city: "MyCity",
            postalCode: "ABC 123",
            phoneNumber: "1234567890",
            email: "joe@example.com",},
    facilities: { numOffices: "7"},
}

type ProfProps ={
    user: UserProps,
    facilities: { 
        numOffices: string,
        [key: string]: string
    }
}

type UserProps ={
    champName: string,
    compName: string,
    streetAddress: string,
    city: string,
    postalCode: string,
    phoneNumber: string,
    email: string,
    [key: string]: string
}

function updateUser(update: UserProps) {
    userProps.user.champName = update.champName;
    userProps.user.compName = update.compName;
    userProps.user.streetAddress = update.streetAddress;
    userProps.user.city = update.city;
    userProps.user.postalCode = update.postalCode;
    userProps.user.phoneNumber = update.phoneNumber;
    userProps.user.email = update.email;
};

export {userProps, updateUser};
export type ProfileProps = ProfProps;