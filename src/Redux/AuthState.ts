export function AuthChanges(value:boolean) {
    return {
        type: "IsAuth",
        Auth: value
    };
}