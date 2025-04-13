app.post("/callout", async (req, res) => {
    const { employeeId, shiftId } = req.body;
    
    // Mark shift as open & find a replacement
    await db.query("UPDATE shifts SET status = 'open' WHERE id = $1", [shiftId]);
    
    // Notify available employees
    notifyAvailableEmployees(shiftId);
    
    res.json({ message: "Callout processed successfully." });
  });
  