---
author: Arman Zahedi
pubDatetime: 2025-02-23T08:55:00
title: Good vs Bad Abstraction
slug: good-vs-bad-abstraction
image: ./good-vs-bad-abstraction-2.png
featured: true
draft: false
tags:
  - oop
  - csharp
description: Good abstraction simplifies life by hiding complex details, should be common enough to be useful, and must strike a balance between being cohesive enough to protect its internals while flexible enough to handle change.
---

What Is an Abstraction?

Abstraction is the process of deriving general rules and concepts from specific examples or concrete details. In simpler terms, it means offering a "what" while hiding the "how." It allows us to interact with systems at a high level without being bothered by the details that make those systems work.

At its core, abstraction involves:

- **Hiding Implementation Details:** Consumers interact with a simple interface without worrying about underlying complexities.
- **Encapsulating Behavior:** Changes to the internal implementation do not affect the external interface.
- **Promoting Reusability and Extensibility:** Well-designed abstractions allow code (or processes) to be reused in different contexts and make it easier to extend functionality later.


Let's consider a library called **RestSharp**. RestSharp is a lightweight HTTP API client library that provides an intuitive way to send HTTP requests. It’s essentially a wrapper around `HttpClient` that adds built-in serialization, deserialization, and other stuff.

``` csharp
var client = new RestClient("https://api.example.com"); 
var request = new RestRequest("endpoint", Method.Get); 
var response = client.Execute(request);
```

In this snippet, RestSharp simplifies the process of making an HTTP request. But what exactly is `HttpClient` that was mentioned?

**HttpClient** is itself an abstraction. It streamlines HTTP communication by handling the complexities of crafting raw HTTP requests and managing responses. Underneath HttpClient is the .NET HTTP stack, which abstracts the low-level details of socket programming and network protocols.

Sockets provide an interface to the operating system’s network stack. They handle the conversion of high-level data into low-level electrical or optical signals and manage the intricate processes of establishing, maintaining, and terminating network connections.

So, when you use RestSharp, you're leveraging a series of nested abstractions—from a high-level, user-friendly API down to the fundamental network operations that interact directly with hardware. Each layer is designed to hide complexity and help you to focus on building your application without needing to manage the intricate details beneath. All of this to basically help you send an http request.

Abstraction isn't just confined to software, it’s a universal. 

# **Driving a car**

![[good-vs-bad-abstraction-1.jpg]]

Consider driving a card. When you press the gas pedal, you're engaging with a simple, high-level control that hides a wealth of complex processes. Pressing the pedal sends a signal to the engine, regulating the air and fuel mixture entering the combustion chambers. This converts chemical energy into mechanical power. Beyond the engine, the transmission translates that power into wheel motion through a series of gears. The car abstracts a multitude of underlying mechanisms into a simple interface: you press the pedal, and the car takes care of the rest.

If you really think about it, every "thing" is an abstraction. Every tool, every interface, every object is hiding its underlying complexity, and the best ones are the ones that are so well crafted that you don't even notice the details.

# **So why is abstraction such a big deal in software? 

Because **we build and refine abstractions every day** and modern software isn’t static; it’s dynamic, evolving, and often unpredictable. That’s why the abstractions we design need to strike a balance: they must be generic and flexible enough to accommodate for future change in the requirement, yet detailed enough to provide clear benefits in terms of clarity, and functionality.


# **What is a good abstraction then?

You want abstraction in your code because it makes complex tasks seem simpler, it makes life easier. You put common operations behind a simple contract so you can concentrate on the more important issues.

An abstraction should be solid and encapsulated, yet flexible enough to meet users needs. Poor encapsulation leads to a leaky abstraction, where you can see or even change what's happening behind the interface. That’s not good, because it lets other parts of your code use the class in ways they shouldn’t.

On the other side, an abstraction that isn’t flexible enough to handle change in the requirement will be abandoned, or even worst, it will become a **God Class**. The right level of abstraction always depends on the context.

