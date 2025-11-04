function range(start, end, step=1){
    if (end === undefined) {
        end = start;
        start = 1;
    }
    const crescente = start <= end;
    step = Math.abs(step);

    for (
        let valor = start;
        crescente ? valor <= end : valor >= end;
        valor += crescente ? step : -step
    ) {
        console.log(valor);
    }
    

};


range(14, -9, 2)
