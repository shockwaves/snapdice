player = {
    data: [],
    active: 0,
    add: function(data) {
        this.all = data;
    },
//	установка ID и имени активного игрока  
    appoint: function(id) {
        this.active = parseInt(id);
    },
//	смена активного игрока
    next: function() {
        this.active = (this.active == 1) ? 0 : 1;
        return this.active;
    },
//	сохранение имени
    save: function(name) {
        if (!name.length)
            return false;
        if (this.data.length == 2)
            this.data[this.active].name = name;
        else
            this.data.push({name: name});
        return true;
    },
    get: function(id) {
        if (typeof (id) === 'undefined')
            id = this.active;
        return this.data[id].name;
    },
    first: function() {
        return this.get(0);
    },
    second: function() {
        return this.get(1);
    },
    name: function(id) {
        if (typeof (id) === 'undefined')
            id = this.active;
        return (this.data[id]) ? this.data[id].name : false;
    },
    rewarding: function(id) {
        if(this.data[id].achievement)
        this.data[id].achievement++;
        else this.data[id].achievement++;
    }
};
