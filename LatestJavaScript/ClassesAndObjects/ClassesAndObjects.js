class RailwayFrom {
    submit() {
        alert('from Submitted');
    }
    cancelled() {
        alert('This form is cancelled for ' + this.name + ' of train number ' + this.trainNo);
    }
    fill(name) {
        this.name = name;
    }
    fillTrainNum(trainNo){
        this.trainNo = trainNo;
    }
}
let praj = new RailwayFrom();
praj.fill('Prajwal');
praj.fillTrainNum(2002);
praj.submit();
praj.cancelled();