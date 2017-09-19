var repoFactory = function () {
    this.getRepo = function (repoType) {
        if (repoType === 'task') {
            var taskRepo = require('./task.service');

            return taskRepo;
        }

        if (repoType === 'user') {
            var userRepo = require('./user.service');

            return userRepo;
        }

        if (repoType === 'project') {
            var projectRepo = require('./project.service');

            return projectRepo;
        }
    }
}

module.exports = new repoFactory;