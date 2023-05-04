using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Phone_Book_Dotnet_Angular.Controllers
{
    [Route("[controller]")]
    [ApiController]

    public class ValuesController : ControllerBase
    {

        Program program = new Program();

        private readonly ILogger<ValuesController> _logger;
        public ValuesController(ILogger<ValuesController> logger)
        {
            _logger = logger;
        }
        // GET: /<ValuesController>
        [HttpGet]
        public List<Values> Get()
        {
            return program.GetList();
        }

        // POST /<ValuesController>
        [HttpPost]
        public void Post([FromBody] Values value)
        {
            program.AddPhone(value);
        }

        // PUT /<ValuesController>/?index
        [HttpPut("{index}")]
        public void Put(int index, [FromBody] Values value)
        {
            program.EditPhone(index, value);
        }

        // DELETE /<ValuesController>/?index
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            program.RemovePhone(id);
        }
    }
}
