CREATE TABLE Rooms (
  Id INT NOT NULL PRIMARY KEY,
  Name VARCHAR (100),
  room_attribute VARCHAR(100)
);

CREATE TABLE Devices(
  id INT NOT NULL PRIMARY KEY,
  Name VARCHAR (100),
  Type VARCHAR (50),
  Room_id INT,
  sensor_status BOOLEAN
);

CREATE TABLE Temp_Data(
    device_id INT NOT NULL PRIMARY KEY,
    use_date DATE,
    start_Time TIME,
    end_time TIME
);

CREATE TABLE Water_Data(
    device_id INT NOT NULL PRIMARY KEY,
    use_date DATE,
    start_Time TIME,
    end_time TIME,
    total_gallons INT
);

CREATE TABLE Electric_Data(
  device_id INT NOT NULL PRIMARY KEY,
  use_date DATE,
  start_Time TIME,
  end_time TIME,
  total_watts INT
);

CREATE TABLE History(
    monthly_data TEXT [],
    day_data  TEXT []
);
