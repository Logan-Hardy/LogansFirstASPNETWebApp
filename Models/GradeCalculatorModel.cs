using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LogansFirstASPNETWebApp.Models
{
    public class GradeCalculatorModel
    {
        [Required]
        [StringLength(20)]
        public string Name { get; set; }
        [Required(ErrorMessage = "You must enter a number")]
        [Range(0.00, 100.00, ErrorMessage = "You must enter a number between 0 and 100")]
        public double Assignments { get; set;  }
        [Required(ErrorMessage = "You must enter a number")]
        [Range(0.00, 100.00, ErrorMessage = "You must enter a number between 0 and 100")]
        public double GroupProject { get; set; }
        [Required(ErrorMessage = "You must enter a number")]
        [Range(0.00, 100.00, ErrorMessage = "You must enter a number between 0 and 100")]
        public double Quizzes { get; set; }
        [Required(ErrorMessage = "You must enter a number")]
        [Range(0.00, 100.00, ErrorMessage = "You must enter a number between 0 and 100")]
        public double Exams { get; set; }
        [Required(ErrorMessage = "You must enter a number")]
        [Range(0.00, 100.00, ErrorMessage = "You must enter a number between 0 and 100")]
        public double Intex { get; set; }
    }
}
