function range(start, end, step=1){
    if (!end ) {
        [start, end] = [1, start];
    };
    const crescente = start <= end;
    step = Math.abs(step);

    for (
        let valor = start;
        crescente ? valor <= end : valor >= end;
        valor += crescente ? step : -step
    ) {
        console.log(valor);
    };
    

};

range(14, -9, 2);