export default {
    sections: [
        {
            label: "Person Names",
            columns: 2,
            fields: ["firstName", "lastName"],
            childLabels: {
                firstName: "First Name",
                lastName: "Last Name",
            },
            children: [
                {
                    firstName: "Peter",
                    lastName: "Weiss"
                },
                {
                    firstName: "Amie",
                    lastName: "Mason"
                }
            ]
        },
        {
            label: "Address",
            columns: 2,
            fields: ["addressLine1", "addressLine2", "city", "state", "zipCode", "country"],
            childLabels: {
                addressLine1: "Address Line 1",
                addressLine2: "Address Line 2",
                city: "City",
                state: "State",
                zipCode: "Zip Code",
                country: "Country",
            },
            children: [
                {
                    addressLine1: "200 ABBOT TRL",
                    addressLine2: "",
                    city: "GREENVILLE",
                    state: "SC",
                    zipCode: "29605-3275",
                    country: "USA",
                },
                {
                    addressLine1: "1 ISBELL CT",
                    addressLine2: "",
                    city: "GREENVILLE",
                    state: "SC",
                    zipCode: "29607-3715",
                    country: "USA",
                },
                {
                    addressLine1: "81 BRIARVIEW CIR",
                    addressLine2: "",
                    city: "GREENVILLE",
                    state: "SC",
                    zipCode: "29615-2137",
                    country: "USA",
                },
                {
                    addressLine1: "150 OAK RIDGE PL APT 5J",
                    addressLine2: "",
                    city: "GREENVILLE",
                    state: "SC",
                    zipCode: "29615-5087",
                    country: "USA",
                },
                {
                    addressLine1: "700 WALDEN CREEK WAY",
                    addressLine2: "",
                    city: "GREENVILLE",
                    state: "SC",
                    zipCode: "29615-6717",
                    country: "USA",
                },
                {
                    addressLine1: "7500 WHITE HORSE RD",
                    addressLine2: "UNIT 15291",
                    city: "GREENVILLE",
                    state: "SC",
                    zipCode: "29610-1008",
                    country: "USA",
                },
            ]
        }
    ]
}