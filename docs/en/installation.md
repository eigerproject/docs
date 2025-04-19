# __:fontawesome-solid-circle-down: Installation__

This page will show the steps to install Eiger for each operating system

---

## :fontawesome-brands-windows: Windows
Go to the Github page's [releases page](https://github.com/eigerproject/eigerlang/releases) and download the `eiger-win.zip` of the latest release.  
> __If there are no stable releases of the language yet, please refer to [building from source](#building-from-source).__
### Adding environment variable (Windows)
```batch
setx PATH "%PATH%;C:\path\to\eiger-win"
```
---

## :fontawesome-brands-apple: macOS
> __please refer to [building from source](#building-from-source).__

---

## :fontawesome-brands-linux: Linux
> __please refer to [building from source](#building-from-source).__

---

## :fontawesome-solid-code: Building from Source

### Using Visual Studio

#### Requirements
- Visual Studio with the C# development workload installed

#### Steps
1. Clone the repository:  
   `git clone https://github.com/eigerproject/eigerlang.git`
2. Open the solution file `eiger.sln` in Visual Studio.
3. Build and run the project.

---

### Using the .NET CLI

#### Requirements
- .NET SDK (includes the .NET CLI)

#### Steps
1. Clone the repository:  
   `git clone https://github.com/eigerproject/eigerlang.git`
2. Navigate to the `/eiger` directory.
3. Run the project: `dotnet run`

---

## :fontawesome-solid-vial-circle-check: Running Unit Tests

### Using Visual Studio

#### Requirements
- Visual Studio with the C# development workload installed

#### Steps
1. Open the solution `eiger.sln`.
2. Use the **Test Explorer** to discover and run all tests.

---

### Using the .NET CLI

#### Requirements
- .NET SDK (includes the .NET CLI)

#### Steps
1. Clone the repository:  
   `git clone https://github.com/eigerproject/eigerlang.git`
2. Navigate to the `/eiger.Tests` directory.
3. Run the tests: `dotnet test`
