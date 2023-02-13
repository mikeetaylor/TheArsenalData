using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;

namespace API.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class PositionController : ControllerBase
    {
        
        private readonly IConfiguration _configuration;

        public PositionController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet("/api/Position")]
        public JsonResult Get()
        {
            string query = @"
                    EXEC SelectPosition
                    ";
            DataTable table = new DataTable();
            string sqlDataSouce = _configuration.GetConnectionString("ArsenalAppConnPositions");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSouce))
            {
                myCon.Open();
                using SqlCommand myCommand = new SqlCommand(query, myCon);
                myReader = myCommand.ExecuteReader();
                table.Load(myReader);

                myReader.Close();
                myCon.Close();
            }

            return new JsonResult(table);
        }

        [HttpGet("{id}")]

        public JsonResult Get(int id)
        {
            string query = @"
                    DECLARE @positionVariable int
                    SET @positionVariable = " + id +
                    @"
                    Select TOP(1) * From Positions where PositionID > @positionVariable ORDER BY PositionID
                    ";
            DataTable table = new DataTable();
            string sqlDataSouce = _configuration.GetConnectionString("ArsenalAppConnPositions");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSouce))
            {
                myCon.Open();
                using SqlCommand myCommand = new SqlCommand(query, myCon);
                myReader = myCommand.ExecuteReader();
                table.Load(myReader);

                myReader.Close();
                myCon.Close();
            }

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Position position)
        {
            string query = @"
                    insert into Positions values
                    (
                    '" + position.PositionName + @"',
                    '" + position.PositionFullName + @"'
                    )
                    ";
            DataTable table = new DataTable();
            string sqlDataSouce = _configuration.GetConnectionString("ArsenalAppConnPositions");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSouce))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }

        [HttpPut]
        public JsonResult Put(Position position)
        {
            string query = @"
                    update dbo.Positions set
                    '" + position.PositionName + @"',
                    '" + position.PositionFullName + @"'
                    ";
            DataTable table = new DataTable();
            string sqlDataSouce = _configuration.GetConnectionString("ArsenalAppConnPositions");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSouce))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                    delete from dbo.Positions
                    where PositionID = " + id + @"
                    ";
            DataTable table = new DataTable();
            string sqlDataSouce = _configuration.GetConnectionString("ArsenalAppConnPositions");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSouce))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }
    }
}