# **Repository, An abstraction that makes you cringe every time**

Consider this example (implementation details removed for simplicity):

``` csharp
public class CarRepository  
{   
    private readonly AppDbContext _ctx;
    
    public Car GetCar(int id);  
    public void AddCard(Car car);  
    public IQueryable<Car> GetQueryableCars();  
}
```

What’s wrong here? We are returning an `IQueryable<Car>` from one of the methods, which is a lower level of abstraction than the rest (considering we're using EF here). This exposes details of how things work on different levels, which should be hidden.

lets look at another example:

``` csharp
public class CarRepository  
{  
    private readonly AppDbContext _ctx;
  
    public Car GetCar(int id);  
    public void AddCard(Car car);  
    public List<Car> GetCars(string make, string model, int blahblah...);  
}
```

What about this on? it doesn't even look right. with any change in the requirement we would need to touch the abstraction. even if we used a `filter`, it would just reduce the number of inputs and underlying implementation will need to change with every new requirement.

What about a separate method for each requirement:

``` csharp
public class CarRepository  
{  
    private readonly AppDbContext _ctx;
  
    public Car GetCar(int id);  
    public void AddCard(Car car);  
    public List<Car> GetCarsByMake(string make);  
    public List<Car> GetCarsByModel(string model);
}
```

This is just splitting one big problem to thousand mini problems.

What about specification pattern?

``` csharp
public class CarRepository  
{  
    private readonly AppDbContext _ctx;
  
    public Car GetCar(int id);  
    public void AddCard(Car car);  
    public List<Car> GetCars(ISpecification<Car> spec);  
}
```

Ahh, maybe? but at this point you would probably ask why even bother with the abstraction?

These points might seem either overkill or completely valid depending on the context. The required level of abstraction depends on your specific situation. Some even argue that using a repository is an extra layer of abstraction that should be avoided or some may even prefer the active record pattern.

The key is to be pragmatic: abstract only when it truly makes sense and adds value.

# In General

In general, a good abstraction simplifies life by hiding complex details, should be common enough to be useful, and must strike a balance between being cohesive enough to protect its internals while flexible enough to handle change.

So:
## Good Abstraction

Good abstraction cleanly separates concerns and allows developers (or users) to operate at a higher level without being bogged down in details. Key characteristics include:

1. **Exposes Only the Necessary:** Everything made public should be carefully considered to ensure it reveals only what’s essential, not the underlying implementation details.
2. **Considers Multiple Consumers:** Robust abstractions anticipate diverse use cases, whether for an open-source library or a specific application integration.
3. **Single Responsibility:** Each abstraction should do one thing and do it well, without exposing any part of the "how."
4. **Testability:** Abstractions, such as interfaces, facilitate unit testing by allowing the use of mock implementations.
5. **Generalization:** Analyze every variable in the implementation—determine if it needs to be configurable, replaceable, or hidden from the consumer.

## Characteristics of Bad Abstraction

Bad abstractions result when there is an attempt to oversimplify or combine unrelated responsibilities. Common pitfalls include:

1. **Over-Generalization:** Forcing different concepts into one class or method.
2. **Leaky Abstractions:** When details that should be hidden become exposed, forcing users to understand the internal workings.
3. **Violation of SRP:** When a component does too many things, it becomes harder to maintain or extend.
4. **Conditional Complexity:** Excessive reliance on conditionals (such as flags or type checks) to manage multiple cases within a single component can lead to confusion and error-prone code.


Before creating an abstraction, always consider whether it's truly necessary. While the benefits of abstraction are substantial there are times when introducing another layer might be overkill. 

If an abstraction is required, invest some time on designing the right public contract. Think of future change. Balancing simplicity with flexibility is key.

In the end, every man-made tool is just an abstraction :)

![[good-vs-bad-abstraction-2.jpg]]

