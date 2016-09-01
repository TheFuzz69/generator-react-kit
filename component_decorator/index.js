var _ = require('lodash');
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

  constructor: function () {
    generators.Base.apply(this, arguments);

    this.argument('componentName', {
      type: 'string',
      default: '---',
    });

    if (this.componentName !== '---') {
      this.componentName = _.upperFirst(_.camelCase(this.componentName));
    }

  },

  prompting: {
    componentName: function () {
      var _this = this;
      var done = this.async();

      var question = {
        type: 'input',
        name: 'componentName',
        message: 'What is the name of the new component?',
        default: 'NewComponent',
        when: function () {
          return this.componentName === '---';
        }.bind(this),
      };

      function onAnswer(answers) {
        if (answers.componentName) {
          _this.componentName = _.upperFirst(_.camelCase(answers.componentName));
        }
        done();
      }

      this.prompt(question, onAnswer);
    }

  },

  writing: {
    componentTemplate: function () {
      var componentName = this.componentName;
      var fileName = componentName + '.js';

      var templateData = {
        componentName: componentName,
      };

      this.fs.copyTpl(
            this.templatePath('Component.js'),
            this.destinationPath('src', 'components', fileName),
            templateData
      );
    },
    
    componentCss: function () {
      var componentName = this.componentName;
      var fileName = componentName + '.scss';

      var templateData = {
        componentName: componentName,
      };

      this.fs.copyTpl(
          this.templatePath('Component.scss'),
          this.destinationPath('src', 'components', fileName),
          templateData
      );
    },

    componentPackage: function () {
      var componentName = this.componentName;
      var fileName = 'package.json';

      var templateData = {
        componentName: componentName,
      };

      this.fs.copyTpl(
        this.templatePath('package.json'),
        this.destinationPath('src', 'components', fileName),
        templateData
      );
    },


    componentTest: function () {
      var componentName = this.componentName;
      var fileName = componentName + '.test.js';

      var templateData = {
        componentName: componentName,
      };

      this.fs.copyTpl(
        this.templatePath('Component.test.js'),
        this.destinationPath('src', 'components', fileName),
        templateData
      );
    },
  },

  end: {
    sayGoodbye: function () {
      this.log('');
      this.log('# --------------------------');
      this.log('#  Your component is ready!');
      this.log('# -------------------------- ');
      this.log('#');
      this.log('# Use your component in the App:');
      this.log('# import ' + this.componentName + ' from \'components/' + this.componentName + '\';');
      if (this.componentGuide) {
        this.log('#');
        this.log('# Work on your component:');
        this.log('# npm start ' + this.componentName);
      }
      this.log('#');
      this.log('');
    },
  },

});