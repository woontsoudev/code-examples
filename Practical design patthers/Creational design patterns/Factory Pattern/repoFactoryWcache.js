var repoFactory = function() {
    this.getRepo = function(repoType) {
        if(repoType === 'task') {
            if(this.taskRepo) {
                console.log('Retrieving from cache', this);

                return this.taskRepo;
            } else {
                this.taskRepo = require('./task.service');
                // can make some configuration
                return this.taskRepo;
            }
        }

        if(repoType === 'user') {
            var userRepo = require('./user.service');
            return userRepo;
        }

        if(repoType === 'project') {
            var projectRepo = require('./project.service');
            return projectRepo;
        }
    }
}

module.exports = new repoFactory;