//@format

exports.ApiGateway = require('./services/apigateway');
exports.AutoScaling = require('./services/autoscaling');
exports.CloudWatch = require('./services/cloudwatch');
exports.CodeDeploy = require('./services/codedeploy');
exports.CodePipeline = require('./services/codepipeline');
exports.EC2 = require('./services/ec2');
exports.ELB = require('./services/elb');
exports.ELBv2 = require('./services/elbv2');
exports.Inspector = require('./services/inspector');
exports.Lambda = require('./services/lambda');
exports.S3 = require('./services/s3');
exports.SSM = require('./services/ssm');
exports.SNS = require('./services/sns');

exports.IPRanges = require('./misc/ip_ranges');
