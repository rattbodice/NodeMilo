function BMI(weight,height){
    let CalculateBMI = weight/(height*height)
    return CalculateBMI;
} 

module.exports={
    BMIget (req,res) {
        res.send(JSON.stringify(BMI(req.params.Weight,req.params.height)))
    },
    BMIpost (req,res){
        res.send(JSON.stringify(BMI(req.body[0].weight,req.body[0].height)))
    }
}