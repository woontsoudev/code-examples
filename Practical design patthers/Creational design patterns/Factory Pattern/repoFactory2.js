var repoFactory = function() {
    var repos = this;
    var repoList = [
        {
            name: 'task',
            source: './task.service.js'
        },
        {
            name: 'user',
            source: './user.service.js'
        },
        {
            name: 'project',
            source: './project.service.js'
        }
    ];

    repoList.forEach(function(repo) {
        repos[repo.name] = require(repo.source);
    });
};

module.exports = new repoFactory;