const solution = (n) => {
    if (n == 1  || n == 0) {
        return 1;
    }
    else if (n == 2){
        return 2;
    }
    else {
        // var numberOfWays = solution(n-3) + solution(n-2) + solution(n-1)
        // console.log(numberOfWays);
        console.log(solution(n-3) + solution(n-2) + solution(n-1));
        // return solution(n-3) + solution(n-2) + solution(n-1)}
}
}
// solution(5)
// solution(7)


