const prerequisite = o => ({
    ...o,
    provides:['prerequisite'],
    provide(trait, strict = true){
        if(this.hasProvided(trait)) {
            if(strict){
                throw new Error(`trait ${trait} already exists, check your list of traits.`);
            }
        } else {
            this.provides.push(trait)
        }
        return this;
    },
    require(...args){
        for(let i = 0; i < args.length; i+=1){
            if(this.provides.findIndex((p)=>p===args[i]) < 0){
                throw new Error(`trait '${args[i]}' is not provided`);
            } 
        }
    },
    hasProvided(trait){
        return (this.provides.findIndex((p)=>p===trait) > -1);
    }
});

export default prerequisite;