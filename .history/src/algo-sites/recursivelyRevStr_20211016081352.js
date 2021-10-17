const recursivelyRevStr = (input) => {
    if (input === ("")) {
        return "WOAH THERE, We need data homie!"
    }
    return recursivelyRevStr(input.substring(1) + input.charAt(0))
    }
    recursivelyRevStr("str")
    recursivelyRevStr("")