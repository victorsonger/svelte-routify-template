// 测试一个severless的接口
// 此接口功能依赖vercel的目录约定  不需要其他的逻辑
// vercel部署服务后，直接访问/api/helloworld 即可调用
module.exports = async (req, res) => {
  var data = {
      msg: "hello world!"
  }
  res.status(200).json(data);
}