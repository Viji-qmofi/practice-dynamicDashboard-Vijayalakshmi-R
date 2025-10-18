import React from "react";

function DynamicDashboard() {
  // 1. Dynamic Greeting
  const userName = "Viji";

  // 2. Conditional Content
  const isPremiumUser = true; // Change this to false to test both conditions

  // 3. Render a Task List
  const tasks = [
    { taskName: "Complete React assignment", completed: true },
    { taskName: "Review JavaScript notes", completed: false },
    { taskName: "Attend coding session", completed: true },
    { taskName: "Update GitHub portfolio", completed: false },
  ];

   // 4️. Stretch Goal: Current Date
  const currentDate = new Date().toLocaleDateString();

  // 5️. Stretch Goal: Task Counts
  const completedCount = tasks.filter((task) => task.completed).length;
  const incompleteCount = tasks.length - completedCount;

   return (
    <div
      style={{
        textAlign: "center",
        marginTop: "10px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#ccdbeaff",
        padding: "30px",
        
      }}
    >
      {/* Date Display */}
      <p style={{ fontSize: "14px", color: "#555" }}>📅 {currentDate}</p> 

      {/* Dynamic Greeting */}
      <h1 style={{ marginBottom: "10px" }}>Hello, {userName}!</h1>

      {/* Conditional Rendering */}
      {isPremiumUser ? (
        <p style={{ color: "green", fontWeight: "bold" }}>
          Thank you for being a premium member!
        </p>
      ) : (
        <p style={{ color: "blue", fontWeight: "bold" }}>
          Upgrade to premium to enjoy exclusive features!
        </p>
      )}

      {/* Task List */}
      <h2 style={{ marginTop: "20px" }}>Your Tasks</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              margin: "10px 0",
              color: task.completed ? "green" : "red", // ✅ Highlight completed tasks
              fontWeight: task.completed ? "bold" : "normal",
            }}
          >
            {task.completed ? "✅" : "❌"} {task.taskName}
          </li>
        ))}
      </ul>

      {/* Task Counts */}
      <div style={{ marginTop: "15px", fontWeight: "bold" }}>
        <p style={{color : "green"}}>Completed Tasks: {completedCount}</p>
        <p  style={{color : "red"}}>Incomplete Tasks: {incompleteCount}</p>
      </div>
    </div>
  );
}

export default DynamicDashboard;