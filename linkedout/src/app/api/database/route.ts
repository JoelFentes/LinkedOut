'use server'

import { NextResponse } from "next/server";
import { sequelize } from "../../../../connection";

const checkDB = async (): Promise<boolean> => {
  try {
    await sequelize.authenticate({ logging: false });
    await sequelize.sync();
    console.log("Database connection's ok");
    return true;
  } catch (error) {
    console.error("Database connection failed:", error);
    return false;
  }
};

export async function GET() {
  try {
    const isConnected = await checkDB();
    if (isConnected) {
      return NextResponse.json({ message: "Database and models are synchronized" }); // Return response
    } else {
      return NextResponse.json({ message: "Database connection or model sync failed" }); // Return response
    }
  } catch (error) {
    console.error("Error in GET handler:", error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 }); // Return error response
  }
}
