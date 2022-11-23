import React from "react";

export function getToken(value:string) {
    return {
        type: "token",
        token: value
    };
}
