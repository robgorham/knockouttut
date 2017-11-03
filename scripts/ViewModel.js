
function Task(descr, fin, id, deleteTask, toggleDone) {
	var self = this;
	self.description = ko.observable(descr);
	self.isDone = ko.observable(fin);
	self.id = id;
	self.removeTask = deleteTask;
	self.toggleMe = toggleDone;
	
}




function AppViewModel() {
	
	
	var self = this;
	self.doneTasks = ko.observableArray([]);
	self.tasks = ko.observableArray([]);

	

	self.toggleDone = function(data, event){
		console.log("toggleDone of " + data["id"]);
		if(data["isDone"]()){
			self.markDone(data);
		}
		else
		{
			self.unDone(data);
		}
	}
	self.addBlankTask = function(){
		self.tasks.push(new Task("Enter Descriptions", false, Math.floor(Math.random() * 9999), self.deleteTask, self.toggleDone));		
	}

	self.deleteTask = function(data, event){self.tasks.remove(data); self.doneTasks.remove(data)}

	self.markDone = function(data, event){
		self.tasks.remove(data);
		self.doneTasks.push(data);
	}

	self.unDone = function(data, event){
		self.doneTasks.remove(data);
		self.tasks.push(data);
	}	
	
}

ko.applyBindings(new AppViewModel());