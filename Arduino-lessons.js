export const course = {
  title: "The Playful Arduino.",
  sections: [ 
  {  //section 1 
      title: "A Little Bit About The Guy.",
      modules: [
        { //module 1 in section 1 
          title: "The Awakening of Arduino: Your Robot’s Tiny Brain",
          lessons: [
            { // lesson 1 in module 1 in section 1 
              title: "What is Arduino? And Why is it So Cool?",
              content: "Welcome to Module 1 of our awesome Arduino adventure!\nYou made it here — and you’re about to discover something super cool.\n\nSo… what’s this weird name… Arduino?\nIs it a superhero?\nA robot?\nA pizza topping?\nNope — it’s even cooler than that.\n\nArduino is a tiny little computer that can fit in your hand.\nIt’s like a brain for your robots, gadgets, and cool inventions!\n\nImagine you want to make a robot car, or a light that switches on when you clap, or a plant pot that tells you when it’s thirsty — Arduino makes all of that happen.\n\nAnd the best part?\nYou don’t need to be a boring scientist in a white coat.\nEven you, sitting right there in your room, can start making stuff move, blink, beep and dance!\n\nBut wait… how does it work?\nWell — Arduino talks to the real world using sensors (like eyes and ears for your robot), and it controls things like LEDs, motors and screens.\nYou tell it what to do using simple code — and magic happens.\n\nOver the next few modules, we’re gonna build, code, and have so much fun that you won’t even realize you’re learning real electronics and coding stuff.\n\nSo buckle up, scientist… your journey into the world of Arduino starts now!",
              image: "URL",
              audio: "URL"
            }
          ]
        },
        { // module 2 in section 1 
          title: "Meet the Family: Types of Arduino Boards",
          lessons: [
            { // lesson 1 in module 2 in section 1 
              title: "Different Arduino Boards — Which One’s Your Buddy?",
              content: "Alright, scientist — you now know what an Arduino is.\nBut guess what? There’s not just one Arduino… there’s a whole family of them!\n\nJust like how in your house you have big people, tiny people, and maybe even a noisy pet — Arduino has its own gang of boards.\nEach one has its own size, power, and special skills.\n\nLet’s meet some of them!\n\n1️⃣ Arduino Uno\nThis is the most famous one. It’s like the big brother of the family.\nPerfect for beginners, projects, and learning how to blink those first LEDs.\n\n2️⃣ Arduino Nano\nThis one’s the tiny ninja. Super small, but still powerful.\nGreat when you don’t have much space.\n\n3️⃣ Arduino Mega\nWhoa — this one’s huge!\nIt has lots more pins and memory.\nPerfect for when you want to connect loads of sensors and make something epic.\n\n4️⃣ Arduino Leonardo\nThis cool dude can pretend to be a computer keyboard or mouse.\nYup — it can type stuff for you or move your mouse cursor!\n\nAnd there are many more — but these are the ones you’ll hear about a lot.\n\nSo, next time you see a tiny green board with black chips on it — you can proudly say,\n“Hey! That’s an Arduino Uno!” or “Look! It’s a Nano!”\n\nPretty cool, huh?\nAlright — let’s move on and see how to set up your very own Arduino next!",
              image: "url",
              audio: "url"
            },
            { // lesson 2 in module 2 in section 1.
                title:"Types of Arduinos — Which Tribe Does Your Board Belong To?",
                content:"Alright scientist — now that you’ve met a few popular Arduino boards, it’s time to learn about the different categories they belong to.\nYep — not all Arduinos are made for the same job.\nSome are for learning, some for factories, some for tiny gadgets you can wear, and some for controlling entire homes!\nLet’s check out the types:\n\n1️⃣ Classic Arduino Boards\nThese are the most famous and beginner-friendly boards.\nPerfect for learning electronics, making robots, and building fun DIY projects.\nExamples: Arduino Uno, Nano, Mega, Leonardo.\n\n2️⃣ Enhanced & Powerful Boards\nThese are advanced boards with faster processors and extra memory.\nThey’re great when your project needs more speed or handles lots of data.\nExamples: Arduino Due, Portenta H7.\n\n3️⃣ IoT (Internet of Things) Boards\nThese boards can connect to WiFi or Bluetooth.\nThey’re perfect for projects like smart lights, remote robot control, or plant watering systems you control from your phone.\nExamples: Arduino MKR1000, MKR WiFi 1010, Nano 33 IoT.\n\n4️⃣ Wearable Boards\nTiny boards you can attach to clothes or toys.\nGreat for smart jackets, glowing caps, or motion-sensing bracelets.\nExamples: Arduino Gemma, LilyPad.\n\n5️⃣ Industrial Boards\nTough boards made for factories and big machines.\nThey can work in hot, dusty places without getting tired.\nExamples: Arduino Nicla Vision, Arduino Edge Control.\n\n6️⃣ Special-Purpose Boards\nBoards designed for special tricks like voice control, AI, or computer vision.\nExamples: Arduino Nicla Voice, Arduino Nicla Sense ME.\n\nNow you know — every Arduino board belongs to a type.\nSome are for learning, some for smart homes, and some for robot factories!\nWhen you pick a board, check which type it belongs to — and you’ll know if it’s perfect for your job!",
                image:"url",
                audio:"url"
            }

          ]
        },{//module 3 in section 1 
title: "Know Your Robot Brain: Arduino Uno and Its Labels",
lessons: [
  { // lesson 1 in module 3 in section 1 
title: "The Parts of an Arduino Uno — What’s That Part For?",
content:"Okay scientist — it’s time to take a super close look at your robot's brain: the **Arduino Uno** board!\nIt’s filled with tiny parts, each one with its own special job.\nLet’s meet them all!\n\n1️⃣ **USB Port**\nThis is where you plug in the USB cable to connect your Arduino to your computer.\nIt sends your code to the board and powers it up.\n\n2️⃣ **Power Jack**\nThis is where you can connect a battery or power adapter when your Arduino isn’t connected to your computer.\n\n3️⃣ **Digital Pins (0 to 13)**\nLittle holes you connect wires to.\nThey can turn LEDs on and off, read buttons, and send signals.\n\n4️⃣ **Analog Pins (A0 to A5)**\nThese read values from sensors like temperature, light, or sound.\nThey understand signals between 0 to 5 volts.\n\n5️⃣ **GND (Ground Pins)**\nThese are the black pins used to complete your circuits.\nWithout them, nothing will work!\n\n6️⃣ **5V and 3.3V Pins**\nThey give power to your sensors and LEDs.\n5V is for most things, 3.3V is for special modules.\n\n7️⃣ **Reset Button**\nIf your board freezes, press this to restart it.\nLike a tiny refresh button.\n\n8️⃣ **ATmega328P Microcontroller Chip**\nThe black rectangular chip in the middle.\nIt’s the brain of your Arduino that runs your code.\n\n9️⃣ **TX and RX LEDs**\nTiny lights that blink when your board is sending or receiving data.\nThey show your Arduino is talking to your computer.\n\n🔟 **Crystal Oscillator**\nA tiny silver part next to the chip.\nIt keeps time for your Arduino, helping it count seconds and control timing in your code.\nIt runs at 16 MHz — super fast!\n\n1️⃣1️⃣ **Voltage Regulator**\nA tiny black part near the power jack.\nIt controls how much voltage your board gets, keeping it safe from too much power.\n\n1️⃣2️⃣ **Power LED (ON LED)**\nA tiny light that stays on when your Arduino has power.\nIf this is off, something’s wrong!\n\n1️⃣3️⃣ **ICSP (In-Circuit Serial Programming) Header Pins**\nA group of six pins next to the chip.\nThey’re used to program the Arduino chip directly if it stops working.\nThink of it like a secret backdoor.\n\n1️⃣4️⃣ **Resettable Polyfuse**\nA tiny yellow part near the USB port.\nIt protects your Arduino from too much current.\nIf you draw too much power, it’ll disconnect and reconnect when things are safe again.\n\n1️⃣5️⃣ **AREF (Analog Reference) Pin**\nIt’s used to set a custom voltage limit for analog readings.\nYou’ll use this in some advanced projects.\n\n1️⃣6️⃣ **Serial Header Pins**\nThese extra pins connect to the USB chip on your board.\nThey help with serial communication.\n\n1️⃣7️⃣ **Barrel Jack Protection Diode**\nA tiny black part next to the power jack.\nIt stops power from going the wrong way and damaging your board.\n\n 1️⃣8️⃣ **Serial Communication Chip**\nThis chip helps your Arduino talk to your computer through USB.\nIn original Arduino Uno, it's a tiny square chip called the **ATmega16U2**.\nIn clone boards, it’s usually a cheaper chip like **CH340G** or **CP2102**.\nWithout this chip, your Arduino can’t upload code or talk to your PC.\n\nAnd that’s it!\nNow you know every tiny part of your Arduino Uno.\nYou’re not just a scientist — you’re officially a robot brain master now!\nLet’s get it blinking!",
image: "url",
audio:"url"
  }
]
        },{//module 4 in section 1 
          title:"Giving Life to Arduino: Powering It Up",
          lessons:[
            {//lesson 1 im module 4 in section 1 
               title:"How to Power Your Arduino the Right Way",
               content:"Alright scientist — now that you know every tiny part on your Arduino, let’s learn how to bring it to life!\nYep, it needs power before it can blink lights or control robots.\nBut did you know there are different ways to power up your Arduino?\nLet’s check them out!\n\n1️⃣ **USB Cable**\nThis is the easiest way.\nYou plug a USB cable from your computer into the Arduino’s USB port.\nIt powers up the board and also lets you send code to it.\nPerfect for coding and testing.\n\n2️⃣ **Power Jack (Barrel Jack)**\nYou can connect a 7 to 12-volt adapter here.\nIt’s great for when your project is running without a computer.\nThe board’s voltage regulator makes sure it gets the right amount of power.\n\n3️⃣ **Vin Pin**\nThis pin lets you connect an external battery or power source directly.\nUse this if you’re powering your Arduino from a battery pack.\nJust remember it needs to be between 7 to 12 volts.\n\n4️⃣ **5V and 3.3V Pins**\nYou can also power tiny modules and sensors from these pins.\nBut careful — they don’t power the whole board, just connected parts.\n5V is for most components, and 3.3V is for sensitive ones.\n\n🟢 **Important:** Never plug in more than one power source at a time unless you know what you’re doing.\nAnd never connect more than 12 volts — it can damage your board.\n\nAnd that’s it!\nNow you know how to safely power up your Arduino and get it ready to blink, beep and control your cool gadgets!\nReady to plug it in? Let’s go!",
               image:"url",
               audio : "url"
            }
          ]

        },{//module 5 in section 1
          title:"Tiny Legs vs Tiny Pads: DIP and SMD Explained",
          lessons:[
            {//lesson 1 in module 5 in section 1 
              title:"What’s the Difference Between DIP and SMD?",
              content:"Alright scientist — today we’re going to talk about the tiny parts that live on your Arduino and other electronic boards.\nYou might have seen some with long metal legs and others like tiny bugs stuck flat on the board.\nThey’re called **DIP** and **SMD** components!\nLet’s see what they are.\n\n1️⃣ **DIP (Dual In-Line Package)**\nThese are the classic electronic parts with two rows of metal legs sticking out.\nThey go through holes on the board and are soldered on the other side.\nDIP parts are big and easy to replace, perfect for beginners.\n**Example:** The ATmega328P chip on your Arduino Uno is a DIP.\n\n2️⃣ **SMD (Surface Mount Device)**\nThese are tiny parts that don’t have legs.\nInstead, they have tiny metal pads and stick flat on the surface of the board.\nThey’re soldered directly onto the board without holes.\nSMD parts are small, light, and used when you want to save space.\n**Example:** The little black chips on your Arduino Nano are SMD.\n\n🟢 **Why Does It Matter?**\nBecause it affects how easy it is to fix or upgrade your board.\nDIP parts are bigger and can be replaced with your hands and a soldering iron.\nSMD parts are tiny and need special tools.\n\nAnd that’s it!\nNow you know the difference between those long-legged parts and the tiny stuck-on bits on your electronics.\nLook at your Arduino and see if you can spot them both!",
              audio:"ul",
              image:"ul"
              
            }
          ]
        },{//module 6 in section 1 
title:"Real vs Copy: Arduino Clone and Original Explained",
lessons:[
  {//lesson1 in module 6 in section 1 
title:"What’s the Difference Between an Original and a Clone Arduino?",
content:"Alright scientist — have you ever seen two Arduinos that look almost the same but one is cheaper?\nThat’s because one is an **Original** and the other is a **Clone**.\nLet’s learn the difference!\n\n1️⃣ **Original Arduino**\nThis is made by the official Arduino company in Italy.\nIt uses high-quality parts, has solid build quality, and comes with official support and updates.\nIt’s reliable and tested.\n\n2️⃣ **Clone Arduino**\nThis is made by other factories copying the original design.\nThey work the same for most projects but might use cheaper components and might not last as long.\nSome have small issues like USB connection problems.\n\n🟢 **Why It Matters**\nIf you’re just learning or making a hobby project, a good quality clone works fine.\nBut for serious projects, school competitions, or robots you’ll sell or keep, go for the Original.\n\nAnd that’s it!\nNow you know how to tell a clone from an original and when to use which one.",
image:"url",
audio:"url"
  },{//lesson 2 in module 6 in section 1 
  title:"Which One Should You Choose?",
  content:"Okay scientist — now that you know about Original and Clone Arduinos, let’s figure out which one is right for you.\n\n🟢 **Go for an Original Arduino if:**\nYou’re working on a serious project that needs to be super reliable.\nYou’re entering a competition or building something important.\nYou want long-term support, updates, and guaranteed quality.\n\n🟢 **Go for a Clone Arduino if:**\nYou’re learning, experimenting, or building simple hobby projects.\nYou’re on a tight budget and want something affordable.\nYou don’t mind fixing little connection issues if they happen.\n\n💡 **Important Tip:** Always buy from trusted sellers, even for clones.\nSome very cheap clones use poor parts and may stop working suddenly.\n\nSo remember — it’s not about which is good or bad.\nIt’s about what your project needs and what you can afford.\nNow you know how to pick the right board for your mission!\nLet’s move to the next adventure!"  ,
  image:"url",
  audio:"urk",
  }
]
        },{//module 7 in section 1
          title:"The Secret Startup Code: What is a Bootloader?",
          lessons:[
            {//lesson 1 in module 7 in section 1 
              title:"Why Your Arduino Needs a Bootloader?",
              content:"Okay scientist — ever wondered how your Arduino knows what code to run when you power it on?\nThat’s thanks to something called a **Bootloader**.\nLet’s see what it does!\n\nA **Bootloader** is a tiny program already stored inside your Arduino’s chip.\nIts job is to wake up the board and get it ready to run your code.\nIt also helps your computer upload new code to the board through USB.\n\nWithout the bootloader, your Arduino wouldn’t know what to do when it’s turned on.\nIt’s like the tiny manager that starts work before the big machines do.\n\n🟢 **Can You Change It?**\nYes — you can erase and install a new bootloader using another Arduino or a special programmer.\nAnd here’s a secret: you can also do it using the **ICSP pins** on your board.\nThese six tiny pins let you connect directly to the chip and upload a fresh bootloader if something goes wrong.\nIt’s like giving your robot brain a fresh memory reset!\n\nBut for now, we’ll leave that to the pros.\nNow you know why that little chip needs a bootloader — it’s the first thing that runs every time you power up your robot brain!",
              image:"url",
              audio:"url"
            }
          ]
        },{//module 8 in section 1 
        title:"The Brain’s Playground: What is a PCB?",
        lessons:[
          {//lesson 1 in module 8 in section 1
            title:"How PCBs Work Inside Your Arduino",
            content:"Alright scientist — have you ever seen that green board under your Arduino’s parts?\nThat’s called a **PCB**, short for **Printed Circuit Board**.\nLet’s learn how it works!\n\nA PCB is a flat board made of plastic or fiberglass with thin copper lines printed on it.\nThose copper lines act like tiny roads carrying electricity between all the parts.\n\nIt holds and connects the microcontroller, LEDs, resistors, and pins without using a bunch of messy wires.\nThis makes your board neat, safe, and fast.\n\n🟢 **Why Use a PCB?**\nIt makes electronics compact, easy to fix, and works faster because everything’s close together.\nIt also stops loose connections and saves tons of space compared to wires.\n\nNow you know — that green board isn’t just for looks.\nIt’s the streets and playground where your Arduino’s tiny parts live and talk to each other!",
            audio:"url",
            image:"url"
          }
        ]  
        },{//module 9 in section 1 
title:"Choose Your Hero: Picking the Right Arduino Board.",
lessons:[
  {//lesson 1 in module 9 in section 1 
  title:"How to Choose the Best Arduino Board for Your Project",
  content:"Okay scientist — there are so many types of Arduino boards.\nBut which one should you use?\nLet’s figure it out!\n\n1️⃣ **Arduino Uno**\nBest for beginners, small robots, and learning.\nIt’s simple, reliable, and has all the basics.\n\n2️⃣ **Arduino Nano**\nGreat for projects where space is tight.\nSame brain as Uno but tiny.\n\n3️⃣ **Arduino Mega**\nUse this when you need lots of sensors or devices connected.\nIt has extra pins and memory.\n\n4️⃣ **Arduino Leonardo**\nPick this if you want your Arduino to act like a keyboard or mouse.\n\n5️⃣ **IoT Boards**\nLike the Nano 33 IoT or MKR WiFi 1010 for WiFi/Bluetooth projects.\n\n6️⃣ **Wearable Boards**\nLike Gemma or LilyPad for projects you wear.\n\n🟢 **Tip:** Check your project’s size, number of connections, and if it needs WiFi or Bluetooth.\nThat’ll tell you which board is your hero.\n\nNow you know how to pick the perfect robot brain for every mission!",
  image:"url",
  audio:"url"  
  }
]
        },{//module 10 in section 1
        title:"Meet the Team: Sensors, Motors, and More",
        lessons:[
          {//lesson 1 in module 10 in section 1 
          title:"What Are the Parts You’ll Use with Arduino?",
          content:"Alright scientist — your Arduino is smart, but it needs teammates to build cool gadgets.\nLet’s meet the types of components you’ll use!\n\n1️⃣ **Sensors**\nThese help your robot sense the world.\nThey detect light, temperature, distance, motion, sound, and more.\n\n2️⃣ **Actuators**\nParts that move or perform actions.\nLike motors, servos, relays, and buzzers.\nThey make stuff move or make noise.\n\n3️⃣ **Displays**\nShow information like numbers, text, or images.\nLike LCD screens or OLED displays.\n\n4️⃣ **LEDs and Lights**\nTiny bulbs that blink, glow, or signal.\n\n5️⃣ **Switches and Buttons**\nLet you give commands to your Arduino by pressing or flipping something.\n\n6️⃣ **Power Modules**\nBatteries, adapters, or solar panels that give power to your projects.\n\n🟢 **Fun Fact:** Combining sensors, actuators, and lights makes smart robots and gadgets.\nNow you know your Arduino’s dream team!\nLet’s get building!"  ,
          image:"url",
          audio:"url"
          }
        ]  
        },{//module 11 in section 1 
        title:"Tiny Computers: What is a Microcontroller?",
        lessons:[
          {//lesson 1 in module 11 in section 1 
            title:"Meet the Brain Behind Your Gadgets",
            content:"Alright scientist — before we dive into coding and gadgets, let’s learn about what makes your Arduino smart.\nIt’s something called a **Microcontroller**.\nSo, what is it?\n\nA **Microcontroller** is a tiny computer inside a small chip.\nIt doesn’t have a keyboard, mouse, or screen like your regular computer.\nBut it can think, remember, and control things like lights, motors, and sensors.\n\nYour Arduino board is built around a microcontroller called the **ATmega328P**.\nIt listens to your code, reads sensors, makes decisions, and controls machines.\n\nYou’ll find microcontrollers everywhere — in cars, toys, TVs, washing machines, drones, and robots.\nThey’re like tiny robot brains inside our gadgets.\n\nAnd that’s it!\nNow you know what a microcontroller is — a mini brain waiting to follow your orders!",
            image:"url",
            audio:"url"
          }
        ]  
        },{//module 12 in section 1 
        title:"The Invisible Team: Voltage, Current, and Resistance",
        lessons:[
{//lesson 1 in module 12 in section 1 
title:"What Are Voltage, Current, and Resistance?",
content:"Okay scientist — before building circuits, let’s meet the invisible players that run inside your wires.\nThey are called **Voltage**, **Current**, and **Resistance**.\nLet’s see what they do!\n\n1️⃣ **Voltage (V)**\nThink of voltage as the pressure pushing electricity through a wire.\nIt’s like the water pressure in a pipe.\nMore voltage means more push.\n\n2️⃣ **Current (A)**\nCurrent is the actual flow of electricity moving through your circuit.\nIt’s like the water flowing inside the pipe.\nMore current means more electricity moving.\n\n3️⃣ **Resistance (Ω)**\nResistance slows down the current.\nIt’s like a narrow spot in the pipe that makes it harder for water to flow.\nResistors, LEDs, and components add resistance to protect your circuits.\n\n🟢 **Fun Fact:**\nVoltage pushes, current flows, and resistance controls the flow.\nThey work together to make your gadgets light up and move safely.\n\nNow you know the invisible team inside every electronic project!",
image:"url",
audio:"url"  
}
        ]  
        },{//module 13 in section 1 
        title:"Making a Loop: What is a Circuit?",
        lessons:[
          {//lesson1 in module 13 in section 1 
          title:"How Electricity Travels Through a Circuit",
          content:"Alright scientist — now that you know about electricity, let’s see how it moves around to make things work.\nIt travels inside something called a **Circuit**.\nLet’s see what that means!\n\nA **Circuit** is a complete loop made by connecting wires, parts, and power.\nElectricity flows from the power source, through your parts like LEDs and motors, and back to the power source.\nThat’s called a closed circuit.\n\nIf there’s a break in the loop, it’s an open circuit, and nothing works.\nLike when you open a switch, the loop breaks, and your light turns off.\n\n🟢 **Important:**\nAlways connect your parts so the power can make a complete circle.\nIf it can’t, your gadgets won’t work.\n\nNow you know how to build a path for electricity and bring your projects to life!",
          image:"url",
          auido:"url"  
          }
        ]  
        },{//module 14 in section 1
          title:"Talking to Robots: What is Programming?" ,
          lessons:[
            {//lesson 1 in module 14 in section 1 
            title:"How Code Tells Your Arduino What to Do",
            content:"Alright scientist — before we can make lights blink and motors move, you need to know what **programming** is.\nProgramming is when you write instructions for your robot brain to follow.\nThese instructions are called **code**.\n\nYour Arduino reads this code and does exactly what you tell it to do.\nYou can make it blink LEDs, play sounds, or control motors.\nIt’s like writing a recipe for your robot.\n\nAnd the cool part?\nEven one line of code can make something happen.\nWe’ll start writing code together very soon.\nNow you know — code is the language your robot brain understands!",
            image:"url",
            audio:"url"  
            }
          ]
          },{//module 15 in section 1
          title:"Your Robot's Workshop: What is the Arduino IDE?",
        lessons:[
            {//lesson 1 in module 15 in section 1
            title:"Where You Write and Send Code to Your Arduino",
            content:"Okay scientist — if you’re going to talk to your robot, you need a place to write your instructions.\nThat place is called the **Arduino IDE**.\nIt stands for **Integrated Development Environment**.\n\nThe IDE is a software on your computer where you type your code.\nIt checks your code for mistakes and sends it to your Arduino through the USB cable.\n\nIt has buttons like **Verify** to check your code, **Upload** to send it to the board, and a **Serial Monitor** to see messages from your Arduino.\n\nNow you know — the IDE is your robot’s control room!\nYou’ll be using it a lot very soon.",
            image:"url",
            audio:"url"
        }
        ]
      },{//module 16 in section 1
        title:"Choosing Your Pins: What is Input and Output?",
        lessons:[
          {//lesson 1 in module 16 in section 1
          title:"How Your Arduino Pins Listen and Talk",
          content:"Alright scientist — your Arduino board has tiny holes called **pins**.\nSome of them listen to the world, and some of them control things.\nLet’s see how that works.\n\nWhen you set a pin as **INPUT**, it listens to buttons, sensors, or signals coming in.\nIt’s like a tiny ear waiting for information.\n\nWhen you set a pin as **OUTPUT**, it controls things like LEDs, buzzers, or motors.\nIt’s like a tiny mouth that gives commands.\n\nYou’ll tell your Arduino what each pin should do in your code.\nNow you know — some pins listen, some pins talk!",
          image:"url",
          audio:"url"  
          }
        ]
      },{//module 17 in section 1
        title:"Circuit Safety: Do’s and Don’ts",
        lessons:[
          {//lesson 1 in module 17 in section 1
            title:"How to Keep Your Arduino and Yourself Safe",
            content:"Okay scientist — before we start wiring things up, let’s learn a few safety tips so you don’t hurt your robot or yourself.\n\n1️⃣ Always double-check your connections before turning on power.\n2️⃣ Never connect power directly to ground — it can damage your board.\n3️⃣ Don’t touch wires or metal parts while power is on.\n4️⃣ Use the right power — never use more than 12 volts on your Arduino.\n5️⃣ Always disconnect your Arduino before changing connections.\n\nFollow these rules and your projects will stay safe and work perfectly!\nNow you’re ready to wire up your first circuit soon!",
            image:"url",
            audio:"url"
          }
        ]
      },{//module 18 in section 1
      title:"Meet the Breadboard: No Solder Needed",
      lessons:[
        {//lesson 1 in module 18 in section 1
        title:"How a Breadboard Connects Wires and Parts",
        content:"Alright scientist — before you start wiring up LEDs and buzzers, you need to meet your new friend: the **Breadboard**.\n\nA **Breadboard** is a plastic board with lots of tiny holes.\nYou can stick wires and parts into these holes to connect them without using solder.\n\nInside, the holes are connected in lines.\nThis lets electricity flow between the parts you plug in.\nIt’s perfect for testing circuits quickly and safely.\n\nYou’ll also use **Jumper Wires** — flexible colored wires you plug into the breadboard and Arduino pins.\nThey let you build your circuits easily.\n\nNow you know — breadboards and jumper wires make connecting parts fast and fun!",
        image:"url",
        audio:"url"  
        }
      ]  
      },{//module 19 in section 1
  title: "Simulating Analog Magic: Understanding PWM",
  lessons: [
    {
      title: "What is PWM and Why Arduino Uses It",
      content: "Alright scientist — ever wondered how your Arduino can fade an LED or control motor speed without real analog output?\nIt’s all thanks to something called **PWM**, or **Pulse Width Modulation**.\n\nPWM is a trick where the Arduino turns a pin on and off very fast.\nBy changing how long the signal stays ON versus OFF, it creates an effect that feels like smooth control.\n\nThink of it like blinking a light so fast that it looks dim or bright.\nThe longer it stays ON in each blink, the brighter it looks — that’s PWM!\n\nPins with a **~** symbol on your Arduino can do PWM.\nThey let you control brightness, motor speed, and even tones!\n\nNow you know — PWM is your secret weapon for controlling analog-like behavior using digital pins!",
      image: "url",
      audio: "url"
    }
  ]
},
{//module 20 in section 1
  title: "Arduino Meets Your PC: How They Talk",
  lessons: [
    {
      title: "How Arduino Communicates with Your Computer",
      content: "Okay scientist — ever wondered how your Arduino gets the code from your computer?\nIt talks using something called **Serial Communication**.\n\nYour Arduino has a chip that acts like a translator between USB and its brain.\nOn original Uno, that’s the **ATmega16U2** chip.\nOn clones, it’s often **CH340G** or **CP2102**.\n\nWhen you upload code, your computer sends it through USB.\nThis chip converts the USB data into serial data that the Arduino understands.\n\nYou can also send messages to and from Arduino using the **Serial Monitor** in the Arduino IDE.\n\nNow you know — there’s a tiny translator onboard that helps your robot understand your computer’s language!",
      image: "url",
      audio: "url"
    }
  ]
},
{//module 21 in section 1
  title: "Speaking Robot: Arduino Communication Protocols",
  lessons: [
    {
      title: "How Arduinos Talk to Other Devices",
      content: "Alright scientist — Arduinos often need to talk to sensors, displays, or even other robots.\nTo do that, they use **communication protocols** — special rules for how data is sent.\n\nLet’s meet the three most common ones:\n\n1️⃣ **UART (Serial)**\nThis is what Arduino uses to talk to your computer using TX and RX pins.\nSimple and direct, good for short-distance talking.\n\n2️⃣ **I2C (Eye-Squared-C)**\nThis uses just two wires — SDA and SCL — to connect multiple devices.\nEach device has an address so Arduino knows who to talk to.\nGreat for sensors and displays.\n\n3️⃣ **SPI (Serial Peripheral Interface)**\nThis is super fast and uses four wires: MISO, MOSI, SCK, and SS.\nIt’s great for talking to memory cards, displays, and high-speed stuff.\n\nNow you know — Arduino speaks many languages, and each protocol is like a different accent for a different job!",
      image: "url",
      audio: "url"
    }
  ]
},
{//module 22 in section 1
  title: "Know Every Pin: The Arduino Uno Pinout",
  lessons: [
    {
      title: "Exploring Every Pin on the Arduino Uno",
      content: "Okay scientist — your Arduino Uno has a lot of tiny holes called **pins**, and each one does something special.\nLet’s go through them all!\n\n🔹 **Digital Pins (0-13)**\nUsed for INPUT or OUTPUT. Pins 0 and 1 are also used for Serial (TX/RX).\n\n🔹 **PWM Pins (~3, ~5, ~6, ~9, ~10, ~11)**\nThese can simulate analog using PWM.\n\n🔹 **Analog Pins (A0-A5)**\nUsed to read analog sensor values like light or temperature.\n\n🔹 **Power Pins**\n- 3.3V: For low-voltage parts\n- 5V: Main power output for components\n- GND: Ground\n- Vin: External power input (7-12V)\n\n🔹 **AREF Pin**\nUsed to set an external reference voltage for analog readings.\n\n🔹 **Reset Pin**\nRestarts your Arduino if you connect it to GND.\n\nNow you know every single pin — time to plug and play like a real engineer!",
      image: "url",
      audio: "url"
    }
  ]
},
{//module 23 in section 1
  title: "COM Ports and Virtual Wires",
  lessons: [
    {
      title: "What is a COM Port and Why Arduino Needs It",
      content: "Alright scientist — when you plug your Arduino into your PC, something called a **COM port** appears.\nIt’s a virtual serial port — like an invisible wire between your computer and Arduino.\n\nYour Arduino’s USB-to-Serial chip (like ATmega16U2 or CH340G) creates this COM port.\n\nThe Arduino IDE uses this COM port to upload code and receive data through the **Serial Monitor**.\n\nSometimes your Arduino won’t show up unless drivers are installed (especially for CH340G).\n\nYou can find the COM port number in the Tools > Port menu in the IDE.\nThat’s how the IDE knows where your robot is plugged in!\n\nNow you know — that COM port is your robot’s invisible phone line to your computer!",
      image: "url",
      audio: "url"
    }
  ]
},{//module 24 in section 1
  title: "The Language of Robots: What Code Does Arduino Understand?",
  lessons: [
    {
      title: "What Language is Arduino Coded In?",
      content: "Okay scientist — now that you're almost ready to start coding, let’s answer one big question.\nWhat language does your Arduino speak?\n\nArduino uses a special version of **C++**, a powerful computer language.\nIt’s made super simple for beginners.\nYour files are called **.ino** files — short for ‘Arduino Sketches’.\n\nEvery Arduino sketch has two main parts:\n1️⃣ **setup()** – This runs once when the Arduino starts.\n2️⃣ **loop()** – This keeps running again and again forever.\n\nYou also use **libraries** to get extra powers — like controlling sensors or motors.\nLibraries are like magic toolboxes made by smart engineers.\n\nNow you know — you’ll be writing simplified C++ to make your robot brain follow your instructions!",
      image: "url",
      audio: "url"
    }
  ]
},
{//module 25 in section 1
  title: "Behind the Scenes: What Happens When You Upload Code?",
  lessons: [
    {
      title: "From Sketch to Robot Brain: Code Upload Explained",
      content: "Okay scientist — ever wonder what happens when you click that UPLOAD button?\nLet’s break it down.\n\n1️⃣ Your Arduino IDE first checks your code.\nIt looks for mistakes and compiles it into a special machine language called **hex code**.\n\n2️⃣ This hex file is then sent through the USB cable.\nThe tiny chip on your board — called a **USB-to-Serial chip** — changes the data into a format your Arduino understands.\n\n3️⃣ The Arduino's **bootloader** reads the code and saves it into its flash memory.\nIt’s like your robot writing the instructions into its brain.\n\nAnd boom! Your Arduino restarts and begins running your new program instantly.\n\nNow you know — uploading is not just pressing a button, it’s a robot transformation!",
      image: "url",
      audio: "url"
    }
  ]
},
{//module 26 in section 1
  title: "Sketchbooks and Storage: Where Your Code Lives",
  lessons: [
    {
      title: "Understanding Arduino Sketches and Folders",
      content: "Alright scientist — when you save your project, where does it all go?\nLet’s explore your robot’s notebook — the **Sketchbook**.\n\nEvery time you save a new Arduino sketch, it gets stored in your **Sketchbook folder**.\nThat’s a special place where the IDE keeps all your `.ino` files.\n\nEach sketch is saved in a folder with the same name.\nExample: `robotlight.ino` will live in a folder called `robotlight/`.\n\nYou can find your Sketchbook folder in the Arduino IDE settings.\nYou can also organize your sketches into folders to keep everything clean.\n\nNow you know — your code has a cozy digital home where all your robot ideas live!",
      image: "url",
      audio: "url"
    }
  ]
},
{//module 27 in section 1
  title: "Time Magic: Delays and Waiting Wisely",
  lessons: [
    {
      title: "How Delay and Timing Work on Arduino",
      content: "Okay scientist — when your robot waits or blinks slowly, it’s using a trick called **delay**.\nLet’s understand how Arduino keeps time.\n\n`delay(1000)` means ‘wait 1000 milliseconds’ — or 1 second.\nDuring that time, Arduino does nothing else — it’s frozen!\n\nThat’s why we need to use it carefully.\nToo many delays, and your robot becomes lazy!\n\nFor smarter projects, you’ll later learn how to use **millis()**, which keeps time without freezing the robot.\nBut for now, delay is our beginner tool to control timing.\n\nNow you know — time is in your hands, use it wisely!",
      image: "url",
      audio: "url"
    }
  ]
},
{//module 28 in section 1
  title: "Memory Matters: How Your Arduino Stores Stuff",
  lessons: [
    {
      title: "Flash, SRAM, and EEPROM: What's Inside Your Board?",
      content: "Okay scientist — let’s open up your robot brain and see how it stores things.\nYour Arduino Uno has three types of memory:\n\n🔹 **Flash** – This holds your code.\nWhen you upload a sketch, it’s written here.\nIt doesn’t get erased when you unplug your board.\n\n🔹 **SRAM** – This is your robot’s short-term memory.\nIt’s used for variables, calculations, and temporary data.\nWhen power goes off, this memory is lost.\n\n🔹 **EEPROM** – This is tiny long-term memory.\nYou can write data to it and it stays even when power is gone.\nIt’s great for saving settings.\n\nNow you know — your robot brain has different kinds of memory for different jobs!",
      image: "url",
      audio: "url"
    }
  ]
},
{//module 29 in section 1
  title: "Resetting the Brain: How Arduino Reboots",
  lessons: [
    {
      title: "How Arduino Starts Over With the Reset Button",
      content: "Okay scientist — sometimes, your robot needs a fresh start.\nThat’s what the **reset button** is for!\n\nPressing the reset button restarts the code from the beginning, just like turning the power off and on.\n\nArduino also resets automatically when you upload new code.\nThis is done through a hidden trick — a small pulse sent over the DTR line and a tiny capacitor connected to the reset pin.\n\nResetting doesn’t erase your code, it just starts it again from the top.\n\nNow you know — when your robot is acting weird, try giving it a gentle reset!",
      image: "url",
      audio: "url"
    }
  ]
},
{//module 30 in section 1
  title: "Tiny Symbols, Big Meaning: Code Punctuation",
  lessons: [
    {
      title: "Why Semicolons and Brackets Matter",
      content: "Alright scientist — time to talk about the tiny symbols in your code that hold big power!\nIn Arduino code, these symbols matter a LOT:\n\n🔹 `;` ends a statement. Miss one and your robot won’t understand the code.\n🔹 `{}` wrap blocks of code — like inside setup() and loop().\n🔹 `//` starts a comment — for notes and explanations in your code.\n\nWhen you write good punctuation, your robot reads smoothly.\nWhen you forget one, your IDE throws errors.\n\nNow you know — writing code is like writing a secret letter to your robot, and every dot and bracket counts!",
      image: "url",
      audio: "url"
    }
  ]
},
{//module 31 in section 1
  title: "Tiny Computers Everywhere: What is Embedded?",
  lessons: [
    {
      title: "Why Arduino is an Embedded System",
      content: "Okay scientist — let’s zoom out and see where Arduino fits in the world.\nIt’s part of something called **embedded systems**.\n\nAn **embedded system** is a tiny computer built into a machine to do a special job.\nYour washing machine, car, microwave — all have embedded systems.\n\nArduino is also an embedded system — it runs one program at a time and controls hardware.\n\nUnlike full computers, it doesn’t have an operating system.\nIt just does what you told it to in your sketch.\n\nNow you know — your Arduino is part of the hidden world of tiny, smart machines!",
      image: "url",
      audio: "url"
    }
  ]
},{//module 32 in section 1
  title: "Your Control Center: Touring the Arduino IDE",
  lessons: [
    {
      title: "Buttons, Boards, Ports – Know Your IDE",
      content: "Alright scientist — now let’s explore your robot’s mission control: the **Arduino IDE**!\n\n🔹 **Verify (✓):** Checks your code for errors before uploading.\n🔹 **Upload (→):** Sends your code to the Arduino board.\n🔹 **New/Open/Save:** Manage your sketches.\n🔹 **Serial Monitor (🔍):** Lets you talk to your robot.\n\n💡 Go to **Tools → Board** to select your Arduino model.\nGo to **Tools → Port** to choose the COM port.\nThese two settings must match, or your upload won’t work!\n\nNow you know — your IDE is your robot command center. Let’s master it!",
      image: "url",
      audio: "url"
    }
  ]
},
{//module 33 in section 1
  title: "Oops! Common Beginner Mistakes",
  lessons: [
    {
      title: "Troubleshooting Your First Uploads",
      content: "Okay scientist — sometimes robots don’t listen. That’s okay!\nHere are common mistakes and how to fix them:\n\n1️⃣ **Wrong Board Selected:** Double check Tools → Board.\n2️⃣ **Wrong COM Port:** Go to Tools → Port and select the one with your Arduino.\n3️⃣ **Missing `setup()` or `loop()`:** Your code must have both!\n4️⃣ **Loose USB or Power Issues:** Try reconnecting or using another cable.\n5️⃣ **Bad Wiring:** Check if LEDs and components are wired right.\n\nNow you know — every scientist makes mistakes. But YOU now know how to fix them!",
      image: "url",
      audio: "url"
    }
  ]
},
{//module 34 in section 1
  title: "Under the Hood: What the IDE Really Does",
  lessons: [
    {
      title: "What Happens Behind the Upload Button",
      content: "Okay scientist — let’s peek behind the scenes!\nWhen you click UPLOAD in the Arduino IDE, here’s what happens:\n\n🔹 **Step 1:** The IDE checks and compiles your sketch using a tool called **GCC** (a C++ compiler).\n🔹 **Step 2:** The code turns into a **.hex file** — a special format for your Arduino.\n🔹 **Step 3:** The IDE calls a helper tool called **avrdude** that sends this file to your board.\n🔹 **Step 4:** Your board’s bootloader takes it in and stores it in Flash memory.\n\nNow you know — the IDE is like a factory, and clicking UPLOAD starts a smart robot assembly line!",
      image: "url",
      audio: "url"
    }
  ]
},
{//module 35 in section 1
  title: "Arduino vs Raspberry Pi: Two Robot Brains",
  lessons: [
    {
      title: "How Arduino and Pi are Different",
      content: "Alright scientist — people often ask: What’s the difference between Arduino and Raspberry Pi?\nLet’s make it crystal clear.\n\n🔹 **Arduino** is a **microcontroller**. It runs one sketch (program) again and again.\nIt’s great for controlling sensors, motors, and real-time tasks.\n\n🔹 **Raspberry Pi** is a **microprocessor**. It’s like a small computer with an operating system.\nIt can run many programs at once and even has a desktop.\n\nArduino is better for electronics and real-time robot tasks.\nRaspberry Pi is better for apps, internet, or camera projects.\n\nNow you know — both are powerful, but your Arduino is made to control the physical world like a pro!",
      image: "url",
      audio: "url"
    }
  ]
}



      ]
    },
    { //section 2
      title: "The Spark Awakens💡",
      modules: [
        {//module 1 in section 2
  title: "Getting Set for the First Code Zap",
  lessons: [
    {
      title: "Download the Arduino IDE",
      content: "🔧 What You Need: Laptop or PC, Internet access\n\nOkay scientist — let’s start setting up your lab!\n\n1️⃣ Go to [https://www.arduino.cc/en/software](https://www.arduino.cc/en/software)\n2️⃣ Scroll down and choose your OS (Windows, Mac, Linux)\n3️⃣ Click DOWNLOAD — you'll get the latest IDE installer\n\nThat’s it! Save the file and we’re ready to install!",
      image: "url",
      audio: "url"
    },
    {
      title: "Install Arduino IDE on Your Computer",
      content: "🔧 What You Need: Arduino IDE Installer, Laptop or PC\n\nLet’s install the software you just downloaded!\n\n**Windows**:\n1️⃣ Double-click the .exe file\n2️⃣ Click ‘I Agree’ → Next → Install\n3️⃣ Allow permissions if asked\n4️⃣ Wait till installation finishes\n\n**Mac**:\n1️⃣ Open the .zip or .dmg file\n2️⃣ Drag Arduino into Applications\n3️⃣ Done!\n\nNow the IDE is ready on your system.",
      image: "url",
      audio: "url"
    },
    {
      title: "Plug In Your Arduino",
      content: "🔧 What You Need: Arduino Uno, USB Cable, Laptop/PC\n\nTime to connect your board!\n\n1️⃣ Use a USB-A to B cable (printer-style)\n2️⃣ Plug one end into your Arduino\n3️⃣ Plug the other into your computer\n\nYou’ll see a green light on the board.\nThat means it’s getting power. It’s alive!",
      image: "url",
      audio: "url"
    },
    {
      title: "Install Drivers for Arduino Uno",
      content: "🔧 What You Need: Internet access, Laptop/PC\n\nLet’s make sure your PC knows how to talk to the Arduino.\n\n✅ For official Arduino Uno:\n- Drivers usually install automatically.\n- Windows should say 'Arduino Uno detected'.\n\n✅ If not:\n1️⃣ Go to Device Manager → Ports\n2️⃣ Right-click 'Unknown Device'\n3️⃣ Click 'Update Driver' and choose Arduino drivers from your install folder\n\nDone? Now the official Uno is ready!",
      image: "url",
      audio: "url"
    },
    {
      title: "Install Drivers for Clone Boards",
      content: "🔧 What You Need: Internet access, Laptop/PC\n\nIf you're using a clone Arduino (common online), you might need CH340 or CP210x drivers.\n\n1️⃣ Goto <a href='https://www.wch-ic.com/downloads/ch341ser_exe.html#:~:text=Tool%20software-,CH341SER.EXE,to%20user%20with%20the%20product'>WCN Website</a>.\n2️⃣ Download the Zip File According To Your System. (Windows, Mac, Linux or Android)\n3️⃣ Install and restart your PC OR Android Phone\n\n✅ For CP210x boards:\n- Goto <a href='https://www.silabs.com/software-and-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads'\n> Silabs Website</a> - Follow installation steps\n\nOnce installed, reconnect your board and check Port again in Tools.\nIt should now appear!",
      image: "url",
      audio: "url"
    },
    {
      title: "First Look at the Arduino IDE",
      content: "🔧 What You Need: Laptop/PC, Installed Arduino IDE\n\nLet’s open the IDE and get familiar!\n\nDouble-click the Arduino icon.\nYou’ll see a blank sketch with this structure:\nvoid setup() {\n  // setup things here\n}\nvoid loop() {\n  // repeat this code forever\n}\n\nOn top, you'll see buttons: Verify ✓, Upload →, Serial Monitor 🔍\nWe’ll use these soon!",
      image: "url",
      audio: "url"
    },
    {
      title: "Select the Right Board",
      content: "🔧 What You Need: Arduino connected, Arduino IDE open\n\nLet’s tell the IDE what board you’re using.\n\n1️⃣ Click **Tools** in the menu\n2️⃣ Go to **Board → Arduino AVR Boards → Arduino Uno**\nThat’s the classic board we’re using for now.\n\nIf you're using another board, select the correct one!",
      image: "url",
      audio: "url"
    },
    {
      title: "Select the Right Port (COM/VCP)",
      content: "🔧 What You Need: Arduino connected to USB\n\nNow pick the USB port your Arduino is using.\n\n1️⃣ Click **Tools → Port**\n2️⃣ Look for something like `COM3 (Arduino Uno)`\n3️⃣ Select it!\n\nNo Arduino listed? Try unplugging and replugging it.\nYour robot must be connected to the right path!",
      image: "url",
      audio: "url"
    },
    {
      title: "Upload the First Blink Sketch",
      content: "🔧 What You Need: Arduino + IDE + Correct port selected\n\nLet’s run your first robot command — BLINK!\n\n1️⃣ Go to **File → Examples → 01.Basics → Blink**\n2️⃣ Click the **Upload (→)** button\n3️⃣ Wait a few seconds\n\nIf everything worked — your onboard LED near pin 13 should start blinking!\nCongratulations, it’s alive!",
      image: "url",
      audio: "url"
    },
    {
      title: "Read the IDE Messages and Errors",
      content: "🔧 What You Need: IDE window\n\nLet’s learn how to read the messages Arduino shows.\n\n1️⃣ Bottom of the screen shows ‘Compiling’ and ‘Uploading’\n2️⃣ If success: it says ‘Done Uploading’\n3️⃣ If error: red message shows up\n\nMost common: wrong board or port, or missing driver\nWe’ll fix them next!",
      image: "url",
      audio: "url"
    },
    {
      title: "Troubleshooting Upload Errors",
      content: "🔧 What You Need: Patience and curiosity\n\nHere’s how to fix upload problems:\n\n🔹 Check USB cable (some are power-only)\n🔹 Recheck **Board** and **Port** under Tools\n🔹 Try a different USB port\n🔹 Close other apps using COM ports (like serial monitors)\n🔹 Reinstall drivers if needed\n\nTry again — this time it’ll work. Your scientist powers are growing!",
      image: "url",
      audio: "url"
    },
{
  title: "Install ArduinoDroid App",
  content: "🔧 What You Need: Android phone or tablet, Internet access\n\nYes — you can code Arduino right from your phone!\n\n1️⃣ Go to Google Play Store\n2️⃣ Search for **ArduinoDroid**\n3️⃣ Install the app — it’s about 200MB\n4️⃣ Open it once to let it set up\n\nReady? Time to add some tools inside the app.",
  image: "url",
  audio: "url"
},
{
  title: "Install Core and Compiler in ArduinoDroid",
  content: "🔧 What You Need: ArduinoDroid installed, Internet access\n\nNow we need the board definitions and compiler.\n\n1️⃣ Open ArduinoDroid\n2️⃣ Tap the ⚙️ gear icon (top right)\n3️⃣ Select ‘Boards’ and install **Arduino AVR Boards**\n4️⃣ Then go to ‘Libraries’ and install **Standard Libraries**\n5️⃣ Tap ‘Sketch → Examples → 01.Basics → Blink’ to try it\n\nThat’s it — your phone can now write code for Arduino!",
  image: "url",
  audio: "url"
},
{
  title: "Connect Arduino to Android Using OTG",
  content: "🔧 What You Need: Arduino Uno, USB cable, Android phone, OTG adapter\n\nLet’s connect the board to your phone.\n\n1️⃣ Plug your USB cable into Arduino\n2️⃣ Connect that to an **OTG adapter**\n3️⃣ Plug OTG into your Android device\n\nYou’ll see a popup: ‘Arduino detected’.\nGive it permission — now you’re connected!",
  image: "url",
  audio: "url"
},
{
  title: "Upload Blink Sketch from Android",
  content: "🔧 What You Need: ArduinoDroid set up, Arduino + OTG connected\n\nLet’s upload the classic blink sketch right from your phone!\n\n1️⃣ Open ArduinoDroid\n2️⃣ Tap the folder 📂 and choose Blink from examples\n3️⃣ Tap the checkmark ✓ to compile\n4️⃣ Tap the arrow → to upload\n\nWait a few seconds... LED should blink on pin 13!\nYou just became a pocket scientist!",
  image: "url",
  audio: "url"
},
{
  title: "Common Errors in Android Uploads",
  content: "🔧 What You Need: Troubleshooting mindset\n\nHere’s what to check if it doesn’t work:\n\n🔸 OTG not detected? Try another adapter\n🔸 Permission denied? Reconnect and re-grant access\n🔸 Upload stuck? Unplug and plug Arduino again\n\nStill stuck? Try rebooting your phone and recompile.\nYou’ll master it in no time!",
  image: "url",
  audio: "url"
}
  ]
},{
  title: "Mastering the IDE: Your Robot's Digital Playground",
  lessons: [
    {
      title: "Welcome to the Playground",
      content: "The Arduino IDE is where the magic happens.\nIt’s where you write, edit, and upload your code.\nThink of it as your robot’s brain gym.\nIn this module, you’ll explore every corner of this software — from writing your first line of code to using built-in tools like Serial Plotter.\nReady to unlock the IDE's full potential?\nLet’s begin!",
      audio: "audio_url_here",
      image: "image_url_here"
    },
    {
      title: "Touring the Interface",
      content: "When you launch the IDE, you’re greeted by a sleek editor window.\nAt the top: buttons for Verify, Upload, New, Open, and Save.\nBelow that is your code editor — this is where you’ll spend most of your time.\nAt the bottom, there’s a black console for messages and error logs.\nAnd hidden in the menus are powerful tools — we'll explore those next.",
      audio: "audio_url_here",
      image: "image_url_here"
    },
    {
      title: "Your First Sketch: setup() and loop()",
      content: "Every Arduino sketch has two main parts:\nvoid setup() {\n  // setup things here\n}\nvoid loop() {\n  // repeat this code forever\n}\nThe setup() runs once when your board powers up.\nThe loop() keeps repeating, like an infinite to-do list.\nWe'll break these down as we go forward, but this is your code’s skeleton.",
      audio: "audio_url_here",
      image: "image_url_here"
    },
    {
      title: "Verify and Upload: The Two Clicks You’ll Love",
      content: "Once you’ve typed your sketch, click the ✓ (Verify) button.\nThis checks your code for errors — it’s like spell check for robots.\nThen click the → (Upload) button to send it to your Arduino.\nYou’ll see the RX/TX lights blink, and your board comes alive!\nThat’s it. Just two clicks to go from idea to execution.",
      audio: "audio_url_here",
      image: "image_url_here"
    },
    {
      title: "Serial Monitor: Talk to Your Robot",
      content: "Want your robot to say hello back?\nUse the Serial Monitor.\nGo to Tools > Serial Monitor or press Ctrl+Shift+M.\nThis opens a new window where you can see messages sent from your board using Serial.println().\nIt’s perfect for debugging and checking sensor values in real time.",
      audio: "audio_url_here",
      image: "image_url_here"
    },
    {
      title: "Serial Plotter: Watch Data Come to Life",
      content: "Imagine visualizing your sensor readings as live graphs.\nThat’s what the Serial Plotter does.\nGo to Tools > Serial Plotter.\nIt transforms your Serial.print data into real-time charts.\nGreat for monitoring temperature changes, motor speeds, or even pulse sensors.\nTrust me, it’s addictive!",
      audio: "audio_url_here",
      image: "image_url_here"
    },
    {
      title: "Board Manager: Add More Brains",
      content: "By default, Arduino IDE supports a few official boards.\nBut with the Board Manager, you can unlock tons more.\nGo to Tools > Board > Boards Manager.\nHere, install support for ESP8266, ESP32, ATtiny, and more.\nSearch, click install, done.\nNow your IDE speaks multiple hardware languages.",
      audio: "audio_url_here",
      image: "image_url_here"
    },
    {
      title: "Installing Boards via URLs",
      content: "Some advanced boards (like ESP32) need you to add a special URL.\nGo to File > Preferences.\nFind 'Additional Board Manager URLs'.\nPaste the board’s URL there (e.g., for ESP32).\nNow reopen Boards Manager, and you’ll see it available.\nThis step expands your Arduino IDE to endless possibilities.",
      audio: "audio_url_here",
      image: "image_url_here"
    },
    {
      title: "Library Manager: Download Pre-Made Magic",
      content: "Libraries are like code modules made by experts.\nWant to use a servo motor? There's a library for that.\nGo to Sketch > Include Library > Manage Libraries.\nSearch, install, and you’re ready.\nIt’s like downloading superpowers for your code.\nDon’t reinvent the wheel — use libraries!",
      audio: "audio_url_here",
      image: "image_url_here"
    },
    {
      title: "Auto Format, Preferences, and Quick Shortcuts",
      content: "Messy code? Click Edit > Auto Format (Ctrl+T).\nCustomize your experience in File > Preferences — like enabling line numbers or increasing font size.\nLearn a few shortcuts too — Ctrl+Shift+M for Serial Monitor, Ctrl+U to Upload.\nThese tiny habits will save you hours!",
      audio: "audio_url_here",
      image: "image_url_here"
    }
  ]
},{
  "title": "Different Flavors of Arduino IDEs!",
  "lessons": [
    {
      "title": "🍦 IDE Flavors? Yep, Arduino Has 3!",
      "content": "<div class=\"card\">\nDid you know Arduino has <b>not just one</b> IDE, but <b>three types</b>?\n</div>\n<div class=\"card\">\nThink of it like:\n<ul><li>Modern IDE (v2+)</li><li>Legacy IDE (v1.x)</li><li>PLC IDE (for industry)</li></ul>\n</div>\n<div class=\"card\">\nLet’s explore each of them like a tasting menu. 🍽️\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🆕 Arduino IDE (Modern)",
      "content": "<div class=\"card\">\nCurrent version: 2.x\n✅ Sleek UI, auto-complete, board manager, library search, and more!\n</div>\n<div class=\"card\">\nFeatures:\n<ul><li>Tabs + File Tree</li><li>Dark Mode</li><li>Integrated Serial Monitor + Plotter</li></ul>\n</div>\n<div class=\"card\">\nGreat for most users, students, and hobbyists.\nDownload from: <a href='https://www.arduino.cc/en/software' target='_blank'>official site</a>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧓 Legacy IDE (1.x)",
      "content": "<div class=\"card\">\nThe OG Arduino IDE. Lightweight, basic, nostalgic.\n</div>\n<div class=\"card\">\nWhy still use it?\n<ul><li>Runs on older PCs</li><li>Used in school labs</li><li>Some tutorials still based on this</li></ul>\n</div>\n<div class=\"card\">\nStill downloadable from Arduino site under 'Legacy Downloads'.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🏭 PLC IDE (Ladder Logic + More)",
      "content": "<div class=\"card\">\n<b>PLC IDE</b> is for professional, industrial Arduino users.\nIt supports:\n<ul><li>Ladder Diagrams</li><li>Function Block Diagrams</li><li>Structured Text</li></ul>\n</div>\n<div class=\"card\">\nYou can even control relays, motors, logic-based factories using Arduino Portenta + PLC IDE.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: IDE Speed Match",
      "content": "<div class=\"card\">\nMatch the IDE with the feature:\n<ul><li>Dark mode</li><li>Ladder logic</li><li>Used in schools</li></ul>\n</div>\n<div class=\"card\">\n<input id=\"idespeed\" placeholder=\"Your guess... (modern, plc, legacy)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Answer: modern, plc, legacy!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Compare All IDEs Visually",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/t_2cFwvZB9Q\" title=\"Arduino IDE Versions Compared\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📋 Table: IDEs at a Glance",
      "content": "<div class=\"card\">\n<table border='1' style='width:100%; text-align:center'>\n<tr><th>IDE</th><th>Best For</th><th>UI Level</th><th>Unique Feature</th></tr>\n<tr><td>Modern</td><td>Students</td><td>Sleek</td><td>Autocomplete</td></tr>\n<tr><td>Legacy</td><td>Old PCs</td><td>Basic</td><td>Minimalist</td></tr>\n<tr><td>PLC</td><td>Industry</td><td>Technical</td><td>Ladder Logic</td></tr>\n</table>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🛠️ Try All 3! (Mini Guide)",
      "content": "<div class=\"card\">\nWhy not try each one once?\n<ul><li><b>Modern:</b> install from official site</li><li><b>Legacy:</b> search 'Arduino IDE 1.8.19'</li><li><b>PLC:</b> for Portenta boards only – get from Arduino Pro site</li></ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎯 Final Thoughts: Use What Feels Right",
      "content": "<div class=\"card\">\nThere’s no wrong choice. Use the one that makes YOU feel confident.\n</div>\n<div class=\"card\">\nPro Tip:\nUse Legacy for quick testing, Modern for real work, and PLC if you're building robots for a factory 😎\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎉 Poll: Which IDE Will You Use?",
      "content": "<div class=\"card\">\n<input type=\"radio\" name=\"idepoll\"> Modern IDE (v2+)\n<br>\n<input type=\"radio\" name=\"idepoll\"> Legacy (v1.x)\n<br>\n<input type=\"radio\" name=\"idepoll\"> PLC IDE\n<br><br>\n<button class=\"gaming-btn\" onclick=\"alert('🗳️ Vote recorded! No matter what you pick, we’ll support you.')\">Vote!</button>\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Code Without Coding: Welcome to ArduBlock!",
  "lessons": [
    {
      "title": "🎨 What is ArduBlock?",
      "content": "<div class=\"card\">\nArduBlock is a visual programming tool — you code by dragging colorful blocks instead of writing code.\n</div>\n<div class=\"card\">\nIt’s perfect for beginners, schools, and anyone scared of semicolons 😄\n</div>\n<div class=\"card\">\nThink of it like LEGO bricks for Arduino code!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🖥️ How to Install ArduBlock",
      "content": "<div class=\"card\">\nStep-by-step:\n1. Install <b>Arduino IDE</b> (legacy version 1.8.x preferred)\n2. Download ArduBlock jar file from <a href='https://github.com/taweili/ardublock/releases'>here</a>\n3. Create a folder: <code>Arduino/tools/ArduBlockTool/tool/</code>\n4. Place the .jar file inside the <code>tool</code> folder\n</div>\n<div class=\"card\">\nNow restart the Arduino IDE → Go to Tools → You’ll see <b>ArduBlock</b>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎥 Video: Installing & Running ArduBlock",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/QqzR4WhV4iE\" title=\"ArduBlock Install Guide\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧱 ArduBlock vs Traditional Code",
      "content": "<div class=\"card\">\n<b>Traditional Arduino:</b>\n<pre>digitalWrite(13, HIGH);</pre>\n</div>\n<div class=\"card\">\n<b>ArduBlock:</b>\nDrag a block: <code>[Set pin 13 HIGH]</code>\n</div>\n<div class=\"card\">\nIt’s easy to learn logic without writing code!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Match the Code to the Block",
      "content": "<div class=\"card\">\nWhat ArduBlock block matches this code?\n<pre>digitalWrite(9, LOW);</pre>\n</div>\n<div class=\"card\">\n<input id=\"abgame\" placeholder=\"Your Answer (e.g. Set pin X to Y)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ It is: Set pin 9 LOW')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔁 Looping in ArduBlock",
      "content": "<div class=\"card\">\nYou can use <b>repeat</b> or <b>wait</b> blocks to control time and loops.\n</div>\n<div class=\"card\">\nExample: Blink LED every second.\n- Set pin 13 HIGH\n- Wait 1000 ms\n- Set pin 13 LOW\n- Wait 1000 ms\n</div>\n<div class=\"card\">\nDrag these blocks inside a loop block, and you’ve got a blinker 🔁💡\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: LED Blink Challenge",
      "content": "<div class=\"card\">\nYour goal: blink the LED on pin 10 using blocks.\n</div>\n<div class=\"card\">\nSteps:\n1. Drag <b>Set Pin</b> block to set 10 HIGH\n2. Add <b>Wait 1000 ms</b>\n3. Drag another <b>Set Pin</b> to LOW\n4. Add Wait again\n5. Wrap in <b>loop</b>\n</div>\n<div class=\"card\">\nUpload → Watch the magic ✨\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🤔 Limitations of ArduBlock",
      "content": "<div class=\"card\">\nArduBlock is great for beginners, but limited for advanced projects.\n</div>\n<div class=\"card\">\nYou won’t get custom libraries, advanced hardware access, or fast real-time stuff.\n</div>\n<div class=\"card\">\nEventually, you'll want to switch to C++ Arduino IDE or PlatformIO.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Why You Should Try ArduBlock First",
      "content": "<div class=\"card\">\nIt helps you build logic, understand flow, and test real circuits without fear of syntax errors.\n</div>\n<div class=\"card\">\nEven pros recommend it for younger makers or teaching environments 👨‍🏫\n</div>\n<div class=\"card\">\nTry a few projects — it's fun, visual, and very beginner-safe! 🧩\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,
{
  "title": "Iron Man's Lab: Arduino in VS Code!",
  "lessons": [
    {
      "title": "🧠 Why Use VS Code for Arduino?",
      "content": "<div class=\"card\">\nVisual Studio Code (VS Code) is a super-light, super-smart code editor.\nIt has everything Arduino IDE lacks:\n<ul><li>Autocomplete</li><li>Git support</li><li>Debugger</li><li>Multiple tabs</li></ul>\n</div>\n<div class=\"card\">\nArduino coding becomes pro-level with extensions like PlatformIO or Arduino IDE extension.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💡 2 Main Methods: Choose Your Style!",
      "content": "<div class=\"card\">\n1. 🛠️ <b>PlatformIO Extension</b>: Complete Arduino workflow, works with all boards, best for large projects\n</div>\n<div class=\"card\">\n2. 🧪 <b>Arduino Extension by Arduino.cc</b>: Official but simpler, great for Uno/Nano users\n</div>\n<div class=\"card\">\nWe'll explore both — and help you choose!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧰 Install VS Code (Windows/Mac/Linux)",
      "content": "<div class=\"card\">\n1. Go to: <a href='https://code.visualstudio.com/' target='_blank'>https://code.visualstudio.com/</a>\n2. Download & install for your OS\n3. Launch it, and explore the Extensions tab on the left\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "⚙️ Install PlatformIO Extension",
      "content": "<div class=\"card\">\n1. Click on the <b>Extensions</b> icon\n2. Search: <b>PlatformIO IDE</b>\n3. Install it (big orange icon)\n</div>\n<div class=\"card\">\nPlatformIO installs its own toolchain, including Arduino CLI under the hood!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Install Official Arduino Extension (Optional)",
      "content": "<div class=\"card\">\n1. Click Extensions\n2. Search for: <b>Arduino</b> by Arduino.cc\n3. Install it\n</div>\n<div class=\"card\">\nThis is lighter than PlatformIO, but supports only some boards.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📁 Create Your First PlatformIO Project",
      "content": "<div class=\"card\">\n1. Click PlatformIO icon on left\n2. New Project → Name it\n3. Choose Board (e.g., Arduino Uno)\n4. Framework: Arduino\n5. Create → Project folder created\n</div>\n<div class=\"card\">\nStart editing <b>src/main.cpp</b> — that's your sketch!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Find the Project Folder",
      "content": "<div class=\"card\">\nYour PlatformIO project is saved. Which folder will contain your Arduino sketch?\n</div>\n<div class=\"card\">\n<input id=\"foldergame\" placeholder=\"Type the folder name\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"checkFolderGame()\">Submit</button>\n<script>\nfunction checkFolderGame() {\n  const val = document.getElementById('foldergame').value.toLowerCase();\n  alert(val.includes('src') ? '✅ src/main.cpp is correct!' : '❌ Try again! It’s in src folder.');\n}\n</script>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Full PlatformIO + VS Code Setup",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/rJkL60qMNiA\" title=\"VS Code for Arduino with PlatformIO\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔌 Detect & Upload to Board",
      "content": "<div class=\"card\">\n1. Connect your Arduino\n2. Click the tick (✓) to build\n3. Click the right arrow (→) to upload\n</div>\n<div class=\"card\">\nYou can also use Terminal commands:\n<pre>pio run --target upload</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📦 Manage Libraries in PlatformIO",
      "content": "<div class=\"card\">\nClick the PlatformIO sidebar → Libraries\nSearch and install anything (NeoPixel, Servo, etc.)\n</div>\n<div class=\"card\">\nAlternatively, run:\n<pre>pio lib install \"Adafruit NeoPixel\"</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📋 Serial Monitor in VS Code",
      "content": "<div class=\"card\">\nClick <b>Monitor</b> in PlatformIO sidebar — or run:\n<pre>pio device monitor</pre>\n</div>\n<div class=\"card\">\nUse Ctrl+C to close it\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Extension Match!",
      "content": "<div class=\"card\">\nMatch the features with the extension:\n<ul><li>Supports many boards</li><li>Built by Arduino.cc</li><li>Advanced debugging</li><li>CI/CD integration</li></ul>\nPlatformIO or Arduino Extension?\n</div>\n<div class=\"card\">\n<input id=\"matchgame\" placeholder=\"Your answer... (comma-separated)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ If you answered: PlatformIO, Arduino, PlatformIO, PlatformIO — you rock!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🛠️ Add More Boards to PlatformIO",
      "content": "<div class=\"card\">\nPlatformIO supports ESP32, STM32, Teensy, and more!\nClick PlatformIO > Boards and search what you want.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Debugger and Simulator (Optional)",
      "content": "<div class=\"card\">\nWith advanced boards, PlatformIO can enable hardware debugging, breakpoints, etc.\n</div>\n<div class=\"card\">\nYou can also use simulators like Wokwi with PlatformIO or plain Arduino code.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💡 VS Code Shortcuts for Arduino Devs",
      "content": "<div class=\"card\">\n<ul><li>Ctrl+Shift+P → Command Palette</li><li>Ctrl+` → Terminal toggle</li><li>Ctrl+S → Save</li><li>Ctrl+Click → Go to definition</li></ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📁 Opening Old Arduino Sketches in VS Code",
      "content": "<div class=\"card\">\nJust open the folder containing your `.ino` file.\n</div>\n<div class=\"card\">\nVS Code (with the Arduino extension) will auto-detect and let you compile/upload.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎯 PlatformIO vs Arduino Extension",
      "content": "<div class=\"card\">\n<b>Use PlatformIO</b> if:\n<ul><li>You love Git</li><li>You want more features</li><li>You use advanced boards</li></ul>\n<b>Use Arduino Extension</b> if:\n<ul><li>You want it simple</li><li>You use Uno/Nano only</li></ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💥 Quiz: Real or Fake (VS Code Edition)",
      "content": "<div class=\"card\">\n1. PlatformIO supports ESP32 ✅ / ❌\n<br>2. You can’t use serial monitor in VS Code ✅ / ❌\n<br>3. Arduino Extension can compile `.ino` files ✅ / ❌\n</div>\n<div class=\"card\">\n✅, ❌, ✅ — You got it?\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎉 Final Step: Set VS Code as Your Main IDE?",
      "content": "<div class=\"card\">\nYou’re now ready to ditch the basic Arduino IDE and level-up into a VS Code warrior!\n</div>\n<div class=\"card\">\nTry cloning RoboDict’s examples and open them directly in VS Code — edit, compile, upload — all in one click.\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}

,

{
  "title": "Commanding Arduino: Your CLI Superpower",
  "lessons": [
    {
      "title": "🚀 What is a CLI?",
      "content": "<div class=\"card\">\nCLI stands for <b>Command Line Interface</b>. It’s like chatting with your computer using words instead of buttons!\n</div>\n<div class=\"card\">\nInstead of clicking menus, you type commands. It’s super fast, powerful, and great for automation!\n</div>\n<div class=\"card\">\n🧪 Examples of CLIs:\n<ul><li>Windows Command Prompt</li><li>Linux Terminal</li><li>macOS Terminal</li></ul>\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: CLI or GUI?",
      "content": "<div class=\"card\">\n🧠 GUI means Graphical Interface (like clicking icons), CLI means typing commands.\nDrag these into the right bucket (mentally 😉):\n<ul><li>Terminal</li><li>Arduino IDE</li><li>File Explorer</li><li>Bash Shell</li></ul>\nWhich ones are CLI?</div>\n<div class=\"card\">\n<input id=\"cli-game\" placeholder=\"Your answer...\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert(document.getElementById('cli-game').value.toLowerCase().includes('terminal') ? '✅ Great!' : '❌ Try again!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📦 What is Arduino CLI?",
      "content": "<div class=\"card\">\n<b>Arduino CLI</b> is the command-line version of the Arduino IDE. You can:\n<ul><li>Compile sketches</li><li>Upload to boards</li><li>Install libraries</li><li>List connected devices</li></ul>\nAll with text commands!\n</div>\n<div class=\"card\">\nIt’s perfect for power users, automation lovers, CI/CD, and headless systems like Raspberry Pi!\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Why Use Arduino CLI?",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/Bb2kJ62WlBE\" title=\"Arduino CLI Explained\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💻 CLI on Windows: Step-by-Step Install",
      "content": "<div class=\"card\">\n1. Go to: <a href='https://arduino.github.io/arduino-cli/latest/installation/' target='_blank'>arduino-cli download page</a>\n</div>\n<div class=\"card\">\n2. Download the ZIP file for Windows\n3. Extract to any folder like C:/arduino-cli\n4. Add it to PATH (search 'Environment Variables' > Edit PATH > Add that folder)\n5. Open CMD and type:\n<pre>arduino-cli version</pre>\n</div>\n<div class=\"card\">\n🎉 If it prints the version, you’re done!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🐧 CLI on Linux: Easy Setup",
      "content": "<div class=\"card\">\nUse this terminal command:\n<pre>\nwget https://downloads.arduino.cc/arduino-cli/arduino-cli_latest_Linux_64bit.tar.gz\n</pre>\nThen:\n<pre>\ntar -xvzf arduino-cli_*.tar.gz\nsudo mv arduino-cli /usr/local/bin\n</pre>\n</div>\n<div class=\"card\">\n✅ Done! Now run:\n<pre>arduino-cli version</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🍎 CLI on macOS",
      "content": "<div class=\"card\">\nOpen Terminal and run:\n<pre>\nbrew install arduino-cli\n</pre>\n(Hint: Use Homebrew. If you don’t have it, install from brew.sh)\n</div>\n<div class=\"card\">\nCheck install:\n<pre>arduino-cli version</pre>\nThat’s it!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧰 CLI Basics: First-Time Config",
      "content": "<div class=\"card\">\nRun this once:\n<pre>arduino-cli config init</pre>\nIt creates a config file in your home folder. You can edit this to change default board, library path, etc.\n</div>\n<div class=\"card\">\nThen update your core index:\n<pre>arduino-cli core update-index</pre>\nThis downloads the list of supported boards!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 How to Install a Board Core (e.g. Uno)",
      "content": "<div class=\"card\">\nRun:\n<pre>arduino-cli core install arduino:avr</pre>\nThis installs the board support package for Uno, Nano, Mega, etc.\n</div>\n<div class=\"card\">\nList installed cores:\n<pre>arduino-cli core list</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📋 See Connected Devices",
      "content": "<div class=\"card\">\nTo see your Arduino boards connected:\n<pre>arduino-cli board list</pre>\n</div>\n<div class=\"card\">\nIt shows port, board name, and chip — like magic!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Upload a Sketch from CLI",
      "content": "<div class=\"card\">\nCompile the code:\n<pre>arduino-cli compile --fqbn arduino:avr:uno Blink</pre>\n</div>\n<div class=\"card\">\nUpload it:\n<pre>arduino-cli upload -p COM3 --fqbn arduino:avr:uno Blink</pre>\n(Change COM3 to your board's port)\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📦 Install Libraries via CLI",
      "content": "<div class=\"card\">\nInstall any Arduino library, like this:\n<pre>arduino-cli lib install \"Adafruit NeoPixel\"</pre>\n</div>\n<div class=\"card\">\nList installed libraries:\n<pre>arduino-cli lib list</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Mini Game: CLI Command Builder",
      "content": "<div class=\"card\">\nYou want to upload to Arduino Uno on COM4. What command will you run?\n</div>\n<div class=\"card\">\n<input id=\"cli-upload\" placeholder=\"Type your command\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"checkCLIUpload()\">Submit</button>\n<script>\nfunction checkCLIUpload() {\n  const v = document.getElementById('cli-upload').value.trim().toLowerCase();\n  if (v.includes(\"upload\") && v.includes(\"--fqbn\") && v.includes(\"arduino:avr:uno\") && v.includes(\"com4\")) {\n    alert('✅ That’s perfect!');\n  } else {\n    alert('❌ Something’s missing!');\n  }\n}\n</script>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎯 Bonus: CLI in VS Code",
      "content": "<div class=\"card\">\nWant to use CLI inside VS Code? Just open terminal and run CLI commands like normal.\n</div>\n<div class=\"card\">\nYou can even create tasks or use PlatformIO + CLI if you're a pro.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🛠️ CLI for CI/CD",
      "content": "<div class=\"card\">\nYou can use Arduino CLI in GitHub Actions, Jenkins, or other automation workflows.\n</div>\n<div class=\"card\">\nThis is perfect for testing and uploading code automatically when changes happen.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💡 CLI Cheatsheet",
      "content": "<div class=\"card\">\n<ul>\n<li>📥 Install core: <code>core install</code></li>\n<li>📤 Upload code: <code>upload -p PORT</code></li>\n<li>📚 Libraries: <code>lib install</code></li>\n<li>🔍 Devices: <code>board list</code></li>\n<li>🔧 Compile: <code>compile --fqbn</code></li>\n</ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔬 Quiz: True or False — CLI Edition!",
      "content": "<div class=\"card\">\n1. Arduino CLI supports ESP32. ✅ / ❌\n<br>2. You can upload sketches using CLI. ✅ / ❌\n<br>3. CLI is available only for Windows. ✅ / ❌\n</div>\n<div class=\"card\">\nAnswers:\n✅, ✅, ❌\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📌 Final Tips for Mastering Arduino CLI",
      "content": "<div class=\"card\">\n💪 You now know what CLI is, how to install, use, and automate Arduino with it!\n</div>\n<div class=\"card\">\nExplore more with:\n<pre>arduino-cli help</pre>\nOr check: <a href='https://arduino.github.io/arduino-cli' target='_blank'>Official Docs</a>\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}

,{
  title: "Arduino in the Cloud: The Web IDE Adventure",
  lessons: [
    {
      title: "Welcome to Arduino Cloud Editor",
      content: "Required Components:\n- Arduino Board\n- USB Cable\n- Laptop/Desktop with Internet\n\nYou're about to enter the cloud side of Arduino — where you don't need to install anything! Just open your browser and code.\nThis lesson introduces the Arduino Cloud Editor (https://create.arduino.cc/editor), a powerful alternative to the offline IDE.\nWe’ll explore what makes it awesome, and why many users are shifting to it — especially for quick, cross-device prototyping.",
      image: "https://example.com/cloud_intro_image.jpg",
      audio: "https://example.com/cloud_intro_audio.mp3"
    },
    {
      title: "Setting Up Arduino Cloud Editor",
      content: "To start using the Arduino Cloud Editor:\n1. Go to https://create.arduino.cc/editor\n2. Sign in with your Arduino account (or create one).\n3. The dashboard will welcome you with the option to install the 'Arduino Create Agent'.\nThat’s a small background service allowing your browser to talk to the Arduino board.",
      image: "https://example.com/setup_cloud_editor.jpg",
      audio: "https://example.com/setup_cloud_editor.mp3"
    },
    {
      title: "Installing the Arduino Create Agent",
      content: "Required: Admin access on your PC\n\n1. Download the Create Agent from the Arduino Editor page.\n2. Run the installer and follow prompts.\n3. Once installed, refresh your browser — your board should now be visible when connected.\nThe Agent bridges your hardware and the web editor — don’t skip this!",
      image: "https://example.com/create_agent_image.jpg",
      audio: "https://example.com/create_agent_audio.mp3"
    },
    {
      title: "Using the Cloud Editor Interface",
      content: "The Arduino Cloud Editor UI is modern and clean:\n- Sketchbook on the left\n- Code editor in the center\n- Serial Monitor & Output at the bottom\n- Tools for board and port selection at the top\nExplore this layout and feel free to tinker — changes are saved automatically to your cloud account!",
      image: "https://example.com/cloud_ui_image.jpg",
      audio: "https://example.com/cloud_ui_audio.mp3"
    },
    {
      title: "Creating and Saving Your First Cloud Sketch",
      content: "Click the '+ New Sketch' button.\nA new tab opens with some default code.\nTry editing it — maybe change the LED blink speed.\nPress 'Upload' to flash your code to the board.\nYour sketch is saved online — access it from any device later. Handy, right?",
      image: "https://example.com/first_cloud_sketch.jpg",
      audio: "https://example.com/first_cloud_sketch.mp3"
    },
    {
      title: "Accessing the Serial Monitor in Cloud Editor",
      content: "Just like in the offline IDE, you can debug via Serial Monitor.\n1. Connect your board.\n2. Press the 'Serial Monitor' button at the bottom right.\n3. Watch your Arduino’s messages stream live!\nSuper helpful when working on cloud-connected IoT stuff.",
      image: "https://example.com/cloud_serial_monitor.jpg",
      audio: "https://example.com/cloud_serial_monitor.mp3"
    },
    {
      title: "Advantages of the Cloud IDE",
      content: "Why Cloud?\n- No installation headaches\n- All projects stored online\n- Accessible across devices\n- Great for Chromebook users or locked-down PCs\n- Integrates with Arduino IoT Cloud\nIt’s perfect for modern makers on the move.",
      image: "https://example.com/cloud_advantages.jpg",
      audio: "https://example.com/cloud_advantages.mp3"
    },
    {
      title: "Using Libraries in Cloud Editor",
      content: "Want to include a library?\nClick 'Libraries' on the left panel.\nSearch by name — for example: 'Adafruit GFX'\nClick 'Include' → It gets added to your sketch automatically.\nNo download or zip file extraction needed. Cloud FTW!",
      image: "https://example.com/cloud_libraries.jpg",
      audio: "https://example.com/cloud_libraries.mp3"
    },
    {
      title: "Cloud Editor Limitations to Know",
      content: "It’s great — but not perfect.\n- Needs internet to work\n- Not all custom boards are supported\n- Limited advanced debugging tools\nBut for daily use, prototyping, and learning — it’s more than sufficient.\nLet’s move ahead with confidence.",
      image: "https://example.com/cloud_limitations.jpg",
      audio: "https://example.com/cloud_limitations.mp3"
    }
  ]
},{
  title: "Simulate Before You Innovate: Arduino and ESP32 Online Labs",
  lessons: [
    {
      title: "Why Simulation Matters in Robotics Learning",
      content: "Before diving into real-world hardware, it's powerful to test and validate your circuits virtually.\nSimulators help reduce hardware burnout, debug logic faster, and prototype without wires or smoke.\nWhether you're afraid of burning a component or just don't have the board yet — simulation has your back!\nAnd hey, RoboDict proudly offers these simulators right on the homepage — free and fast access!",
      audio: "https://example.com/audio/simulation_intro.mp3",
      image: "https://example.com/images/simulator_intro.png"
    },
    {
      title: "Meet the Arena: Popular Arduino Simulators You Should Try",
      content: "Here are some great options to start simulating Arduino and ESP32:\n1. Tinkercad Circuits (great for beginners)\n2. Wokwi (superb for advanced users)\n3. RoboDict Simulator (right inside our app)\n4. Proteus (industry-grade, but needs a license)\nPick the one that fits your level, and start experimenting without fear!",
      audio: "https://example.com/audio/popular_simulators.mp3",
      image: "https://example.com/images/simulator_list.png"
    },
    {
      title: "Simulating Arduino UNO in Wokwi",
      content: "Wokwi is like the boss level of simulation tools.\nYou can simulate LED blinking, sensors, OLEDs, and even full ESP32 projects!\nJust go to wokwi.com, select Arduino Uno, and start wiring virtually.\nBonus: It supports code editing in-browser, and it's super fast.",
      audio: "https://example.com/audio/wokwi_uno.mp3",
      image: "https://example.com/images/wokwi_uno.png"
    },
    {
      title: "ESP32 Simulation: Wokwi vs Real Board",
      content: "Wokwi isn’t just about Arduino — it supports ESP32 too.\nAnd trust me, for Wi-Fi-based testing, it’s a dream!\nYou can check serial output, simulate delays, and test network flows before uploading to your actual device.",
      audio: "https://example.com/audio/wokwi_esp32.mp3",
      image: "https://example.com/images/esp32_sim.png"
    },
    {
      title: "RoboDict Simulators: Fast, Friendly, Free",
      content: "Inside the RoboDict app’s homepage, we’ve embedded a simulator section!\nNo need to go anywhere — it loads fast, supports common components, and is perfect for learning on the go.\nWhether it’s LED blinking or a basic sensor, our simulator makes it hands-on, even on mobile!",
      audio: "https://example.com/audio/robodict_sim.mp3",
      image: "https://example.com/images/robodict_sim_home.png"
    }
  ]
},{
  "title": "Which One Should I Choose?",
  "lessons": [
    {
      "title": "🤔 The Big Question: Which IDE Is Right For You?",
      "content": "<div class=\"card\">\nThere are 5 main ways to code Arduino in 2025:\n<ul><li>Arduino IDE (classic)</li><li>Arduino CLI (command-line power)</li><li>VS Code (pro-style)</li><li>Arduino Cloud</li><li>Simulators like Wokwi</li></ul>\n</div>\n<div class=\"card\">\nLet’s compare them one by one — and help YOU decide what’s best for YOUR brain. 😄\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Arduino IDE: The Old But Gold",
      "content": "<div class=\"card\">\nPros:\n<ul><li>✅ Easy to install</li><li>✅ Official & beginner-friendly</li><li>✅ One-click upload & Serial Monitor</li></ul>\n</div>\n<div class=\"card\">\nCons:\n<ul><li>❌ No autocomplete</li><li>❌ No file explorer</li><li>❌ Not good for big projects</li></ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💻 Arduino CLI: For Terminal Ninjas",
      "content": "<div class=\"card\">\nPros:\n<ul><li>✅ Automation & CI/CD ready</li><li>✅ Super fast</li><li>✅ Scriptable uploads</li></ul>\n</div>\n<div class=\"card\">\nCons:\n<ul><li>❌ No visual UI</li><li>❌ Needs some terminal knowledge</li><li>❌ Tough for beginners</li></ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "👨‍💻 VS Code (with PlatformIO or Arduino Extension)",
      "content": "<div class=\"card\">\nPros:\n<ul><li>✅ Autocomplete & IntelliSense</li><li>✅ File tabs, Git, Serial tools</li><li>✅ Great for advanced users</li></ul>\n</div>\n<div class=\"card\">\nCons:\n<ul><li>❌ Needs extension install</li><li>❌ Can feel overwhelming at first</li></ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "☁️ Arduino Cloud Editor",
      "content": "<div class=\"card\">\nPros:\n<ul><li>✅ No download needed</li><li>✅ Works in browser</li><li>✅ Syncs sketches, boards, serial monitor</li></ul>\n</div>\n<div class=\"card\">\nCons:\n<ul><li>❌ Requires internet</li><li>❌ Needs Arduino Create Agent installed</li><li>❌ May feel limited for pros</li></ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Simulators (Wokwi, Tinkercad)",
      "content": "<div class=\"card\">\nPros:\n<ul><li>✅ No physical board needed</li><li>✅ Test fast</li><li>✅ Try expensive sensors for free</li></ul>\n</div>\n<div class=\"card\">\nCons:\n<ul><li>❌ Limited hardware support</li><li>❌ Not all libraries work</li><li>❌ Not a replacement for real board</li></ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Match IDE to Personality",
      "content": "<div class=\"card\">\nWho should use what?\n<ul><li>👦 Complete beginner</li><li>🧑‍🔧 Wants fast workflow</li><li>🧙‍♂️ CLI nerd</li><li>🧑‍💻 Loves Git & extensions</li><li>🌍 No board, just testing</li></ul>\nDrag answers (mentally) to these:\n</div>\n<div class=\"card\">\n<input id=\"ide-match\" placeholder=\"Type 5 IDEs in order here\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ IDE order: Arduino IDE, Arduino Cloud, Arduino CLI, VS Code, Simulator')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: IDE Comparison Showdown!",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/4jWaVdGm7qA\" title=\"Which Arduino IDE to choose?\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📋 Cheat Sheet: Which One For What?",
      "content": "<div class=\"card\">\n<b>Use this as your mini decision helper:</b>\n<table border='1' style='width:100%; text-align:center'>\n<tr><th>Tool</th><th>Best For</th><th>Skill Level</th></tr>\n<tr><td>Arduino IDE</td><td>Quick Start</td><td>Beginner</td></tr>\n<tr><td>CLI</td><td>Automation</td><td>Pro</td></tr>\n<tr><td>VS Code</td><td>Power Projects</td><td>Intermediate+</td></tr>\n<tr><td>Cloud</td><td>No Install</td><td>Beginner+</td></tr>\n<tr><td>Simulators</td><td>Testing</td><td>All</td></tr>\n</table>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🏁 Final Decision Helper: Choose Your Path!",
      "content": "<div class=\"card\">\nAsk yourself:\n<ul><li>👀 Want visual help? → Arduino IDE / VS Code</li><li>🌩️ Need remote or school PC? → Arduino Cloud</li><li>💡 Love automation or scripting? → Arduino CLI</li><li>🧪 Want to test circuits? → Simulators</li></ul>\n</div>\n<div class=\"card\">\n🎉 No wrong choice — you can switch any time. In fact, try them all!\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  title: "Your First Spark: Blinking the LED",
  lessons: [
    {
      title: "The Ritual Begins: Blinking the LED",
      content: "🔌 <b>Required Components:</b>\n- Arduino Uno\n- USB Cable\n- Laptop/PC with Arduino IDE installed\n\n⚡ <b>Welcome to the Ritual</b>\nThis isn't just a lesson. It's a *rite of passage* — the moment every creator remembers. We're about to breathe life into your Arduino, one blink at a time.\n\n🧠 <b>What's Happening?</b>\nWe'll write a program (called a sketch) that tells your Arduino to blink its onboard LED. It's on pin 13 by default.\n\n👨‍💻 <b>The Code:</b>\n<code>void setup() {\n  pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(1000);\n  digitalWrite(13, LOW);\n  delay(1000);\n}</code>\n\n💡 <b>Explanation:</b>\n- <code>setup()</code>: Runs once. Sets pin 13 as an output pin.\n- <code>loop()</code>: Runs again and again. Turns the LED on, waits a second, turns it off, waits again. Rinse and repeat.\n\n🎯 <b>Mission:</b>\n- Copy the code into your Arduino IDE.\n- Click ✅ Verify to check for errors.\n- Hit 🔼 Upload to send it to your Arduino.\n- Watch that LED blink like it's saying “Hello World!” in Morse code.\n\n🥳 <b>You've just completed your first Arduino ritual. Welcome to the tribe. Didn't Understand What Happened Here? No Worries. We'll Learn Basic To Advanced, Trust Us. Just Keep On!</b>",
      image: "https://robodict-assets.s3.amazonaws.com/lessons/blink-led-setup.png",
      audio: "https://robodict-audio.s3.amazonaws.com/lessons/blink-led-intro.mp3"
    }
  ]
},{
  title: "Understanding Digital Pins: Inputs, Outputs & Logic Magic",
  lessons: [
    {
      title: "🧠 Digital Pins Demystified",
      type: "text",
      content: `
<div class="card">
<h3>What are Digital Pins?</h3>
Digital pins on your Arduino are your board’s way of interacting with the physical world — like sending a signal to an LED or listening for a button press.
</div>
<div class="card">
<h3>Output Mode (pinMode: OUTPUT)</h3>
When you set a pin as OUTPUT, your Arduino can send either HIGH (5V) or LOW (0V) from that pin. Use this to control LEDs, buzzers, and more.
</div>
<div class="card">
<h3>Input Mode (pinMode: INPUT)</h3>
Set a pin to INPUT mode when you want your Arduino to "listen" to sensors, buttons, or switches. It reads either HIGH or LOW based on voltage.
</div>
<div class="card">
<h3>Input Pullup (pinMode: INPUT_PULLUP)</h3>
Sometimes a pin floats unpredictably when no voltage is connected. INPUT_PULLUP connects an internal resistor to keep it stable at HIGH until grounded.
</div>
<div class="card">
<h3>Common Mistake to Avoid</h3>
Don’t drive heavy components like motors directly from pins! Use a transistor or driver circuit. The digital pin outputs small current — not enough for power-hungry parts.
</div>
`
    },
    {
      title: "📺 Digital Pin Tutorial (Video)",
      type: "video",
      content: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/VyX4toKZgdo" title="Understanding Arduino Digital Pins" frameborder="0" allowfullscreen></iframe>`
    },
    {
      title: "🔍 Explore the Simulator (Third-Party)",
      type: "text",
      content: `
<div class="card">
Open the simulator from the RoboDict homepage. Use the dropdown to pick an Arduino board.
</div>
<div class="card">
Paste in this example code:
<pre>
void setup() {
  pinMode(13, OUTPUT);
}
void loop() {
  digitalWrite(13, HIGH);
  delay(500);
  digitalWrite(13, LOW);
  delay(500);
}
</pre>
</div>
<div class="card">
Now hit "Start Simulation". Watch how the LED toggles ON and OFF.
</div>
<div class="card">
Try changing <code>delay(500)</code> to <code>delay(100)</code> and see what happens!
</div>
<p>✨ You don’t need to install anything. Explore and experiment.</p>
`
    },{
  title: "🎮 PinMode Puzzle",
  type: "game",
  content: `
<style>
  .game-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    font-family: 'Courier New', monospace;
  }
  .card {
    padding: 1rem;
    border: 2px dashed #00ffee;
    background: #111;
    color: #fff;
    border-radius: 1rem;
    width: 200px;
    text-align: center;
  }
  .draggable {
    display: inline-block;
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    background: #222;
    color: #0ff;
    border: 1px solid #0ff;
    border-radius: 0.5rem;
    cursor: grab;
    user-select: none;
  }
  .droppable {
    background: #222;
    min-height: 40px;
    margin-top: 0.5rem;
    border: 1px solid #555;
    padding: 0.3rem;
    border-radius: 0.4rem;
  }
  .correct {
    background-color: #004400 !important;
    color: #0f0 !important;
  }
  .wrong {
    background-color: #440000 !important;
    color: #f00 !important;
  }
</style>

<div class="game-container">
  <div class="card">
    <strong>LED blinking</strong>
    <div class="droppable" data-answer="OUTPUT">Drop here</div>
  </div>
  <div class="card">
    <strong>Button Press</strong>
    <div class="droppable" data-answer="INPUT">Drop here</div>
  </div>
  <div class="card">
    <strong>Button w/o resistor</strong>
    <div class="droppable" data-answer="INPUT_PULLUP">Drop here</div>
  </div>
</div>

<div style="text-align: center; margin-top: 2rem;" id="drag-area">
  <div class="draggable" draggable="true" data-value="INPUT">INPUT</div>
  <div class="draggable" draggable="true" data-value="OUTPUT">OUTPUT</div>
  <div class="draggable" draggable="true" data-value="INPUT_PULLUP">INPUT_PULLUP</div>
</div>

<script>
  const dragArea = document.getElementById("drag-area");
  const droppables = document.querySelectorAll(".droppable");

  function addDragListeners(elem) {
    elem.addEventListener("dragstart", e => {
      e.dataTransfer.setData("text/plain", e.target.dataset.value);
    });
  }

  document.querySelectorAll(".draggable").forEach(addDragListeners);

  droppables.forEach(drop => {
    drop.addEventListener("dragover", e => e.preventDefault());
    drop.addEventListener("drop", e => {
      e.preventDefault();
      const draggedValue = e.dataTransfer.getData("text/plain");
      drop.textContent = draggedValue;

      if (draggedValue === drop.dataset.answer) {
        drop.classList.remove("wrong");
        drop.classList.add("correct");
      } else {
        drop.classList.remove("correct");
        drop.classList.add("wrong");
      }

      // add a new clone to make dragging reusable
      const newDrag = document.createElement("div");
      newDrag.className = "draggable";
      newDrag.setAttribute("draggable", "true");
      newDrag.setAttribute("data-value", draggedValue);
      newDrag.textContent = draggedValue;
      addDragListeners(newDrag);
      dragArea.appendChild(newDrag);
    });
  });
</script>
`
}

  ]
},{
  title: "The Sixth Sense: What Are Sensors?",
  lessons: [

    {
      type: "text",
      title: "👁️ Eyes for the Robot: The Magic of Sensors",
      content: `
        <div class="card">
          Imagine walking through your room with your eyes closed. You wouldn’t know if a chair was in the way or if the lights were on, right?  
          Well, robots are blind too — unless you give them *senses*. That’s where **sensors** come in.
        </div>

        <div class="card">
          Sensors help your Arduino **feel** the world — detect light, sound, movement, distance, temperature, and even gas leaks.  
          They're like **superpowers** for your robots!
        </div>

        <div class="card">
          Some common sensors you'll use:
          <ul>
            <li>🌡️ Temperature Sensor (like DHT11)</li>
            <li>🖐️ Touch Sensor</li>
            <li>🌞 Light Sensor (LDR)</li>
            <li>📢 Sound Sensor (Microphone Module)</li>
            <li>🚶 Motion Sensor (PIR)</li>
            <li>📏 Distance Sensor (Ultrasonic HC-SR04)</li>
          </ul>
        </div>

        <div class="card">
          In the next few lessons, you'll **see** how to connect and read data from these little detectives.  
          🕵️ Get ready to spy the invisible!
        </div>
      `,
      image: "https://robohash.org/sensorbot.png?size=300x300",
      audio: "https://audio.roboacademy.in/lessons/what-are-sensors.mp3"
    },

    {
      type: "game",
      title: "🧠 Sensor Match: Game Time!",
      content: `
        <div class="card">
          Match the sensor with what it detects. Drag and drop to pair them!
        </div>

        <style>
          #game-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-top: 20px;
          }
          .draggable, .droppable {
            padding: 10px 15px;
            border: 2px dashed #aaa;
            cursor: grab;
            background-color: #1a1a1a;
            color: #fff;
            user-select: none;
            border-radius: 8px;
          }
          .droppable {
            min-width: 150px;
            min-height: 40px;
          }
        </style>

        <div id="game-container">
          <div class="draggable" draggable="true" id="temp">Temperature Sensor</div>
          <div class="draggable" draggable="true" id="ldr">LDR</div>
          <div class="draggable" draggable="true" id="pir">PIR Motion Sensor</div>

          <div class="droppable" data-match="temp">Detects: _______</div>
          <div class="droppable" data-match="ldr">Detects: _______</div>
          <div class="droppable" data-match="pir">Detects: _______</div>
        </div>

        <script>
          const draggables = document.querySelectorAll('.draggable');
          const droppables = document.querySelectorAll('.droppable');

          draggables.forEach(drag => {
            drag.addEventListener('dragstart', e => {
              e.dataTransfer.setData("text/plain", drag.id);
            });
          });

          droppables.forEach(drop => {
            drop.addEventListener('dragover', e => e.preventDefault());
            drop.addEventListener('drop', e => {
              const draggedId = e.dataTransfer.getData("text/plain");
              if (drop.dataset.match === draggedId) {
                drop.innerText = "Detects: " + document.getElementById(draggedId).innerText;
                drop.style.borderColor = "lime";
                document.getElementById(draggedId).style.opacity = 0.4;
              } else {
                drop.innerText = "❌ Try again!";
              }
            });
          });
        </script>
      `,
      image: "https://robohash.org/matchgame.png?size=300x300",
      audio: "https://audio.roboacademy.in/games/sensor-match.mp3"
    },

    {
      type: "video",
      title: "🎥 Watch This: How Sensors Work",
      content: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/6Lz5FONXvW8" frameborder="0" allowfullscreen></iframe>`,
      image: "https://img.youtube.com/vi/6Lz5FONXvW8/0.jpg",
      audio: "https://audio.roboacademy.in/videos/sensor-intro-audio.mp3"
    },

    {
      type: "interactive",
      title: "💬 Did You Know? (Reveal Box)",
      content: `
        <div class="card">
          <p>Click the button to reveal an interesting fact about sensors!</p>
          <button onclick="document.getElementById('fact').style.display='block'">Reveal Fact</button>
          <div id="fact" style="display:none; margin-top:10px;">
            <strong>Fact:</strong> Your smartphone has over <u>10 different sensors</u> inside it — including a gyroscope, accelerometer, ambient light sensor, proximity sensor, and even a barometer!
          </div>
        </div>
      `,
      image: "https://robohash.org/sensorfact.png?size=300x300",
      audio: "https://audio.roboacademy.in/facts/sensor-reveal.mp3"
    }

  ]
},{
  title: "Commanding the Physical World: Meet the Actuators",
  lessons: [
    {
      type: "text",
      title: "What is an Actuator?",
      content: `
<div class="card">Imagine your Arduino gets a command — like "turn on the lights", "make a noise", or "move forward". How does it make those things happen?</div>
<div class="card">That's where actuators come in! They’re the output devices that respond to your code and *do something* in the physical world.</div>
<div class="card">From spinning motors to buzzing buzzers, actuators are how your Arduino *talks back* to the real world.</div>
<div class="card">In this module, we're going to learn how to control these devices and bring your robot to life.</div>`,
      audio: "https://example.com/audio/what-is-an-actuator.mp3",
      image: "https://example.com/images/actuator-intro.jpg"
    },
    {
      type: "video",
      title: "Watch Actuators in Action",
      content: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/MY_ACTUATOR_DEMO" frameborder="0" allowfullscreen></iframe>`,
      audio: "https://example.com/audio/watch-actuators.mp3",
      image: "https://example.com/images/actuator-video-cover.jpg"
    },
    {
      type: "game",
      title: "Actuator Matching Game",
      content: `
<style>
  #actuatorGame { display: flex; flex-direction: column; gap: 10px; font-family: sans-serif; }
  .drag-target, .draggable { padding: 10px; border: 1px dashed #888; margin: 5px; cursor: grab; background: #1a1a1a; color: white; }
  .drag-target { background: #111; border-style: solid; }
</style>
<div id="actuatorGame">
  <div>Drag the actuator to its function:</div>
  <div class="draggable" draggable="true" id="motor">Motor</div>
  <div class="draggable" draggable="true" id="buzzer">Buzzer</div>
  <div class="draggable" draggable="true" id="servo">Servo Motor</div>
  <div class="drag-target" data-match="motor">🔄 Rotation</div>
  <div class="drag-target" data-match="buzzer">🔊 Sound</div>
  <div class="drag-target" data-match="servo">🎯 Angular Movement</div>
</div>
<script>
  let drags = document.querySelectorAll(".draggable");
  let targets = document.querySelectorAll(".drag-target");
  drags.forEach(el => {
    el.ondragstart = e => e.dataTransfer.setData("text/plain", el.id);
  });
  targets.forEach(tgt => {
    tgt.ondragover = e => e.preventDefault();
    tgt.ondrop = e => {
      const dropped = e.dataTransfer.getData("text");
      if (dropped === tgt.dataset.match) {
        tgt.innerHTML += " ✅";
        tgt.style.background = "#080";
      } else {
        tgt.innerHTML += " ❌";
        tgt.style.background = "#800";
      }
    };
  });
</script>`,
      audio: "https://example.com/audio/actuator-game.mp3",
      image: "https://example.com/images/actuator-game.jpg"
    },
    {
      type: "text",
      title: "Where You'll Use Actuators",
      content: `
<div class="card">In your future Arduino projects, actuators will be your go-to for making something move, blink, or make noise.</div>
<div class="card">Want to build a robot that walks? You'll need servos and motors.</div>
<div class="card">Need to make sound alerts for your smart weather station? Bring in the buzzer!</div>
<div class="card">Actuators are the *action heroes* of your robotic world.</div>`,
      audio: "https://example.com/audio/where-you-use-actuators.mp3",
      image: "https://example.com/images/actuator-usage.jpg"
    }
  ]
},{
  title: "Digital vs Analog: The Dual Worlds of Arduino Signals",
  lessons: [

    {
      type: "text",
      title: "Digital vs Analog: Two Languages of the Arduino",
      content: `
        <div class="card">Think of Arduino as a multilingual machine. It speaks two languages — Digital and Analog.</div>
        <div class="card">📌 <strong>Digital signals</strong> are either ON (1) or OFF (0). That’s it. Like a switch.</div>
        <div class="card">📈 <strong>Analog signals</strong> can have a range — like brightness levels, sound intensities, etc.</div>
        <div class="card">Digital pins use <code>digitalRead()</code> or <code>digitalWrite()</code>. Analog pins use <code>analogRead()</code> or <code>analogWrite()</code>.</div>
        <div class="card">We'll use <button class="gaming-btn">digitalRead</button> to detect states, and <button class="gaming-btn">analogWrite</button> to control LED brightness and motors later!</div>
      `
    },

    {
      type: "youtube",
      title: "Watch: What is Analog and Digital in Arduino?",
      url: "https://www.youtube.com/watch?v=qJ-KwZ7pSdw"
    },

    {
      type: "game",
      title: "Signal Sorter Mini Game",
      content: `
        <div style="padding: 10px;">
          <p>Click the right button when a signal appears!</p>
          <button class="gaming-btn" onclick="checkSignal('digital')">Digital</button>
          <button class="gaming-btn" onclick="checkSignal('analog')">Analog</button>
          <p id="signal-text" style="font-weight: bold; margin-top: 10px;"></p>
          <p id="feedback" style="color: lime; font-weight: bold;"></p>
        </div>
        <script>
          const signals = ['analog', 'digital', 'analog', 'digital', 'analog'];
          let index = 0;

          function showSignal() {
            document.getElementById('signal-text').textContent = 'Signal: ' + signals[index];
            document.getElementById('feedback').textContent = '';
          }

          function checkSignal(selected) {
            if (signals[index] === selected) {
              document.getElementById('feedback').textContent = '✅ Correct!';
            } else {
              document.getElementById('feedback').textContent = '❌ Wrong, try again.';
            }
            index = (index + 1) % signals.length;
            setTimeout(showSignal, 1000);
          }

          window.onload = showSignal;
        </script>
      `
    },

    {
      type: "interactive",
      title: "Can You Guess The Pin Type?",
      content: `
        <div class="card">Q1: Which function would you use to control brightness of an LED?</div>
        <div class="card"><button class="gaming-btn" onclick="alert('Correct!')">analogWrite()</button> <button class="gaming-btn" onclick="alert('Oops!')">digitalWrite()</button></div>
        <div class="card">Q2: Which pin would you use to connect a temperature sensor?</div>
        <div class="card"><button class="gaming-btn" onclick="alert('Correct!')">A0</button> <button class="gaming-btn" onclick="alert('Not quite.')">D13</button></div>
      `
    }

  ]
}









      ]
    },{
  title: "Arduino Coding: Speak Like a Board",
  modules:[
    {
  title: "Talking to the Board — What is Code, Anyway?",
  lessons: [
    {
      title: "Hey Arduino, Let’s Chat! (Intro to Code)",
      content: `
        <div class="card">
          🧑‍🏫 So… what *is* code?  
          Well, it’s like texting your Arduino — but with a way stricter friend who only understands *very specific* things.  
          <br><br>
          You tell it to blink, and it blinks (if you ask right). You mess up a semicolon? It throws a tantrum.  
          <br><br>
          But that’s what makes it fun 😉
        </div>

        <div class="card">
          🛠 Arduino uses something called <b>C++</b>, but with a lot of helper functions.  
          You don’t need to learn "full" C++, just enough to *boss around a board*.
        </div>

        <div class="card">
          📜 Here's a super simple piece of code:
          <pre><code>
void setup() {
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH);
  delay(1000);
  digitalWrite(13, LOW);
  delay(1000);
}
          </code></pre>
          Don’t stress! We’ll break all of this down. But first — let’s play a mini game to match parts of this code to what they actually *do*.
        </div>
      `
    },
    {
      title: "Code Match Game: What’s This Line Do?",
      content: `
        <style>
          .card { margin-bottom: 1rem; }
          .option-btn { display: block; margin: 0.5rem 0; padding: 0.6rem; background: #111; color: #0f0; border: 1px solid #0f0; border-radius: 8px; cursor: pointer; }
          .option-btn:hover { background: #0f0; color: #000; }
        </style>

        <div class="card">
          <b>Question:</b> What does <code>pinMode(13, OUTPUT);</code> do?
        </div>
        <div class="card">
          <button class="option-btn" onclick="alert('✅ Correct! This sets pin 13 as an output pin.')">It makes pin 13 an output.</button>
          <button class="option-btn" onclick="alert('❌ Nope. This is used to read input.')">It reads data from pin 13.</button>
          <button class="option-btn" onclick="alert('❌ Not quite. That’s for analog writing.')">It writes analog value to pin 13.</button>
        </div>

        <div class="card">
          🕹 Want more? You’ll find cooler coding games in later lessons. Keep reading!
        </div>
      `
    },
    {
      title: "Watch It: Code is Just a Conversation",
      content: `
        <div class="card">
          📺 Watch this cool 1-minute explanation:
          <br><br>
          <iframe width="100%" height="215" src="https://www.youtube.com/embed/3vNm9jAFnEU" frameborder="0" allowfullscreen></iframe>
        </div>
      `
    },
    {
      title: "Your Turn: Write Your First Code",
      content: `
        <div class="card">
          🧪 <b>Try this:</b> Paste the following code into the Arduino IDE:
          <pre><code>
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(500);
  digitalWrite(LED_BUILTIN, LOW);
  delay(500);
}
          </code></pre>
          🔍 Hit verify, then upload it. You should see the onboard LED blink like a party light!
        </div>

        <div class="card">
          <button class="gaming-btn">I Did It! What’s Next?</button>
        </div>
      `
    }
  ]
},{//module 2 in section 3
  title: "The Wizard's Language: Understanding Arduino Code",
  lessons: [
    {
      title: "What's the Language Behind Arduino?",
      content: "<div class='card'>Did you know that your Arduino speaks a magical mix of C and C++? 🤯<br><br>Yup — that little board is powered by one of the most powerful programming languages on the planet. But don’t worry — you don’t need to be a wizard to learn it!</div>\n<div class='card'>Arduino uses a simplified version of C++, meaning you get all the power, but with way fewer headaches. Plus, you get handy functions like <code>digitalWrite()</code>, <code>pinMode()</code>, and <code>delay()</code> — almost like cheat codes!</div>\n<div class='card'>You’ll soon be writing spells (aka code) to control LEDs, sensors, motors, and more — using real programming magic!</div>",
      image: "url",
      audio: "url"
    },
    {
      title: "Watch: What is Arduino Programming?",
      content: "<iframe width='100%' height='215' src='https://www.youtube.com/embed/Yl3j-M2lVSU' frameborder='0' allowfullscreen></iframe>",
      image: "url",
      audio: "url"
    },
    {
      title: "Mini Game: Match the Arduino Commands!",
      content: "<style>.wordbox { display: inline-block; padding: 8px; background: #222; color: #fff; border-radius: 8px; margin: 5px; cursor: pointer; }</style>\n<div class='card'>Match each function to what it does:</div>\n<div class='card'><b><u>Functions:</u></b><br><span class='wordbox'>digitalWrite()</span> <span class='wordbox'>pinMode()</span> <span class='wordbox'>delay()</span></div>\n<div class='card'><b><u>Meanings:</u></b><br><span class='wordbox'>Sets pin behavior</span> <span class='wordbox'>Waits</span> <span class='wordbox'>Sends signal</span></div>\n<div class='card'><button class='gaming-btn'>Check Your Matches</button></div>",
      image: "url",
      audio: "url"
    },
    {
      title: "Card Walkthrough: First Look at Arduino Code",
      content: "<div class='card'>Here’s how every Arduino sketch looks:</div>\n<div class='card'><code>void setup() {\n  // setup things here\n}\n\nvoid loop() {\n  // repeat this code forever\n}</code></div>\n<div class='card'>Let’s understand them one by one. Click to reveal!</div>\n<button class='gaming-btn' onclick='document.getElementById(\"c1\").style.display=\"block\"'>What is setup()?</button>\n<div class='card' id='c1' style='display:none;'>It runs only once when the board powers on. Great for preparing your pins and stuff.</div>\n<button class='gaming-btn' onclick='document.getElementById(\"c2\").style.display=\"block\"'>What is loop()?</button>\n<div class='card' id='c2' style='display:none;'>It keeps running forever. This is where your robot keeps listening, blinking, or doing cool tricks!</div>",
      image: "url",
      audio: "url"
    },
    {
      title: "Quiz Time: Decode the Code!",
      content: "<div class='card'><b>Question:</b> What does <code>delay(1000);</code> do?</div>\n<div class='card'>A) Turn off the board<br>B) Wait 1 second<br>C) Set pin to LOW</div>\n<div class='card'><button class='gaming-btn'>Show Answer</button></div>",
      image: "url",
      audio: "url"
    }
  ]
},{//module 2 in section 3
  title: "🧠 Cracking the Code: Meet Variables",
  lessons: [
    {
      title: "What's a Variable?",
      content: `<div class="card">Let’s imagine your Arduino is a smart little brain. But even brains need a place to remember things, right?</div>
<div class="card">In Arduino coding, <b>variables</b> are like memory slots. You create one, give it a name, and store something inside!</div>
<div class="card">Example:<br><code>int ledPin = 13;</code><br>This creates a variable named <b>ledPin</b> and stores the number 13 inside it.</div>
<div class="card">It helps you reuse the value anytime later in your code. Instead of writing 13 everywhere, you just write <b>ledPin</b>. Way cleaner!</div>
<button class="gaming-btn" onclick="revealNextCard()">Next</button>`,
      image: "url",
      audio: "url"
    },
    {
      title: "Mini Game: Variable Sorter",
      content: `<div class="card">Tap the <b>correct type</b> of variable!</div>
<style>
  .var-btn { margin: 6px; padding: 12px 16px; background: #222; color: white; border-radius: 10px; border: 2px solid #0ff; cursor: pointer; }
  .var-btn:hover { background: #0ff; color: black; }
</style>
<div class="card">
  <p>💡 Value: 250</p>
  <button class="var-btn" onclick="alert('✅ Correct! It’s an int')">int</button>
  <button class="var-btn" onclick="alert('❌ Nope, that’s not correct')">char</button>
  <button class="var-btn" onclick="alert('❌ Nope')">String</button>
</div>
<div class="card">
  <p>💡 Value: 'A'</p>
  <button class="var-btn" onclick="alert('❌ Nope')">String</button>
  <button class="var-btn" onclick="alert('✅ Correct! It’s a char')">char</button>
  <button class="var-btn" onclick="alert('❌')">int</button>
</div>
<button class="gaming-btn" onclick="revealNextCard()">Play Again</button>`,
      image: "url",
      audio: "url"
    },
    {
      title: "Watch: Arduino Variables Explained Visually",
      content: `<iframe width="100%" height="200" src="https://www.youtube.com/embed/8A3p9jdfCek" title="Arduino Variables"></iframe>`,
      image: "url",
      audio: "url"
    },
    {
      title: "Try it Yourself: Modify a Variable",
      content: `<div class="card">Let’s tweak some real code! Copy this into your IDE:</div>
<div class="card"><code>int delayTime = 500;\n\nvoid setup() {\n  pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(delayTime);\n  digitalWrite(13, LOW);\n  delay(delayTime);\n}</code></div>
<div class="card">Change <code>delayTime</code> to <b>100</b> or <b>1000</b>. What changes do you observe?</div>
<button class="gaming-btn" onclick="revealNextCard()">I Tried It!</button>`,
      image: "url",
      audio: "url"
    }
  ]
}



  ]
    },{
      title: "Arduino Coding: The Serious Mode In The Course",
      modules: [
{
  "title": "loop(): The Heartbeat That Never Stops",
  "lessons": [
    {
      "title": "🫀 The Soul of Every Arduino Project",
      "content": "<div class='card'>\nYou power on your Arduino. A tiny light blinks.\n</div>\n<div class='card'>\nThen... it blinks again.\nAnd again. And again.\nThat’s <code>loop()</code> — the part of your sketch that <b>never stops running</b> until your board is powered off.\n</div>\n<div class='card'>\nIt’s like your heartbeat. The brain is <code>setup()</code>. But <code>loop()</code> is your pulse.💓\n</div>\n<div class='card'>\n<pre>\nvoid loop() {\n   // Your repeating magic goes here\n}\n</pre>\nThis is where your robot moves, sensors react, LEDs flash, buzzers scream — again and again.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎡 A Day in the Life of loop()",
      "content": "<div class='card'>\nImagine loop() as your daily routine:\n<ul>\n<li>Wake up</li>\n<li>Brush your teeth</li>\n<li>Eat breakfast</li>\n<li>Repeat forever (like a robot 🤖)</li>\n</ul>\n</div>\n<div class='card'>\nArduino does the same:\n<pre>\nvoid loop() {\n  checkSensors();\n  updateScreen();\n  blinkLED();\n}\n</pre>\n</div>\n<div class='card'>\nIt repeats this cycle non-stop. Literally thousands of times per second!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: The Infinite Loop Room",
      "content": "<div class='card'>\nYou're trapped in a room. Three doors appear:\n<ul>\n<li>A: A door labeled 'Run Once'</li>\n<li>B: A door labeled 'Run Forever'</li>\n<li>C: A door labeled 'Exit Loop'</li>\n</ul>\n</div>\n<div class='card'>\nWhich one is <code>loop()</code>?\n<input id='loopchoice' placeholder='Type A, B or C' style='width: 100%'/>\n<button class='gaming-btn' onclick=\"alert('✅ Correct! loop() is Door B – it never ends.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: The Power of loop()",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/BvU0g_FxqpM\" title=\"Arduino loop() Explained with Real Projects\" frameborder=\"0\" allowfullscreen></iframe>\n<div class='card'>\nThis video shows how <code>loop()</code> powers real-time Arduino behaviors. Watch closely — you’ll see how timing and repeating patterns matter.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Project Challenge: Make Something Loop",
      "content": "<div class='card'>\nYour challenge: Create a simple animation using an LED.\n</div>\n<div class='card'>\nHere’s a head start:\n<pre>\nvoid setup() {\n  pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(300);\n  digitalWrite(13, LOW);\n  delay(300);\n}\n</pre>\n</div>\n<div class='card'>\nTry:\n- Changing the delay to make it blink faster\n- Add a second LED (double trouble!)\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Deep Thought: When NOT to Use loop()",
      "content": "<div class='card'>\nSome students put everything inside loop(). Like this:\n<pre>\nvoid loop() {\n  pinMode(13, OUTPUT); // ⚠️ bad!\n  digitalWrite(13, HIGH);\n}\n</pre>\n</div>\n<div class='card'>\nBut <code>pinMode()</code> only needs to run <b>once</b> — it belongs in <code>setup()</code>.\n</div>\n<div class='card'>\nDon’t overload <code>loop()</code> — just put the actions you want to repeat.\n</div>\n<div class='card'>\nYou don’t say “I’m right-handed” 1000x a second. You say it once. Then you write. Same logic. ✍️\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,
{
  "title": "setup(): The One Who Prepares Everything",
  "lessons": [
    {
      "title": "🛠️ What is setup()?",
      "content": "<div class='card'>\nBefore your Arduino starts its infinite loop, it runs <code>setup()</code> once.\n</div>\n<div class='card'>\nIt's like the person who opens the gates, turns on the lights, and shouts: “Okay, we’re ready!”\n</div>\n<div class='card'>\n<pre>\nvoid setup() {\n  // This runs once when the board powers on\n}\n</pre>\n</div>\n<div class='card'>\nCommon things inside <code>setup()</code>:\n<ul>\n<li><code>pinMode()</code></li>\n<li><code>Serial.begin()</code></li>\n<li>Initializing sensors, displays</li>\n<li>Setting up libraries</li>\n</ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎬 Analogy: Setting Up the Stage",
      "content": "<div class='card'>\nImagine you’re putting on a play. 🎭\n</div>\n<div class='card'>\n- <code>setup()</code> is you arranging the chairs, testing the lights, and putting the actors in place.\n- <code>loop()</code> is the performance.\n</div>\n<div class='card'>\nWithout setup, the show is a disaster.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Setup or Loop?",
      "content": "<div class='card'>\nRead these tasks. Decide if they go in <code>setup()</code> or <code>loop()</code>:\n<pre>\n1. pinMode(13, OUTPUT);\n2. Turn on LED\n3. Serial.begin(9600);\n4. Check sensor value\n</pre>\n</div>\n<div class='card'>\n<input id='setupQuiz' placeholder='Type like: 1-setup, 2-loop...' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ Correct: 1-setup, 2-loop, 3-setup, 4-loop')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: setup() Explained with Real Projects",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/Mv6AejNhdAM\" title=\"Arduino setup() Tutorial\" frameborder=\"0\" allowfullscreen></iframe>\n<div class='card'>\nThis video shows what goes into <code>setup()</code> and why it matters before your code runs wild.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Mini Project: Blinky with Setup()",
      "content": "<div class='card'>\nTry this simple project:\n</div>\n<div class='card'>\n<pre>\nvoid setup() {\n  pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(300);\n  digitalWrite(13, LOW);\n  delay(300);\n}\n</pre>\n</div>\n<div class='card'>\nWhy is pinMode in <code>setup()</code>? Because you only need to declare it once. ✅\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
},
{
  "title": "Meet the Math Squad: Arduino's Arithmetic Operators",
  "lessons": [
    {
      "title": "🧮 Who Are the Arithmetic Operators?",
      "content": "<div class='card'>\nOperators are how we <b>do math in Arduino</b>.\n</div>\n<div class='card'>\nThey let you add, subtract, divide, multiply, and find remainders. They’re the little symbols with BIG power.\n</div>\n<div class='card'>\nHere’s the squad:\n<ul>\n<li><code>+</code> ➜ Add things up</li>\n<li><code>-</code> ➜ Subtract</li>\n<li><code>*</code> ➜ Multiply</li>\n<li><code>/</code> ➜ Divide</li>\n<li><code>%</code> ➜ Remainder after division</li>\n<li><code>=</code> ➜ Assignment (not equal! This gives a value)</li>\n</ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🍕 Pizza Math: Real Examples",
      "content": "<div class='card'>\nYou have 10 slices of pizza. You eat 3.\n<pre>\nint pizza = 10;\npizza = pizza - 3;  // Now you have 7\n</pre>\n</div>\n<div class='card'>\nYou split 12 cookies with 3 friends:\n<pre>\nint perPerson = 12 / 4; // = 3 each\n</pre>\n</div>\n<div class='card'>\nWant to check even/odd?\n<pre>\nif (x % 2 == 0) {\n  // Even number!\n}\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Operator Match Game",
      "content": "<div class='card'>\nMatch the operator to its action:\n<pre>\nA) +     B) %     C) =\nD) *     E) /     F) -\n</pre>\nWhat does each one do?\n</div>\n<div class='card'>\n<input id='opMatch' placeholder='Type like: A-Add, B-Remainder, ...' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ Nice! That’s how math powers electronics.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Arduino Math Operators in Action",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/T8DKCGbIsqI\" title=\"Arduino Math Operators\" frameborder=\"0\" allowfullscreen></iframe>\n<div class='card'>\nWatch how these simple operators control sensors, servos, and math-based decisions.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Challenge: Pulse Counter",
      "content": "<div class='card'>\nYour mission: Count 10 button presses and reset back to 0 using arithmetic.\n</div>\n<div class='card'>\n<pre>\nint count = 0;\n\nvoid loop() {\n  if (digitalRead(buttonPin) == HIGH) {\n    count = count + 1;\n    if (count >= 10) count = 0;\n  }\n}\n</pre>\n</div>\n<div class='card'>\nThis is the power of simple math!\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,
{
  "title": "Mastering Arduino Math: The Complete Arithmetic Operators",
  "lessons": [
    {
      "title": "🤹 Meet the Math Squad",
      "content": "<div class='card'>\nArduino gives you a tiny calculator inside the code.\nYou can add, subtract, divide, multiply, and even find remainders.\n</div>\n<div class='card'>\nLet’s meet the core math operators:\n<ul>\n<li><code>+</code> ➜ Addition</li>\n<li><code>-</code> ➜ Subtraction</li>\n<li><code>*</code> ➜ Multiplication</li>\n<li><code>/</code> ➜ Division</li>\n<li><code>%</code> ➜ Remainder (modulus)</li>\n<li><code>=</code> ➜ Assignment (NOT equality)</li>\n</ul>\n</div>\n<div class='card'>\nYou’ll use them in every project — even blinking LEDs.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🍕 Pizza Math: Real Life Arduino Examples",
      "content": "<div class='card'>\nYou buy 8 LEDs. You burn out 2. What’s left?\n<pre>\nint leds = 8;\nleds = leds - 2;  // 6 left\n</pre>\n</div>\n<div class='card'>\nYour robot has 2 wheels and 3 legs. Total?\n<pre>\nint parts = 2 + 3; // = 5\n</pre>\n</div>\n<div class='card'>\nYou share 10 cookies with 4 sensors:\n<pre>\nint perSensor = 10 / 4; // = 2 (because Arduino ints drop decimals!)\n</pre>\n</div>\n<div class='card'>\nYou want to blink an LED only on even button presses:\n<pre>\nif (pressCount % 2 == 0) {\n   blink();\n}\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Guess the Operator!",
      "content": "<div class='card'>\nMatch the code with the right operator:\n<pre>\nA) int x = 5 + 3;\nB) int x = 8 % 3;\nC) int x = 6 / 2;\nD) x = x * 2;\n</pre>\n</div>\n<div class='card'>\n<input id='mathGame' placeholder='Type like: A=Add, B=Modulus...' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ Correct! A=Add, B=Modulus, C=Divide, D=Multiply')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Arduino Math Operators Explained",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/T8DKCGbIsqI\" title=\"Arduino Math Operators Tutorial\" frameborder=\"0\" allowfullscreen></iframe>\n<div class='card'>\nWatch this video to see real-life applications of each operator — especially for sensors and logic-based systems.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Project Challenge: LED Math Display",
      "content": "<div class='card'>\nChallenge: Blink the LED as many times as the result of a math expression.\n</div>\n<div class='card'>\nExample:\n<pre>\nint blinks = 2 + 3 * 2; // = 8\n</pre>\nNow make it blink that many times:\n<pre>\nfor(int i=0; i<blinks; i++) {\n  digitalWrite(13, HIGH);\n  delay(200);\n  digitalWrite(13, LOW);\n  delay(200);\n}\n</pre>\n</div>\n<div class='card'>\nTry changing the math equation and watching the blinks!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💣 Common Mistakes (and how to avoid them)",
      "content": "<div class='card'>\n❌ <code>x = x + 1</code> looks confusing, but it’s correct!\n✔️ It means: take x, add 1, and store it back in x.\n</div>\n<div class='card'>\n❌ Forgetting that Arduino uses <code>int</code> for whole numbers.\n<pre>\nint result = 7 / 2; // NOT 3.5 ➜ it's 3\n</pre>\n✔️ Want decimals? Use <code>float</code> instead.\n</div>\n<div class='card'>\n❌ Using <code>=</code> to compare. That’s wrong!\n✔️ Use <code>==</code> to compare values.\n</div>\n<div class='card'>\n<pre>\nif (x = 5) // wrong! assigns 5 to x\nif (x == 5) // correct! checks if x is 5\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,
{
  "title": "Pointers? Nah, Just Magic Mirrors!",
  "lessons": [
    {
      "title": "🪞 What Are Pointer Operators?",
      "content": "<div class='card'>\nIn Arduino (and C++), pointers are like magic mirrors.\n</div>\n<div class='card'>\nThey don't hold the value — they hold the <i>address</i> of where that value lives in memory.\n</div>\n<div class='card'>\nThere are two main pointer operators:\n<ul>\n<li><code>&</code> ➜ Reference operator — gets the memory address</li>\n<li><code>*</code> ➜ Dereference operator — gets the value from that address</li>\n</ul>\n</div>\n<div class='card'>\nExample:\n<pre>\nint num = 42;\nint* ptr = &num; // ptr holds address of num\nSerial.println(*ptr); // prints 42\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Analogy: Secret House Addresses",
      "content": "<div class='card'>\nImagine variables are houses, and inside each house is a gift 🎁.\n</div>\n<div class='card'>\nThe <code>&</code> operator gives you the <b>address</b> of a house.\n</div>\n<div class='card'>\nThe <code>*</code> operator lets you <b>peek inside</b> that house and see the gift!\n</div>\n<div class='card'>\n<pre>\nint present = 99;\nint* address = &present; // get address\nSerial.println(*address); // peek inside the gift\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Peek Into Memory!",
      "content": "<div class='card'>\nGuess the output of this code:\n<pre>\nint a = 10;\nint* b = &a;\na = a + 5;\nSerial.println(*b);\n</pre>\n</div>\n<div class='card'>\n<input id='ptrQuiz' placeholder='What will be printed?' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ Answer: 15. Because *b sees what a became!')\">Submit</button>\n</div>\n<div class='card'>\nPointers always see what’s happening at the real location in memory.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Understanding Pointers in Arduino",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/yezzh6tJvGM' title='Pointers in Arduino Hindi' frameborder='0' allowfullscreen></iframe>\n<div class='card'>\nA video walkthrough of what pointers are, how to use them, and where they’re useful in Arduino projects.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Mini Project: Control LED Using Pointers",
      "content": "<div class='card'>\nLet’s use a pointer to turn on an LED. It’s weird — but fun!\n</div>\n<div class='card'>\n<pre>\nint ledPin = 13;\nint* ptr = &ledPin;\n\nvoid setup() {\n  pinMode(*ptr, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(*ptr, HIGH);\n  delay(500);\n  digitalWrite(*ptr, LOW);\n  delay(500);\n}\n</pre>\n</div>\n<div class='card'>\nHere, we're indirectly controlling pin 13 using its address!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🤯 Bonus: Where Are Pointers Used?",
      "content": "<div class='card'>\nPointers are used in:\n<ul>\n<li>Custom libraries</li>\n<li>Interrupt routines</li>\n<li>Function parameters (pass-by-reference)</li>\n<li>Dynamic memory tricks</li>\n</ul>\n</div>\n<div class='card'>\nMost beginner projects don’t need them. But as you grow, you’ll LOVE what they let you do. 🧠⚡\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,
{
  "title": "Arduino's Truth Detectors: Comparison Operators",
  "lessons": [
    {
      "title": "⚖️ What Are Comparison Operators?",
      "content": "<div class='card'>\nThese operators help Arduino <b>compare two values</b> and decide if something is true or false.\n</div>\n<div class='card'>\nThey’re the reason your code can say:\n<ul>\n<li>\"If button is pressed...\"</li>\n<li>\"If temperature is too high...\"</li>\n<li>\"If you’ve reached the score...\"</li>\n</ul>\n</div>\n<div class='card'>\nLet’s meet them:\n<ul>\n<li><code>==</code> ➜ Equal to</li>\n<li><code>!=</code> ➜ Not equal to</li>\n<li><code>&gt;</code> ➜ Greater than</li>\n<li><code>&lt;</code> ➜ Less than</li>\n<li><code>&gt;=</code> ➜ Greater than or equal to</li>\n<li><code>&lt;=</code> ➜ Less than or equal to</li>\n</ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🍟 Real-Life Examples: Fries & Scores",
      "content": "<div class='card'>\nExample 1:\n<pre>\nint fries = 10;\nif (fries == 10) {\n  eat();\n}\n</pre>\nChecks if fries are exactly 10.\n</div>\n<div class='card'>\nExample 2:\n<pre>\nint temp = 38;\nif (temp > 37) {\n  soundAlarm();\n}\n</pre>\nScreams if you're too hot 🌡️.\n</div>\n<div class='card'>\nExample 3:\n<pre>\nif (score != 100) {\n  keepTrying();\n}\n</pre>\nOnly rewards you when score hits 100.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Mini Game: True or False?",
      "content": "<div class='card'>\nWhat does this print?\n<pre>\nint a = 3, b = 5;\nSerial.println(a >= b);\n</pre>\n</div>\n<div class='card'>\n<input id='compGame' placeholder='true or false?' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('❌ Nope! Answer is false (0) — 3 is not greater or equal to 5.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Comparison Operators in Action",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/WcJUGjhhLAo' title='Arduino Comparison Operators in Hindi' frameborder='0' allowfullscreen></iframe>\n<div class='card'>\nSee all six operators in action with sensors, decisions, and logic.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Real Challenge: Temp Checker",
      "content": "<div class='card'>\nTry this logic:\n<pre>\nint temp = analogRead(A0);\nif (temp >= 700) {\n  digitalWrite(13, HIGH);\n} else {\n  digitalWrite(13, LOW);\n}\n</pre>\n</div>\n<div class='card'>\nYou're lighting an LED when a certain threshold is crossed.\nThis is exactly how fire alarms or plant watering systems work!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💣 Common Mistakes to Avoid",
      "content": "<div class='card'>\n<pre>\nif (x = 5) // ❌ This assigns 5 to x — NOT a comparison!\n</pre>\nUse <code>==</code> for comparisons:\n<pre>\nif (x == 5) // ✅ Now it checks equality\n</pre>\n</div>\n<div class='card'>\n<pre>\nif (temp < 50) // ✅ All good\nif (temp =< 50) // ❌ That’s not a valid operator\n</pre>\n</div>\n<div class='card'>\nTip: Always double-check for <b>= vs ==</b> and operator typos!\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,
{
  "title": "Bits and Power: Mastering Bitwise Operators in Arduino",
  "lessons": [
    {
      "title": "💡 What Are Bitwise Operators?",
      "content": "<div class='card'>\nBitwise operators let you control data at the BIT level — pure 0s and 1s.\n</div>\n<div class='card'>\nThey work on binary versions of numbers. Like:\n<pre>\nint x = 6;   // 00000110\nint y = 3;   // 00000011\n</pre>\n</div>\n<div class='card'>\nHere's the squad:\n<ul>\n<li><code>&</code> ➜ AND</li>\n<li><code>|</code> ➜ OR</li>\n<li><code>^</code> ➜ XOR</li>\n<li><code>~</code> ➜ NOT</li>\n<li><code>&lt;&lt;</code> ➜ Bitshift Left</li>\n<li><code>&gt;&gt;</code> ➜ Bitshift Right</li>\n</ul>\n</div>\n<div class='card'>\nBitwise is 💥powerful for performance, pin control, memory-efficient tricks.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎯 Real-Life Example: Control 8 LEDs Using 1 Byte",
      "content": "<div class='card'>\nLet’s say you control 8 LEDs with an 8-bit number:\n<pre>\nb11101101  ➜ Turns ON some LEDs, OFF others\n</pre>\nEach bit = one LED’s state!\n</div>\n<div class='card'>\n<pre>\nint pattern = 0b11101101;\nfor(int i=0; i<8; i++) {\n  digitalWrite(i, (pattern >> i) & 1);\n}\n</pre>\n</div>\n<div class='card'>\nThis loops through each bit and applies it to a pin — pure 🔥!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🕹️ Game: Bitwise Battle!",
      "content": "<div class='card'>\nMatch the operation to its result:\n<pre>\nA = 0b1010 & 0b1100\nB = 0b1010 | 0b1100\nC = 0b1010 ^ 0b1100\n</pre>\n</div>\n<div class='card'>\n<input id='bitBattle' placeholder='Write answers like: A=1000, B=1110...' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ Correct! A=1000, B=1110, C=0110')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Bitwise Operators Simplified",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/OZvwkec8XLs' title='Bitwise operators explained' frameborder='0' allowfullscreen></iframe>\n<div class='card'>\nThis video breaks down all the operators with simple charts, fun narrations, and a bit of Arduino demo.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Project: Bitshift Based LED Animator",
      "content": "<div class='card'>\nUse bit shifting to animate LEDs like a wave:\n</div>\n<div class='card'>\n<pre>\nbyte leds = 0b00000001;\nvoid loop() {\n  for(int i=0; i<8; i++) {\n    digitalWrite(i, (leds >> i) & 1);\n  }\n  delay(100);\n  leds = leds << 1;\n  if (leds == 0) leds = 0b00000001;\n}\n</pre>\n</div>\n<div class='card'>\nThis moves a single ON bit from left to right like KITT from Knight Rider 🚗💨\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💣 Mistakes & Bit Traps",
      "content": "<div class='card'>\n⚠️ <code>~</code> flips ALL bits — even unused ones.\n<pre>\nbyte x = 0b00001111;\nbyte y = ~x; // y = 0b11110000\n</pre>\n</div>\n<div class='card'>\n⚠️ Bitshift left or right too far?\nIt’ll push out bits and lose data.\n<pre>\nx = x << 8; // gone!\n</pre>\n</div>\n<div class='card'>\n✅ Always mask your bits with <code>& 1</code> to isolate bits:\n<pre>\nbit = (x >> i) & 1;\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,
{
  "title": "Thinking Like Arduino: Boolean Logic Mastery",
  "lessons": [
    {
      "title": "🧠 What Are Logical (Boolean) Operators?",
      "content": "<div class='card'>\nThese operators deal with <b>truth</b> — literally.\nThey help Arduino decide what to do based on <b>multiple conditions</b>.\n</div>\n<div class='card'>\n<ul>\n<li><code>&&</code> ➜ Logical AND (both must be true)</li>\n<li><code>||</code> ➜ Logical OR (at least one true)</li>\n<li><code>!</code> ➜ Logical NOT (opposite truth)</li>\n</ul>\n</div>\n<div class='card'>\nThis is Arduino’s way of asking:\n<b>“Should I act?”</b> — based on two sensors, or buttons, or states.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🌟 Real-Life Examples with Logic",
      "content": "<div class='card'>\n<pre>\nif (temp > 35 && humidity > 70) {\n  activateCooler();\n}\n</pre>\nThis will only run if <b>both conditions are true</b>.\n</div>\n<div class='card'>\n<pre>\nif (button1Pressed || button2Pressed) {\n  startGame();\n}\n</pre>\nAny one button triggers the game.\n</div>\n<div class='card'>\n<pre>\nif (!isConnected) {\n  reconnect();\n}\n</pre>\nThis checks if <b>NOT connected</b>, then tries again.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Logic Locker Puzzle",
      "content": "<div class='card'>\nImagine a locker with two keys. It opens only if:\nKey A is ON AND Key B is ON.\n</div>\n<div class='card'>\n<input id='logicLocker' placeholder='Write logic expression like: A && B' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ Correct! It opens only if A && B are both true.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Boolean Logic Made Simple",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/71eO_v9CcoQ' title='Arduino Boolean Logic' frameborder='0' allowfullscreen></iframe>\n<div class='card'>\nA fun visual explanation of Boolean logic in real projects: motion detectors, alarms, safety shutdowns.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Project: The Dual-Sensor Alarm",
      "content": "<div class='card'>\nHere’s a real circuit with two sensors (like smoke + heat):\n</div>\n<div class='card'>\n<pre>\nint fire = digitalRead(2);\nint heat = digitalRead(3);\nif (fire && heat) {\n  digitalWrite(13, HIGH);\n}\n</pre>\n</div>\n<div class='card'>\nThis will only sound the alarm if BOTH are active.\nUse <code>||</code> if you want either to be enough.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🌀 Bonus Lesson: Truth Tables",
      "content": "<div class='card'>\nTruth tables help visualize logic outcomes. Here's one for AND:\n<pre>\nA | B | A && B\n0 | 0 |   0\n0 | 1 |   0\n1 | 0 |   0\n1 | 1 |   1\n</pre>\n</div>\n<div class='card'>\nTry making one for <code>||</code> and <code>!</code> on your own!\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Compound Moves: Shortcuts to Powerful Arduino Logic",
  "lessons": [
    {
      "title": "🤔 What Are Compound Operators?",
      "content": "<div class='card'>\nCompound operators are <b>shorthand versions</b> of common arithmetic, logical, and bitwise operations.\n</div>\n<div class='card'>\nInstead of:\n<pre>x = x + 5;</pre>\nYou can write:\n<pre>x += 5;</pre>\n</div>\n<div class='card'>\nThis saves time, memory, and makes your code 💅 cleaner!\n</div>\n<div class='card'>\nPopular compound operators include:\n<ul>\n<li><code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>, <code>%=</code></li>\n<li><code>&=</code>, <code>|=</code>, <code>^=</code> (bitwise)</li>\n<li><code>++</code> and <code>--</code> (increment/decrement)</li>\n</ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎯 Real Use Cases in Arduino Projects",
      "content": "<div class='card'>\n🎮 Want to count points?\n<pre>\nscore += 10;  // Add 10 points\n</pre>\n</div>\n<div class='card'>\n🌡️ Gradually reduce a temperature value:\n<pre>\ntemp -= 2;  // cool down\n</pre>\n</div>\n<div class='card'>\n💡 Toggle LED pattern with:\n<pre>\nleds ^= 0b00010000; // Flip bit 4\n</pre>\n</div>\n<div class='card'>\nLoop counter magic:\n<pre>\ni++;\n</pre>\nThis is same as: <code>i = i + 1;</code>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Code Crunch Challenge",
      "content": "<div class='card'>\n🧠 What will this do?\n<pre>\nint x = 4;\nx *= 2;\nx++;\n</pre>\n</div>\n<div class='card'>\n<input id='compoundAnswer' placeholder='Your final value of x?' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ Correct! x = 9')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Shorthand Superpowers in Arduino",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/Mk39k-YC_Y4' title='Arduino Compound Operators' frameborder='0' allowfullscreen></iframe>\n<div class='card'>\nThis visual explainer helps you understand how compound operators speed up loops, counters, and toggling in real projects.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Project: Automatic LED Dimmer",
      "content": "<div class='card'>\nUse compound operators to gradually dim a light.\n</div>\n<div class='card'>\n<pre>\nint brightness = 255;\nvoid loop() {\n  analogWrite(9, brightness);\n  brightness -= 5;\n  if (brightness <= 0) brightness = 255;\n  delay(100);\n}\n</pre>\n</div>\n<div class='card'>\nThis repeats a dimming animation using <code>-=</code>. You could also try <code>brightness /= 2;</code> for funky effects!\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,
{
  "title": "Decisions, Decisions: Understanding the if Statement",
  "lessons": [
    {
      "title": "🧠 Meet the if Statement",
      "content": "<div class='card'>Ever had to decide whether to eat pizza or not? Arduino does the same using the <code>if</code> statement.</div>\n<div class='card'>The basic syntax:\n<pre>\nif (condition) {\n  // code to run if true\n}\n</pre>\n</div>\n<div class='card'>Example:\n<pre>\nif (temperature > 30) {\n  digitalWrite(fanPin, HIGH);\n}\n</pre>\nThis means: If the temperature is more than 30, turn the fan ON!</div>\n<div class='card'>You can use sensors, buttons, or values from anywhere in your code.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/JzF8Izo.png",
      "audio": "https://example.com/audio/if_statement_intro.mp3"
    },
    {
      "title": "🎮 Game: Help Arduino Decide!",
      "content": "<div class='card'>Choose what Arduino should do based on the temperature!</div>\n<script>\nlet temp = Math.floor(Math.random() * 50);\ndocument.write('<div class=\"card\">Temperature is ' + temp + '°C</div>');\nif(temp > 30) {\n  document.write('<div class=\"card\">Arduino turns the FAN ON!</div>');\n} else {\n  document.write('<div class=\"card\">Arduino keeps the FAN OFF.</div>');\n}\n</script>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎥 Watch: if Statement Explained Simply",
      "content": "<div class='card'>Here's a fun video that visually explains how <code>if</code> works in Arduino!</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/fE7HVSHE6zA' frameborder='0' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "💻 Try It: Write Your Own if Statement",
      "content": "<div class='card'>Type out your first <code>if</code> statement here and test what it does.</div>\n<textarea rows='10' style='width:100%;'>if (digitalRead(buttonPin) == HIGH) {\n  digitalWrite(ledPin, HIGH);\n}</textarea>\n<div class='card'>You can use the Arduino Web Editor to test this, or even the simulator on RoboDict homepage.</div>",
      "image": "",
      "audio": ""
    }
  ]
}
,{
  "title": "The Power of Else — What If Not?",
  "lessons": [
    {
      "title": "🧩 Meet the else Statement",
      "content": "<div class='card'>Sometimes things don't go as planned. Arduino handles that with <code>else</code>!</div>\n<div class='card'>If the <code>if</code> condition is false, Arduino jumps to the <code>else</code> block.</div>\n<div class='card'>Example:\n<pre>\nif (temp > 30) {\n  fanOn();\n} else {\n  fanOff();\n}\n</pre>\nNow the fan will only run if the temperature is high, otherwise it’ll stay off.</div>\n<div class='card'>You can chain this with <code>if</code> to create alternate paths!</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/BYAkUdR.png",
      "audio": "https://example.com/audio/else_explained.mp3"
    },
    {
      "title": "🎮 Game: Arduino Needs a Choice!",
      "content": "<div class='card'>Your robot is standing at a fork. Should it go left or right?</div>\n<script>\nlet batteryLevel = Math.floor(Math.random() * 100);\ndocument.write('<div class=\"card\">Battery: ' + batteryLevel + '%</div>');\nif (batteryLevel > 50) {\n  document.write('<div class=\"card\">Arduino decides to go exploring!</div>');\n} else {\n  document.write('<div class=\"card\">Arduino returns to base for recharge.</div>');\n}\n</script>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎥 Video: else in Real Arduino Projects",
      "content": "<div class='card'>This quick video walks through real-life Arduino uses of <code>if...else</code> logic.</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/zNQYgky4qv8' frameborder='0' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🛠️ Mini Challenge: else in Action",
      "content": "<div class='card'>Write a short code snippet that uses <code>else</code> to blink a red LED if a sensor value is too low.</div>\n<textarea rows='10' style='width:100%;'>if (sensorVal > 500) {\n  digitalWrite(greenLED, HIGH);\n} else {\n  digitalWrite(redLED, HIGH);\n}</textarea>\n<div class='card'>Try it out in your IDE or simulator. What happens when you adjust the sensor?</div>",
      "image": "",
      "audio": ""
    }
  ]
}
,{
  "title": "Loop Like a Pro — The Mighty for Loop",
  "lessons": [
    {
      "title": "🔁 What is a for Loop?",
      "content": "<div class='card'>Ever wanted your Arduino to do something 10 times without writing it 10 times? Say hello to the <code>for</code> loop!</div>\n<div class='card'>Syntax:\n<pre>\nfor (int i = 0; i < 10; i++) {\n  // run this code\n}\n</pre></div>\n<div class='card'>It has 3 parts:\n<ul>\n<li><b>Start:</b> int i = 0</li>\n<li><b>Condition:</b> i < 10</li>\n<li><b>Update:</b> i++ (means i = i + 1)</li>\n</ul>\n</div>\n<div class='card'>Example:\n<pre>\nfor (int i = 0; i < 5; i++) {\n  digitalWrite(led, HIGH);\n  delay(500);\n  digitalWrite(led, LOW);\n  delay(500);\n}\n</pre>\nThis blinks the LED 5 times!</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/PO8bVje.png",
      "audio": "https://example.com/audio/forloop_intro.mp3"
    },
    {
      "title": "🎮 Game: The Loop Counter",
      "content": "<div class='card'>Let’s simulate a countdown using a <code>for</code> loop!</div>\n<script>\nfor (let i = 5; i > 0; i--) {\n  document.write('<div class=\"card\">T-minus ' + i + '...</div>');\n}\ndocument.write('<div class=\"card\">🚀 Lift-off!</div>');\n</script>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎥 Watch: Arduino for Loop Explained",
      "content": "<div class='card'>This video covers <code>for</code> loops with LED patterns, sensors, and real projects.</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/h2uQU7gYmmY' frameborder='0' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "💡 Explore: Use for Loop with Arrays",
      "content": "<div class='card'>Use <code>for</code> to control multiple LEDs from an array!</div>\n<pre>\nint leds[] = {2, 3, 4, 5};\nfor (int i = 0; i < 4; i++) {\n  digitalWrite(leds[i], HIGH);\n  delay(200);\n  digitalWrite(leds[i], LOW);\n}\n</pre>\n<div class='card'>That’s how scrolling lights are made! 🔥</div>",
      "image": "",
      "audio": ""
    }
  ]
}
,
{
  "title": "Go With the Flow — Understanding the while Loop",
  "lessons": [
    {
      "title": "🌊 Meet the while Loop",
      "content": "<div class='card'>The <code>while</code> loop keeps running as long as its condition stays true — kind of like your brain thinking about pizza until you eat it.</div>\n<div class='card'>Syntax:\n<pre>\nwhile (condition) {\n  // do this stuff\n}\n</pre></div>\n<div class='card'>Example:\n<pre>\nwhile (digitalRead(buttonPin) == HIGH) {\n  digitalWrite(ledPin, HIGH);\n  delay(200);\n  digitalWrite(ledPin, LOW);\n  delay(200);\n}\n</pre>\nThis keeps blinking the LED while the button is pressed.</div>\n<div class='card'>⚠️ Warning: If the condition never turns false, it loops forever!</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/oKRB1Bk.png",
      "audio": "https://example.com/audio/while_loop_intro.mp3"
    },
    {
      "title": "🎮 Game: Button Hold Challenge",
      "content": "<div class='card'>Simulate holding a button to keep the loop going:</div>\n<script>\nlet pressed = Math.random() > 0.5;\nif (pressed) {\n  for (let i = 0; i < 5; i++) {\n    document.write('<div class=\"card\">LED blink #' + (i+1) + '</div>');\n  }\n} else {\n  document.write('<div class=\"card\">Button not pressed — no blinks.</div>');\n}\n</script>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎥 Video: while Loops for Motion and Sensors",
      "content": "<div class='card'>Here's how while loops work in robotics and motion sensors. Super fun use cases!</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/3VBZTZS3kgI' frameborder='0' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "📦 DIY Challenge: while Loop with Sensor",
      "content": "<div class='card'>Make a project that runs a motor while a light sensor detects darkness.</div>\n<pre>\nwhile (analogRead(lightSensor) < 300) {\n  digitalWrite(motorPin, HIGH);\n}\n</pre>\n<div class='card'>Try changing the condition to suit different thresholds!</div>",
      "image": "",
      "audio": ""
    }
  ]
},
{
  "title": "One-Time Guarantee — The do...while Loop",
  "lessons": [
    {
      "title": "📍 Why do...while?",
      "content": "<div class='card'>The <code>do...while</code> loop guarantees one execution — no matter what!</div>\n<div class='card'>Syntax:\n<pre>\ndo {\n  // code runs once minimum\n} while (condition);\n</pre></div>\n<div class='card'>Unlike <code>while</code>, the condition is checked <i>after</i> the loop body. That’s why it always runs once.</div>\n<div class='card'>Example:\n<pre>\nint tries = 0;\ndo {\n  Serial.println(\"Trying to connect...\");\n  tries++;\n} while (tries < 3);\n</pre>\nThis will print 3 attempts, even if it connects the first time.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/mUgakAM.png",
      "audio": "https://example.com/audio/do_while_intro.mp3"
    },
    {
      "title": "🎮 Game: How Many Times?",
      "content": "<div class='card'>We will show a random condition and see how many times the loop runs!</div>\n<script>\nlet counter = 0;\nlet shouldContinue = Math.random() > 0.5;\ndo {\n  document.write('<div class=\"card\">Looping... Try #' + (counter+1) + '</div>');\n  counter++;\n} while (shouldContinue && counter < 5);\ndocument.write('<div class=\"card\">Loop ended after ' + counter + ' times.</div>');\n</script>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎥 Video: do...while Explained Visually",
      "content": "<div class='card'>This short animation makes the <code>do...while</code> loop crystal clear!</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/l2TfRHfiBfE' frameborder='0' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🧪 Experiment: Retry Until Connected",
      "content": "<div class='card'>Simulate retrying WiFi connection using <code>do...while</code>:</div>\n<pre>\nbool connected = false;\nint attempts = 0;\ndo {\n  connected = tryConnect();\n  attempts++;\n} while (!connected && attempts < 5);\n</pre>\n<div class='card'>Useful in IOT! Simulate this logic using RoboDict's simulator or serial print.</div>",
      "image": "",
      "audio": ""
    }
  ]
}
,
{
  "title": "Switch It Up — Mastering switch...case",
  "lessons": [
    {
      "title": "🎚️ Intro to switch...case",
      "content": "<div class='card'>Ever had a menu where you press 1 for Pizza, 2 for Burger, 3 for Fries? Arduino has one too — it's called <code>switch...case</code>!</div>\n<div class='card'>Syntax:\n<pre>\nswitch (variable) {\n  case 1:\n    // do something\n    break;\n  case 2:\n    // do something else\n    break;\n  default:\n    // fallback if nothing matches\n}\n</pre></div>\n<div class='card'>Use this when you're checking a variable against multiple values.</div>\n<div class='card'>Example:\n<pre>\nswitch (day) {\n  case 1: Serial.println(\"Monday\"); break;\n  case 2: Serial.println(\"Tuesday\"); break;\n  default: Serial.println(\"Weekend!\");\n}\n</pre></div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/ySSooUB.png",
      "audio": "https://example.com/audio/switchcase_intro.mp3"
    },
    {
      "title": "🎮 Game: Choose Your LED",
      "content": "<div class='card'>Pick a number (1-3) to turn ON a different LED!</div>\n<script>\nlet choice = Math.floor(Math.random() * 4);\ndocument.write('<div class=\"card\">Choice: ' + choice + '</div>');\nswitch (choice) {\n  case 1:\n    document.write('<div class=\"card\">Red LED ON</div>');\n    break;\n  case 2:\n    document.write('<div class=\"card\">Green LED ON</div>');\n    break;\n  case 3:\n    document.write('<div class=\"card\">Blue LED ON</div>');\n    break;\n  default:\n    document.write('<div class=\"card\">No LED selected</div>');\n}\n</script>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎥 Video: switch...case in Action",
      "content": "<div class='card'>This video breaks down how to use switch...case for buttons, modes, and menus!</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/zF5C5VP0nsM' frameborder='0' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🧪 Project: Mini Menu System",
      "content": "<div class='card'>Let’s simulate a text-based menu using <code>switch</code>:</div>\n<pre>\nint option = 2;\nswitch(option) {\n  case 1:\n    startGame();\n    break;\n  case 2:\n    showSettings();\n    break;\n  default:\n    showError();\n}\n</pre>\n<div class='card'>Use the Serial Monitor to take input and create your own menus!</div>",
      "image": "",
      "audio": ""
    }
  ]
}
,{
  "title": "Break It Off — Escaping Loops & Cases",
  "lessons": [
    {
      "title": "🛑 Why Use break?",
      "content": "<div class='card'>Imagine you’re in a loop or a <code>switch</code> block and you suddenly want to bail out. That’s what <code>break</code> does.</div>\n<div class='card'>It immediately exits the loop or <code>switch</code> block, skipping anything after it.</div>\n<div class='card'>Syntax:\n<pre>\nfor (int i = 0; i < 10; i++) {\n  if (i == 5) break;\n  Serial.println(i);\n}\n</pre>\nThis loop will print 0 to 4, then exit. ⚡</div>\n<div class='card'>Used in <code>switch</code> to avoid ‘fall-through’ (executing all cases after the match).</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/XUqN5Y9.png",
      "audio": "https://example.com/audio/break_intro.mp3"
    },
    {
      "title": "🎮 Game: Break the Loop!",
      "content": "<div class='card'>Simulate a sensor that breaks a loop early!</div>\n<script>\nfor (let i = 0; i < 10; i++) {\n  if (i === 6) {\n    document.write('<div class=\"card\">Sensor triggered! Breaking loop at ' + i + '.</div>');\n    break;\n  }\n  document.write('<div class=\"card\">Running step ' + i + '</div>');\n}\n</script>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎥 Video: break Explained Clearly",
      "content": "<div class='card'>This video explains <code>break</code> in <code>for</code>, <code>while</code>, and <code>switch</code> scenarios. 📺</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/AsDsZXNMmjM' frameborder='0' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🧪 Activity: break for Safety",
      "content": "<div class='card'>Write an Arduino code that spins a motor, but stops if a sensor value exceeds 600.</div>\n<pre>\nfor (int i = 0; i < 100; i++) {\n  if (analogRead(sensor) > 600) break;\n  spinMotor();\n}\n</pre>\n<div class='card'>Try modifying it for different thresholds!</div>",
      "image": "",
      "audio": ""
    }
  ]
}
,{
  "title": "Skip Smart — Using the `continue` Statement",
  "lessons": [
    {
      "title": "🏃‍♂️ What is `continue`?",
      "content": "<div class='card'>The <code>continue</code> statement says: \"Skip this round, go to the next one!\" 🌀</div>\n<div class='card'>It’s used inside loops. When encountered, the rest of the current iteration is ignored — and the loop jumps straight to the next cycle.</div>\n<div class='card'>Example:\n<pre>\nfor (int i = 0; i < 10; i++) {\n  if (i % 2 == 0) continue;\n  Serial.println(i);\n}\n</pre>\nThis will print only odd numbers (1, 3, 5, 7, 9).</div>\n<div class='card'>Useful for skipping unwanted cases while keeping the loop running! 🚀</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/CqMAtCJ.png",
      "audio": "https://example.com/audio/continue_intro.mp3"
    },
    {
      "title": "🎮 Game: Even Filter",
      "content": "<div class='card'>Watch how <code>continue</code> skips even numbers 👀</div>\n<script>\nfor (let i = 1; i <= 10; i++) {\n  if (i % 2 === 0) continue;\n  document.write('<div class=\"card\">Kept: ' + i + '</div>');\n}\n</script>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎥 Video: continue Statement Explained",
      "content": "<div class='card'>This fun animation shows how <code>continue</code> behaves differently than <code>break</code>. 🎯</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/vYd6cXJ_rTE' frameborder='0' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🧪 Try: Skip Sensor Spikes",
      "content": "<div class='card'>Use <code>continue</code> to skip values above 800 (spikes):</div>\n<pre>\nfor (int i = 0; i < 100; i++) {\n  int reading = analogRead(sensor);\n  if (reading > 800) continue;\n  Serial.println(reading);\n}\n</pre>\n<div class='card'>This way you filter out unwanted sensor data without ending the loop. Smart, right?</div>",
      "image": "",
      "audio": ""
    }
  ]
}
,{
  "title": "Go Where? — The Mysterious `goto` Statement",
  "lessons": [
    {
      "title": "🌀 What is `goto`?",
      "content": "<div class='card'>Think of <code>goto</code> as a portal. When used, your code jumps straight to a labeled section — skipping everything in between.</div>\n<div class='card'>Syntax:\n<pre>\ngoto label;\n...\nlabel:\n  // code here\n</pre></div>\n<div class='card'>But beware! 🛑 It can make your code messy and hard to follow if overused.</div>\n<div class='card'>Example:\n<pre>\nint x = 1;\nif (x == 1) goto skip;\nSerial.println(\"This won’t run\");\nskip:\nSerial.println(\"Jumped here!\");\n</pre></div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/D1wdRKa.png",
      "audio": "https://example.com/audio/goto_intro.mp3"
    },
    {
      "title": "🎮 Game: The Code Jumper",
      "content": "<div class='card'>Try to guess where the code jumps!</div>\n<script>\nlet x = Math.random() > 0.5;\nif (x) {\n  document.write('<div class=\"card\">goto SKIPPED</div>');\n  document.write('<div class=\"card\">Code Block SKIPPED</div>');\n} else {\n  document.write('<div class=\"card\">No goto used — all code runs</div>');\n}\ndocument.write('<div class=\"card\">Final Block Reached ✅</div>');\n</script>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎥 Video: Why `goto` is Rare (but Exists)",
      "content": "<div class='card'>Watch why developers rarely use <code>goto</code>, but why Arduino still allows it.</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/o4E1W-ZtkRc' frameborder='0' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🧪 Lab Test: Panic Exit",
      "content": "<div class='card'>Simulate a panic stop in your code using <code>goto</code>.</div>\n<pre>\nint value = analogRead(A0);\nif (value > 900) goto emergency;\nSerial.println(\"All normal\");\n...\nemergency:\nSerial.println(\"Emergency shutdown!\");\n</pre>\n<div class='card'>But remember — only use it when absolutely needed, like in legacy or hardware failure systems.</div>",
      "image": "",
      "audio": ""
    }
  ]
}
,{
  "title": "Return of the Jedi — Mastering `return` in Arduino",
  "lessons": [
    {
      "title": "🚪 What is `return`?",
      "content": "<div class='card'>The <code>return</code> statement is how a function finishes its job and sends back a result (or exits quietly).</div>\n<div class='card'>Types of return:\n<ul><li><code>return;</code> → Exit with nothing (for <code>void</code> functions)</li><li><code>return value;</code> → Send back a result (for <code>int</code>, <code>bool</code>, etc.)</li></ul></div>\n<div class='card'>Example 1:\n<pre>\nvoid blink() {\n  digitalWrite(LED_BUILTIN, HIGH);\n  delay(100);\n  digitalWrite(LED_BUILTIN, LOW);\n  delay(100);\n  return;\n}\n</pre>\nFunction ends silently.</div>\n<div class='card'>Example 2:\n<pre>\nint add(int a, int b) {\n  return a + b;\n}\n</pre>\nReturns the sum to wherever the function was called.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/KUVFPOq.png",
      "audio": "https://example.com/audio/return_intro.mp3"
    },
    {
      "title": "🎮 Game: Who Returns What?",
      "content": "<div class='card'>Guess what this function returns:</div>\n<script>\nfunction multiply(a, b) {\n  return a * b;\n}\nlet result = multiply(4, 3);\ndocument.write('<div class=\"card\">Result: ' + result + '</div>');\n</script>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎥 Video: return Explained Like a Pro",
      "content": "<div class='card'>Here’s a short and fun tutorial on how <code>return</code> works in Arduino sketches.</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/0aFUeJFrbgU' frameborder='0' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🧪 Lab: Smart Temperature Function",
      "content": "<div class='card'>Write a function that returns <code>true</code> if temperature is safe:</div>\n<pre>\nbool isSafe(int temp) {\n  if (temp < 50) return true;\n  return false;\n}\n</pre>\n<div class='card'>Use this to alert or control a fan.</div>",
      "image": "",
      "audio": ""
    }
  ]
}
,{
  "title": "Syntax Secrets — Exploring Hidden Gems of Arduino Language",
  "lessons": [
    {
      "title": "💬 Block Comments (/* ... */)",
      "content": "<div class='card'>Block comments help you hide multiple lines of code from being executed. Great for notes or disabling test code!</div>\n<div class='card'>Syntax:\n<pre>\n/*\nThis is a block comment.\nIt can span multiple lines.\n*/\n</pre></div>\n<div class='card'>Use them wisely to document your complex logic.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/S4HDm3O.png",
      "audio": ""
    },
    {
      "title": "🔍 Curly Braces: { }",
      "content": "<div class='card'>Curly braces define blocks of code, like inside <code>if</code>, <code>for</code>, or <code>void loop()</code>.</div>\n<div class='card'>Example:\n<pre>\nif (temp > 50) {\n  digitalWrite(fan, HIGH);\n}\n</pre></div>\n<div class='card'>Always match your opening <code>{</code> with a closing <code>}</code>. Or expect some errors 😵‍💫</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🧪 Game: Match the Braces",
      "content": "<script>\nconst codes = [\n  '{ digitalWrite(13, HIGH); }',\n  'if (x > 0) { y = 1;',\n  'for (int i = 0; i < 5; i++) { Serial.println(i); }'\n];\nfor (let i = 0; i < codes.length; i++) {\n  document.write(`<div class='card'>Code ${i + 1}: <pre>${codes[i]}</pre></div>`);\n  if (codes[i].split('{').length !== codes[i].split('}').length)\n    document.write(`<div class='card'>❌ Unmatched braces!</div>`);\n  else\n    document.write(`<div class='card'>✅ All good!</div>`);\n}\n</script>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🔠 #define Directive",
      "content": "<div class='card'><code>#define</code> is used to create constants or aliases.</div>\n<div class='card'>Example:\n<pre>#define LED 13\nvoid setup() {\n  pinMode(LED, OUTPUT);\n}</pre></div>\n<div class='card'>It’s like a nickname for a number or text. But beware — it’s not a variable!</div>",
      "image": "https://i.imgur.com/8RnrYQy.png",
      "audio": ""
    },
    {
      "title": "📦 #include Directive",
      "content": "<div class='card'>Use <code>#include</code> to bring in libraries!</div>\n<div class='card'>Example:\n<pre>#include &lt;Servo.h&gt;</pre></div>\n<div class='card'>This line adds code that controls servo motors — without you writing all of it yourself!</div>",
      "image": "https://i.imgur.com/t6cD72K.png",
      "audio": ""
    },
    {
      "title": "🚪 The Mighty Semicolon ( ; )",
      "content": "<div class='card'>The semicolon is like a full stop. It ends every instruction.</div>\n<div class='card'>Example:\n<pre>\nint a = 5;\ndigitalWrite(LED_BUILTIN, HIGH);\n</pre></div>\n<div class='card'>Missing a semicolon? Get ready for errors! 🔥</div>",
      "image": "https://i.imgur.com/g0a0Vmj.png",
      "audio": ""
    },
    {
      "title": "📢 Single Line Comments ( // )",
      "content": "<div class='card'>Use <code>//</code> to comment a single line.</div>\n<div class='card'>Example:\n<pre>\n// This is a comment\nint led = 13; // Set LED pin\n</pre></div>\n<div class='card'>Comments don't affect the program — they're just for humans like us! 👨‍💻</div>",
      "image": "https://i.imgur.com/7eyRMkx.png",
      "audio": ""
    },
    {
      "title": "🎥 Syntax Recap Video",
      "content": "<div class='card'>Here’s a casual video walkthrough of all these symbols and keywords together in a real Arduino sketch.</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/N9M4k2W9G7s' frameborder='0' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🧪 Quiz: Syntax Checker",
      "content": "<div class='card'>Which of these lines has a syntax issue?</div>\n<pre>\n#define LED = 13;\n#include Servo.h\nint a = 5\n</pre>\n<div class='card'>Try fixing them mentally, then click below to reveal answers!</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Reveal Fixes</button>\n<div class='card'>✔️ #define should not use '=' or ';'<br>✔️ #include should use &lt;&gt;<br>✔️ int a = 5; needs semicolon</div>",
      "image": "",
      "audio": ""
    }
  ]
}
,{
  "title": "Locked & Loaded — Constants in Arduino",
  "lessons": [
    {
      "title": "🔒 What are Constants?",
      "content": "<div class='card'>Constants are values that <b>don’t change</b> during the program.</div>\n<div class='card'>They help us write <b>clear and error-proof</b> code.</div>\n<div class='card'>For example, instead of using <code>13</code> directly, we use <code>LED_BUILTIN</code>.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/PLknh0F.png",
      "audio": ""
    },
    {
      "title": "🔌 HIGH and LOW",
      "content": "<div class='card'><code>HIGH</code> = 5V or 3.3V output\n<br><code>LOW</code> = 0V or ground</div>\n<div class='card'>Used with <code>digitalWrite()</code> and <code>digitalRead()</code>.</div>\n<div class='card'>Example:\n<pre>digitalWrite(LED_BUILTIN, HIGH);</pre>\nTurns ON the LED.</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🔁 INPUT, OUTPUT, INPUT_PULLUP",
      "content": "<div class='card'>Used in <code>pinMode()</code> to set how a pin behaves.</div>\n<div class='card'>\n<ul>\n<li><b>INPUT</b> → Receives signal</li>\n<li><b>OUTPUT</b> → Sends signal</li>\n<li><b>INPUT_PULLUP</b> → Internal resistor enabled (default HIGH)</li>\n</ul></div>\n<div class='card'>Example:\n<pre>pinMode(2, INPUT_PULLUP);</pre></div>",
      "image": "https://i.imgur.com/MVaBZWg.png",
      "audio": ""
    },
    {
      "title": "🎮 Game: Identify the Constants!",
      "content": "<div class='card'>Which of these is NOT a constant?</div>\n<ul>\n<li>HIGH</li>\n<li>digitalWrite</li>\n<li>INPUT</li>\n<li>LED_BUILTIN</li>\n</ul>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Reveal Answer</button>\n<div class='card'>🎯 <code>digitalWrite</code> is a function, not a constant!</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🧮 Floating Point & Integer Constants",
      "content": "<div class='card'>Floating point constants: like <code>3.14</code> or <code>9.81</code></div>\n<div class='card'>Integer constants: whole numbers like <code>1</code>, <code>255</code>, or <code>0</code></div>\n<div class='card'>These values help with math, sensors, or configuration.</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "💡 LED_BUILTIN Constant",
      "content": "<div class='card'>Built-in LED? That’s what <code>LED_BUILTIN</code> points to!</div>\n<div class='card'>Different boards have different pin numbers — but this constant always works!</div>\n<div class='card'>Example:\n<pre>pinMode(LED_BUILTIN, OUTPUT);\ndigitalWrite(LED_BUILTIN, HIGH);</pre></div>",
      "image": "https://i.imgur.com/hxj2FPu.png",
      "audio": ""
    },
    {
      "title": "✅ true and false",
      "content": "<div class='card'><code>true</code> = 1, <code>false</code> = 0</div>\n<div class='card'>Used in boolean expressions, conditions, and digital logic.</div>\n<div class='card'>Example:\n<pre>\nbool ledState = true;\ndigitalWrite(13, ledState);\n</pre></div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎥 Video: Constants in Action",
      "content": "<div class='card'>Watch how constants like <code>HIGH</code>, <code>INPUT</code>, and <code>LED_BUILTIN</code> make Arduino programs readable!</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/oH2sXq5lso4' frameborder='0' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "📚 Quiz: What's That Constant?",
      "content": "<div class='card'>Which constant is used for internal pull-up resistor?</div>\n<ul>\n<li>INPUT</li>\n<li>INPUT_PULLUP</li>\n<li>HIGH</li>\n<li>LED_BUILTIN</li>\n</ul>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Reveal Answer</button>\n<div class='card'>✅ INPUT_PULLUP!</div>",
      "image": "",
      "audio": ""
    }
  ]
}
,{
  "title": "Types Unleashed — Exploring Data Types in Arduino",
  "lessons": [
    {
      "title": "🔍 Why Do Data Types Matter?",
      "content": "<div class='card'>Have you ever written a number and later wished it could store text? Or tried storing a sentence inside a light switch? 🤯 That’s what happens when you ignore <b>data types</b>.</div>\n<div class='card'>In Arduino, data types tell the microcontroller what kind of value to expect: numbers, text, on/off states, or floating points. It saves memory, increases speed, and prevents chaos!</div>\n<div class='card'>We’re going to explore every type — not just what it is, but <i>why</i> and <i>when</i> to use it.</div>\n<div class='card'>By the end, you’ll know exactly when to say: \"Hey, this variable should be an <code>unsigned long</code> and NOT a <code>float</code>!\"</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/7ug65du.png",
      "audio": ""
    },
    {
      "title": "📦 Whole Numbers: int, long, short, byte",
      "content": "<div class='card'><code>int</code> is your classic whole number. From −32,768 to 32,767. Use it for things like temperature or score counters.</div>\n<div class='card'><code>long</code> handles HUGE numbers. Example: time in milliseconds — use <code>millis()</code>? You'll need <code>long</code>.</div>\n<div class='card'><code>short</code> is a compact <code>int</code> with smaller range. Rarely used. You’re better off with <code>int</code>.</div>\n<div class='card'><code>byte</code> stores 0 to 255. Perfect for RGB values, brightness levels, or small loops.</div>\n<pre class='card'>int score = 120;\nlong duration = 500000;\nbyte ledLevel = 128;</pre>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/VkLHwLr.png",
      "audio": ""
    },
    {
      "title": "💧 float & double — Hello Decimals!",
      "content": "<div class='card'>Numbers with dots! 3.14, 27.5, 0.01 — you’ll need <code>float</code> for these.</div>\n<div class='card'><code>float</code> gives 6-7 digits precision. That’s enough for most sensors, like temperature, voltage, or distance.</div>\n<div class='card'><code>double</code> in most Arduinos is just another <code>float</code>. (On 32-bit boards it may give better precision.)</div>\n<pre class='card'>float temp = 36.7;\ndouble speed = 1.23456;</pre>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/0NSUfb1.png",
      "audio": ""
    },
    {
      "title": "📧 Text Types: char, string, and String()",
      "content": "<div class='card'><code>char</code> holds a single character: 'A', 'B', 'z'. Just one!</div>\n<div class='card'><code>string</code> (lowercase) is a low-level array of <code>char</code> values — not easy to use.</div>\n<div class='card'><code>String()</code> (capital S) is Arduino’s friendly string object. You can use <code>String name = \"Kaustubh\";</code> and even check <code>name.length()</code>.</div>\n<pre class='card'>char letter = 'K';\nString name = \"RoboDict\";</pre>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🧠 True or False: bool & boolean",
      "content": "<div class='card'>This type stores <code>true</code> or <code>false</code>. Super useful in logic, buttons, conditions.</div>\n<pre class='card'>bool isOn = true;\nboolean gateOpen = false;</pre>\n<div class='card'><code>boolean</code> is the same as <code>bool</code>. Arduino made it to match C-style readability.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🚀 Unsigned Data Types",
      "content": "<div class='card'>Need only positive numbers? Use <code>unsigned</code> types.</div>\n<ul class='card'>\n<li><code>unsigned char</code>: 0–255</li>\n<li><code>unsigned int</code>: 0–65,535</li>\n<li><code>unsigned long</code>: 0–4,294,967,295</li>\n</ul>\n<div class='card'>Faster, lighter, and memory-friendly if you KNOW you won't go negative.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "",
      "audio": ""
    },
    {
      "title": "📐 Special Types: size_t, void, word",
      "content": "<div class='card'><code>size_t</code>: Used internally when dealing with array lengths or sizes. Think: 'how many items?'</div>\n<div class='card'><code>word</code>: Just a fancy way of saying 16-bit unsigned number. (Same as <code>unsigned int</code>)</div>\n<div class='card'><code>void</code>: Used for functions that return nothing. Like <code>setup()</code> or <code>loop()</code>.</div>\n<pre class='card'>void blinkLED() {\n  digitalWrite(13, HIGH);\n}</pre>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎮 Mini Game: Spot the Type!",
      "content": "<div class='card'>What type would you use for:</div>\n<ul class='card'>\n<li>Pin voltage reading: __________</li>\n<li>Loop counter: __________</li>\n<li>Name of your robot: __________</li>\n<li>Time in ms: __________</li>\n</ul>\n<div class='card'>Answers: float, int, String, unsigned long</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎥 Video: Arduino Data Types Explained",
      "content": "<div class='card'>Watch this easy-to-understand video that covers everything we’ve just learned about variables and types!</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/KY9xOb_X2P4' frameborder='0' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    }
  ]
}
,{
  "title": "Types Unleashed — Exploring Data Types in Arduino",
  "lessons": [
    
    {
      "title": "🔒 Constant Variables with const",
      "content": "<div class='card'>Want to lock a variable so it never changes again? Use <code>const</code>!</div>\n<div class='card'><code>const</code> means constant. Like a rule that can’t be broken.</div>\n<pre class='card'>const int ledPin = 13;\n// You can't reassign ledPin now!</pre>\n<div class='card'>Great for pin numbers, fixed speeds, default values — anything that should remain untouched.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/ABsM3xz.png",
      "audio": ""
    },
    {
      "title": "🌍 Scope — Where Do Variables Live?",
      "content": "<div class='card'>Variables live in different places: globally or locally.</div>\n<div class='card'>A <b>global</b> variable is declared outside any function. It's accessible from anywhere!</div>\n<div class='card'>A <b>local</b> variable lives inside a function. It disappears once the function finishes.</div>\n<pre class='card'>int globalVar = 10;\nvoid loop() {\n  int localVar = 5;\n}</pre>\n<div class='card'>Keep your code tidy: use local when you can!</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🧊 static — Freeze a Variable in Time",
      "content": "<div class='card'><code>static</code> variables keep their value even after the function ends.</div>\n<div class='card'>It’s like putting the variable in a cryo-freeze and reviving it next time with all its memory intact.</div>\n<pre class='card'>void blinkCounter() {\n  static int count = 0;\n  count++;\n  Serial.println(count);\n}</pre>\n<div class='card'>Every time <code>blinkCounter()</code> runs, <code>count</code> continues from where it left off.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/gPXbJDI.png",
      "audio": ""
    },
    {
      "title": "⚠️ volatile — When Values Can Change Anytime!",
      "content": "<div class='card'><code>volatile</code> tells the compiler: 'This variable might change at any moment!'</div>\n<div class='card'>Used in special cases like interrupts or when hardware updates a variable.</div>\n<pre class='card'>volatile int buttonState = 0;\nvoid ISR() {\n  buttonState = 1;\n}</pre>\n<div class='card'>Without <code>volatile</code>, the compiler may ignore real-time changes.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/OHa9Zxo.png",
      "audio": ""
    }
  ]
},
{
  "title": "Types Unleashed — Exploring Data Types in Arduino",
  "lessons": [
    
    {
      "title": "🔄 Type Conversions — Shape Shifting in Arduino",
      "content": "<div class='card'>Ever needed to turn a decimal into an integer? Or a character into its numeric form? That’s what <b>type conversion</b> is for!</div>\n<div class='card'>In Arduino, you can convert between types using simple functions. But each has its rules — and risks!</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/hqTOmOf.png",
      "audio": ""
    },
    {
      "title": "🧱 Convert to byte()",
      "content": "<div class='card'>Use <code>byte()</code> to shrink values to 0–255. Careful! Values beyond that range get trimmed.</div>\n<pre class='card'>int a = 350;\nbyte b = byte(a); // b = 94 (because 350 wraps around)</pre>\n<div class='card'>Great for RGB colors, PWM, or space-saving tricks.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🔡 Convert to char()",
      "content": "<div class='card'><code>char()</code> changes numbers into ASCII characters. 65 becomes 'A', 97 becomes 'a'.</div>\n<pre class='card'>int asciiCode = 65;\nchar letter = char(asciiCode);</pre>\n<div class='card'>Fun way to decode or build strings!</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/fjDUIZf.png",
      "audio": ""
    },
    {
      "title": "💧 Convert to float()",
      "content": "<div class='card'>Want decimal precision? <code>float()</code> converts any number into float form.</div>\n<pre class='card'>int temp = 25;\nfloat exactTemp = float(temp); // 25.0</pre>\n<div class='card'>Useful for smooth math or sensor blending.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "",
      "audio": ""
    },
    {
      "title": "📏 Convert to int() and long()",
      "content": "<div class='card'><code>int()</code> drops decimal part. Use when precision isn't needed.</div>\n<pre class='card'>float reading = 23.78;\nint rounded = int(reading); // 23</pre>\n<div class='card'><code>long()</code> is like int, but stores big values. Useful when storing time or massive counters.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "",
      "audio": ""
    },
    {
      "title": "⚙️ Unsigned Conversions: unsigned int() & unsigned long()",
      "content": "<div class='card'><code>unsigned int()</code> and <code>unsigned long()</code> strip away negatives.</div>\n<pre class='card'>int x = -10;\nunsigned int y = unsigned(x); // y = a very large number</pre>\n<div class='card'>These convert values into positive range — be careful with signed to unsigned!</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🧙 Convert to word()",
      "content": "<div class='card'><code>word()</code> packs two bytes into a 16-bit number. You can also give it a single 16-bit value.</div>\n<pre class='card'>word w = word(255, 1); // 255 + (1 << 8) = 511</pre>\n<div class='card'>Used in timing, custom binary protocols, etc.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/ZzKP89c.png",
      "audio": ""
    }
  ]
},
{
  "title": "Types Unleashed — Exploring Data Types in Arduino",
  "lessons": [
    
    {
      "title": "🧰 Utilities — sizeof() & PROGMEM Magic",
      "content": "<div class='card'>Let's explore two powerful tools that make your Arduino memory-savvy and smarter: <code>sizeof()</code> and <code>PROGMEM</code>.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "",
      "audio": ""
    },
    {
      "title": "📦 sizeof() — Know Your Variable Size",
      "content": "<div class='card'><code>sizeof()</code> tells you how much space (in bytes) a variable or type takes.</div>\n<pre class='card'>int a = 10;\nSerial.println(sizeof(a)); // 2 on most boards</pre>\n<div class='card'>Great for optimizing memory, buffers, or checking array lengths.</div>\n<pre class='card'>char message[] = \"Kaustubh\";\nSerial.println(sizeof(message)); // includes null terminator</pre>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/y9FGVjz.png",
      "audio": ""
    },
    {
      "title": "🗂️ PROGMEM — Save Flash, Not SRAM!",
      "content": "<div class='card'><code>PROGMEM</code> stores constant data in Flash memory instead of precious SRAM.</div>\n<div class='card'>SRAM is very limited on Arduinos. Use <code>PROGMEM</code> for big lookup tables, fonts, and texts.</div>\n<pre class='card'>const char message[] PROGMEM = \"Hello RoboDict!\";</pre>\n<div class='card'>To access PROGMEM data, use special functions like <code>pgm_read_byte()</code>.</div>\n<pre class='card'>char c = pgm_read_byte(&(message[0]));</pre>\n<div class='card'>Advanced tip — works great for menus, sensor maps, or static text screens.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.imgur.com/NHFX1Zk.png",
      "audio": ""
    }
  ]
}




,{
  "title": "Cracking the Code Skeleton: Program Structure",
  "lessons": [
    {
      "title": "🧠 What’s the Structure of an Arduino Program?",
      "content": "<div class=\"card\">\nWelcome, scientist! 🧪 Before you make lights blink or robots dance, let’s learn the secret blueprint of every Arduino sketch.\n</div>\n<div class=\"card\">\nAn Arduino program always has two main blocks: <code>setup()</code> and <code>loop()</code>.\nThink of <b>setup()</b> as morning routines — runs only once.\n<b>loop()</b> is your daily grind — it repeats forever.\n</div>\n<div class=\"card\">\nHere’s the basic structure:\n<pre>void setup() {\n  // things to do ONCE\n}\n\nvoid loop() {\n  // things to do FOREVER\n}</pre>\n</div>\n<div class=\"card\">\nInside <code>setup()</code>, you initialize stuff like pin modes.\nInside <code>loop()</code>, you make your robot act — again and again.\n</div>\n<div class=\"card\">\nEvery line ends with a <code>;</code> — the famous semicolon warrior!\nAnd curly brackets <code>{ }</code> are code containers.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Sketch Scrambler Challenge",
      "content": "<div class=\"card\">Your task: Fix the scrambled sketch!</div>\n<div class=\"card\">\n<pre>\n// Unscramble this!\nvoid loop() {\n}\npinMode(13, OUTPUT);\ndigitalWrite(13, HIGH);\nvoid setup() {\n}\n</pre>\n</div>\n<div class=\"card\">\n<code>\n<script>\nfunction checkSketchOrder() {\n  const answer = document.getElementById('sketch-input').value.trim();\n  if(answer.includes('setup') && answer.includes('pinMode') && answer.includes('loop')) {\n    alert('🎉 Correct! You’ve got the basic structure down.');\n  } else {\n    alert('😬 Not quite. Try again!');\n  }\n}\n</script>\n</code>\n<textarea id=\"sketch-input\" rows=\"8\" style=\"width:100%; font-family:monospace\"></textarea><br>\n<button class=\"gaming-btn\" onclick=\"checkSketchOrder()\">Check My Sketch</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: Arduino Sketch Structure Explained",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/0Vq9dHifg0Q\" title=\"Arduino Sketch Structure\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💡 Try It Live: Blink with Basic Skeleton",
      "content": "<div class=\"card\">Time to write your first structured sketch. Try this in RoboDict Simulator or Arduino IDE:</div>\n<div class=\"card\">\n<pre>\nvoid setup() {\n  pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(500);\n  digitalWrite(13, LOW);\n  delay(500);\n}\n</pre>\n</div>\n<div class=\"card\">Notice the structure? One-time setup. Forever loop. That’s Arduino’s rhythm!</div>\n<div class=\"card\">Change the delay to <code>100</code> and see how fast it blinks!</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Storing Stuff: Understanding Variables",
  "lessons": [
    {
      "title": "📦 What is a Variable and Why Do We Need It?",
      "content": "<div class=\"card\">\nHey scientist! Imagine your robot needs to remember something — like how bright the LED should be. Where does it store that info?\n</div>\n<div class=\"card\">\nThat’s where <b>variables</b> come in. They’re like storage boxes inside your Arduino's brain!\n</div>\n<div class=\"card\">\nYou give each box a name, tell it what type of thing it holds, and boom — your robot remembers stuff.\n</div>\n<div class=\"card\">\nExample:\n<pre>int ledBrightness = 128;</pre>\nHere, <code>int</code> means it stores a number. <code>ledBrightness</code> is the name. And it’s currently 128.\n</div>\n<div class=\"card\">\nThere are many types of variables:\n<ul>\n<li><code>int</code> – whole numbers (e.g., 10, -5)</li>\n<li><code>float</code> – decimals (e.g., 3.14)</li>\n<li><code>char</code> – single letters ('A')</li>\n<li><code>boolean</code> – true or false</li>\n</ul>\n</div>\n<div class=\"card\">\nYou can change a variable later:\n<pre>ledBrightness = 200;</pre>\nNow your LED will shine brighter!\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Variable Vault",
      "content": "<div class=\"card\">You’ve got 4 boxes (variables). Can you store the right items in each?</div>\n<div class=\"card\">\n<code>\n<script>\nfunction checkVaultAnswer() {\n  const ans = document.getElementById('vaultInput').value.toLowerCase();\n  if (ans.includes('int age = 12') && ans.includes('float temp = 36.5') && ans.includes(\"char grade = 'A'\") && ans.includes('boolean isOn = true')) {\n    alert('🎉 Well done! Your variables are all safe in the vault.');\n  } else {\n    alert('🧠 Try again! Make sure each variable has the right type and format.');\n  }\n}\n</script>\n</code>\n<pre>\n// Store these in Arduino-style:\n// 1. Age = 12\n// 2. Temp = 36.5\n// 3. Grade = 'A'\n// 4. isOn = true\n</pre>\n<textarea id=\"vaultInput\" rows=\"8\" style=\"width:100%; font-family:monospace\"></textarea><br>\n<button class=\"gaming-btn\" onclick=\"checkVaultAnswer()\">Check My Variables</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: Variables Explained in Arduino ",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/BsU-LCWWcFY\" title=\"Arduino Variables - Engineers & Electronics\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💡 Try It Yourself: LED Brightness with Variable",
      "content": "<div class=\"card\">Try controlling the LED using a variable value instead of hardcoding numbers.</div>\n<div class=\"card\">\n<pre>\nint brightness = 100;  // create variable\n\nvoid setup() {\n  pinMode(9, OUTPUT);  // using pin 9 (PWM)\n}\n\nvoid loop() {\n  analogWrite(9, brightness);\n  delay(1000);\n}\n</pre>\n</div>\n<div class=\"card\">Change <code>brightness</code> to other values like 0, 255, or 180 and upload again. Your LED will shine accordingly!</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Let’s Write It: Your First Real Arduino Program",
  "lessons": [
    {
      "title": "✍️ Writing Your First Sketch — Line by Line!",
      "content": "<div class=\"card\">\nAlright scientist — it’s finally time to write your *first full sketch* from scratch.\nWe’re going to make an LED blink with proper structure, comments, and even a variable. 🤓\n</div>\n<div class=\"card\">\nHere’s what our sketch will do:\n✅ Setup pin 13 as output\n✅ Store delay time in a variable\n✅ Turn LED ON and OFF with delay\n</div>\n<div class=\"card\">\n<pre>\nint delayTime = 500;  // delay in milliseconds\n\nvoid setup() {\n  pinMode(13, OUTPUT);  // set pin 13 as output\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);  // turn LED ON\n  delay(delayTime);        // wait\n  digitalWrite(13, LOW);   // turn LED OFF\n  delay(delayTime);        // wait\n}\n</pre>\n</div>\n<div class=\"card\">\nThat’s it! This simple program turns your Arduino into a blinking wizard.\nYou just wrote your first robot command. 🪄\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Sketch Slot Machine",
      "content": "<div class=\"card\">Let’s play: match the code piece to its job!</div>\n<div class=\"card\">\n<code>\n<script>\nfunction checkSlotAnswers() {\n  let q1 = document.getElementById('q1').value.trim().toLowerCase();\n  let q2 = document.getElementById('q2').value.trim().toLowerCase();\n  let q3 = document.getElementById('q3').value.trim().toLowerCase();\n  if(q1.includes('setup') && q2.includes('loop') && q3.includes('digitalwrite')) {\n    alert('🎉 Correct! You know your sketch skeleton!');\n  } else {\n    alert('❌ Try again. Keep learning!');\n  }\n}\n</script>\n</code>\n<div><b>Q1:</b> Which function runs only once?</div>\n<input id=\"q1\" style=\"width:100%\" placeholder=\"Your answer\">\n<div><b>Q2:</b> Which function keeps running forever?</div>\n<input id=\"q2\" style=\"width:100%\" placeholder=\"Your answer\">\n<div><b>Q3:</b> Which command turns a pin ON or OFF?</div>\n<input id=\"q3\" style=\"width:100%\" placeholder=\"Your answer\"><br><br>\n<button class=\"gaming-btn\" onclick=\"checkSlotAnswers()\">Submit Answers</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: Writing Our First Sketch ",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/ZL53o0JRwNg\" title=\"Arduino Programming - First Sketch\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Experiment Time: Custom Delay LED Blink",
      "content": "<div class=\"card\">\nLet’s build a version of the blink sketch where YOU change the delay using Serial Monitor!\n</div>\n<div class=\"card\">\n<pre>\nint blinkTime;\n\nvoid setup() {\n  Serial.begin(9600);\n  pinMode(13, OUTPUT);\n  Serial.println(\"Enter delay in ms:\");\n}\n\nvoid loop() {\n  if (Serial.available()) {\n    blinkTime = Serial.parseInt();\n  }\n\n  digitalWrite(13, HIGH);\n  delay(blinkTime);\n  digitalWrite(13, LOW);\n  delay(blinkTime);\n}\n</pre>\n</div>\n<div class=\"card\">\nUpload this code → Open Serial Monitor → Type a number like <code>100</code> and press Enter. The LED will blink at that speed!\n</div>\n<div class=\"card\">\nTry different values (e.g., 50, 500, 1000) and see how your robot listens to YOU in real time.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Talk to Me, Robot: Serial Monitor Magic",
  "lessons": [
    {
      "title": "🧠 What is the Serial Monitor and Why Use It?",
      "content": "<div class=\"card\">\nHey scientist — wanna know what your robot is thinking?\nMeet your secret window: the <b>Serial Monitor</b>!\n</div>\n<div class=\"card\">\nIt’s a tool inside the Arduino IDE that lets your robot <i>talk back</i> to you — by printing messages, numbers, and even sensor readings.\n</div>\n<div class=\"card\">\nHere’s the basic setup:\n<pre>\nvoid setup() {\n  Serial.begin(9600); // Start communication\n  Serial.println(\"Hello Human!\");\n}\n\nvoid loop() {\n  Serial.println(\"I am looping...\");\n  delay(1000);\n}\n</pre>\n</div>\n<div class=\"card\">\nWhat does it do?\n- <code>Serial.begin(9600)</code>: Starts communication\n- <code>Serial.println()</code>: Prints text with a new line\n- <code>Serial.print()</code>: Prints on same line (no enter)\n</div>\n<div class=\"card\">\nTo use it: Upload the code → Click <b>Tools → Serial Monitor</b> or press <b>Ctrl + Shift + M</b>\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Serial Detective",
      "content": "<div class=\"card\">What will the Serial Monitor print?</div>\n<div class=\"card\">\n<pre>\nint count = 0;\nvoid setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  Serial.println(count);\n  count++;\n  delay(500);\n}\n</pre>\n</div>\n<div class=\"card\">\nWhat’s your guess after 5 seconds?\n<input id=\"serialGuess\" placeholder=\"Enter output here\" style=\"width:100%;\"><br><br>\n<button class=\"gaming-btn\" onclick=\"checkSerialGuess()\">Check Answer</button>\n<script>\nfunction checkSerialGuess() {\n  let ans = document.getElementById('serialGuess').value;\n  if (ans.includes('0') && ans.includes('1') && ans.includes('2') && ans.includes('3')) {\n    alert('✅ Yup! It counts upward and prints each number.');\n  } else {\n    alert('❌ Try again! It prints the value of `count` every half second.');\n  }\n}\n</script>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: Serial Monitor in Arduino ",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/FZTzcp5uH3Q\" title=\"Arduino Tutorial - Serial Monitor in Hindi\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Experiment: Say Hello with Input + Output",
      "content": "<div class=\"card\">\nLet’s make your robot talk AND listen!\nYou’ll type something in the Serial Monitor — and Arduino will repeat it like a parrot. 🦜\n</div>\n<div class=\"card\">\n<pre>\nString inputText;\n\nvoid setup() {\n  Serial.begin(9600);\n  Serial.println(\"Type something:\");\n}\n\nvoid loop() {\n  if (Serial.available()) {\n    inputText = Serial.readString();\n    Serial.print(\"You said: \");\n    Serial.println(inputText);\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\nUpload the sketch → Open Serial Monitor → Type something → BOOM! Robot speaks.\n</div>\n<div class=\"card\">\nTry funny messages, secret codes, or emojis. Your robot’s got voice now (well… almost 😅)\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },{
  "title": "Baud Rate: Your Robot’s Talking Speed",
  "content": "<div class=\"card\">\n📡 When your Arduino talks to your PC (via Serial Monitor), they need to agree on a <b>speed of conversation</b>.\nThis speed is called the <b>Baud Rate</b>.\n</div>\n\n<div class=\"card\">\n💬 A Baud Rate is the number of bits (tiny pieces of data) sent per second.\nSo when you write:\n<pre>Serial.begin(9600);</pre>\nit means: “Hey Arduino, talk at 9600 bits per second.”\n</div>\n\n<div class=\"card\">\n🎙️ The most common baud rate is <code>9600</code> — it’s fast enough for most sensors and messages.\nBut you can also use values like <code>115200</code> for high-speed projects.\n</div>\n\n<div class=\"card\">\n⚠️ Both Arduino and Serial Monitor must use the same Baud Rate.\nIf one talks faster than the other — you'll get garbage like this:\n<pre>�$%#*^@~</pre>\n</div>\n\n<div class=\"card\">\n🧠 Rule of thumb:\n- Use <b>9600</b> for simple text/debugging\n- Use <b>115200</b> for faster data (like graphs or sensors)\n</div>\n\n<div class=\"card\">\n🤔 Bonus: “Baud” comes from Émile Baudot — a French engineer who invented early communication systems.\nYour robot's talking tech is literally based on history!\n</div>\n\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
  "image": "url",
  "audio": "url"
}

  ]
},{
  "title": "Know Your Numbers: Numeric Data Types in Arduino",
  "lessons": [
    {
      "title": "🔢 All About Numbers in Arduino",
      "content": "<div class=\"card\">\n🧠 In Arduino, numbers aren't just numbers. They have <b>types</b>, and each type decides how much space they use and what values they can hold.\n</div>\n\n<div class=\"card\">\n💡 Here's a cheat sheet:\n<ul>\n<li><code>int</code>: Whole numbers from -32,768 to 32,767</li>\n<li><code>long</code>: Bigger whole numbers</li>\n<li><code>float</code>: Decimal numbers like 3.14</li>\n<li><code>unsigned int</code>: Only positive numbers (0 to 65,535)</li>\n</ul>\n</div>\n\n<div class=\"card\">\n⚠️ Example:\n<pre>\nint speed = 100;\nfloat voltage = 4.96;\nlong bigNum = 100000;\n</pre>\nThis way, your Arduino stores the exact kind of number you need — nothing more, nothing less.\n</div>\n\n<div class=\"card\">\n📏 Why does it matter?\nArduino has <b>very limited memory</b> — wasting bytes can crash your code. Choosing the right type = efficient code!\n</div>\n\n<div class=\"card\">\n🏋️‍♂️ Use <code>int</code> for sensors, <code>float</code> for voltages/temperatures, and <code>long</code> for timers or millis().\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Data Type Battle Royale",
      "content": "<div class=\"card\">\nYou have to pick the perfect data type for each case. Ready?\n</div>\n<div class=\"card\">\n<pre>\n1️⃣ Storing the value: 5.6 volts = ?\n2️⃣ Counting steps (0-100) = ?\n3️⃣ Measuring time in milliseconds (up to 10 million) = ?\n4️⃣ Distance in cm (no decimals) = ?\n</pre>\n</div>\n<div class=\"card\">\n<script>\nfunction checkTypes() {\n  const ans1 = document.getElementById('a1').value.toLowerCase();\n  const ans2 = document.getElementById('a2').value.toLowerCase();\n  const ans3 = document.getElementById('a3').value.toLowerCase();\n  const ans4 = document.getElementById('a4').value.toLowerCase();\n  if(ans1.includes('float') && ans2.includes('int') && ans3.includes('long') && ans4.includes('unsigned')) {\n    alert('🎉 Victory! You’ve mastered number logic.');\n  } else {\n    alert('😬 Try again! Hint: Think about size + decimals.');\n  }\n}\n</script>\n<input id=\"a1\" placeholder=\"Type for 5.6 volts\" style=\"width:100%\"><br>\n<input id=\"a2\" placeholder=\"Type for step counter\" style=\"width:100%\"><br>\n<input id=\"a3\" placeholder=\"Type for 10 million ms\" style=\"width:100%\"><br>\n<input id=\"a4\" placeholder=\"Type for distance in cm\" style=\"width:100%\"><br><br>\n<button class=\"gaming-btn\" onclick=\"checkTypes()\">Submit Answers</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: Numeric Data Types Explained ",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/lLBOgbMyyX8\" title=\"Arduino Numeric Data Types\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Type Overflow Crash Test",
      "content": "<div class=\"card\">\nLet’s crash some data! 🧨 Try this sketch and observe what happens.\n</div>\n<div class=\"card\">\n<pre>\nint value = 32766;\n\nvoid setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  value++;\n  Serial.println(value);\n  delay(1000);\n}\n</pre>\n</div>\n<div class=\"card\">\nWatch closely. Once it hits 32767, it wraps around to... -32768! That’s called <b>overflow</b>. ⚠️\n</div>\n<div class=\"card\">\nTry changing <code>int</code> to <code>long</code> and see how long it goes now.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Talking in Text: char & String in Arduino",
  "lessons": [
    {
      "title": "📝 Understanding char and String",
      "content": "<div class=\"card\">\n📢 Your robot can count, light up, and make noise... but can it say words? Yes — using <b>text data types</b>!\n</div>\n<div class=\"card\">\nThere are 2 main types:\n<ul>\n<li><code>char</code>: Stores a <b>single character</b> — like <code>'A'</code> or <code>'5'</code></li>\n<li><code>String</code>: Stores a <b>sequence of characters</b> — like <code>\"Hello World!\"</code></li>\n</ul>\n</div>\n<div class=\"card\">\nExamples:\n<pre>\nchar grade = 'A';\nString name = \"Kaustubh\";\n</pre>\nStrings are powerful — you can join them, measure them, and compare them!\n</div>\n<div class=\"card\">\nYou can even mix text and numbers:\n<pre>\nString msg = \"Speed: \";\nint speed = 50;\nSerial.println(msg + speed);\n</pre>\nThis will print: <b>Speed: 50</b>\n</div>\n<div class=\"card\">\n⚠️ Bonus Tip: <code>char</code> uses 1 byte, but <code>String</code> uses dynamic memory.\nToo many Strings = 🔥 crash! Be smart, and free memory when needed.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: char or String?",
      "content": "<div class=\"card\">\nDecide whether each line should use <code>char</code> or <code>String</code>.\n</div>\n<div class=\"card\">\n<pre>\n1️⃣ Grade = 'B'\n2️⃣ Name = \"Robot123\"\n3️⃣ KeyPressed = '?'\n4️⃣ WelcomeMsg = \"Hello Kaustubh!\"\n</pre>\n</div>\n<div class=\"card\">\n<script>\nfunction checkCharString() {\n  let a1 = document.getElementById('g1').value.toLowerCase();\n  let a2 = document.getElementById('g2').value.toLowerCase();\n  let a3 = document.getElementById('g3').value.toLowerCase();\n  let a4 = document.getElementById('g4').value.toLowerCase();\n  if (a1.includes('char') && a2.includes('string') && a3.includes('char') && a4.includes('string')) {\n    alert('🎉 Nice! You’ve nailed the text types.');\n  } else {\n    alert('🧐 Check again — remember 1 letter vs full word.');\n  }\n}\n</script>\n<input id=\"g1\" placeholder=\"Type for Grade\" style=\"width:100%\"><br>\n<input id=\"g2\" placeholder=\"Type for Name\" style=\"width:100%\"><br>\n<input id=\"g3\" placeholder=\"Type for KeyPressed\" style=\"width:100%\"><br>\n<input id=\"g4\" placeholder=\"Type for WelcomeMsg\" style=\"width:100%\"><br><br>\n<button class=\"gaming-btn\" onclick=\"checkCharString()\">Check Answers</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: Arduino Text Data Types ",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/dn78xZ0m6r4\" title=\"Arduino String and Char Types\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💬 Try It: Input and Reply with Strings",
      "content": "<div class=\"card\">\nLet’s get your robot to talk to the user. Type your name, and Arduino will say hello.\n</div>\n<div class=\"card\">\n<pre>\nString name;\n\nvoid setup() {\n  Serial.begin(9600);\n  Serial.println(\"What's your name?\");\n}\n\nvoid loop() {\n  if (Serial.available()) {\n    name = Serial.readString();\n    Serial.print(\"Hello, \");\n    Serial.println(name);\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\nUpload this sketch → Open Serial Monitor → Type your name and press Enter.\nBoom! Your robot just greeted you like a pal. 🥳\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Brains with Bins: Mastering Arrays in Arduino",
  "lessons": [
    {
      "title": "📦 What Are Arrays and Why Use Them?",
      "content": "<div class=\"card\">\nEver wanted to store 5 sensor values? Or 3 LED pins? \nBoom — you need an <b>array</b>. Think of it like a box with slots.\n</div>\n<div class=\"card\">\n📋 An array stores <b>multiple values</b> of the same type. \nExample:\n<pre>int ledPins[3] = {8, 9, 10};</pre>\nThis creates 3 slots to store pin numbers.\n</div>\n<div class=\"card\">\nYou access items using their position (called <b>index</b>), starting from 0:\n<pre>digitalWrite(ledPins[0], HIGH);  // controls pin 8\n</pre>\n</div>\n<div class=\"card\">\n🔁 Arrays + loops = ultimate power:\n<pre>\nfor(int i = 0; i < 3; i++) {\n  digitalWrite(ledPins[i], HIGH);\n  delay(500);\n}\n</pre>\nOne loop, many actions. That’s the power of bins. 🧠\n</div>\n<div class=\"card\">\n⚠️ Don’t go out of bounds!\nIf your array has 5 elements, <code>array[5]</code> will crash it.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Array Ping Pong",
      "content": "<div class=\"card\">\nLet’s test your index IQ. What’s the output of this sketch?\n</div>\n<div class=\"card\">\n<pre>\nint values[4] = {10, 20, 30, 40};\nSerial.println(values[2]);\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"arrayAnswer\" style=\"width:100%\" placeholder=\"Your answer (number)\">\n<br><br>\n<button class=\"gaming-btn\" onclick=\"checkArrayAnswer()\">Submit</button>\n<script>\nfunction checkArrayAnswer() {\n  let ans = document.getElementById('arrayAnswer').value.trim();\n  if(ans === \"30\") {\n    alert('✅ Correct! Index 2 means the third item: 30.');\n  } else {\n    alert('❌ Nope! Arrays start at 0. Index 2 = third item.');\n  }\n}\n</script>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: Arrays in Arduino ",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/1EdHFLsp9Ms\" title=\"Arduino Arrays in Hindi\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💡 Try It: Blink LEDs Using Arrays + Loop",
      "content": "<div class=\"card\">\nHere’s a cool sketch that turns on 3 LEDs one by one using arrays and a loop:\n</div>\n<div class=\"card\">\n<pre>\nint ledPins[3] = {2, 3, 4};\n\nvoid setup() {\n  for(int i = 0; i < 3; i++) {\n    pinMode(ledPins[i], OUTPUT);\n  }\n}\n\nvoid loop() {\n  for(int i = 0; i < 3; i++) {\n    digitalWrite(ledPins[i], HIGH);\n    delay(300);\n    digitalWrite(ledPins[i], LOW);\n    delay(300);\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\nYou just made a running light. Try changing the pins or delay to customize it!\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Controlling the World: Digital I/O in Arduino",
  "lessons": [
    {
      "title": "⚡ Meet Digital I/O: Your Arduino’s Superpower",
      "content": "<div class=\"card\">\nYour Arduino has <b>digital pins</b> — little magic gates that can either be <b>ON</b> or <b>OFF</b>.\nThey’re used to control LEDs, motors, buzzers, and to <i>read</i> buttons, sensors, and switches.\n</div>\n\n<div class=\"card\">\n💡 There are 2 modes for each pin:\n<code>pinMode(pin, mode)</code> sets it up:\n<ul>\n<li><b>OUTPUT</b> — Arduino sends signals</li>\n<li><b>INPUT</b> — Arduino listens</li>\n</ul>\n</div>\n\n<div class=\"card\">\n🖐️ To <b>write</b> to a pin:\n<pre>\ndigitalWrite(13, HIGH);  // turn ON\n</pre>\nTo <b>read</b> from a pin:\n<pre>\nint state = digitalRead(7);  // button pressed?\n</pre>\n</div>\n\n<div class=\"card\">\n🔁 Real example:\n<pre>\nvoid setup() {\n  pinMode(13, OUTPUT);\n}\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(1000);\n  digitalWrite(13, LOW);\n  delay(1000);\n}\n</pre>\nThis blinks an LED on pin 13 every second.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Input or Output?",
      "content": "<div class=\"card\">\nPick the right mode for each case:</div>\n<div class=\"card\">\n<pre>\n1️⃣ Controlling a motor = ?\n2️⃣ Reading a button = ?\n3️⃣ Powering an LED = ?\n4️⃣ Getting a signal from sensor = ?\n</pre>\n</div>\n<div class=\"card\">\n<script>\nfunction checkIOAnswers() {\n  let a1 = document.getElementById('io1').value.toLowerCase();\n  let a2 = document.getElementById('io2').value.toLowerCase();\n  let a3 = document.getElementById('io3').value.toLowerCase();\n  let a4 = document.getElementById('io4').value.toLowerCase();\n  if (a1 === 'output' && a2 === 'input' && a3 === 'output' && a4 === 'input') {\n    alert('✅ Perfect! You’re a digital master.');\n  } else {\n    alert('❌ Hmm... Check which way the info flows.');\n  }\n}\n</script>\n<input id=\"io1\" placeholder=\"1\" style=\"width:100%\"><br>\n<input id=\"io2\" placeholder=\"2\" style=\"width:100%\"><br>\n<input id=\"io3\" placeholder=\"3\" style=\"width:100%\"><br>\n<input id=\"io4\" placeholder=\"4\" style=\"width:100%\"><br><br>\n<button class=\"gaming-btn\" onclick=\"checkIOAnswers()\">Check Answers</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: Digital I/O Functions ",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/qvUUFUCzPBY\" title=\"Arduino Digital I/O Functions in Hindi\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Hands-On: Button → LED Reaction",
      "content": "<div class=\"card\">\nConnect a push button to pin 7 and an LED to pin 13. Let’s make a reaction circuit!</div>\n<div class=\"card\">\n<pre>\nvoid setup() {\n  pinMode(7, INPUT);\n  pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n  int button = digitalRead(7);\n  if (button == HIGH) {\n    digitalWrite(13, HIGH);\n  } else {\n    digitalWrite(13, LOW);\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\nWhen you press the button, the LED lights up. Classic Arduino magic! 💡\n</div>\n<div class=\"card\">\nTry replacing the button with a touch sensor or vibration sensor to upgrade the circuit.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Smooth Moves: Analog Input & Output in Arduino",
  "lessons": [
    {
      "title": "🎛️ Reading the World: Analog Input & PWM Output",
      "content": "<div class=\"card\">\nDigital signals = ON or OFF. But analog? It’s smooth, continuous, real-world data — like light levels, temperature, or sound.\n</div>\n<div class=\"card\">\n🎚️ Use <code>analogRead(pin)</code> to read analog inputs:\n<pre>int val = analogRead(A0);</pre>\nThis gives a value from <b>0 to 1023</b> — like a volume knob.\n</div>\n<div class=\"card\">\n⚡ And what if you want to <b>output</b> smooth values? Use PWM!\nArduino uses <b>Pulse Width Modulation</b> to fake analog output with fast ON/OFF pulses.\n<pre>analogWrite(pin, value);</pre>\nvalue = 0 to 255 (where 255 = full power)\n</div>\n<div class=\"card\">\n🎨 Use analogWrite to dim LEDs, control motor speed, and more. It feels smooth to your eyes — even though it's just fast switching.\n</div>\n<div class=\"card\">\n⚠️ Not all pins support PWM! Use the ones with <b>~</b> symbol next to them (like 3, 5, 6, 9, 10, 11 on UNO).\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: 0–1023 or 0–255?",
      "content": "<div class=\"card\">\nTell whether these functions return 0–1023 or 0–255 range.</div>\n<div class=\"card\">\n<pre>\n1️⃣ analogRead(A0) → ?\n2️⃣ analogWrite(3, 128) → ?\n3️⃣ analogRead(A3) → ?\n4️⃣ analogWrite(5, 255) → ?\n</pre>\n</div>\n<div class=\"card\">\n<script>\nfunction checkAnalogGame() {\n  let a1 = document.getElementById('ag1').value;\n  let a2 = document.getElementById('ag2').value;\n  let a3 = document.getElementById('ag3').value;\n  let a4 = document.getElementById('ag4').value;\n  if (a1 === \"1023\" && a2 === \"255\" && a3 === \"1023\" && a4 === \"255\") {\n    alert('🎉 Correct! You know your analog domains.');\n  } else {\n    alert('❌ Oops! Remember: read = 1023, write = 255.');\n  }\n}\n</script>\n<input id=\"ag1\" placeholder=\"Range for #1\" style=\"width:100%\"><br>\n<input id=\"ag2\" placeholder=\"Range for #2\" style=\"width:100%\"><br>\n<input id=\"ag3\" placeholder=\"Range for #3\" style=\"width:100%\"><br>\n<input id=\"ag4\" placeholder=\"Range for #4\" style=\"width:100%\"><br><br>\n<button class=\"gaming-btn\" onclick=\"checkAnalogGame()\">Check Answers</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: Analog I/O Explained ",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/HnCZJjsYltE\" title=\"Arduino Analog Read and Write in Hindi\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔧 Project: Dim LED With Potentiometer",
      "content": "<div class=\"card\">\n🎛️ You’ll use a potentiometer (knob) on A0 to control the brightness of an LED on pin 9.\n</div>\n<div class=\"card\">\n<pre>\nint pot = A0;\nint led = 9;\n\nvoid setup() {\n  pinMode(led, OUTPUT);\n}\n\nvoid loop() {\n  int val = analogRead(pot);\n  int brightness = map(val, 0, 1023, 0, 255);\n  analogWrite(led, brightness);\n}\n</pre>\n</div>\n<div class=\"card\">\n📏 We used <code>map()</code> to convert 0–1023 input into 0–255 output. Now turning the knob dims the LED in real time. 🌗\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Decide Like a Pro: The if...else Statement",
  "lessons": [
    {
      "title": "🧠 Meet the if...else Statement",
      "content": "<div class=\"card\">\nWhat if your robot needs to decide: <i>Should I move?</i> <i>Is it dark?</i> That’s where <b>if...else</b> comes in!\n</div>\n<div class=\"card\">\nSyntax:\n<pre>\nif(condition) {\n  // do something\n} else {\n  // do something else\n}\n</pre>\n</div>\n<div class=\"card\">\nExample:\n<pre>\nint sensor = analogRead(A0);\nif(sensor > 500) {\n  digitalWrite(LED_BUILTIN, HIGH);\n} else {\n  digitalWrite(LED_BUILTIN, LOW);\n}\n</pre>\n🔍 This will light the LED if it’s bright!\n</div>\n<div class=\"card\">\n🧩 Conditions can use: <code>==</code>, <code>!=</code>, <code><</code>, <code>></code>, <code>&&</code> (AND), <code>||</code> (OR)\n</div>\n<div class=\"card\">\n💡 Think of it like a brain: If this happens — do that. Else — do something else. Simple logic, big power.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Predict the Output",
      "content": "<div class=\"card\">\nWhat will this sketch do?</div>\n<div class=\"card\">\n<pre>\nint temp = 30;\nif(temp < 25) {\n  Serial.println(\"Cool\");\n} else {\n  Serial.println(\"Hot\");\n}\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"ifgame\" placeholder=\"What will print?\" style=\"width:100%\">\n<br><br>\n<button class=\"gaming-btn\" onclick=\"checkIfGame()\">Submit</button>\n<script>\nfunction checkIfGame() {\n  const ans = document.getElementById('ifgame').value.toLowerCase();\n  if(ans.includes(\"hot\")) {\n    alert('🔥 Correct! The temp is 30, so else block runs.');\n  } else {\n    alert('❄️ Oops! Check the condition again — temp is 30.');\n  }\n}\n</script>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: If Else in Arduino ",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/lT0NTCkK3vM\" title=\"If Else Statement Arduino Hindi\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔧 Mini Project: Auto Night Light",
      "content": "<div class=\"card\">\n🛏️ Build an auto night-light that turns ON when the room is dark.</div>\n<div class=\"card\">\nConnect a photoresistor (LDR) to A0 and LED to pin 9.\n</div>\n<div class=\"card\">\n<pre>\nint ldr = A0;\nint led = 9;\n\nvoid setup() {\n  pinMode(led, OUTPUT);\n}\n\nvoid loop() {\n  int light = analogRead(ldr);\n  if(light < 400) {\n    digitalWrite(led, HIGH);\n  } else {\n    digitalWrite(led, LOW);\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\nTry changing the <code>400</code> threshold based on your room brightness. 🔦</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Multiple Choices: if...else if in Arduino",
  "lessons": [
    {
      "title": "🧠 Understanding if...else if",
      "content": "<div class=\"card\">\nSometimes, two choices aren’t enough. What if your robot sees <b>LOW</b>, <b>MEDIUM</b>, or <b>HIGH</b> brightness? Enter the hero: <b>else if</b>.\n</div>\n<div class=\"card\">\nSyntax:\n<pre>\nif(condition1) {\n  // do something\n} else if(condition2) {\n  // do something else\n} else {\n  // default case\n}\n</pre>\n</div>\n<div class=\"card\">\nExample:\n<pre>\nint temp = 28;\nif(temp < 20) {\n  Serial.println(\"Cold\");\n} else if(temp < 30) {\n  Serial.println(\"Warm\");\n} else {\n  Serial.println(\"Hot\");\n}\n</pre>\n</div>\n<div class=\"card\">\nThe robot checks the first condition, then the second, then defaults to the last one. This is how you add <b>smart decisions</b>.\n</div>\n<div class=\"card\">\nPro Tip: Keep your conditions ordered from most specific to least. 🧩\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: What's the Output?",
      "content": "<div class=\"card\">\nPredict the printed result:\n</div>\n<div class=\"card\">\n<pre>\nint x = 55;\nif(x < 30) {\n  Serial.println(\"Low\");\n} else if(x < 60) {\n  Serial.println(\"Medium\");\n} else {\n  Serial.println(\"High\");\n}\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"elseifgame\" placeholder=\"What will print?\" style=\"width:100%\">\n<br><br>\n<button class=\"gaming-btn\" onclick=\"checkElseIfGame()\">Submit</button>\n<script>\nfunction checkElseIfGame() {\n  const val = document.getElementById('elseifgame').value.toLowerCase();\n  if(val.includes(\"medium\")) {\n    alert('✅ Medium is correct! It matched the 2nd condition.');\n  } else {\n    alert('❌ Not quite. It skipped first, matched second.');\n  }\n}\n</script>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: if else if Explained ",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/XfGxZxXAxws\" title=\"Arduino else if in Hindi\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔧 Project: Temperature Range Indicator",
      "content": "<div class=\"card\">\n🌡️ Let’s build a color indicator using 3 LEDs: green, yellow, and red for different temperature zones.</div>\n<div class=\"card\">\nConnect:\n<ul>\n<li>Green LED to pin 3</li>\n<li>Yellow LED to pin 4</li>\n<li>Red LED to pin 5</li>\n<li>LM35 sensor to A0</li>\n</ul>\n</div>\n<div class=\"card\">\n<pre>\nvoid setup() {\n  for(int i=3;i<=5;i++) pinMode(i, OUTPUT);\n}\n\nvoid loop() {\n  int val = analogRead(A0);\n  float temp = val * 0.488;\n  \n  digitalWrite(3, LOW);\n  digitalWrite(4, LOW);\n  digitalWrite(5, LOW);\n\n  if(temp < 20) {\n    digitalWrite(3, HIGH); // Green\n  } else if(temp < 30) {\n    digitalWrite(4, HIGH); // Yellow\n  } else {\n    digitalWrite(5, HIGH); // Red\n  }\n  delay(500);\n}\n</pre>\n</div>\n<div class=\"card\">\nTry touching the sensor to raise temp and see the color change.🔥</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Control Center: Using switch...case in Arduino",
  "lessons": [
    {
      "title": "🔀 When If...Else Gets Too Long: Use switch...case!",
      "content": "<div class=\"card\">\nWhat if you're checking <b>one variable</b> against many exact values? Like checking user choices from 1 to 5?\n</div>\n<div class=\"card\">\nUse <code>switch...case</code> for a cleaner, structured alternative to multiple <code>if</code> statements.\n</div>\n<div class=\"card\">\nSyntax:\n<pre>\nswitch(variable) {\n  case value1:\n    // do this\n    break;\n  case value2:\n    // do that\n    break;\n  default:\n    // catch-all\n}\n</pre>\n</div>\n<div class=\"card\">\n🚨 Don't forget <code>break;</code> — or the code will 'fall through' to next case!\n</div>\n<div class=\"card\">\n🧠 Use this when:\n- You’re comparing 1 variable\n- To specific fixed values\n- And you want organized blocks\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Predict the LED Mode",
      "content": "<div class=\"card\">\nCheck this code and guess what mode the LED will follow based on <code>mode = 2</code>.\n</div>\n<div class=\"card\">\n<pre>\nint mode = 2;\nswitch(mode) {\n  case 1:\n    Serial.println(\"Blink Slow\");\n    break;\n  case 2:\n    Serial.println(\"Blink Fast\");\n    break;\n  default:\n    Serial.println(\"Off\");\n}\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"switchgame\" placeholder=\"Your answer\" style=\"width:100%\">\n<br><br>\n<button class=\"gaming-btn\" onclick=\"checkSwitchGame()\">Submit</button>\n<script>\nfunction checkSwitchGame() {\n  const val = document.getElementById('switchgame').value.toLowerCase();\n  if(val.includes(\"fast\")) {\n    alert('✅ Correct! Mode 2 triggers \"Blink Fast\"');\n  } else {\n    alert('❌ Nope! switch(mode) was 2, so case 2 runs.');\n  }\n}\n</script>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: switch...case in Hindi",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/6HiU77miGGc\" title=\"Arduino switch case Hindi\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔧 Project: Fan Speed Selector (Mode Switch)",
      "content": "<div class=\"card\">\n🌀 Let’s build a fan controller with 3 speeds and a button input!</div>\n<div class=\"card\">\nConnect:\n<ul>\n<li>Button to pin 2</li>\n<li>LED (as fan) to pin 9 (PWM)</li>\n</ul>\n</div>\n<div class=\"card\">\nEach time button is pressed, we change the speed (mode = 0 to 2).\n</div>\n<div class=\"card\">\n<pre>\nint btn = 2;\nint fan = 9;\nint mode = 0;\n\nvoid setup() {\n  pinMode(btn, INPUT_PULLUP);\n  pinMode(fan, OUTPUT);\n}\n\nvoid loop() {\n  if(digitalRead(btn) == LOW) {\n    mode++;\n    if(mode > 2) mode = 0;\n    delay(300);\n  }\n\n  switch(mode) {\n    case 0: analogWrite(fan, 0); break;\n    case 1: analogWrite(fan, 100); break;\n    case 2: analogWrite(fan, 200); break;\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\nTry swapping the LED with a motor module — and now you have a real fan controller! 😎</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "The Loop Machine: Mastering the For Loop",
  "lessons": [
    {
      "title": "♾️ What is a For Loop?",
      "content": "<div class=\"card\">\nImagine telling Arduino: <b>Do this 5 times</b>. That’s exactly what a <b>for loop</b> does — repeat stuff in a clean, powerful way.\n</div>\n<div class=\"card\">\nSyntax:\n<pre>\nfor(int i = 0; i < 5; i++) {\n  // your repeated code\n}\n</pre>\nThis means: start with i = 0, stop when i = 5, and increase i by 1 each time.\n</div>\n<div class=\"card\">\nExample:\n<pre>\nfor(int i = 0; i < 10; i++) {\n  digitalWrite(13, HIGH);\n  delay(200);\n  digitalWrite(13, LOW);\n  delay(200);\n}\n</pre>\n💡 This will blink LED 10 times!\n</div>\n<div class=\"card\">\n✅ When to use a <code>for</code> loop:\n<ul>\n<li>Fixed repetitions</li>\n<li>Indexing arrays</li>\n<li>LED chasers, counters, timed blinks</li>\n</ul>\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: For Loop Output Quiz",
      "content": "<div class=\"card\">\nWhat will be printed?\n</div>\n<div class=\"card\">\n<pre>\nfor(int i = 0; i < 3; i++) {\n  Serial.print(i);\n}\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"forgame\" placeholder=\"Your answer (eg. 012)\" style=\"width:100%\">\n<br><br>\n<button class=\"gaming-btn\" onclick=\"checkForGame()\">Submit</button>\n<script>\nfunction checkForGame() {\n  const val = document.getElementById('forgame').value;\n  if(val === \"012\") {\n    alert('✅ Correct! The loop prints 0, 1, 2.');\n  } else {\n    alert('❌ Nope. The loop runs for i = 0, 1, 2.');\n  }\n}\n</script>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: For Loop Explained ",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/1a3EjFvpkdU\" title=\"Arduino For Loop in Hindi\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔧 Project: LED Chaser (Knight Rider Style)",
      "content": "<div class=\"card\">\n🔄 Make 6 LEDs connected to pins 2–7 light up one after the other — just like a running light!</div>\n<div class=\"card\">\n<pre>\nvoid setup() {\n  for(int i=2; i<=7; i++) {\n    pinMode(i, OUTPUT);\n  }\n}\n\nvoid loop() {\n  for(int i=2; i<=7; i++) {\n    digitalWrite(i, HIGH);\n    delay(100);\n    digitalWrite(i, LOW);\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\n💡 Try making it reverse too — or bounce like a scanner!\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Endless Action: While Loops in Arduino",
  "lessons": [
    {
      "title": "🔁 Meet the While Loop",
      "content": "<div class=\"card\">\nSometimes, you don’t know *how many* times something needs to repeat — you just want it to run <b>until a condition is false</b>.\n</div>\n<div class=\"card\">\nSyntax:\n<pre>\nwhile(condition) {\n  // do something\n}\n</pre>\n🚨 Make sure your condition becomes false eventually — or you’ll get an infinite loop!\n</div>\n<div class=\"card\">\nExample:\n<pre>\nint x = 0;\nwhile(x < 5) {\n  Serial.println(x);\n  x++;\n}\n</pre>\nThis prints 0 to 4, like a for loop but more flexible.\n</div>\n<div class=\"card\">\nUse <b>while</b> when:\n<ul>\n<li>You don’t know how many times to loop</li>\n<li>You want to wait for user input or sensor value</li>\n</ul>\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Infinite Loop or Not?",
      "content": "<div class=\"card\">\nWill this code cause an infinite loop?</div>\n<div class=\"card\">\n<pre>\nint x = 1;\nwhile(x < 10) {\n  Serial.println(x);\n}\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"whilegame\" placeholder=\"Yes or No\" style=\"width:100%\">\n<br><br>\n<button class=\"gaming-btn\" onclick=\"checkWhileGame()\">Submit</button>\n<script>\nfunction checkWhileGame() {\n  const answer = document.getElementById('whilegame').value.toLowerCase();\n  if(answer === \"yes\") {\n    alert('✅ Correct! x never changes, so condition never becomes false. Infinite loop!');\n  } else {\n    alert('❌ Nope! The value of x is never updated, so it loops forever.');\n  }\n}\n</script>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: While Loops in Hindi",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/2Ey5UYtBqlg\" title=\"While Loop Arduino Hindi\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔧 Project: Wait for Button Press",
      "content": "<div class=\"card\">\nLet’s use a <b>while loop</b> to wait until a button is pressed — only then blink the LED.\n</div>\n<div class=\"card\">\nConnect:\n<ul>\n<li>Button to pin 2</li>\n<li>LED to pin 9</li>\n</ul>\n</div>\n<div class=\"card\">\n<pre>\nvoid setup() {\n  pinMode(2, INPUT_PULLUP);\n  pinMode(9, OUTPUT);\n}\n\nvoid loop() {\n  while(digitalRead(2) == HIGH) {\n    // wait until button is pressed\n  }\n  digitalWrite(9, HIGH);\n  delay(500);\n  digitalWrite(9, LOW);\n}\n</pre>\n</div>\n<div class=\"card\">\n🎮 Press the button — only then does the LED flash! Perfect for wait-until-user-input logic.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Make Your Own Commands: Custom Functions in Arduino",
  "lessons": [
    {
      "title": "🧠 Why Create Your Own Functions?",
      "content": "<div class=\"card\">\nImagine writing the same code again and again. Not fun, right? 😅\nWith <b>custom functions</b>, you create your own reusable blocks of logic!\n</div>\n<div class=\"card\">\nSyntax:\n<pre>\nvoid myFunction() {\n  // code here\n}\n</pre>\nThen you just call:\n<pre>\nmyFunction();\n</pre>\n🎉 Done!\n</div>\n<div class=\"card\">\nExample:\n<pre>\nvoid blink() {\n  digitalWrite(13, HIGH);\n  delay(500);\n  digitalWrite(13, LOW);\n  delay(500);\n}\n\nvoid loop() {\n  blink();\n}\n</pre>\n</div>\n<div class=\"card\">\n✅ Benefits:\n<ul>\n<li>Organized code</li>\n<li>Easy to debug</li>\n<li>Reusability</li>\n<li>Modular structure</li>\n</ul>\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Function Creator Challenge",
      "content": "<div class=\"card\">\n💡 What’s missing in this code?</div>\n<div class=\"card\">\n<pre>\nvoid loop() {\n  greet();\n}\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"funcgame\" placeholder=\"Type your answer...\" style=\"width:100%\">\n<br><br>\n<button class=\"gaming-btn\" onclick=\"checkFuncGame()\">Submit</button>\n<script>\nfunction checkFuncGame() {\n  const val = document.getElementById('funcgame').value.toLowerCase();\n  if(val.includes(\"define\") || val.includes(\"missing\") || val.includes(\"void greet\")) {\n    alert('✅ Correct! The function greet() must be defined before you can call it.');\n  } else {\n    alert('❌ Try again — greet() is undefined, we need to declare it.');\n  }\n}\n</script>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: Custom Functions in Arduino ",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/yZ_FvcyZqiw\" title=\"Creating your own functions - Arduino Hindi\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔧 Project: Dance with LEDs – Using Your Own Function",
      "content": "<div class=\"card\">\n🎆 Let’s make a custom function that creates an LED pattern.</div>\n<div class=\"card\">\nConnect:\n<ul>\n<li>3 LEDs to pins 3, 4, 5</li>\n</ul>\n</div>\n<div class=\"card\">\n<pre>\nvoid blinkAll() {\n  for(int i=3; i<=5; i++) {\n    digitalWrite(i, HIGH);\n  }\n  delay(500);\n  for(int i=3; i<=5; i++) {\n    digitalWrite(i, LOW);\n  }\n  delay(500);\n}\n\nvoid setup() {\n  for(int i=3; i<=5; i++) pinMode(i, OUTPUT);\n}\n\nvoid loop() {\n  blinkAll();\n}\n</pre>\n</div>\n<div class=\"card\">\n🔁 You just created your own mini light show function! Call it anytime — and reuse it in bigger patterns.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "The Return of the Value: Using `return` in Arduino",
  "lessons": [
    {
      "title": "📬 What is `return`?",
      "content": "<div class=\"card\">\nSo far, our functions did stuff — but didn’t <b>give anything back</b>.\nWith <code>return</code>, you can ask Arduino to run some code and <b>send a result back</b>.\n</div>\n<div class=\"card\">\nSyntax:\n<pre>\ntype functionName() {\n  // logic\n  return value;\n}\n</pre>\nExample:\n<pre>\nint add(int a, int b) {\n  return a + b;\n}\n</pre>\nNow you can call:\n<pre>\nint sum = add(3, 4);\n</pre>\n</div>\n<div class=\"card\">\n📌 You must specify the return type:\n<ul>\n<li><code>int</code> for integers</li>\n<li><code>float</code> for decimals</li>\n<li><code>bool</code> for true/false</li>\n</ul>\n</div>\n<div class=\"card\">\n🎯 Use this when your function needs to calculate or decide something, and pass it back to the main program.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Return Detective!",
      "content": "<div class=\"card\">\n🧠 What will this return?\n</div>\n<div class=\"card\">\n<pre>\nint multiply(int a, int b) {\n  return a * b;\n}\nvoid loop() {\n  int result = multiply(3, 5);\n  Serial.println(result);\n}\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"retgame\" placeholder=\"Your answer?\" style=\"width:100%\">\n<br><br>\n<button class=\"gaming-btn\" onclick=\"checkReturnGame()\">Submit</button>\n<script>\nfunction checkReturnGame() {\n  const val = document.getElementById('retgame').value.trim();\n  if(val === \"15\") {\n    alert('✅ Correct! 3 x 5 = 15.');\n  } else {\n    alert('❌ Nope! The result of 3 * 5 is 15.');\n  }\n}\n</script>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: The `return` Keyword Explained ",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/QC4RL4GAKtA\" title=\"Arduino Return Keyword Hindi\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔧 Project: Auto Temp Reader with Return",
      "content": "<div class=\"card\">\nLet’s build a function that reads LM35 sensor and returns temperature!</div>\n<div class=\"card\">\nConnect:\n<ul>\n<li>LM35 sensor to A0</li>\n<li>Optional: Serial Monitor</li>\n</ul>\n</div>\n<div class=\"card\">\n<pre>\nfloat getTemperature() {\n  int val = analogRead(A0);\n  return val * 0.488;\n}\n\nvoid setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  float temp = getTemperature();\n  Serial.println(temp);\n  delay(1000);\n}\n</pre>\n</div>\n<div class=\"card\">\n🎉 This keeps the main loop clean and puts the logic inside the return function. Much more readable!\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Instant Reactions: Using Interrupts in Arduino",
  "lessons": [
    {
      "title": "⚡ What are Interrupts?",
      "content": "<div class=\"card\">\nUsually, Arduino checks things one-by-one in the loop. But what if you want it to react <b>immediately</b> — like when a button is pressed?\n</div>\n<div class=\"card\">\nThat’s where <b>Interrupts</b> come in! 💥\nThey <b>interrupt</b> the current task and jump to a special function when a pin changes state.\n</div>\n<div class=\"card\">\nSyntax:\n<pre>\nattachInterrupt(digitalPinToInterrupt(pin), ISR_function, mode);\n</pre>\n<ul>\n<li><b>pin:</b> the interrupt pin (like 2 or 3)</li>\n<li><b>ISR_function:</b> function that runs when triggered (no delay!)</li>\n<li><b>mode:</b> WHEN to trigger (RISING, FALLING, CHANGE)\n</li>\n</ul>\n</div>\n<div class=\"card\">\n🚫 Inside an interrupt, avoid using <code>delay()</code> or <code>Serial.print()</code>.\nKeep it super short and fast.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Interrupt Mode Match",
      "content": "<div class=\"card\">\nWhich mode would you use to trigger an interrupt when a button goes from LOW to HIGH?\n</div>\n<div class=\"card\">\n<input id=\"intgame\" placeholder=\"Type RISING, FALLING or CHANGE\" style=\"width:100%\">\n<br><br>\n<button class=\"gaming-btn\" onclick=\"checkIntGame()\">Submit</button>\n<script>\nfunction checkIntGame() {\n  const val = document.getElementById('intgame').value.toLowerCase();\n  if(val === \"rising\") {\n    alert('✅ Correct! RISING triggers when the signal goes from LOW to HIGH.');\n  } else {\n    alert('❌ Nope! You’d use RISING for a LOW to HIGH transition.');\n  }\n}\n</script>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: Interrupts in Arduino ",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/-zWQqYRLH08\" title=\"Arduino Interrupt Hindi Tutorial\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔧 Project: Emergency Stop Button",
      "content": "<div class=\"card\">\n🛑 Let’s make an emergency stop button using interrupts.\n</div>\n<div class=\"card\">\nConnect:\n<ul>\n<li>LED to pin 9</li>\n<li>Button to pin 2</li>\n</ul>\n</div>\n<div class=\"card\">\n<pre>\nvolatile bool stopped = false;\n\nvoid stopNow() {\n  stopped = true;\n}\n\nvoid setup() {\n  pinMode(9, OUTPUT);\n  pinMode(2, INPUT_PULLUP);\n  attachInterrupt(digitalPinToInterrupt(2), stopNow, FALLING);\n}\n\nvoid loop() {\n  if(!stopped) {\n    digitalWrite(9, HIGH);\n    delay(300);\n    digitalWrite(9, LOW);\n    delay(300);\n  } else {\n    digitalWrite(9, LOW);\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\n👀 Press the button — the LED immediately stops blinking. No delay, no waiting.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Memory Magic: Understanding Pointers in Arduino",
  "lessons": [
    {
      "title": "🧠 What is a Pointer?",
      "content": "<div class=\"card\">\nA <b>pointer</b> is a variable that stores the <i>memory address</i> of another variable.\nSounds scary? Don’t worry — we’ll break it down 👇\n</div>\n<div class=\"card\">\nExample:\n<pre>\nint x = 10;\nint *ptr = &x;\n</pre>\n<code>*ptr</code> is a pointer. It stores the address of <code>x</code>. <code>&x</code> means \"address of x\".\n</div>\n<div class=\"card\">\nWant to know the actual value stored at that memory location?\n<pre>\nSerial.println(*ptr);  // prints 10\n</pre>\n<code>*</code> means \"dereference\" the pointer = get the value at the address.\n</div>\n<div class=\"card\">\nUse pointers when:\n<ul>\n<li>Passing values by reference</li>\n<li>Modifying variables inside functions</li>\n<li>Working with arrays efficiently</li>\n</ul>\n🔧 You’ve entered pro territory!\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Pointer Quiz - What's the Output?",
      "content": "<div class=\"card\">\nWhat will this code print?</div>\n<div class=\"card\">\n<pre>\nint a = 7;\nint *p = &a;\na = a + 3;\nSerial.println(*p);\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"ptrgame\" placeholder=\"Type your answer...\" style=\"width:100%\">\n<br><br>\n<button class=\"gaming-btn\" onclick=\"checkPointerGame()\">Submit</button>\n<script>\nfunction checkPointerGame() {\n  const val = document.getElementById('ptrgame').value.trim();\n  if(val === \"10\") {\n    alert('✅ Correct! a = 7 + 3 = 10. *p points to a.');\n  } else {\n    alert('❌ Nope! a became 10. *p sees the new value.');\n  }\n}\n</script>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: Pointers Explained in Hindi",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/uv1WEgZ7svU\" title=\"Arduino Pointers Hindi Tutorial\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Project: Modify a Value Using a Function with Pointer",
      "content": "<div class=\"card\">\nLet’s pass a variable <b>by pointer</b> to a function — and change its value.\n</div>\n<div class=\"card\">\n<pre>\nvoid doubleValue(int *val) {\n  *val = *val * 2;\n}\n\nvoid setup() {\n  Serial.begin(9600);\n  int x = 6;\n  doubleValue(&x);\n  Serial.println(x);  // prints 12\n}\n\nvoid loop() {}\n</pre>\n</div>\n<div class=\"card\">\n🪄 The function actually <b>modified</b> x because we passed its address! That's pointer power.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Time Travelers: Mastering Arduino Timing Functions",
  "lessons": [
    {
      "title": "⏳ Delay vs millis() vs micros()",
      "content": "<div class=\"card\">\nArduino offers different tools to handle <b>time</b>. Each one has its use!\n</div>\n<div class=\"card\">\n🕒 <code>delay(ms)</code> blocks the entire code for that many milliseconds.\n<pre>\ndelay(1000); // pause for 1 second\n</pre>\n</div>\n<div class=\"card\">\n⏱️ <code>millis()</code> returns the number of milliseconds since the Arduino started.\nUse it for <b>non-blocking</b> delays!\n</div>\n<div class=\"card\">\n📏 <code>micros()</code> returns microseconds (1 millionth of a second!). Great for very precise timing.\n</div>\n<div class=\"card\">\n🔧 Use <code>millis()</code> when you want other code to run while waiting. Ideal for blinking, inputs, and sensors.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Choose the Best Time Function",
      "content": "<div class=\"card\">\n🧠 Question: You want an LED to blink every second <b>without using delay()</b>. Which function should you use?\n</div>\n<div class=\"card\">\n<input id=\"timegame\" placeholder=\"Type: delay / millis / micros\" style=\"width:100%\">\n<br><br>\n<button class=\"gaming-btn\" onclick=\"checkTimeGame()\">Submit</button>\n<script>\nfunction checkTimeGame() {\n  const val = document.getElementById('timegame').value.trim().toLowerCase();\n  if(val === \"millis\") {\n    alert('✅ Correct! millis() lets other code run while you wait.');\n  } else {\n    alert('❌ Try again — delay blocks code, micros is too fast. millis is the one!');\n  }\n}\n</script>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Watch: Arduino Timing Functions ",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/2nxzrSn8VJU\" title=\"Arduino Time Functions Hindi\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Project: Blink Without delay()!",
      "content": "<div class=\"card\">\nLet’s blink an LED every second — <b>without using delay()</b> — using millis().\n</div>\n<div class=\"card\">\nConnect:\n<ul>\n<li>LED to pin 9</li>\n</ul>\n</div>\n<div class=\"card\">\n<pre>\nunsigned long lastTime = 0;\nconst int interval = 1000; // 1 second\n\nvoid setup() {\n  pinMode(9, OUTPUT);\n}\n\nvoid loop() {\n  if (millis() - lastTime >= interval) {\n    lastTime = millis();\n    digitalWrite(9, !digitalRead(9));\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\n🎉 This keeps blinking your LED every second — <i>while letting other code run too</i>. Pro-level multitasking!\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "What Are Libraries?",
  "lessons": [
    {
      "title": "📚 So… What *Exactly* Is a Library?",
      "content": "<div class=\"card\">\nA library in Arduino is like a magic toolbox 🧰.\n</div>\n<div class=\"card\">\nNeed to control a servo? → Use Servo library.\nWant to light up LEDs in patterns? → Use NeoPixel library.\n</div>\n<div class=\"card\">\nThey contain ready-made code to make your life 100x easier.\nYou just include the library — and boom, features unlocked!\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Why Use Libraries?",
      "content": "<div class=\"card\">\nImagine writing your own I2C driver from scratch... 😵\nWhy suffer?\n</div>\n<div class=\"card\">\nLibraries are built by pros — you can just use their functions:\n<pre>#include <Servo.h>\nmyservo.attach(9);</pre>\n</div>\n<div class=\"card\">\nThey save time, remove complexity, and increase reliability.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Library or Not?",
      "content": "<div class=\"card\">\nType 'Yes' if this is a library, or 'No' if not:\n<pre>\n1. Servo.h\n2. digitalWrite\n3. Wire.h\n4. loop()\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"libgame\" placeholder=\"Your answers (Y/N, comma-separated)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct: Yes, No, Yes, No! Libraries have .h headers!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎥 Video: What Are Arduino Libraries?",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/xq7g3Tz0D-Y\" title=\"What Are Arduino Libraries?\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔍 Types of Libraries",
      "content": "<div class=\"card\">\nThere are 3 main types:\n<ul>\n<li>📦 Built-in (e.g., Servo, Wire)</li>\n<li>🌐 Official installable (NeoPixel, LiquidCrystal)</li>\n<li>🧑‍💻 Custom from GitHub</li>\n</ul>\n</div>\n<div class=\"card\">\nYou can even make your own library!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🛠️ Installing a Library (Arduino IDE)",
      "content": "<div class=\"card\">\n1. Open Arduino IDE → Sketch → Include Library → Manage Libraries...\n</div>\n<div class=\"card\">\n2. Search for something (e.g., Adafruit NeoPixel)\n3. Click Install\n</div>\n<div class=\"card\">\nDone! Now you can <code>#include</code> it and use its functions.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧬 GitHub Library Installation (Manual)",
      "content": "<div class=\"card\">\nSometimes, cool libraries are on GitHub!\n</div>\n<div class=\"card\">\nSteps:\n<ol>\n<li>Download ZIP from GitHub</li>\n<li>In Arduino IDE → Sketch → Include Library → Add .ZIP Library...</li>\n<li>Browse & select the ZIP file</li>\n</ol>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📁 Inside a Library Folder",
      "content": "<div class=\"card\">\nLibrary folders usually contain:\n<ul><li><b>library.h</b> – main header</li>\n<li><b>library.cpp</b> – function code</li>\n<li><b>examples/</b> – test sketches</li>\n</ul>\n</div>\n<div class=\"card\">\nSome even include README.md and keywords.txt\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Quiz: Library Keywords!",
      "content": "<div class=\"card\">\nMatch the keyword with what it refers to:\n<ul>\n<li><b>attach()</b> — ???</li>\n<li><b>Serial.begin()</b> — ???</li>\n<li><b>pixels.show()</b> — ???</li>\n</ul>\n</div>\n<div class=\"card\">\n<input id=\"quizmatch\" placeholder=\"Servo, Serial, NeoPixel?\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ attach = Servo, Serial.begin = Serial, pixels.show = NeoPixel!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎉 Final Tip: Use Examples!",
      "content": "<div class=\"card\">\nAlmost every library comes with examples!\nFile → Examples → Choose your library → Pick a sketch!\n</div>\n<div class=\"card\">\nRun it, study it, remix it, and level up your Arduino skills! ⚡\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}




















      ]
    },
    {
      title:"Let’s Get Pinny: Digital I/O Deep Dive",
      modules:[
        {
  "title": "Toggling the World: Meet digitalWrite()",
  "lessons": [
    {
      "title": "💡 What is digitalWrite()?",
      "content": "<div class=\"card\">\n<code>digitalWrite(pin, value)</code> is your Arduino's way of saying:\n\"Turn that pin ON or OFF!\"\n</div>\n<div class=\"card\">\n<pre>\ndigitalWrite(13, HIGH);  // ON (5V)\ndigitalWrite(13, LOW);   // OFF (0V)\n</pre>\nSimple, right? Like flipping a light switch!\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔌 Real-Life Example: Kitchen Lights",
      "content": "<div class=\"card\">\nThink of Pin 13 as your kitchen light.\n</div>\n<div class=\"card\">\nWhen Mom says:\n👉 “Alexa, turn on kitchen light!”\nYour Arduino says:\n<pre>digitalWrite(13, HIGH);</pre>\n</div>\n<div class=\"card\">\nAnd to turn it off before bed:\n<pre>digitalWrite(13, LOW);</pre>\nSimple, reliable, robotic home automation 😎\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: HIGH or LOW?",
      "content": "<div class=\"card\">\nWhich command will turn on an LED?\n<pre>A. digitalWrite(9, LOW);\nB. digitalWrite(9, HIGH);</pre>\n</div>\n<div class=\"card\">\n<input id=\"pinQuiz\" placeholder=\"Type A or B\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ It’s B! HIGH = ON = 5V!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: LED Blink = digitalWrite in Action",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/XIIBY-1ZSsc\" title=\"Blink LED using digitalWrite()\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Button-Activated digitalWrite()",
      "content": "<div class=\"card\">\nMake an LED turn ON only when you press a button:\n<pre>\nif (digitalRead(2) == HIGH) {\n  digitalWrite(13, HIGH);\n} else {\n  digitalWrite(13, LOW);\n}\n</pre>\n</div>\n<div class=\"card\">\n👆 Welcome to interactive electronics — press to shine! 💡\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📘 Pro Tip: Must Set pinMode First!",
      "content": "<div class=\"card\">\nBefore using <code>digitalWrite()</code>, always set the pin as an OUTPUT:\n<pre>pinMode(13, OUTPUT);</pre>\nWithout this, your Arduino gets confused 😵‍💫\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎉 Bonus: Blink Without Delay Challenge",
      "content": "<div class=\"card\">\nCan you make the LED blink without using <code>delay()</code>?\nUse <code>millis()</code> instead to stay responsive!\n</div>\n<div class=\"card\">\nIf you crack this, you’re officially leveled up! 🧙‍♂️\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Listening to the World: Say Hello to digitalRead()",
  "lessons": [
    {
      "title": "👂 What is digitalRead()?",
      "content": "<div class=\"card\">\n<code>digitalRead(pin)</code> asks: Is the pin receiving HIGH (5V) or LOW (0V)?\n</div>\n<div class=\"card\">\nIt returns either:\n<ul><li><b>HIGH</b> – Pin has voltage (pressed/connected)</li><li><b>LOW</b> – Pin is grounded or idle</li></ul>\n</div>\n<div class=\"card\">\nExample:\n<pre>int buttonState = digitalRead(2);</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Real-Life Example: Doorbell Button",
      "content": "<div class=\"card\">\nWhen you press a doorbell, it connects a wire — that’s like sending HIGH to Arduino!\n</div>\n<div class=\"card\">\nSo your Arduino checks:\n<pre>if (digitalRead(4) == HIGH) {\n  ringBell();\n}</pre>\n</div>\n<div class=\"card\">\nSimple logic, massive possibilities 🔔\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Guess the Output!",
      "content": "<div class=\"card\">\nWhat will happen if pin 7 is HIGH and you run this?\n<pre>\nif (digitalRead(7) == HIGH) {\n  digitalWrite(13, HIGH);\n}\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"dreadgame\" placeholder=\"LED ON or OFF?\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Answer: LED turns ON (pin 13 = HIGH)!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Push Button with digitalRead",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/E-H6GufFTwc\" title=\"digitalRead explained\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💡 digitalRead + LED Control",
      "content": "<div class=\"card\">\nWiring:\n<ul><li>Button → Pin 2</li><li>LED → Pin 13</li></ul>\n</div>\n<div class=\"card\">\nCode:\n<pre>\nvoid loop() {\n  int state = digitalRead(2);\n  digitalWrite(13, state);\n}\n</pre>\n</div>\n<div class=\"card\">\nWhen you press → LED lights up. Simple echo machine!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔍 Pro Tip: Use INPUT_PULLUP",
      "content": "<div class=\"card\">\nAvoid noisy readings? Use:\n<pre>pinMode(2, INPUT_PULLUP);</pre>\n</div>\n<div class=\"card\">\nThis means the pin is HIGH by default.\nPressing the button pulls it LOW.\nYou just reverse logic in your code 👇\n<pre>\nif (digitalRead(2) == LOW) {\n  // Button pressed!\n}\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Experiment: Button Counter!",
      "content": "<div class=\"card\">\nMake Arduino count every time the button is pressed 👇\n</div>\n<div class=\"card\">\n<pre>\nint count = 0;\nvoid loop() {\n  if (digitalRead(2) == LOW) {\n    count++;\n    Serial.println(count);\n    delay(300); // debounce\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\nNow press that button and count your fame 😄\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "Before You Read or Write: pinMode()",
  "lessons": [
    {
      "title": "⚙️ Why pinMode() Matters",
      "content": "<div class=\"card\">\nBefore talking to a pin, tell Arduino what role it plays:\n<pre>pinMode(pin, mode);</pre>\n</div>\n<div class=\"card\">\nThere are 3 main modes:\n<ul>\n<li><b>OUTPUT</b> — Send signal out (e.g., LED, buzzer)</li>\n<li><b>INPUT</b> — Read signal in (e.g., button)</li>\n<li><b>INPUT_PULLUP</b> — Read signal in, but with an internal safety net</li>\n</ul>\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🏠 Real-Life Analogy: Room Roles",
      "content": "<div class=\"card\">\nImagine Arduino as a house.\n</div>\n<div class=\"card\">\nYou assign rooms for roles:\n<ul><li>Kitchen (OUTPUT) – makes stuff</li><li>Doorbell (INPUT) – listens for visitors</li><li>Sensor Room (INPUT_PULLUP) – quiet until triggered</li></ul>\n</div>\n<div class=\"card\">\n<code>pinMode(13, OUTPUT);</code> means: “Hey Pin 13, you’re now the kitchen!” 🍳\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: What's My Mode?",
      "content": "<div class=\"card\">\nGuess the mode based on the situation:\n<ol>\n<li>Controlling an LED</li>\n<li>Detecting button press</li>\n<li>Using button without external resistor</li>\n</ol>\n</div>\n<div class=\"card\">\n<input id=\"pmgame\" placeholder=\"Type: OUTPUT, INPUT, or INPUT_PULLUP (comma-separated)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct: OUTPUT, INPUT, INPUT_PULLUP!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Full pinMode Explanation",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/O4zmWqgA5l8\" title=\"pinMode Arduino Explained\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔍 INPUT_PULLUP Magic",
      "content": "<div class=\"card\">\nNormal INPUT pins float — they pick up random noise.\n</div>\n<div class=\"card\">\nUsing <b>INPUT_PULLUP</b> connects an internal resistor to 5V. So the pin stays HIGH by default.\n</div>\n<div class=\"card\">\nWhen you press a button (to GND), it goes LOW.\n</div>\n<div class=\"card\">\nIt saves you from needing an external pull-up resistor!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: LED & Button Combo",
      "content": "<div class=\"card\">\nWire:\n<ul>\n<li>LED → Pin 13 (OUTPUT)</li>\n<li>Button → Pin 2 (INPUT)</li>\n</ul>\n</div>\n<div class=\"card\">\nCode:\n<pre>\nvoid setup() {\n  pinMode(13, OUTPUT);\n  pinMode(2, INPUT);\n}\n\nvoid loop() {\n  if (digitalRead(2) == HIGH) {\n    digitalWrite(13, HIGH);\n  } else {\n    digitalWrite(13, LOW);\n  }\n}\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎓 Recap: Tell Pins Who They Are!",
      "content": "<div class=\"card\">\nAlways set the mode before using a pin:\n<ul>\n<li><code>pinMode(pin, OUTPUT);</code></li>\n<li><code>pinMode(pin, INPUT);</code></li>\n<li><code>pinMode(pin, INPUT_PULLUP);</code></li>\n</ul>\n</div>\n<div class=\"card\">\nWithout this, Arduino pins are clueless 🙈\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
},{
  "title": "React Fast! Using attachInterrupt()",
  "lessons": [
    {
      "title": "⏱️ What is an Interrupt?",
      "content": "<div class=\"card\">\nAn interrupt is like a ninja tap on the shoulder —\nit pauses everything and runs special code instantly.\n</div>\n<div class=\"card\">\nImagine you're doing homework 📝 and someone rings the bell 🔔. You pause, check the door, then continue working.\n</div>\n<div class=\"card\">\nThat's exactly what interrupts do!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💻 attachInterrupt() Syntax",
      "content": "<div class=\"card\">\n<pre>\nattachInterrupt(digitalPinToInterrupt(pin), ISR, mode);\n</pre>\n</div>\n<div class=\"card\">\n- <b>pin</b> — the pin that triggers it (use interrupt-capable pins)\n- <b>ISR</b> — function to call (Interrupt Service Routine)\n- <b>mode</b> — when to trigger (RISING, FALLING, CHANGE)\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Choose the Trigger",
      "content": "<div class=\"card\">\nWhen should the interrupt run?\n<pre>\nattachInterrupt(digitalPinToInterrupt(2), alarm, ???);\n</pre>\n</div>\n<div class=\"card\">\nOptions:\n<ul><li><b>RISING</b> — button goes from LOW to HIGH</li>\n<li><b>FALLING</b> — from HIGH to LOW</li>\n<li><b>CHANGE</b> — any change</li></ul>\n</div>\n<div class=\"card\">\n<input placeholder=\"Your answer\" id=\"interruptGame\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ All valid depending on situation! Most use FALLING or RISING.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Using Interrupts",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/o2hrpZB2E9w\" title=\"Arduino Interrupt Tutorial\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Anti-Bounce Alarm",
      "content": "<div class=\"card\">\nSet up a motion sensor or button → Pin 2\n</div>\n<div class=\"card\">\n<pre>\nvolatile bool alarmTriggered = false;\nvoid alarm() {\n  alarmTriggered = true;\n}\n\nvoid setup() {\n  attachInterrupt(digitalPinToInterrupt(2), alarm, RISING);\n}\n\nvoid loop() {\n  if (alarmTriggered) {\n    Serial.println(\"⚠️ Alert!\");\n    alarmTriggered = false;\n  }\n}\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
},  {
  "title": "What's a Pulse? Understanding pulseIn()",
  "lessons": [
    {
      "title": "🔊 What is a Pulse?",
      "content": "<div class=\"card\">\nA pulse is a quick change in voltage — like a short beep or flash.\n</div>\n<div class=\"card\">\nThink of it like:\n- A hand clap 👏 (one pulse)\n- A quick flash of light 💡\n- A signal burst from an ultrasonic sensor 🔊\n</div>\n<div class=\"card\">\nArduino can measure the time length of such pulses using:\n<pre>pulseIn(pin, value);</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "⏱️ pulseIn() Syntax + Example",
      "content": "<div class=\"card\">\n<pre>pulseIn(7, HIGH);</pre>\nThis returns how long pin 7 stayed HIGH (in microseconds!)\n</div>\n<div class=\"card\">\nUse it to measure:\n<ul>\n<li>Echo return time from ultrasonic sensors</li>\n<li>IR remote pulses</li>\n<li>Servo signals (advanced)</li>\n</ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Pulse or Not?",
      "content": "<div class=\"card\">\nGuess which is a pulse signal:\n<ul>\n<li>A) Button press and hold</li>\n<li>B) IR remote click</li>\n<li>C) Constant 5V on pin</li>\n</ul>\n</div>\n<div class=\"card\">\n<input id=\"pulseGame\" placeholder=\"Your answers (e.g. A, B)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ B is a pulse! A might be, C is not.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: pulseIn() with Ultrasonic",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/9xToP9Hvrqk\" title=\"pulseIn Arduino Ultrasonic Tutorial\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Measure Echo Time!",
      "content": "<div class=\"card\">\nWiring:\n- HC-SR04 Echo → Pin 7<br>\n- Trigger → Pin 6\n</div>\n<div class=\"card\">\n<pre>\ndigitalWrite(6, HIGH);\ndelayMicroseconds(10);\ndigitalWrite(6, LOW);\n\nlong duration = pulseIn(7, HIGH);\nSerial.println(duration);\n</pre>\nThis prints how long it took the echo to return 👂\n</div>",
      "image": "url",
      "audio": "url" 
    }
  ]
}





      ]
    },{
      title:"The Mighty Math Toolbox 🧮 — Arduino’s Built-in Brainpower!",
      modules:[
        {
  "title": "No Negativity Here: The Power of abs()",
  "lessons": [
    {
      "title": "📘 What is abs()?",
      "content": "<div class=\"card\">\nThe <code>abs()</code> function gives the <b>absolute value</b> of a number.\n</div>\n<div class=\"card\">\nThat means it turns any negative number into a positive one!\n<pre>abs(-5);  // returns 5\nabs(7);   // returns 7 (unchanged)</pre>\n</div>\n<div class=\"card\">\nIt's super useful when you're calculating distances, differences, or ignoring direction.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🏡 Real-Life Analogy",
      "content": "<div class=\"card\">\nImagine you're 3 steps left of home, or 3 steps right — either way, you're just <b>3 steps away</b>.\n</div>\n<div class=\"card\">\nThat’s what <code>abs()</code> captures: the <i>distance</i>, not direction!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: What's the Output?",
      "content": "<div class=\"card\">\nGuess the output:\n<pre>\nint a = -8;\nint b = abs(a);\nSerial.println(b);\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"absGame\" placeholder=\"Your answer here...\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct! abs(-8) = 8')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Absolute Value (Concept)",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/nZxZ2K3bfcI\" title=\"What is Absolute Value?\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Bounce Back LED",
      "content": "<div class=\"card\">\nLet’s simulate an LED brightness going up/down. If it goes negative, we use <code>abs()</code> to keep it in bounds:\n</div>\n<div class=\"card\">\n<pre>\nint brightness = -120;\nanalogWrite(9, abs(brightness));\n</pre>\nThis way the LED still shines bright, even if the math goes wild 😎\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Why Use abs()?",
      "content": "<div class=\"card\">\nUse <code>abs()</code> when:\n<ul>\n<li>Comparing distances or time differences</li>\n<li>Eliminating negative errors</li>\n<li>Building clean sensor logic</li>\n</ul>\n</div>\n<div class=\"card\">\n🎯 It helps prevent bugs due to negative math.\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Stay In Bounds! Meet constrain()",
  "lessons": [
    {
      "title": "📘 What is constrain()?",
      "content": "<div class=\"card\">\n<code>constrain(x, a, b)</code> keeps <code>x</code> within a safe range — like a protective fence.\n</div>\n<div class=\"card\">\nIf <code>x</code> is below <code>a</code>, it returns <code>a</code>. If it’s above <code>b</code>, it returns <code>b</code>. Otherwise, it returns <code>x</code> itself.\n</div>\n<div class=\"card\">\n<pre>\nconstrain(150, 0, 100);  // returns 100\nconstrain(-5, 0, 100);   // returns 0\nconstrain(50, 0, 100);   // returns 50\n</pre>\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🏡 Real-Life Analogy: Volume Control",
      "content": "<div class=\"card\">\nYour speaker has volume from 0 to 100.\nIf your code tries to set 150 — that’s 🔊 too loud!\n</div>\n<div class=\"card\">\n<code>constrain()</code> brings it back to the max: 100.\n</div>\n<div class=\"card\">\nIt’s like automatic safety guards.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Keep It Legal!",
      "content": "<div class=\"card\">\nWhat will this return?\n<pre>constrain(300, 0, 255);</pre>\n</div>\n<div class=\"card\">\n<input id=\"constrainGame\" placeholder=\"Your answer here...\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ It’s 255 — max brightness for an LED!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: constrain() in Action",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/YWbCy6OmUuA\" title=\"Arduino constrain() Tutorial\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Brightness Clamp",
      "content": "<div class=\"card\">\nSet brightness using <code>analogWrite()</code> — but limit it!\n</div>\n<div class=\"card\">\n<pre>\nint sensor = analogRead(A0);\nint brightness = map(sensor, 0, 1023, -50, 300);\nbrightness = constrain(brightness, 0, 255);\nanalogWrite(9, brightness);\n</pre>\n</div>\n<div class=\"card\">\n👀 No matter how wild the input, brightness stays safe!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎓 Why Use constrain()?",
      "content": "<div class=\"card\">\nUse it when:\n<ul>\n<li>You map values that could go beyond safe limits</li>\n<li>You want to avoid glitches, blinks, or crashes</li>\n<li>You want smooth, controlled behavior</li>\n</ul>\n</div>\n<div class=\"card\">\n🛡️ It’s like a bouncer for your variables.\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Translate Anything! Meet map()",
  "lessons": [
    {
      "title": "🗺️ What is map()?",
      "content": "<div class=\"card\">\n<code>map(value, fromLow, fromHigh, toLow, toHigh)</code>\n</div>\n<div class=\"card\">\nIt’s like a translator between two worlds!\n</div>\n<div class=\"card\">\nExample:\n<pre>map(512, 0, 1023, 0, 255);</pre>\n👉 Converts 512 (from 0–1023) into 128 (in 0–255 range)\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎛️ Real-Life Analogy: Volume Knob to LED",
      "content": "<div class=\"card\">\nYou rotate a knob from 0 to 1023 (sensor reading)\n</div>\n<div class=\"card\">\nBut your LED only accepts 0 to 255 for brightness\n</div>\n<div class=\"card\">\n<code>map()</code> helps you convert knob values into brightness values perfectly.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Mapping Master",
      "content": "<div class=\"card\">\nWhat does this return?\n<pre>map(0, 0, 100, 100, 0)</pre>\n</div>\n<div class=\"card\">\n<input id=\"mapQuiz\" placeholder=\"Your answer (e.g. 50)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ It returns 100 — direction flipped!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Mapping Explained",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/zQRrXTSkvfw\" title=\"Arduino map() Tutorial\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Potentiometer Brightness",
      "content": "<div class=\"card\">\nWiring:\n- Potentiometer → A0\n- LED → Pin 9\n</div>\n<div class=\"card\">\n<pre>\nint val = analogRead(A0);\nint brightness = map(val, 0, 1023, 0, 255);\nanalogWrite(9, brightness);\n</pre>\n</div>\n<div class=\"card\">\nSpin the knob → Light gets brighter or dimmer!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "⚠️ Caution: No constrain() Included",
      "content": "<div class=\"card\">\n<code>map()</code> does NOT limit the values automatically.\n</div>\n<div class=\"card\">\nYou should use <code>constrain()</code> after map to stay safe!\n</div>\n<div class=\"card\">\n<pre>\nval = map(val, 0, 1023, 0, 255);\nval = constrain(val, 0, 255);\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Who's Bigger? Meet max()",
  "lessons": [
    {
      "title": "📏 What's max() All About?",
      "content": "<div class=\"card\">\n<code>max(a, b)</code> compares two numbers and returns the bigger one. Simple!\n</div>\n<div class=\"card\">\nIt's like asking: “Which number rules the throne?” 👑\n<pre>\nmax(7, 4); // returns 7\nmax(3, 11); // returns 11\n</pre>\n</div>\n<div class=\"card\">\nUseful when you need to make sure a value is **not too small**, like motor speed, sensor range, etc.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🏆 Real-Life Example: Score Battle",
      "content": "<div class=\"card\">\nImagine two players: Alice (9 points), Bob (6 points).\nWho’s leading?\n</div>\n<div class=\"card\">\nUse:\n<pre>\nint leader = max(9, 6);  // returns 9\n</pre>\nNow show the leader on an OLED or print it via Serial:\n<pre>\nSerial.print(\"Leader: \");\nSerial.println(leader);\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Find the Max!",
      "content": "<div class=\"card\">\nWhat does this return?\n<pre>\nmax(25, digitalRead(2));\n</pre>\nAssume pin 2 is LOW (0V).\n</div>\n<div class=\"card\">\n<input id=\"maxGame\" placeholder=\"Your answer\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Answer: 25 — because LOW is 0, and 25 is higher.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Comparing Numbers in Arduino",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/kwZg_6qY3mY\" title=\"max function in Arduino\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Experiment: Max Speed Enforcer",
      "content": "<div class=\"card\">\nYou want your robot's speed to **never drop below 50**.\n</div>\n<div class=\"card\">\nTry this logic:\n<pre>\nint rawSpeed = analogRead(A0);\nint finalSpeed = max(rawSpeed, 50);\n</pre>\n</div>\n<div class=\"card\">\nNow even if raw input is 40, your bot moves at least at 50 speed.\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Shrink It Down: Discover min()",
  "lessons": [
    {
      "title": "📏 What is min()?",
      "content": "<div class=\"card\">\n<code>min(a, b)</code> compares two numbers and returns the smaller one.\n</div>\n<div class=\"card\">\nLike a referee saying:\n“Hmm... who’s the tiniest player here?” 🧒\n<pre>\nmin(7, 4); // returns 4\nmin(3, 11); // returns 3\n</pre>\n</div>\n<div class=\"card\">\nUseful when you want to limit max values — like sensor caps, PWM brightness, etc.\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Real-Life Example: Fan Speed Cap",
      "content": "<div class=\"card\">\nLet’s say user input controls fan speed. But it must never go above 150.\n</div>\n<div class=\"card\">\nUse:\n<pre>\nint inputSpeed = analogRead(A1);\nint safeSpeed = min(inputSpeed, 150);\n</pre>\n</div>\n<div class=\"card\">\nYou just made your fan kid-safe 🧒🌬️\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Who Wins the Shrink Battle?",
      "content": "<div class=\"card\">\nWhat’s the output?\n<pre>\nmin(analogRead(A0), 100);\n</pre>\nAssume analogRead returns 80.\n</div>\n<div class=\"card\">\n<input id=\"minGame\" placeholder=\"Your answer\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Answer: 80 — because it’s already less than 100.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Using min() Function",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/xuXL_KjzmQA\" title=\"min function in Arduino\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Cap That Brightness!",
      "content": "<div class=\"card\">\nLED brightness should stay under 180.\n</div>\n<div class=\"card\">\n<pre>\nint brightness = analogRead(A2) / 4;\nint limited = min(brightness, 180);\nanalogWrite(9, limited);\n</pre>\n</div>\n<div class=\"card\">\nToo bright? Not anymore. 👁️‍🗨️✨\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Raise the Power! pow() Function",
  "lessons": [
    {
      "title": "🔋 What is pow()?",
      "content": "<div class=\"card\">\n<code>pow(base, exponent)</code> raises a number to the power of another.\n</div>\n<div class=\"card\">\nLike saying:\n“How many times should I multiply this by itself?”\n<pre>\npow(2, 3);  // 2³ = 8\npow(5, 2);  // 5² = 25\n</pre>\n</div>\n<div class=\"card\">\nSuper useful in math-heavy projects like sensor scaling, physics, and motion control 🎢\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Real-Life Example: Kinetic Energy Formula",
      "content": "<div class=\"card\">\nKinetic Energy (KE) = 0.5 × mass × velocity²\n</div>\n<div class=\"card\">\nArduino version:\n<pre>\nfloat mass = 2.5;\nfloat velocity = 6;\nfloat KE = 0.5 * mass * pow(velocity, 2);\n</pre>\n</div>\n<div class=\"card\">\nScience + code = awesome 🚀\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Power Up the Answer!",
      "content": "<div class=\"card\">\nWhat does this return?\n<pre>\npow(4, 2);\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"powGame\" placeholder=\"Your answer\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Answer: 16 — because 4² = 16!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: pow() Explained",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/GrVKhdmjb4M\" title=\"pow() Function Arduino\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Exponential Dimming!",
      "content": "<div class=\"card\">\nTry dimming LED based on an exponential scale:\n</div>\n<div class=\"card\">\n<pre>\nint sensorVal = analogRead(A0);\nfloat brightness = pow(sensorVal / 1023.0, 2) * 255;\nanalogWrite(9, (int)brightness);\n</pre>\n</div>\n<div class=\"card\">\nLooks smoother than linear? That’s the magic of <code>pow()</code>!\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Square It Instantly with sq()",
  "lessons": [
    {
      "title": "🧊 What is sq()?",
      "content": "<div class=\"card\">\n<code>sq(x)</code> returns the square of x — just like <code>x * x</code>\n</div>\n<div class=\"card\">\nIt’s a shortcut to avoid writing <code>x * x</code> every time!\n<pre>\nsq(5);  // 25\nsq(3.5);  // 12.25\n</pre>\n</div>\n<div class=\"card\">\nMuch cleaner when doing physics or math operations 💫\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔍 Use Case: Distance Calculations",
      "content": "<div class=\"card\">\nWhen calculating distances between 2D points:\n<pre>\ndistance = sqrt(sq(x2 - x1) + sq(y2 - y1));\n</pre>\n</div>\n<div class=\"card\">\nThat’s Pythagoras in action — and <code>sq()</code> makes it short and sweet 📐\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: What’s the Square?",
      "content": "<div class=\"card\">\nGuess the result:\n<pre>\nsq(4.0);\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"sqGame\" placeholder=\"Your answer (e.g. 16)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct! 4.0 × 4.0 = 16.0')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: sq() in Arduino Math",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/NqBOwdloMdU\" title=\"sq() Arduino Tutorial\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Sensor to Speed!",
      "content": "<div class=\"card\">\nLet’s simulate squaring analog values to exaggerate speed readings:\n</div>\n<div class=\"card\">\n<pre>\nint val = analogRead(A0);\nint exaggerated = sq(val / 4);\nSerial.println(exaggerated);\n</pre>\n</div>\n<div class=\"card\">\nYou'll see low values appear much smaller — while high values blow up! 🔥\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Root It Out: The Power of sqrt()",
  "lessons": [
    {
      "title": "🌱 What is sqrt()?",
      "content": "<div class=\"card\">\n<code>sqrt(x)</code> returns the square root of <code>x</code>.\n</div>\n<div class=\"card\">\nIt's like asking: \"What number multiplied by itself gives x?\"\n<pre>\nsqrt(16);  // 4\nsqrt(9);   // 3\nsqrt(2.25); // 1.5\n</pre>\n</div>\n<div class=\"card\">\nUseful in distance, velocity, acceleration, and physics equations!\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "⚡ Real-Life Analogy: Pizza Slice Area",
      "content": "<div class=\"card\">\nIf area of a pizza slice is known and it's circular, you can use <code>sqrt()</code> to find the radius:\n<pre>\nradius = sqrt(area / PI);\n</pre>\n</div>\n<div class=\"card\">\nThat’s Arduino helping you with your 🍕 proportions 😄\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Guess the Root",
      "content": "<div class=\"card\">\nWhat’s the output of this code?\n<pre>\nSerial.println(sqrt(36));\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"sqrtGame\" placeholder=\"Your answer (e.g. 6)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct! sqrt(36) = 6')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: sqrt() in Motion",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/t1_dU2ikSzY\" title=\"sqrt() Arduino Example\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Distance from Sensor",
      "content": "<div class=\"card\">\nIf you calculate a 2D distance:\n</div>\n<div class=\"card\">\n<pre>\nint dx = 3;\nint dy = 4;\ndouble dist = sqrt(sq(dx) + sq(dy));\nSerial.println(dist);\n</pre>\n</div>\n<div class=\"card\">\nYou’ll get 5 — straight from Pythagoras' theorem! 📐\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}

      ]
    },{
      title:"Bits & Bytes Unleashed: Low-Level Magic with Arduino",
      modules:[
        {
  "title": "Summon a Bit: Understanding bit()",
  "lessons": [
    {
      "title": "🧠 What is a Bit?",
      "content": "<div class=\"card\">\nA <b>bit</b> is the tiniest piece of data — just a 0 or a 1.\n</div>\n<div class=\"card\">\nA <b>byte</b> is made of 8 bits:\n<pre>10110110 → 1 byte</pre>\n</div>\n<div class=\"card\">\nControlling individual bits lets you do: \n<ul><li>Efficient LED control</li><li>Sensor flag management</li><li>Speedy low-level tricks</li></ul>\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url_to_bit_vs_byte_diagram",
      "audio": "url"
    },
    {
      "title": "✨ bit() Explained",
      "content": "<div class=\"card\">\n<code>bit(n)</code> returns a number where only the nth bit is set to 1.\n</div>\n<div class=\"card\">\n<pre>bit(3); → 0b00001000 → 8</pre>\n</div>\n<div class=\"card\">\nPerfect for setting specific bits in a byte!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Which Bit is Set?",
      "content": "<div class=\"card\">\nWhat is the result of <code>bit(5)</code>?\n</div>\n<div class=\"card\">\n<input id=\"bitGame\" placeholder=\"Enter a decimal value\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct: bit(5) = 32 (0b00100000)')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Bit Position Visualized",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/7QkW9o94zUs\" title=\"Arduino bit() Visualized\" frameborder=\"0\" allowfullscreen></iframe>"
    },
    {
      "title": "🧪 Try It: Bit Highlighting",
      "content": "<div class=\"card\">\nTry this code:\n<pre>\nbyte x = 0;\nx = x | bit(2);  // sets 3rd bit\nSerial.println(x, BIN);  // prints 00000100\n</pre>\n</div>\n<div class=\"card\">\nYou just switched on a single bit like flipping one switch in a room of 8.\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Light It Up: Using bitSet()",
  "lessons": [
    {
      "title": "💡 What is bitSet()?",
      "content": "<div class=\"card\">\n<code>bitSet(x, n)</code> turns ON the nth bit in the variable <code>x</code>.\n</div>\n<div class=\"card\">\nIt’s like flipping a switch in a row of 8 bulbs (a byte).\n</div>\n<div class=\"card\">\n<pre>\nbyte lights = 0b00000000;\nbitSet(lights, 3);  // Now: 00001000\n</pre>\n</div>",
      "image": "url_to_bit_switch_diagram",
      "audio": "url"
    },
    {
      "title": "🏠 Real-Life Analogy: Switchboard",
      "content": "<div class=\"card\">\nImagine a room with 8 switches:\n<ul><li>Each controls 1 light</li><li>bitSet() flips ON one light</li></ul>\n</div>\n<div class=\"card\">\n<pre>bitSet(room, 5);</pre>\nLight 6 is ON. 🎉\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Set the Bit",
      "content": "<div class=\"card\">\nWhat will this do?\n<pre>\nbyte flags = 0;\nbitSet(flags, 2);\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"bitSetGame\" placeholder=\"Binary or Decimal Answer?\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ It sets bit 2 → flags = 4 → 0b00000100')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: bitSet() in Action with LEDs",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/vCMZsxfv2sI\" title=\"bitSet Arduino Tutorial\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Manual LED ON Using Bits",
      "content": "<div class=\"card\">\nHook 8 LEDs to pins 2–9. Use one byte variable to control them:\n<pre>\nbyte ledState = 0;\nbitSet(ledState, 4);  // Turn ON 5th LED\n</pre>\nLoop through the bits to control pins.\n</div>\n<div class=\"card\">\nYou just unlocked an LED using a single BIT of memory 🔓\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Sneaky Bits – The Magic of bitRead()",
  "lessons": [
    {
      "title": "🧠 What is bitRead()?",
      "content": "<div class=\"card\">\nImagine you have a byte — a group of 8 switches (bits):\n<pre>byte b = 0b10101100;</pre>\nWant to check if a specific switch (bit) is ON (1) or OFF (0)? That’s where <code>bitRead()</code> comes in!\n</div>\n<div class=\"card\">\n<pre>bitRead(b, 2);</pre>\n👆 This checks the 3rd bit (from the right, starting at 0).\nReturns 1 (ON) or 0 (OFF) — super handy!\n</div>\n<div class=\"card\">\nIt's like asking: \"Hey, is switch #2 turned ON?\"\n</div>\n<button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🏠 Analogy: Light Switch Panel",
      "content": "<div class=\"card\">\nImagine a wall panel with 8 switches controlling lights.\nEach switch = 1 bit in a byte.\n</div>\n<div class=\"card\">\nYou say: “Is switch #4 ON?” That’s what <code>bitRead()</code> checks!\n</div>\n<div class=\"card\">\n<pre>\nbyte room = B00010000;\nint light = bitRead(room, 4); // Returns 1 = ON 💡\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Reading Bits Like a Pro",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/00A_1BfbM5k\" title=\"bitRead() in Arduino explained visually\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: What's the Bit?",
      "content": "<div class=\"card\">\n<pre>byte b = B10110010;</pre>\nWhat does <code>bitRead(b, 5)</code> return?\n</div>\n<div class=\"card\">\n<input id=\"bitGame\" placeholder=\"Your answer: 0 or 1\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct! It’s 1. Bit 5 is ON (count from right, 0-indexed).')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: LED Control via Bit Map",
      "content": "<div class=\"card\">\nLet’s say you’re controlling 8 LEDs via a shift register.\nYou want to know if LED 6 is ON:\n</div>\n<div class=\"card\">\n<pre>\nbyte ledState = B10101010;\nif (bitRead(ledState, 6) == 1) {\n  digitalWrite(6, HIGH);\n}\n</pre>\n</div>\n<div class=\"card\">\nYou just built logic to control individual hardware from bits 😎\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎓 Recap: bitRead() Superpower",
      "content": "<div class=\"card\">\n<code>bitRead(variable, bitNumber)</code>\nReturns either 0 or 1, depending on whether that bit is OFF or ON.\n</div>\n<div class=\"card\">\nIt’s perfect when you store many ON/OFF settings inside one byte — and want to extract just one.\n</div>\n<div class=\"card\">\nThat’s *bit-level mastery*, my friend 💥\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Bye Bye Bit – Clearing Bits with bitClear()",
  "lessons": [
    {
      "title": "💡 What is bitClear()?",
      "content": "<div class=\"card\">\n<code>bitClear(x, n)</code> turns OFF the nth bit (sets it to 0) in number <code>x</code>.\n</div>\n<div class=\"card\">\nThink of it as removing a power switch from a device 📴\n</div>\n<div class=\"card\">\nExample:\n<pre>bitClear(0b00001111, 0); // ➜ 0b00001110</pre>\nIt turns OFF the lowest bit (bit 0).\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🏡 Analogy: Room Light Switches",
      "content": "<div class=\"card\">\nImagine each bit is a light switch in your house 🏠\n</div>\n<div class=\"card\">\n<pre>bitClear(0b11111111, 4);</pre>\nmeans: “Turn OFF the switch in Room 5” (bit 4)\n</div>\n<div class=\"card\">\nSo output is:\n<pre>0b11101111</pre>\nThat room’s light is OFF now 💡❌\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Mini Game: Bit Cleansing Quiz",
      "content": "<div class=\"card\">\nWhat’s the result of this?\n<pre>bitClear(0b1101, 2);</pre>\n</div>\n<div class=\"card\">\n<input id=\"bitclearquiz\" placeholder=\"Binary answer? (e.g. 0b1011)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Answer: 0b1001! Bit 2 turned off.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Bitwise Operations in Arduino",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/_tY5xWAaVb4\" title=\"Bitwise Operators Explained!\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Bit-Controlled LED Strip",
      "content": "<div class=\"card\">\nLet’s say you’re using 8 LEDs. Each bit controls one LED:\n<pre>\nbyte leds = 0b11111111;\nbitClear(leds, 3); // Turn OFF LED 4\n</pre>\n</div>\n<div class=\"card\">\nYou can then send that byte to a shift register like 74HC595 to control actual LEDs 😎\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Precision Editing with bitWrite()",
  "lessons": [
    {
      "title": "💡 What is bitWrite()?",
      "content": "<div class=\"card\">\n<code>bitWrite(x, n, b)</code> changes the nth bit of <code>x</code> to either <b>1</b> or <b>0</b>.\n</div>\n<div class=\"card\">\nIt’s like editing one character in a secret code 🧑‍💻\n</div>\n<div class=\"card\">\nExample:\n<pre>\nbitWrite(0b10101010, 1, 1); // ➜ 0b10101011\nbitWrite(0b10101010, 2, 0); // ➜ 0b10101000\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🏗️ Analogy: Bit Editor Like Paint Tool",
      "content": "<div class=\"card\">\nImagine 8 checkboxes representing 8 bits.\n<pre>10101101</pre>\nYou want to change the 3rd box from 1 to 0 ➜ use <code>bitWrite()</code>\n</div>\n<div class=\"card\">\nIt’s like pixel painting — one bit at a time! 🎨\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Edit This Bit!",
      "content": "<div class=\"card\">\nYou have:\n<pre>bitWrite(0b11111111, 4, 0);</pre>\nWhat is the result?\n</div>\n<div class=\"card\">\n<input id=\"bitwritegame\" placeholder=\"Binary answer? (e.g. 0b10111111)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct: 0b11101111')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Bit Mastery 101",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/h3quF4tTmPo\" title=\"bitWrite() and friends\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Dynamic LED Pattern",
      "content": "<div class=\"card\">\nYou want to control an LED bar:\n<pre>\nbyte leds = 0b00000000;\nbitWrite(leds, 3, 1); // Light up LED 4\nbitWrite(leds, 0, 1); // LED 1\nbitWrite(leds, 3, 0); // Turn off LED 4 again\n</pre>\n</div>\n<div class=\"card\">\nBit by bit, build your pattern like digital LEGO 🧱\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "The Upper Half — highByte() Unmasked!",
  "lessons": [
    {
      "title": "🎭 What is highByte()?",
      "content": "<div class=\"card\">\nEvery number bigger than 255 takes more than 8 bits (1 byte).\n</div>\n<div class=\"card\">\nA 16-bit number like <code>0x1234</code> has:\n<ul><li><b>Low byte</b> ➜ 0x34 (last 8 bits)</li>\n<li><b>High byte</b> ➜ 0x12 (first 8 bits)</li></ul>\n</div>\n<div class=\"card\">\nSo <code>highByte(0x1234)</code> returns <b>0x12</b> 🔍\n</div>\n<div class=\"card\">\n🧪 Try it in decimal:\n<pre>highByte(1000);  // returns 3</pre>\nBecause:\n<pre>1000 ➜ 0x03E8 ➜ High byte = 0x03</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🏰 Real-World Analogy: Royal Mail",
      "content": "<div class=\"card\">\nImagine a 2-digit house number 📬: <b>12 34</b>\n<ul>\n<li>Low byte: Apartment number (34)</li>\n<li>High byte: Building block (12)</li>\n</ul>\nTo find which building mail goes to ➜ use <b>highByte()</b>\n</div>\n<div class=\"card\">\n<pre>\nunsigned int address = 0x1234;\nbyte block = highByte(address); // 0x12\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: What’s the High Byte?",
      "content": "<div class=\"card\">\nGuess the result:\n<pre>\nhighByte(0xABCD) = ?\nhighByte(512) = ?\nhighByte(3000) = ?\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"highgame\" placeholder=\"Try 3 answers e.g. AB, 02, 0B\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct: AB, 02, 0B — You’re a bit wizard! 🧙‍♂️')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Bytes Split in Arduino",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/h3quF4tTmPo?t=315\" title=\"highByte() tutorial\" frameborder=\"0\" allowfullscreen></iframe>\n<div class=\"card\">\nWatch how to split integers into high and low bytes — and combine them back!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Experiment: Serial Debugging with highByte()",
      "content": "<div class=\"card\">\nTry this handy debug print:\n<pre>\nint val = analogRead(A0);\nbyte hi = highByte(val);\nbyte lo = lowByte(val);\nSerial.print(\"High: \");\nSerial.println(hi);\nSerial.print(\"Low: \");\nSerial.println(lo);\n</pre>\n</div>\n<div class=\"card\">\nPerfect for understanding sensor values split into two parts!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Bonus Tip: Why Do We Even Need This?",
      "content": "<div class=\"card\">\nOlder devices and protocols (like I2C, serial, MIDI) often split 16-bit values into 2 bytes.\n</div>\n<div class=\"card\">\nWhen transmitting or saving data, it’s easier to send small 8-bit chunks:\n<pre>\nsend(highByte(myData));\nsend(lowByte(myData));\n</pre>\n</div>\n<div class=\"card\">\nIt’s like sending two envelopes instead of a giant box! 📦\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "The Tiny Detective — lowByte() Investigates!",
  "lessons": [
    {
      "title": "🔍 What is lowByte()?",
      "content": "<div class=\"card\">\nJust like <code>highByte()</code> gives the upper 8 bits,\n<code>lowByte(x)</code> gives the bottom 8 bits — the last 2 hex digits!\n</div>\n<div class=\"card\">\nFor example:\n<pre>\nlowByte(0x1234) ➜ 0x34\nlowByte(1000) ➜ 0xE8 (232 in decimal)\n</pre>\n</div>\n<div class=\"card\">\nThink of it as checking the last 8 bits of a 16-bit value.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🏠 Analogy: House Apartment Numbers",
      "content": "<div class=\"card\">\nIf <b>0x1234</b> is the building address:\n<ul><li><b>12</b> is the building block ➜ <code>highByte()</code></li>\n<li><b>34</b> is the apartment number ➜ <code>lowByte()</code></li></ul>\n</div>\n<div class=\"card\">\nYou use lowByte when you need to know the **exact room** in a building 🏢\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Crack the Byte Code!",
      "content": "<div class=\"card\">\nGuess the low byte of:\n<pre>\nlowByte(0x56AB) = ?\nlowByte(2020) = ?\nlowByte(0x00FF) = ?\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"lowgame\" placeholder=\"Your answers (e.g. AB, E4, FF)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct: AB, E4, FF — Bit-splitting hero! 🦸')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Splitting Bytes Visually",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/OIrxpbwN1fA\" title=\"Understanding lowByte and highByte\" frameborder=\"0\" allowfullscreen></iframe>\n<div class=\"card\">\nThis animation shows how a full 16-bit value is separated into its low and high parts.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Experiment: Serial Split Monitor",
      "content": "<div class=\"card\">\nTry breaking a sensor value into low + high bytes and printing both:\n<pre>\nint sensor = analogRead(A1);\nbyte lo = lowByte(sensor);\nbyte hi = highByte(sensor);\n\nSerial.print(\"Sensor:\");\nSerial.println(sensor);\nSerial.print(\"High Byte:\");\nSerial.println(hi);\nSerial.print(\"Low Byte:\");\nSerial.println(lo);\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💾 Why It Matters: Saving Space!",
      "content": "<div class=\"card\">\nIf you're sending data via Serial, Bluetooth, I2C or SPI, sometimes you can only send 1 byte at a time!\n</div>\n<div class=\"card\">\nSplit data like this:\n<pre>\nsend(highByte(myData));\nsend(lowByte(myData));\n</pre>\nThen combine them later:\n<pre>\nint full = (high << 8) | low;\n</pre>\n</div>\n<div class=\"card\">\nThat’s data teleportation, byte-by-byte 🚀\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎓 Final Summary: highByte vs lowByte",
      "content": "<div class=\"card\">\n✅ Use <code>lowByte()</code> to get the last 8 bits (lower part) of any 16-bit value.\n</div>\n<div class=\"card\">\n✅ Handy for sending bytes over serial, wireless, etc.\n</div>\n<div class=\"card\">\n✅ Combine with <code>highByte()</code> to fully control big data in small packets.\n</div>\n<div class=\"card\">\nYou're now fluent in byte-splitting 🧠💥\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}

      ]
    },{
      title:"Beyond 0 & 1 — The Analog Universe of Arduino",
      modules:[
        {
  "title": "The Listener: Meet analogRead()",
  "lessons": [
    {
      "title": "🎚️ What is analogRead()?",
      "content": "<div class='card'>\n<code>analogRead(pin)</code> lets Arduino hear the real world — not just ON/OFF, but every whisper in-between!\n</div>\n<div class='card'>\nIt reads voltage (0–5V) on an analog pin and returns a number from <b>0 to 1023</b>.\n</div>\n<div class='card'>\nSo:\n<ul><li><b>0</b> = 0V (no signal)</li><li><b>1023</b> = 5V (full signal)</li><li><i>anything in-between</i> = analog vibes 🎶</li></ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Voltage, Logic & Truth: What’s the Connection?",
      "content": "<div class='card'>\nLet’s clear this up once and for all:\n<ul>\n<li><b>HIGH</b> = 5V</li>\n<li><b>LOW</b> = 0V</li>\n<li><b>1</b> = TRUE = HIGH = ON</li>\n<li><b>0</b> = FALSE = LOW = OFF</li>\n</ul>\n</div>\n<div class='card'>\nThink of a bulb:\n- Bulb ON → 5V → HIGH → 1 → true ✅<br>\n- Bulb OFF → 0V → LOW → 0 → false ❌\n</div>\n<div class='card'>\nBut analogRead() gives values <b>between</b> these extremes. So it’s like a dimmer, not just switch!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Pins That Work with analogRead()",
      "content": "<div class='card'>\nOnly analog input pins are supported:\n<ul>\n<li><b>UNO</b> → A0 to A5</li>\n<li><b>Nano</b> → A0 to A7</li>\n<li><b>Mega</b> → A0 to A15</li>\n</ul>\n</div>\n<div class='card'>\nThese pins are connected to a secret chip called the <b>ADC (Analog to Digital Converter)</b> 🧠\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔦 Real-Life Analogy: Light Dimmer",
      "content": "<div class='card'>\nImagine turning a knob that controls the brightness of your room light.\n</div>\n<div class='card'>\nWhen the knob is at 0%, analogRead = 0.\nWhen it’s full = 1023.\nMiddle = any value between.\n</div>\n<div class='card'>\nYou just wired a potentiometer to A0? Try:\n<pre>int brightness = analogRead(A0);</pre>\nNow you're reading real-world brightness!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Guess the Value",
      "content": "<div class='card'>\nSuppose you rotate the knob halfway. What does analogRead(A0) return?\n</div>\n<div class='card'>\n<input id='analogGame' placeholder='0 to 1023?' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ Correct: Around 512!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: analogRead() Explained",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/ZDnNn-NyUlM' title='analogRead Arduino Tutorial' frameborder='0' allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It Yourself: Serial Reader",
      "content": "<div class='card'>\nWire:\n<ul><li>Center of potentiometer to A0</li><li>Other 2 legs to GND & 5V</li></ul>\n</div>\n<div class='card'>\nCode:\n<pre>\nvoid setup() {\n  Serial.begin(9600);\n}\nvoid loop() {\n  int value = analogRead(A0);\n  Serial.println(value);\n  delay(200);\n}\n</pre>\n</div>\n<div class='card'>\nNow rotate the knob — values will print between 0–1023 📊\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💡 Pro Tip: Average the Readings",
      "content": "<div class='card'>\nAnalog sensors are sometimes noisy ⚡\n</div>\n<div class='card'>\nTo make them stable:\n<pre>\nint total = 0;\nfor (int i = 0; i < 10; i++) {\n  total += analogRead(A0);\n  delay(5);\n}\nint avg = total / 10;\n</pre>\n</div>\n<div class='card'>\n🎯 Now you've got a more reliable reading.\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Smooth Control: analogReadResolution()",
  "lessons": [
    {
      "title": "🔍 What is analogReadResolution()?",
      "content": "<div class='card'>\n<code>analogReadResolution(bits)</code> tells Arduino how <b>precisely</b> it should read analog signals.\n</div>\n<div class='card'>\nIt's like changing the resolution of your camera — more bits = more detail!\n</div>\n<div class='card'>\nDefault is <b>10-bit</b>, giving values from <b>0–1023</b> (2¹⁰ levels).\nBut if your board supports it, you can use 8, 12, even 16 bits!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Why Change Resolution?",
      "content": "<div class='card'>\nImagine you're measuring room temperature with a sensor:\n- At <b>8-bit</b> → only 256 steps\n- At <b>12-bit</b> → 4096 steps = <b>way more detail</b> 🌡️\n</div>\n<div class='card'>\nLower resolution makes readings faster but less accurate. Use wisely based on your needs.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📍 Where is it Used?",
      "content": "<div class='card'>\nOnly certain boards support this, like:\n<ul>\n<li>Arduino Due</li>\n<li>ESP32</li>\n<li>Portenta, MKR series</li>\n</ul>\n<b>UNO & Nano</b> don’t support resolution changes — they stay at 10 bits.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🌐 Real-Life Analogy: Thermometer",
      "content": "<div class='card'>\nThink of an old analog thermometer:\n- One has just tick marks for every 5°C → LOW RESOLUTION 🌡️\n- Another shows every 0.1°C → HIGH RESOLUTION 🧊🔥\n</div>\n<div class='card'>\nSame with sensors — more resolution = more meaningful data.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Change Resolution on ESP32",
      "content": "<div class='card'>\nFor ESP32 or Due:\n<pre>\nanalogReadResolution(12);\nint value = analogRead(34); // will return 0–4095\n</pre>\n</div>\n<div class='card'>\nNow your reads are 4x more precise than 10-bit!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Bits and Ranges",
      "content": "<div class='card'>\nHow many values can 12-bit resolution give?\n</div>\n<div class='card'>\n<input id='resGame' placeholder='Type your answer' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ 4096! Because 2^12 = 4096.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Resolution Explained",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/xYb2T7yxLF8' title='Arduino ADC Resolution Explained' frameborder='0' allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "⚠️ Pro Tips",
      "content": "<div class='card'>\n<ul>\n<li>Calling analogReadResolution() on unsupported boards <b>does nothing</b></li>\n<li>Always check your board's documentation before using it</li>\n<li>Don’t expect more precision on old boards — ADC hardware limits it</li>\n</ul>\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Setting the Standard: analogReference()",
  "lessons": [
    {
      "title": "🎚️ What is analogReference()?",
      "content": "<div class='card'>\n<code>analogReference(type)</code> tells Arduino what voltage to consider as 100% (or 1023 for 10-bit readings).\n</div>\n<div class='card'>\nBy default, Arduino uses <b>5V</b> (or 3.3V) as the reference.\nBut sometimes, we want more accuracy with smaller signals.\n</div>\n<div class='card'>\nThis is when <b>analogReference()</b> shines! 🌟\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Why Use a Different Reference?",
      "content": "<div class='card'>\nIf you're reading small voltages (like 0–1V), using 5V reference wastes precision.\n</div>\n<div class='card'>\nChange the reference to <b>INTERNAL</b> (1.1V on UNO), and now 1023 = 1.1V.\nBetter precision for small signals!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "⚙️ analogReference() Options",
      "content": "<div class='card'>\nThese vary by board, but common ones:\n<ul>\n<li><b>DEFAULT</b> – 5V or 3.3V</li>\n<li><b>INTERNAL</b> – 1.1V (UNO)</li>\n<li><b>INTERNAL1V1</b>, <b>INTERNAL2V56</b> – some boards only</li>\n<li><b>EXTERNAL</b> – use voltage on AREF pin</li>\n</ul>\n</div>\n<div class='card'>\nExample:\n<pre>analogReference(INTERNAL);</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🌍 Real-World Analogy: Fuel Gauge",
      "content": "<div class='card'>\nImagine your car's fuel gauge.\nIf you calibrate it to 100 liters but the tank only holds 20, it’s inaccurate.\n</div>\n<div class='card'>\nSame with analogRead — the reference is your 'full tank'.\nMatch it to your signal range!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Measure Small Voltages Precisely",
      "content": "<div class='card'>\nConnect a 1V analog sensor to A0.\nSet reference to INTERNAL:\n<pre>\nvoid setup() {\n  analogReference(INTERNAL);\n}\n</pre>\n</div>\n<div class='card'>\nNow even small differences in voltage give useful readings.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: analogReference Tutorial",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/N3IhIEM8tC8' title='Arduino analogReference Explained' frameborder='0' allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "⚠️ Caution When Using EXTERNAL",
      "content": "<div class='card'>\nIf you select <code>EXTERNAL</code>, you <b>MUST</b> connect a voltage to the AREF pin.\nIf you don’t — your analogRead will break or give random results.\n</div>\n<div class='card'>\nNever use both <code>analogReference(EXTERNAL)</code> and <code>5V</code> on AREF without proper setup!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Choose the Right Reference!",
      "content": "<div class='card'>\nYou want to measure 0–1V signal. What reference is best?\n</div>\n<div class='card'>\n<input id='refGame' placeholder='DEFAULT, INTERNAL, EXTERNAL?' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ INTERNAL! It’s perfect for small signals like 1.1V max.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Not So Analog: Welcome to analogWrite()",
  "lessons": [
    {
      "title": "🎚️ What is analogWrite()?",
      "content": "<div class='card'>\n<code>analogWrite(pin, value)</code> sends a fake analog signal (actually PWM!)\n</div>\n<div class='card'>\nValue ranges from <b>0 (off)</b> to <b>255 (full on)</b>\n</div>\n<div class='card'>\nSo <code>analogWrite(9, 127);</code> gives half brightness to an LED connected to pin 9.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📊 Wait — What is PWM?",
      "content": "<div class='card'>\n<b>PWM = Pulse Width Modulation</b>\n</div>\n<div class='card'>\nArduino rapidly turns pin ON and OFF:\n- More ON than OFF = higher brightness\n- More OFF than ON = dimmer light\n</div>\n<div class='card'>\nIt happens so fast, we don’t see flicker 👀\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "⚡ When & Where to Use?",
      "content": "<div class='card'>\nYou’ll use <code>analogWrite()</code> to:\n<ul>\n<li>Dim LEDs</li>\n<li>Control motor speed</li>\n<li>Generate audio tones (with some tricks!)</li>\n<li>Make RGB LEDs change color</li>\n</ul>\n</div>\n<div class='card'>\nOnly specific PWM-capable pins work with this!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📍 PWM-Capable Pins",
      "content": "<div class='card'>\nOn Arduino UNO:\n<ul>\n<li><b>Pins: 3, 5, 6, 9, 10, 11</b></li>\n<li>Look for the ~ symbol on the board</li>\n</ul>\n</div>\n<div class='card'>\nOn other boards? Check their pinout diagrams!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🌍 Real Life Example: Fan Speed Control",
      "content": "<div class='card'>\nImagine you control a ceiling fan speed:\n- Slow: analogWrite = 80\n- Medium: analogWrite = 160\n- Fast: analogWrite = 255\n</div>\n<div class='card'>\nSame concept for DC motors using motor drivers!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: LED Dimming!",
      "content": "<div class='card'>\nWire an LED → Pin 9 + resistor\n</div>\n<div class='card'>\n<pre>\nvoid setup() {\n  pinMode(9, OUTPUT);\n}\n\nvoid loop() {\n  for (int i = 0; i <= 255; i++) {\n    analogWrite(9, i);\n    delay(10);\n  }\n  for (int i = 255; i >= 0; i--) {\n    analogWrite(9, i);\n    delay(10);\n  }\n}\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: PWM Explained Visually",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/3BHz0Dbb0h4' title='PWM Arduino analogWrite() Tutorial' frameborder='0' allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Match the Brightness",
      "content": "<div class='card'>\nIf 0 = OFF and 255 = FULL, what is analogWrite(9, 127)?\n</div>\n<div class='card'>\n<input id='brightnessGame' placeholder='Your guess' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ Half brightness! 127 is about 50% duty cycle.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Precision Power: analogWriteResolution()",
  "lessons": [
    {
      "title": "🎚️ What is analogWriteResolution()?",
      "content": "<div class='card'>\nBy default, <code>analogWrite()</code> accepts values from <b>0 to 255</b> (8-bit resolution).\n</div>\n<div class='card'>\n<code>analogWriteResolution(bits)</code> allows you to increase or decrease this range!\n</div>\n<div class='card'>\nExample:\n<pre>analogWriteResolution(12);</pre>\nNow <code>analogWrite()</code> accepts values from 0 to 4095.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💡 Why Does This Matter?",
      "content": "<div class='card'>\nHigher resolution = smoother brightness or motor control.\n</div>\n<div class='card'>\nIt's like turning a volume knob — 256 steps is OK, but 4096 steps gives you finesse 🎧\n</div>\n<div class='card'>\nOnly some Arduino boards support this:\n<ul>\n<li>Arduino Due</li>\n<li>Zero</li>\n<li>MKR series</li>\n<li>Portenta, Nano 33 IoT, etc.</li>\n</ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Real-Life Example: Smooth Light Fading",
      "content": "<div class='card'>\nYour eyes can detect small flickers in brightness at low levels.\n</div>\n<div class='card'>\nIf you're fading a backlight or mood LED:\n- 8-bit (256 steps) might look choppy\n- 12-bit (4096 steps) feels buttery smooth 🍦\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📘 Syntax + How To Use",
      "content": "<div class='card'>\n<pre>\nanalogWriteResolution(12);\nanalogWrite(PIN, 2048); // 50% of 12-bit\n</pre>\n</div>\n<div class='card'>\nMake sure your board supports it. Otherwise, the function is ignored silently 😶\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: PWM + Resolution in Action",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/C6T9sI5QmTo' title='PWM Resolution Arduino' frameborder='0' allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Super-Smooth Fade",
      "content": "<div class='card'>\n<pre>\nanalogWriteResolution(12); // set resolution\nfor (int i = 0; i <= 4095; i++) {\n  analogWrite(PIN_LED, i);\n  delay(1);\n}\n</pre>\n</div>\n<div class='card'>\nNow fade back down from 4095 to 0 for full effect 💡\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Resolution Math",
      "content": "<div class='card'>\nIf you want 25% brightness on 10-bit resolution, what value do you write?\n(0 to 1023 scale)\n</div>\n<div class='card'>\n<input id='resGame' placeholder='Your guess' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ 256! That’s 25% of 1023.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}

      ]
    },
    {
      title:"Waveforms, Robots & Angles: Trigonometry with Arduino",
      modules:[
        {
          title:"Sine Wave Magic: Using sin() in Arduino",
          lessons:[
            {
  "title": "📈 What is sin()? The Wave Creator",
  "content": "<div class=\"card\">\n<code>sin(angle)</code> returns the sine of an angle in radians (not degrees!).\n</div>\n<div class=\"card\">\nIts value ranges between -1 to +1.\n</div>\n<div class=\"card\">\nExample:\n<pre>\nfloat result = sin(PI / 2);  // = 1.0\n</pre>\n</div>\n<div class=\"card\">\nThink of it like a smooth wave — great for robotics and animations!\n</div>",
  "image": "url",
  "audio": "url"
}
,{
  "title": "🤖 Servo Wobble using sin()",
  "content": "<div class=\"card\">\nImagine a robot head slowly swaying side to side like it's nodding to music.\n</div>\n<div class=\"card\">\n<pre>\n#include <Servo.h>\nServo myServo;\nvoid setup() {\n  myServo.attach(9);  // use PWM pin 9\n}\n\nvoid loop() {\n  float angle = (sin(millis() / 1000.0) + 1) * 90; // range 0–180\n  myServo.write(angle);\n  delay(20);\n}\n</pre>\n</div>\n<div class=\"card\">\nThis creates a calming left-right servo sweep. 🔁\n</div>",
  "image": "url",
  "audio": "url"
}
,{
  "title": "🎮 sin() Quiz Time!",
  "content": "<div class=\"card\">\nWhat is <code>sin(PI)</code> ?\n</div>\n<div class=\"card\">\n<input id=\"sinquiz\" placeholder=\"Your answer (0, 1, etc)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct! sin(PI) ≈ 0')\">Submit</button>\n</div>",
  "image": "url",
  "audio": "url"
}
,{
  "title": "📺 Watch: Sine Motion on Arduino",
  "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/8Vj8XMvyyfw\" title=\"Arduino sin() based motion\" frameborder=\"0\" allowfullscreen></iframe>",
  "image": "url",
  "audio": "url"
}
,{
  "title": "💡 LED Breathing with sin()",
  "content": "<div class=\"card\">\nHook an LED to Pin 9 (PWM pin).\n</div>\n<div class=\"card\">\n<pre>\nvoid loop() {\n  float value = sin(millis() / 1000.0);\n  int brightness = (value + 1) * 127.5;  // map to 0-255\n  analogWrite(9, brightness);\n  delay(10);\n}\n</pre>\n</div>\n<div class=\"card\">\nA smooth fade-in-out effect! ✨\n</div>",
  "image": "url",
  "audio": "url"
}

          ]
        },
        {
  "title": "Riding the Wave: cos() in Arduino",
  "lessons": [
    {
      "title": "🌊 What is cos()? Why Do We Need It?",
      "content": "<div class=\"card\">\n<code>cos(angle)</code> calculates the cosine of an angle (in radians).\n</div>\n<div class=\"card\">\nIt returns values from +1 to -1, just like <code>sin()</code>.\nBut it starts from 1 instead of 0, giving you a 'lead' wave.\n</div>\n<div class=\"card\">\nUse <code>cos()</code> when you want something to start fully ON — e.g., a fading light that starts bright.\n</div>\n<div class=\"card\">\nFormula:\n<pre>\nfloat value = cos(angle_in_radians);\n</pre>\nResult: value between -1.0 and 1.0\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Real-Life Analogy: Wheel Rotation",
      "content": "<div class=\"card\">\nImagine a wheel rotating — the <b>cos()</b> value tells how far forward or backward your wheel is shifting.\n</div>\n<div class=\"card\">\nUsed in games, waves, oscillating servos, robotic limbs, LED breathing, and simulated pendulums.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🛠️ Example: LED Pulse with cos()",
      "content": "<div class=\"card\">\nWe’ll use <code>analogWrite()</code> on pin 9 (PWM capable pin) to simulate a breathing LED effect that starts ON.\n</div>\n<div class=\"card\">\n<pre>\nvoid loop() {\n  float angle = millis() / 1000.0;\n  float wave = cos(angle);\n  int brightness = (wave + 1) * 127.5;\n  analogWrite(9, brightness);\n  delay(10);\n}\n</pre>\n</div>\n<div class=\"card\">\nNotice how this breathing starts from full brightness — unlike <code>sin()</code>.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Match the Curve!",
      "content": "<div class=\"card\">\nWhich one is a <b>cosine</b> graph?\n</div>\n<div class=\"card\">\n<ul>\n<li>A. Starts at 0, peaks at middle</li>\n<li>B. Starts at 1, then drops</li>\n<li>C. Flat line</li>\n</ul>\n</div>\n<div class=\"card\">\n<input id=\"cosgame\" placeholder=\"Type A, B, or C\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct! It’s B — cosine starts at 1.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: sin() vs cos() Explained Visually",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/yAXo3xU2bDU\" title=\"Sine vs Cosine Arduino Animation\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Experiment: Wobble Two Servos with sin & cos",
      "content": "<div class=\"card\">\nAttach Servo1 to Pin 9 and Servo2 to Pin 10.\n</div>\n<div class=\"card\">\n<pre>\n#include <Servo.h>\nServo s1, s2;\nvoid setup() {\n  s1.attach(9);\n  s2.attach(10);\n}\nvoid loop() {\n  float t = millis() / 1000.0;\n  s1.write((sin(t) + 1) * 90);\n  s2.write((cos(t) + 1) * 90);\n  delay(10);\n}\n</pre>\n</div>\n<div class=\"card\">\nTwo servos will dance in a 90° wave delay. Cool robotic motion!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎓 Summary: cos() is sin()'s Twin but Leads",
      "content": "<div class=\"card\">\nBoth <code>sin()</code> and <code>cos()</code> are periodic functions used in time-based or rotational actions.\n</div>\n<div class=\"card\">\nUse <code>cos()</code> when you want a wave-like motion that starts from full value (1.0) instead of 0.\n</div>\n<div class=\"card\">\nUse in animation curves, robot walking patterns, wave tone synths, servo syncs, and LED fade-in-out.\n</div>"
    }
  ]
}
,{
  "title": "Tilted Perspectives: tan() in Arduino",
  "lessons": [
    {
      "title": "📐 What is tan()? Why Is It Useful?",
      "content": "<div class=\"card\">\n<code>tan(angle)</code> returns the tangent of an angle in radians.\n</div>\n<div class=\"card\">\n⚠️ Unlike <code>sin()</code> or <code>cos()</code>, <b>tan()</b> can go from -∞ to +∞ — very steep!\n</div>\n<div class=\"card\">\nIt’s often used to calculate the slope of a line or simulate tilting behavior.\nFormula:\n<pre>float result = tan(angle_in_radians);</pre>\n</div>\n<div class=\"card\">\n⚠️ Warning: <b>tan()</b> has undefined points (like 90° or π/2 radians), causing huge spikes or crashy math!\n</div>"
    },
    {
      "title": "🌍 Real-Life Example: Simulating Slope & Angle",
      "content": "<div class=\"card\">\nImagine your robot is climbing a ramp. Use <code>tan()</code> to calculate the ramp’s slope from angle.\n</div>\n<div class=\"card\">\nExample: Slope = height / base = <code>tan(angle)</code> — cool, right?\n</div>\n<div class=\"card\">\nPerfect for terrain estimation, tilt sensors, and robotic balancing! 🤖\n</div>"
    },
    {
      "title": "🛠️ Code Example: Accelerometer Tilt Angle",
      "content": "<div class=\"card\">\nLet’s say you read X and Z values from an accelerometer.\n</div>\n<div class=\"card\">\nYou want to estimate the angle of tilt:\n<pre>\nfloat angle = atan(x / z);  // inverse tan (arc tangent)\n</pre>\nThat’s <b>how real robots balance</b> on slopes!\n</div>"
    },
    {
      "title": "🎮 Game: Safe or Crashy?",
      "content": "<div class=\"card\">\nWhich angle will make tan() go crazy?\n<pre>A) 45° (PI/4 radians)\nB) 90° (PI/2 radians)\nC) 0°\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"tanGame\" placeholder=\"Your answer (A, B, C)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ B is the danger zone! tan(PI/2) = infinite.')\">Submit</button>\n</div>"
    },
    {
      "title": "📺 Video: Slope & Tangent in Real Motion",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/ZbozD0HXpbg\" title=\"Tangent Angle Explained with Arduino\" frameborder=\"0\" allowfullscreen></iframe>"
    },
    {
      "title": "🧪 Try It: Servo Controlled by Tan() Function",
      "content": "<div class=\"card\">\nLet’s simulate a servo arm that reacts to a changing slope.\n</div>\n<div class=\"card\">\n<pre>\n#include <Servo.h>\nServo s;\nvoid setup() {\n  s.attach(9);\n}\nvoid loop() {\n  float t = millis() / 1000.0;\n  float slope = tan(t);\n  int angle = constrain((slope + 1) * 45, 0, 180);\n  s.write(angle);\n  delay(10);\n}\n</pre>\n</div>\n<div class=\"card\">\n📈 The servo wiggles more dramatically as <code>tan()</code> spikes!\n</div>"
    },
    {
      "title": "🔍 Advanced Tip: Use atan() Often Instead",
      "content": "<div class=\"card\">\nWhile <code>tan()</code> is useful, most real applications use <code>atan()</code> or <code>atan2()</code> — these give you the angle from X/Y ratios.\n</div>\n<div class=\"card\">\nUse <code>tan()</code> for theoretical sim or wave math.\nUse <code>atan2(y, x)</code> for real-world position sensors, GPS, or 2D orientation.\n</div>"
    },
    {
      "title": "🎓 Summary: tan() = Slope = Danger + Power",
      "content": "<div class=\"card\">\nUse <code>tan()</code> to simulate steepness or exponential growth.\nBut be careful near PI/2 radians (90°) — things get wild 😬\n</div>\n<div class=\"card\">\nGreat for wave-skewing, slope prediction, or servo drama.\nBut always constrain and monitor your output!\n</div>"
    }
  ]
}

      ]
    },{
      title:"⚡ Instant Reactions: Mastering External Interrupts",
      modules:[
        {
  "title": "attachInterrupt(): The Lightning Listener",
  "lessons": [
    {
      "title": "🌩️ What is attachInterrupt()?",
      "content": "<div class='card'>Imagine you’re coding a robot, and suddenly, someone claps 👏. The robot must STOP what it’s doing and react instantly. <b>That’s what interrupts are for.</b></div>\n<div class='card'>An <b>interrupt</b> is a special event that makes Arduino pause everything and jump to a specific function instantly.\n<pre>attachInterrupt(digitalPinToInterrupt(pin), ISR, mode);</pre>\nWhere:\n<ul>\n<li><code>pin</code>: The digital pin you want to monitor</li>\n<li><code>ISR</code>: The function to run (Interrupt Service Routine)</li>\n<li><code>mode</code>: WHEN to trigger: <code>RISING</code>, <code>FALLING</code>, or <code>CHANGE</code></li>\n</ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💬 Real-Life Analogy: Doorbell Interrupt",
      "content": "<div class='card'>You're watching Netflix 🍿, and someone rings the doorbell 🚪🔔.\nYou pause the movie, check the door (ISR), then resume watching. That’s an <b>interrupt</b>.</div>\n<div class='card'>Arduino does the same thing:\n<pre>\nvoid ringBell() {\n  Serial.println(\"🔔 Someone’s at the door!\");\n}\n\nattachInterrupt(digitalPinToInterrupt(2), ringBell, FALLING);</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: External Interrupts Tutorial",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/o2hrpZB2E9w\" title=\"Arduino Interrupt Tutorial\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: When to Interrupt?",
      "content": "<div class='card'>Which situation needs an interrupt?\n<ol>\n<li>Checking a temperature sensor every 5 seconds</li>\n<li>Detecting sudden light using a photoresistor</li>\n<li>Counting button presses at any time</li>\n</ol></div>\n<div class='card'>\n<input placeholder='Type 2 and 3' id='interruptGame' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! Use interrupts when immediate response is required.\")'>Submit</button></div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔍 What Pins Work with Interrupts?",
      "content": "<div class='card'>It depends on your board:\n<ul>\n<li><b>Uno/Nano:</b> Pins 2 & 3 only</li>\n<li><b>Mega:</b> Pins 2, 3, 18, 19, 20, 21</li>\n<li><b>ESP32/ESP8266:</b> Almost all digital pins (⚡cool!)</li>\n</ul>\n</div>\n<div class='card'>Use <code>digitalPinToInterrupt(pin)</code> to be safe.\nExample:\n<pre>\nattachInterrupt(digitalPinToInterrupt(2), alarm, RISING);\n</pre></div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Experiment: Emergency Brake Button",
      "content": "<div class='card'>Simulate an emergency stop using a pushbutton:\n<ul><li>Connect Button to Pin 2 (interrupt pin)</li>\n<li>LED to Pin 13</li></ul>\n</div>\n<div class='card'>\n<pre>\nvolatile bool stopNow = false;\nvoid emergencyStop() {\n  stopNow = true;\n}\n\nvoid setup() {\n  pinMode(13, OUTPUT);\n  attachInterrupt(digitalPinToInterrupt(2), emergencyStop, FALLING);\n}\n\nvoid loop() {\n  if (!stopNow) {\n    digitalWrite(13, HIGH);\n    delay(200);\n    digitalWrite(13, LOW);\n    delay(200);\n  }\n}</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📘 Pro Tips for attachInterrupt",
      "content": "<div class='card'>⏱️ The ISR (interrupt function) must be fast! Don’t use <code>delay()</code> or <code>Serial.print()</code> inside it.</div>\n<div class='card'>Keep ISR logic short — just change a variable, then act on it in <code>loop()</code>.</div>\n<div class='card'>Use <code>volatile</code> keyword for any shared variables!</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "detachInterrupt(): Power Down the Listener",
  "lessons": [
    {
      "title": "🔌 What is detachInterrupt()?",
      "content": "<div class='card'>Once you <code>attachInterrupt()</code>, Arduino keeps listening for that trigger forever… unless you tell it to STOP.</div>\n<div class='card'><code>detachInterrupt(pin)</code> disables the interrupt from the specified pin.</div>\n<div class='card'>It’s like saying: “Ignore the doorbell now, I’m focused.”</div>\n<pre>\ndetachInterrupt(digitalPinToInterrupt(2));</pre>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔍 When to Use detachInterrupt()",
      "content": "<div class='card'>🔊 Use cases:\n<ul>\n<li>✅ Once an alarm is triggered, no need to re-trigger it.</li>\n<li>✅ Avoid bounce or repeated triggers.</li>\n<li>✅ Switching from manual to auto mode in a system.</li>\n</ul></div>\n<div class='card'>🧠 It helps cleanly control WHEN your Arduino should react — or ignore — signals.</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🏡 Real-Life Example: Security System",
      "content": "<div class='card'>In a home security system, once an intruder is detected, we sound the alarm and stop listening to further motion — until reset.</div>\n<div class='card'>Code:\n<pre>\nvoid intruderAlert() {\n  alarmOn = true;\n  detachInterrupt(digitalPinToInterrupt(2));\n}</pre></div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Disable After First Trigger",
      "content": "<div class='card'>Wiring:\n<ul><li>Button → Pin 2 (interrupt)</li><li>LED → Pin 13</li></ul></div>\n<div class='card'>Code:\n<pre>\nvolatile bool pressed = false;\nvoid stopOnce() {\n  pressed = true;\n  detachInterrupt(digitalPinToInterrupt(2));\n}\n\nvoid setup() {\n  pinMode(13, OUTPUT);\n  attachInterrupt(digitalPinToInterrupt(2), stopOnce, FALLING);\n}\n\nvoid loop() {\n  if (pressed) digitalWrite(13, HIGH);\n}</pre></div>\n<div class='card'>✅ The LED lights up once, then ignores future presses!</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎓 Recap: Keep It Controlled",
      "content": "<div class='card'>🚫 <code>detachInterrupt()</code> is your off switch for triggers.</div>\n<div class='card'>📦 Use it to pause/reactivate inputs intelligently — in alarms, counters, games, and more!</div>\n<div class='card'><code>attachInterrupt()</code> starts the reaction,<br><code>detachInterrupt()</code> ends it like a pro.</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "digitalPinToInterrupt(): Board-Safe Interrupt Mapping",
  "lessons": [
    {
      "title": "🧭 Why digitalPinToInterrupt()?",
      "content": "<div class='card'>Every Arduino board has different interrupt-capable pins.</div>\n<div class='card'>You can’t assume <code>pin 2</code> or <code>pin 3</code> works for all models.\nThat’s where <code>digitalPinToInterrupt()</code> comes in.</div>\n<div class='card'>It maps your pin to the internal interrupt number.</div>\n<pre>\nattachInterrupt(digitalPinToInterrupt(2), ISR, FALLING);</pre>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 When Should I Use It?",
      "content": "<div class='card'>✅ Always!</div>\n<div class='card'>✅ Makes your code portable between Uno, Mega, Nano, Leonardo, ESP32, etc.</div>\n<div class='card'>✅ Avoids errors like: <code>'2' is not an interrupt</code> on some boards.</div>\n<div class='card'>💡 Treat it like a translator between your chosen pin and the chip’s actual interrupt number.</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔌 Real-Life Analogy: Hotel Room Numbers",
      "content": "<div class='card'>Imagine you say: \"I want room 101,\" but the hotel staff uses internal room IDs.</div>\n<div class='card'>They use a map to find which actual corridor and key belong to Room 101.</div>\n<div class='card'>That’s exactly what <code>digitalPinToInterrupt()</code> does.</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Safer Interrupt Setup",
      "content": "<div class='card'>Let’s use a button on Pin 3 and trigger an LED on Pin 13.</div>\n<pre>\nvolatile bool isOn = false;\n\nvoid toggle() {\n  isOn = !isOn;\n}\n\nvoid setup() {\n  pinMode(13, OUTPUT);\n  attachInterrupt(digitalPinToInterrupt(3), toggle, RISING);\n}\n\nvoid loop() {\n  digitalWrite(13, isOn);\n}</pre>\n<div class='card'>✅ This will work even if you move to an ESP32 or Mega!</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Interrupts on Different Boards",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/S5U7NWxKJTA' title='Interrupts across Arduino boards' frameborder='0' allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧩 Summary: Always Use It!",
      "content": "<div class='card'><code>digitalPinToInterrupt()</code> = portable, error-free interrupts.</div>\n<div class='card'>It adapts your code to work with any compatible Arduino board automatically.</div>\n<div class='card'>🚀 Pro coders never hardcode pin numbers — they use this helper function!</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}

      ]
    },{
      title:"Mastering Advanced I/O: Sounds, Signals & Data Streams",
      modules:[
        {
  "title": "Let’s Make Some Noise: Exploring tone()",
  "lessons": [
    {
      "title": "🔊 What is tone()?",
      "content": "<div class='card'>The <code>tone()</code> function lets Arduino play musical notes or alert sounds by sending out square wave frequencies on a pin.</div>\n<div class='card'><pre>tone(pin, frequency);</pre>\nYou can even add duration:\n<pre>tone(pin, frequency, duration);</pre></div>\n<div class='card'>🎵 Frequency = pitch (e.g., 440Hz = A note)</div>\n<div class='card'>⌛ Duration = how long to play (in ms)</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🌍 Where and Why is tone() Used?",
      "content": "<div class='card'>- Buzzers for alerts\n- Sound effects in projects\n- Musical instruments\n- Alarms and reminders\n- Sensor feedback tones</div>\n<div class='card'>🎮 Game consoles and microwaves use tone-like sound signals. So can your Arduino!</div>\n<div class='card'>Use any PWM-capable digital pin (e.g., Pin 8 or 9 on Uno) 🎧</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🏠 Real-Life Example: Doorbell Buzz",
      "content": "<div class='card'>Imagine a smart home doorbell using Arduino. A visitor presses a button, and Arduino plays a tone:</div>\n<pre>\nif (digitalRead(2) == HIGH) {\n  tone(8, 1000, 500); // 1kHz tone for 0.5s\n}</pre>\n<div class='card'>This mimics the buzz you hear on apartment doors 🚪🔔</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Buzzer Melody with tone()",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/1JDEf1glEDA' title='Arduino Buzzer with tone()' frameborder='0' allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Guess That Frequency!",
      "content": "<div class='card'>What happens when you run this?</div>\n<pre>tone(9, 261, 500);</pre>\n<div class='card'>A) A low-pitched rumble\nB) A mid-range beep\nC) A high-pitched squeak</div>\n<div class='card'>\n<input id='toneQuiz' placeholder='A, B or C?' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct: B! 261Hz = Middle C 🎹\")'>Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Motion Alarm System",
      "content": "<div class='card'>Hook up a motion sensor and buzzer:</div>\n<pre>\n#define buzzerPin 10\nvoid setup() {\n  pinMode(2, INPUT); // Motion sensor\n}\nvoid loop() {\n  if (digitalRead(2) == HIGH) {\n    tone(buzzerPin, 1200, 1000);\n  }\n}</pre>\n<div class='card'>👣 Motion triggers sound — great for theft detection or hallway alerts!</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💡 Pro Tip: Only One tone() at a Time",
      "content": "<div class='card'>Arduino can only play one tone at once.</div>\n<div class='card'>If you call <code>tone()</code> again on a different pin, it stops the previous one!</div>\n<div class='card'>Use <code>noTone(pin);</code> to manually stop sound.</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎓 Summary: Arduino + Sound = Fun Projects",
      "content": "<div class='card'>You can make alarms, instruments, and interactive sounds using just a simple piezo buzzer!</div>\n<div class='card'>And it’s all powered by:\n<pre>tone(pin, frequency, duration);</pre></div>\n<div class='card'>Go compose your first Arduino music loop now 🎼🤖</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Silence the Sound: Exploring noTone()",
  "lessons": [
    {
      "title": "🤫 What is noTone()?",
      "content": "<div class='card'>The <code>noTone(pin)</code> function is the OFF switch for any sound being played using <code>tone()</code>.</div>\n<div class='card'><pre>\nnoTone(8);  // Immediately stop sound on pin 8\n</pre></div>\n<div class='card'>It's perfect when you want to stop a buzzer on demand (e.g., after a button is released or a timeout).</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🌍 Where & Why Would You Use noTone()?",
      "content": "<div class='card'>🔕 Alarms that should stop after a condition is resolved (e.g., motion stopped)</div>\n<div class='card'>🔄 Replace tones with silence in games or apps\n🛑 Stop continuous sounds after a set time</div>\n<div class='card'>🎯 Use it with the same pin used by <code>tone()</code>. E.g., Digital Pin 9 on Arduino Uno</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🏠 Real-Life Example: Security Buzzer Reset",
      "content": "<div class='card'>Imagine a home alarm — it buzzes if motion is detected. But once the person walks away, the sound should stop!</div>\n<div class='card'>This logic works:</div>\n<pre>\nif (digitalRead(2) == HIGH) {\n  tone(9, 1500);\n} else {\n  noTone(9);\n}\n</pre>\n<div class='card'>🎯 Great for creating professional-feeling alarms, entry systems, or visitor alerts!</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: tone() + noTone() Demo",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/lW-wc__AsNw' title='Arduino tone and noTone Example' frameborder='0' allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: When to Silence?",
      "content": "<div class='card'>When would you call <code>noTone()</code> in this logic?</div>\n<pre>\nif (digitalRead(2) == ???) {\n  noTone(9);\n}\n</pre>\n<div class='card'>A) HIGH – button pressed\nB) LOW – button released\nC) ALWAYS</div>\n<div class='card'>\n<input id='ntquiz' placeholder='Your answer (A/B/C)' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Best answer: B! Stop tone when button is released.\")'>Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Button-Silenced Alarm",
      "content": "<div class='card'>Wire a button to Pin 2, buzzer to Pin 9:</div>\n<pre>\nvoid loop() {\n  if (digitalRead(2) == LOW) {\n    noTone(9); // Button released\n  } else {\n    tone(9, 2000); // Button held\n  }\n}\n</pre>\n<div class='card'>This setup lets the user cancel the alarm by releasing the button 🔇</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎓 Recap: tone() + noTone = 🔊🎚️ Control",
      "content": "<div class='card'>Use <code>noTone(pin)</code> to stop a sound when it's no longer needed.</div>\n<div class='card'>Just like how you pause music on your phone, <code>noTone()</code> brings silence to your project 🎶❌</div>\n<div class='card'>Perfect for clean transitions and reducing power usage!</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Catch the Pulse: Measuring with pulseIn()",
  "lessons": [
    {
      "title": "📊 What is a Pulse?",
      "content": "<div class='card'>A <b>pulse</b> is a quick burst of HIGH or LOW signal — like a clap of hands or a blink of light.</div>\n<div class='card'>It's used in sensors, remotes, servo control, and signal timing.</div>\n<div class='card'>When a signal turns ON then OFF rapidly, that’s a pulse. Arduino can measure how long it lasted using <code>pulseIn()</code>.</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📘 Syntax & Purpose of pulseIn()",
      "content": "<div class='card'>Use <code>pulseIn(pin, value)</code> to measure how long a pin stayed <b>HIGH</b> or <b>LOW</b>.</div>\n<pre>\nlong duration = pulseIn(7, HIGH);\n</pre>\n<div class='card'>It returns the pulse length in microseconds (μs)!</div>\n<div class='card'>🎯 Common Use: Ultrasonic sensors, IR remotes, PWM signal analysis</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🌍 Real-Life Example: Ultrasonic Distance",
      "content": "<div class='card'>Think of sonar — like a dolphin sending a sound pulse and listening for the echo.</div>\n<div class='card'>HC-SR04 sensor sends a HIGH pulse. Arduino listens for the echo using:</div>\n<pre>\nlong duration = pulseIn(echoPin, HIGH);\n</pre>\n<div class='card'>Longer the pulse, farther the object!</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔌 What Pins Can You Use?",
      "content": "<div class='card'>✅ <b>Any digital pin</b> on Arduino can be used with <code>pulseIn()</code></div>\n<div class='card'>Just connect the signal wire (e.g. echo pin of sensor) to a digital pin — often Pin 7 or 8 for sensors</div>\n<div class='card'>⚠️ Avoid using PWM pins for both input and output at the same time.</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: pulseIn + Ultrasonic Sensor",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/9xToP9Hvrqk' title='Arduino Ultrasonic Sensor & pulseIn Tutorial' frameborder='0' allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Echo Time with pulseIn()",
      "content": "<div class='card'>Wiring:</div>\n<ul>\n<li>HC-SR04 Echo → Pin 7</li>\n<li>Trigger → Pin 6</li>\n</ul>\n<pre>\ndigitalWrite(6, LOW);\ndelayMicroseconds(2);\ndigitalWrite(6, HIGH);\ndelayMicroseconds(10);\ndigitalWrite(6, LOW);\n\nlong duration = pulseIn(7, HIGH);\nSerial.println(duration);\n</pre>\n<div class='card'>This prints the pulse duration in microseconds 📏</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: What's the Distance?",
      "content": "<div class='card'>If pulseIn() gives 500 μs, how far is the object (in cm)?</div>\n<div class='card'>Use this rule: <br><code>distance_cm = duration / 58.0</code></div>\n<div class='card'>\n<input id='pulsegame' placeholder='Enter distance in cm' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ 500 / 58 = ~8.6 cm\")'>Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎓 Recap: When to Use pulseIn()",
      "content": "<div class='card'>Use it when you want to:</div>\n<ul>\n<li>⏱️ Measure duration of a pulse (HIGH or LOW)</li>\n<li>📡 Read distance using ultrasonic sensors</li>\n<li>🛰️ Decode signals from IR remotes or radio</li>\n</ul>\n<div class='card'>It’s like Arduino’s stopwatch for electrical pulses 🕒⚡</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "Patience Pays: Using pulseInLong() for Longer Pulses",
  "lessons": [
    {
      "title": "🧠 Why pulseInLong() Exists",
      "content": "<div class='card'>While <code>pulseIn()</code> is great for measuring short pulses, it may <b>timeout early</b> when the pulse is long.</div>\n<div class='card'>That’s where <code>pulseInLong()</code> steps in — it's like <b>pulseIn with more patience</b>.</div>\n<div class='card'>⏳ It allows for longer timeout periods, perfect for slow signals or long-distance ultrasonic sensors.</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🛠️ Syntax & How to Use",
      "content": "<div class='card'>Here's the syntax for <code>pulseInLong()</code>:</div>\n<pre>pulseInLong(pin, value)</pre>\n<pre>pulseInLong(pin, value, timeout)</pre>\n<div class='card'>Just like <code>pulseIn()</code>, it waits for the pin to go HIGH or LOW and measures the duration (in μs).</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🌐 When to Use pulseInLong()",
      "content": "<div class='card'>✅ Use this when:</div>\n<ul>\n<li>You're dealing with <b>long pulse durations</b></li>\n<li>Your sensor’s signal is slow to return</li>\n<li>You need to measure PWM from slow devices (e.g. infrared sensors)</li>\n</ul>\n<div class='card'>⛔ Avoid in time-critical code — it still blocks while waiting for the pulse!</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🏠 Real-Life Analogy: Long Echo in a Cave",
      "content": "<div class='card'>Imagine shouting into a deep cave.</div>\n<div class='card'>It takes longer for the echo to return — <b>pulseIn() may give up too soon</b>.</div>\n<div class='card'>But <code>pulseInLong()</code> waits longer, capturing even the slowest echo like a pro spelunker 🧗</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Using pulseIn vs pulseInLong",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/jFzJk6NK9eA' title='pulseInLong Arduino Example' frameborder='0' allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Compare Two Distance Modes",
      "content": "<div class='card'>Wire HC-SR04 echo to Pin 7</div>\n<pre>\nlong duration1 = pulseIn(7, HIGH);\nlong duration2 = pulseInLong(7, HIGH);\n\nSerial.print(\"pulseIn: \");\nSerial.println(duration1);\nSerial.print(\"pulseInLong: \");\nSerial.println(duration2);\n</pre>\n<div class='card'>See the difference in results — especially over longer distances!</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Pulse Patience Test",
      "content": "<div class='card'>If your ultrasonic pulse doesn't return in time using <code>pulseIn()</code>, what should you try?</div>\n<div class='card'>\n<input id='pulseLongQuiz' placeholder='Type your answer' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! Use pulseInLong() to allow more time.\")'>Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎓 Recap: pulseInLong vs pulseIn",
      "content": "<div class='card'><b>pulseIn()</b> — Quick, works great for short signals</div>\n<div class='card'><b>pulseInLong()</b> — Same job, but with extended timeout capability</div>\n<div class='card'>Use when pulse timing may be long (like deep-distance sensors)</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "shiftIn() — Talk to the 74HC165 Like a Pro",
  "lessons": [
    {
      "title": "📦 What's a Shift Register? (74HC165)",
      "content": "<div class=\"card\">\nA shift register is a chip that helps Arduino deal with <b>more inputs</b> using <b>fewer pins</b>.\n</div>\n<div class=\"card\">\n<b>74HC165</b> is a special kind:\n👉 Parallel-In, Serial-Out\nIt reads 8 switches <i>at once</i> but sends that data one bit at a time.\n</div>\n<div class=\"card\">\n📊 Example Use:\n- Read 8 buttons with just 3 Arduino pins 😲\n- Build a control panel\n- Old keyboard scanners\n</div>",
      "image": "url_to_diagram",
      "audio": "url"
    },
    {
      "title": "📐 How shiftIn() Helps",
      "content": "<div class=\"card\">\nYour Arduino <b>asks</b> the 74HC165: “Give me the next bit!” — and it replies... 0 or 1.\n</div>\n<div class=\"card\">\nThis happens 8 times, and Arduino builds a full <code>byte</code> from it.\n</div>\n<div class=\"card\">\nNow you know which buttons are pressed!\n</div>",
      "image": "url_to_timing_diagram",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Wiring 74HC165 with Arduino",
      "content": "<div class=\"card\">\nWiring:\n<ul>\n<li>74HC165 QH (output) → Arduino D8</li>\n<li>Clock → D9</li>\n<li>Load/Shld → D10</li>\n</ul>\nPull up all 8 data pins with resistors and buttons.\n</div>\n<div class=\"card\">\n<pre>\n#define DATA 8\n#define CLOCK 9\n#define LOAD 10\n\nvoid loop() {\n  digitalWrite(LOAD, LOW);\n  delayMicroseconds(5);\n  digitalWrite(LOAD, HIGH);\n\n  byte data = shiftIn(DATA, CLOCK, MSBFIRST);\n  Serial.println(data, BIN);\n}\n</pre>\n</div>\n<div class=\"card\">\nNow press buttons and see the byte change in Serial Monitor!\n</div>",
      "image": "url_to_real_button_board",
      "audio": "url"
    },
    {
      "title": "📺 Video: 74HC165 with shiftIn()",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/GUnUfpXcAqk\" title=\"74HC165 with Arduino\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "💡 Real-Life Analogy",
      "content": "<div class=\"card\">\nImagine 8 kids raising hands (1 = up, 0 = down).\nBut the teacher (Arduino) can't see them all.\nSo one kid whispers each hand's state to the teacher one-by-one.\nThat’s how <b>serial data</b> works — bit by bit.\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "shiftOut() — More LEDs, Fewer Pins (Thanks 74HC595!)",
  "lessons": [
    {
      "title": "💡 Why shiftOut()? What's 74HC595?",
      "content": "<div class=\"card\">\nArduino has limited digital output pins.\n</div>\n<div class=\"card\">\nEnter the 🦸‍♂️ hero chip: <b>74HC595</b> —\nA <b>Serial-In, Parallel-Out</b> shift register!\nIt takes data <i>bit-by-bit</i> and lights up 8 outputs <i>at once</i>.\n</div>\n<div class=\"card\">\nUse it for:\n- LED matrix displays\n- 7-segment counters\n- Controlling 8+ relays, motors, etc.\n- DJ lights or game panels 🎮\n</div>",
      "image": "url_to_chip_diagram",
      "audio": "url"
    },
    {
      "title": "🧠 How it Works",
      "content": "<div class=\"card\">\nImagine you're passing 8 boxes down a conveyor belt one at a time.\nEach box has ON/OFF info.\n</div>\n<div class=\"card\">\n<b>shiftOut()</b> sends those boxes (bits) to 74HC595.\nWhen ready, you say “GO!” — and the chip pushes out all signals at once 💥\n</div>\n<div class=\"card\">\nThat “GO!” is done via a <code>latch</code> pin.\n</div>",
      "image": "url_to_conveyor_gif_or_static",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Wiring 74HC595 + 8 LEDs",
      "content": "<div class=\"card\">\nWiring:\n<ul>\n<li>Pin 11 (Data) → 74HC595 DS</li>\n<li>Pin 12 (Clock) → SH_CP</li>\n<li>Pin 8 (Latch) → ST_CP</li>\n<li>Q0 to Q7 → LEDs with resistors</li>\n<li>Don't forget GND!</li>\n</ul>\n</div>\n<div class=\"card\">\n<pre>\n#define DATA 11\n#define CLOCK 12\n#define LATCH 8\n\nvoid setup() {\n  pinMode(DATA, OUTPUT);\n  pinMode(CLOCK, OUTPUT);\n  pinMode(LATCH, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(LATCH, LOW);\n  shiftOut(DATA, CLOCK, MSBFIRST, 0b10101010);\n  digitalWrite(LATCH, HIGH);\n  delay(500);\n}\n</pre>\n</div>\n<div class=\"card\">\nThis blinks alternate LEDs — neat!\n</div>",
      "image": "url_to_led_array_wiring",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Guess the Pattern",
      "content": "<div class=\"card\">\nWhat will this pattern do?\n<pre>shiftOut(DATA, CLOCK, MSBFIRST, 0b11110000);</pre>\n</div>\n<div class=\"card\">\nA) First 4 LEDs ON, rest OFF\n<br>B) All LEDs ON\n<br>C) Alternate ON/OFF\n</div>\n<div class=\"card\">\n<input id=\"patternQuiz\" placeholder=\"Type A, B or C\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct! A is the right answer.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: shiftOut() + LED Example",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/6aWf3_Qg_7k\" title=\"shiftOut tutorial\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🤔 Real-Life Analogy",
      "content": "<div class=\"card\">\nThink of shiftOut like this:\n<ul>\n<li>You line up 8 toy soldiers in a line (shift bits)</li>\n<li>Then you pull the curtain (latch pin) and 💥 they all raise their weapons!</li>\n<li>This all happens using just 3 Arduino pins 😎</li>\n</ul>\n</div>",
      "image": "url_to_fun_illustration",
      "audio": "url"
    },
    {
      "title": "🧪 Bonus: Count from 0 to 255 in Binary!",
      "content": "<div class=\"card\">\nWant to flex the full power?\nLet’s make a binary counter using shiftOut:\n</div>\n<div class=\"card\">\n<pre>\nfor (int i = 0; i < 256; i++) {\n  digitalWrite(LATCH, LOW);\n  shiftOut(DATA, CLOCK, MSBFIRST, i);\n  digitalWrite(LATCH, HIGH);\n  delay(100);\n}\n</pre>\n</div>\n<div class=\"card\">\nWatch the LEDs dance through all binary combos 🕺\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}

      ]
    },{
      title:"Know Your Characters: The Art of Detecting Letters, Digits & More!",
      modules:[
        {
  "title": "isAlpha() — Is it a Letter?",
  "lessons": [
    {
      "title": "🔍 What is isAlpha()?",
      "content": "<div class=\"card\">\n<code>isAlpha(c)</code> checks if <b>c</b> is a letter from the alphabet (A–Z or a–z).\n</div>\n<div class=\"card\">\nIt returns:\n<ul>\n<li><b>true</b> if it's a letter</li>\n<li><b>false</b> if it's not (like a digit or symbol)</li>\n</ul>\n</div>\n<div class=\"card\">\nGreat for password checks, name filters, and input sanitization.\n</div>",
      "image": "url_to_letter_icon",
      "audio": "url"
    },
    {
      "title": "🧠 Real-Life Example: Name Form Validation",
      "content": "<div class=\"card\">\nYou're creating a smart name input field with Arduino + LCD.\n</div>\n<div class=\"card\">\nIf someone types <b>J0hn</b>,\n<pre>isAlpha('0')</pre>\nwill return <b>false</b> — because numbers aren't letters.\n</div>\n<div class=\"card\">\nSo you can flash a warning or buzz a buzzer 🔔\n</div>",
      "image": "url_to_form_lcd",
      "audio": "url"
    },
    {
      "title": "💻 Code Example",
      "content": "<div class=\"card\">\n<pre>\nchar c = 'A';\nif (isAlpha(c)) {\n  Serial.println(\"It's a letter!\");\n} else {\n  Serial.println(\"Not a letter!\");\n}\n</pre>\n</div>\n<div class=\"card\">\nTry with 'Z', 'm', '5', '$' — test what gets through!\n</div>",
      "image": "url_to_serial_monitor_preview",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Is it Alpha?",
      "content": "<div class=\"card\">\nWhat will this return?\n<pre>isAlpha('#')</pre>\n</div>\n<div class=\"card\">\n<input id=\"alphaGame\" placeholder=\"true or false?\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('❌ Nope! It’s FALSE — # is not a letter.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Letters vs. Not-Letters!",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/0z7QRejIW8M\" title=\"Character Functions in Arduino\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Challenge: Filter the Name!",
      "content": "<div class=\"card\">\nWrite a sketch that reads a name via Serial and removes anything that’s not a letter:\n</div>\n<div class=\"card\">\n<pre>\nvoid loop() {\n  if (Serial.available()) {\n    char c = Serial.read();\n    if (isAlpha(c)) Serial.print(c);\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\n👏 Welcome to smart input validation Arduino-style!\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "isAlphaNumeric() — Letters or Numbers?",
  "lessons": [
    {
      "title": "🔍 What is isAlphaNumeric()?",
      "content": "<div class=\"card\">\n<code>isAlphaNumeric(c)</code> checks if <b>c</b> is a letter (A-Z or a-z) <u>or</u> a digit (0–9).\n</div>\n<div class=\"card\">\nIt returns:\n<ul>\n<li><b>true</b> if it’s a letter or number</li>\n<li><b>false</b> if it’s anything else (like %, @, space, etc.)</li>\n</ul>\n</div>\n<div class=\"card\">\nIt’s like a security guard for your inputs.\n</div>",
      "image": "url_to_mixed_input",
      "audio": "url"
    },
    {
      "title": "🧠 Real-Life Example: Username Filters",
      "content": "<div class=\"card\">\nWant your user to enter a username like <code>RoboKid007</code>?\n</div>\n<div class=\"card\">\n<code>isAlphaNumeric()</code> ensures they don’t use invalid symbols like @ or #.\n</div>\n<div class=\"card\">\nPerfect for: forms, tags, LCD messages, keypads, and more.\n</div>",
      "image": "url_to_username_input",
      "audio": "url"
    },
    {
      "title": "💻 Code Example",
      "content": "<div class=\"card\">\n<pre>\nchar c = '7';\nif (isAlphaNumeric(c)) {\n  Serial.println(\"It’s a valid character!\");\n} else {\n  Serial.println(\"Not allowed!\");\n}\n</pre>\n</div>\n<div class=\"card\">\nTry testing it with '@', 'Q', '9', and a space.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Is it Alphanumeric?",
      "content": "<div class=\"card\">\n<pre>isAlphaNumeric(' ')</pre>\nWhat will this return?\n</div>\n<div class=\"card\">\n<input id=\"alphaNumGame\" placeholder=\"true or false?\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('❌ Nope! Spaces are not alphanumeric.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Character Filtering in Arduino",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/FzCftKzZ1Bo\" title=\"isAlphaNumeric() Tutorial\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Challenge: Valid Username Collector",
      "content": "<div class=\"card\">\nMake a Serial reader that accepts only letters and digits:\n</div>\n<div class=\"card\">\n<pre>\nvoid loop() {\n  if (Serial.available()) {\n    char c = Serial.read();\n    if (isAlphaNumeric(c)) {\n      Serial.print(c);\n    } else {\n      Serial.print(\"🔒\");\n    }\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\nTry typing symbols — Arduino filters them instantly!\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "isAscii() — ASCII or Not?",
  "lessons": [
    {
      "title": "💡 What is isAscii()?",
      "content": "<div class=\"card\">\n<code>isAscii(c)</code> checks if the character <b>c</b> belongs to the ASCII set.\n</div>\n<div class=\"card\">\nThat means its value is between 0 and 127.\n</div>\n<div class=\"card\">\nWhy care? Because Arduino's Serial, keypads, and displays often expect ASCII!\n</div>",
      "image": "url_to_ascii_table",
      "audio": "url"
    },
    {
      "title": "🌍 Real-Life Analogy: Keyboard Typing",
      "content": "<div class=\"card\">\nEvery time you press a key like <b>A</b> or <b>4</b>, the keyboard sends its ASCII value to your computer.\n</div>\n<div class=\"card\">\nIf someone tries to send emoji 🐱 — it’s <b>not</b> ASCII. That’s Unicode!\n</div>",
      "image": "url_keyboard_ascii",
      "audio": "url"
    },
    {
      "title": "📘 Example: Check ASCII",
      "content": "<div class=\"card\">\n<pre>\nchar c = '©'; // this is NOT ASCII\nif (isAscii(c)) {\n  Serial.println(\"ASCII accepted!\");\n} else {\n  Serial.println(\"Not ASCII! Ignored.\");\n}\n</pre>\n</div>\n<div class=\"card\">\nTry this with emojis, accented letters, or symbols from other languages!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Guess the ASCII Range",
      "content": "<div class=\"card\">\nWhat's the range of ASCII values?\nA. 0–255<br>B. 0–127<br>C. 32–126\n</div>\n<div class=\"card\">\n<input id=\"asciiGame\" placeholder=\"Type A, B, or C\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct: B! ASCII values are 0–127.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: ASCII vs Unicode Explained",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/MijmeoH9LT4\" title=\"ASCII Explained\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: ASCII Filter for Serial Input",
      "content": "<div class=\"card\">\nFilter out non-ASCII characters from Serial input:\n</div>\n<div class=\"card\">\n<pre>\nvoid loop() {\n  if (Serial.available()) {\n    char c = Serial.read();\n    if (isAscii(c)) {\n      Serial.print(c);\n    } else {\n      Serial.print(\"❌\");\n    }\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\nTry typing in symbols like é, ✓, and see how Arduino filters them.\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "isControl() — Silent but Powerful",
  "lessons": [
    {
      "title": "🤐 What is a Control Character?",
      "content": "<div class=\"card\">\n<code>isControl(c)</code> checks if a character is a <b>control character</b> — meaning it's not visible, but performs a function.\n</div>\n<div class=\"card\">\nASCII has 33 such characters (values 0–31 + 127).\n</div>\n<div class=\"card\">\nExamples include:\n<ul>\n<li><b>\\n</b> (newline) → moves cursor to next line</li>\n<li><b>\\t</b> (tab) → inserts a tab space</li>\n<li><b>\\b</b> (backspace)</li>\n<li>ASCII 0 (NUL) — null terminator for strings</li>\n</ul>\nThese aren’t seen, but are always at work behind the scenes!\n</div>",
      "image": "url_control_chars_table",
      "audio": "url"
    },
    {
      "title": "🎤 Real-World Analogy: TV Remote",
      "content": "<div class=\"card\">\nImagine you're watching TV and you press the 'volume up' button.\n</div>\n<div class=\"card\">\nYou don't see the infrared signal, but your TV does.\nThat invisible signal = control character — it's not seen, but it changes something.\n</div>",
      "image": "url_tv_remote_control",
      "audio": "url"
    },
    {
      "title": "📘 Example: Detect Newline",
      "content": "<div class=\"card\">\n<pre>\nchar c = '\\n';\nif (isControl(c)) {\n  Serial.println(\"Yep, it's a control character!\");\n}\n</pre>\n</div>\n<div class=\"card\">\nThis works for any invisible characters: tab, enter, backspace, etc.\n</div>",
      "image": "url_serial_newline",
      "audio": "url"
    },
    {
      "title": "🔍 Why is isControl() Important?",
      "content": "<div class=\"card\">\nWhen reading Serial input, sometimes you get extra characters.\n<pre>\\n</pre> or <pre>\\r</pre> sneak in and mess up your parsing!\n</div>\n<div class=\"card\">\nUse <code>isControl()</code> to filter those out or handle them differently.\n</div>\n<div class=\"card\">\nAlso helps in protocols, text formatting, communication debugging, etc.\n</div>",
      "image": "url_serial_bug_example",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Control or Not?",
      "content": "<div class=\"card\">\nWhich of the following are control characters?\n<pre>\nA. 'A'\nB. '\\n'\nC. ' '\nD. '\\t'</pre>\n</div>\n<div class=\"card\">\n<input id=\"controlGame\" placeholder=\"Type A, B, C, or D (multiple allowed)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ B and D are control characters!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: ASCII Control Characters Explained",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/WVhmN1-vnnY\" title=\"ASCII Control Codes\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Filter Out Control Characters",
      "content": "<div class=\"card\">\nRead a Serial input, and ignore control characters:</div>\n<div class=\"card\">\n<pre>\nvoid loop() {\n  if (Serial.available()) {\n    char c = Serial.read();\n    if (!isControl(c)) {\n      Serial.print(c);\n    } else {\n      Serial.print(\"❌\"); // filtered\n    }\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\nTry pressing ENTER after some text and see it filter!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Recap: Invisible but Vital",
      "content": "<div class=\"card\">\nControl characters are invisible warriors:\n<ul>\n<li>They move the cursor</li>\n<li>End strings</li>\n<li>Structure protocols</li>\n</ul>\nUse <code>isControl()</code> to detect and handle them smartly 😎\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "isDigit() — Number Detective!",
  "lessons": [
    {
      "title": "🔢 What is isDigit()?",
      "content": "<div class=\"card\">\n<code>isDigit(c)</code> checks if the character <code>c</code> is a digit — like '0' to '9'.\n</div>\n<div class=\"card\">\nIt doesn't check for <b>numeric value</b>, it checks if the <b>character</b> is one of the digit characters in the ASCII table.\n</div>\n<div class=\"card\">\n<b>✔️ True for:</b> '0', '1', ..., '9' <br>\n<b>❌ False for:</b> '.', '-', 'A', etc.\n</div>",
      "image": "url_ascii_digits_table",
      "audio": "url"
    },
    {
      "title": "📜 ASCII Refresher (Super Important)",
      "content": "<div class=\"card\">\nEvery character you type has a numeric ID in the ASCII system:\n<ul>\n<li>'0' → ASCII 48</li>\n<li>'1' → ASCII 49</li>\n<li>...</li>\n<li>'9' → ASCII 57</li>\n</ul>\nSo <code>isDigit()</code> simply checks if ASCII value of character is between 48–57.\n</div>\n<div class=\"card\">\nTo see it:\n<pre>\nchar ch = '5';\nSerial.println((int)ch); // prints 53\n</pre>\nThat’s the magic behind it!\n</div>",
      "image": "url_ascii_table_digits",
      "audio": "url"
    },
    {
      "title": "📘 Example: Serial Input Digit Check",
      "content": "<div class=\"card\">\nLet's say a user is typing into Serial Monitor — you want to allow only numbers:\n</div>\n<div class=\"card\">\n<pre>\nchar input = Serial.read();\nif (isDigit(input)) {\n  Serial.println(\"✅ That's a digit!\");\n} else {\n  Serial.println(\"❌ Not a digit.\");\n}\n</pre>\n</div>\n<div class=\"card\">\nThis is perfect for menu systems, keypad validation, PIN inputs, etc.\n</div>",
      "image": "url_serial_input_validation",
      "audio": "url"
    },
    {
      "title": "🎤 Real-Life Analogy: Cashier Scanner",
      "content": "<div class=\"card\">\nImagine you're a cashier scanning barcodes. Some codes are numbers, some are letters.\n</div>\n<div class=\"card\">\nYou only want to process items with numeric codes (e.g., price tags).\nThat's what <code>isDigit()</code> does — it separates the numbers from noise.\n</div>",
      "image": "url_barcode_scanner_example",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Guess the Output!",
      "content": "<div class=\"card\">\nWhat does this print?\n<pre>\nchar a = '9';\nchar b = 'x';\nSerial.println(isDigit(a));\nSerial.println(isDigit(b));\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"digitGame\" placeholder=\"Type two numbers (e.g. 1, 0)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct: 1 for digit, 0 for non-digit!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: ASCII Digits vs Numbers (Why '5' ≠ 5)",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/Q9qFb2tJf0M\" title=\"ASCII Characters Explained\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try It: Parse Number from Serial",
      "content": "<div class=\"card\">\nBuild a simple calculator that only adds digits entered by the user:\n</div>\n<div class=\"card\">\n<pre>\nint total = 0;\nvoid loop() {\n  if (Serial.available()) {\n    char c = Serial.read();\n    if (isDigit(c)) {\n      total += c - '0';\n      Serial.print(\"Running Total: \");\n      Serial.println(total);\n    }\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\nTip: <code>c - '0'</code> converts char digit to actual number!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Recap: Character ≠ Number",
      "content": "<div class=\"card\">\n<code>isDigit()</code> checks if a char is between '0' and '9' in ASCII.\n</div>\n<div class=\"card\">\nIt’s great for input validation, keypad readers, calculator inputs, and any time you’re working with typed characters.\n</div>\n<div class=\"card\">\nUse this wisely to build strong, bug-free Arduino apps!\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "isGraph() — Detect the Printable Gang (Except Spaces!)",
  "lessons": [
    {
      "title": "🧐 What is isGraph()?",
      "content": "<div class=\"card\">\n<code>isGraph(c)</code> checks if a character has a visible shape (a graphic symbol) — excluding spaces.\n</div>\n<div class=\"card\">\nIf it makes a mark on the screen — like <b>'A'</b>, <b>'9'</b>, <b>'@'</b>, <b>'~'</b>, etc. — then it’s considered a graphical (printable) character.\n</div>\n<div class=\"card\">\n<b>Returns TRUE (1)</b> for ASCII 33 to 126.<br>\n<b>Returns FALSE (0)</b> for space (ASCII 32), control characters, and non-printables.\n</div>",
      "image": "url_ascii_range_graphical",
      "audio": "url"
    },
    {
      "title": "🔤 Graphical Characters vs Printable vs Whitespace",
      "content": "<div class=\"card\">\n🧠 Let’s break it down:\n</div>\n<div class=\"card\">\n<ul>\n<li><b>Printable characters (isPrint)</b>: everything you can see (includes space)</li>\n<li><b>Graphical characters (isGraph)</b>: same as printable, but <b>excludes</b> space</li>\n<li><b>Whitespace:</b> space, tab, newline — characters you don’t “see” but they take space</li>\n</ul>\n</div>\n<div class=\"card\">\nSo: <pre>isPrint(' ') → true<br>isGraph(' ') → false</pre>\nThat’s the main difference!\n</div>",
      "image": "url_print_vs_graph",
      "audio": "url"
    },
    {
      "title": "🔢 ASCII Range: What Does isGraph() Cover?",
      "content": "<div class=\"card\">\nLet’s dive deep into the ASCII table:\n</div>\n<div class=\"card\">\n<pre>\nASCII 33:  !\nASCII 34:  \"\n...\nASCII 57:  9\nASCII 65:  A\nASCII 90:  Z\nASCII 97:  a\nASCII 122: z\nASCII 126: ~\n</pre>\n</div>\n<div class=\"card\">\nAll characters from <b>!</b> to <b>~</b> are considered “graphical”. Space (ASCII 32) is NOT.\n</div>",
      "image": "url_ascii_chart_slice",
      "audio": "url"
    },
    {
      "title": "🛠 Real-Life Example: Form Field Validation",
      "content": "<div class=\"card\">\nSuppose you’re building a login form using a keypad. You don’t want empty spaces, but you want any visible character allowed.\n</div>\n<div class=\"card\">\nThat’s where <code>isGraph()</code> helps:\n<pre>\nchar c = Serial.read();\nif (isGraph(c)) {\n  username += c;\n} else {\n  Serial.println(\"Invalid input: not a visible character\");\n}\n</pre>\n</div>\n<div class=\"card\">\nIt’s perfect for usernames, PINs, passwords where you want NO blank spaces.\n</div>",
      "image": "url_form_example",
      "audio": "url"
    },
    {
      "title": "🧮 Fun Trick: Count All Graphical Inputs",
      "content": "<div class=\"card\">\nTry this code to count all visible keypresses, excluding spaces:\n</div>\n<div class=\"card\">\n<pre>\nint count = 0;\nvoid loop() {\n  if (Serial.available()) {\n    char c = Serial.read();\n    if (isGraph(c)) count++;\n  }\n  Serial.println(count);\n}\n</pre>\n</div>\n<div class=\"card\">\nOnly characters like A-Z, 0-9, @, !, %, etc., will be counted.\n</div>",
      "image": "url_keylogger_simulation",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Guess Which One is Graphical",
      "content": "<div class=\"card\">\nWhich of these characters return TRUE with <code>isGraph()</code>?\n<pre>\nA) '@'\nB) ' '\nC) '\\n'\nD) '9'\nE) '~'\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"graphGame\" placeholder=\"Type the letter(s), e.g., A, D, E\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct: A, D, E! B and C are not graphical.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: ASCII — Printable vs Graphical Explained",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/2TSqBEF4-cE\" title=\"Graphical ASCII Characters\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎓 Recap: When to Use isGraph()",
      "content": "<div class=\"card\">\n✔️ Use <code>isGraph()</code> when you want to filter out empty or invisible characters from user input.\n</div>\n<div class=\"card\">\nIt’s great for:\n<ul>\n<li>Keypad text entry</li>\n<li>Username/password validation</li>\n<li>Ensuring no invisible garbage is being typed in</li>\n</ul>\n</div>\n<div class=\"card\">\n📍Remember: It’s like <code>isPrint()</code>, just stricter — no room for spaces!\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "isHexadecimalDigit() — Hex Check Like a Pro!",
  "lessons": [
    {
      "title": "🔢 What’s a Hexadecimal Digit?",
      "content": "<div class='card'>\nA <b>hexadecimal digit</b> is any of these 16 characters:\n<pre>0 1 2 3 4 5 6 7 8 9 A B C D E F</pre>\nThey represent base-16 numbers used in memory addresses, colors, low-level coding, and more.\n</div>\n<div class='card'>\nIt includes both uppercase and lowercase versions:\n<pre>'0'-'9', 'A'-'F', 'a'-'f'</pre>\nSo 9, F, and f are all valid hex digits!\n</div>",
      "image": "url_hex_chart",
      "audio": "url"
    },
    {
      "title": "🔍 What is isHexadecimalDigit()?",
      "content": "<div class='card'>\n<code>isHexadecimalDigit(c)</code> checks whether a character is one of the valid hexadecimal characters above.\n</div>\n<div class='card'>\nIf it is, it returns <b>true</b> (1). If not — false (0).\n</div>\n<div class='card'>\nExamples:\n<pre>\nisHexadecimalDigit('A') → true\nisHexadecimalDigit('G') → false\nisHexadecimalDigit('4') → true\nisHexadecimalDigit('@') → false\n</pre>\n</div>",
      "image": "url_function_demo",
      "audio": "url"
    },
    {
      "title": "📦 Why Use This in Arduino?",
      "content": "<div class='card'>\nWhen you receive serial data or keypad input, and expect a user to enter a <b>hex code</b> (e.g., for colors or addresses), you can validate every character easily:\n</div>\n<div class='card'>\nExample:\n<pre>\nchar input = Serial.read();\nif (isHexadecimalDigit(input)) {\n  Serial.println(\"✔️ Valid hex digit\");\n} else {\n  Serial.println(\"❌ Not hex!\");\n}\n</pre>\n</div>\n<div class='card'>\n💡 Bonus: It's especially useful in systems involving sensors with hexadecimal configurations or communicating with EEPROM, displays, or RGB LEDs.\n</div>",
      "image": "url_arduino_serial",
      "audio": "url"
    },
    {
      "title": "🌈 Real-Life Example: RGB Color Code Input",
      "content": "<div class='card'>\nLet’s say you want users to enter a 6-digit hex color like #FF00AA.\n</div>\n<div class='card'>\nYou can verify each digit before constructing the color:\n<pre>\nchar r1 = Serial.read();\nif (!isHexadecimalDigit(r1)) {\n  Serial.println(\"Invalid color input!\");\n}\n</pre>\n</div>\n<div class='card'>\nThis ensures your color code won't break due to bad characters like '$' or 'Z'.\n</div>",
      "image": "url_color_input_validation",
      "audio": "url"
    },
    {
      "title": "🧮 Hex and Memory — How it Helps",
      "content": "<div class='card'>\nIn embedded systems, memory addresses and values are often written in hexadecimal — like <b>0x7F</b> or <b>0xFF</b>.\n</div>\n<div class='card'>\nIf you’re debugging or parsing memory dumps, knowing what’s valid hex helps avoid disaster 😱\n</div>\n<div class='card'>\n<code>isHexadecimalDigit()</code> helps ensure you're interpreting memory right when reading bytes and converting data.\n</div>",
      "image": "url_memory_debug_hex",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Is It Hex?",
      "content": "<div class='card'>\nType the letters that are valid hexadecimal digits:\n<pre>A) Z\nB) 4\nC) F\nD) 8\nE) G\nF) a</pre>\n</div>\n<div class='card'>\n<input id='hexCheckGame' placeholder='Type your answers (e.g. B, C, D, F)' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ Correct: B, C, D, F — those are valid hex digits!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Hexadecimal Made Easy",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/b2C6Ry7Zw6A' title='What is Hexadecimal?' frameborder='0' allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎓 Recap: When to Use isHexadecimalDigit()",
      "content": "<div class='card'>\nUse this function when:\n<ul>\n<li>You're asking users to input color values (#RRGGBB)</li>\n<li>You’re parsing hex strings for memory or device configs</li>\n<li>You're reading EEPROM dumps or address maps</li>\n</ul>\n</div>\n<div class='card'>\nIt’s simple, but powerful. You don’t want garbage where only valid hex should live!\n</div>",
      "image": "url_summary_card",
      "audio": "url"
    }
  ]
}
,{
  "title": "isLowercase() — The Lowercase Letter Spy 🕵️‍♂️",
  "lessons": [
    {
      "title": "🔡 What is a Lowercase Character?",
      "content": "<div class='card'>\nLowercase characters are the little guys — the small letters from <code>'a'</code> to <code>'z'</code>. They’re the ones you use in normal writing, unlike SHOUTY CAPS like <code>'A'</code> to <code>'Z'</code>.\n</div>\n<div class='card'>\nIn ASCII (which is how Arduino stores characters), lowercase letters have codes from:\n<pre>'a' → 97\n'z' → 122</pre>\nSo checking if something is lowercase means checking if it's between 97 and 122.\n</div>",
      "image": "url_ascii_table_zoomed",
      "audio": "url"
    },
    {
      "title": "🤖 What is isLowercase()?",
      "content": "<div class='card'>\n<code>isLower(c)</code> is a handy function that checks if a character <code>c</code> is a lowercase letter.\n</div>\n<div class='card'>\nIt returns:\n<ul>\n<li><b>True (1)</b> if the character is between <code>'a'</code> and <code>'z'</code></li>\n<li><b>False (0)</b> for all other characters (digits, symbols, uppercase, etc)</li>\n</ul>\n</div>\n<div class='card'>\nExamples:\n<pre>\nisLower('a') → 1\nisLower('z') → 1\nisLower('G') → 0\nisLower('!') → 0\n</pre>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🛠️ Use Case: Validating Input from Serial",
      "content": "<div class='card'>\nImagine you're making a game where the player types a word — and you only want lowercase letters. What do you do?\n</div>\n<div class='card'>\nUse <code>isLowercase()</code> to check each character:\n<pre>\nchar input = Serial.read();\nif (isLower(input)) {\n  // Accept input\n} else {\n  Serial.println(\"❌ Not lowercase!\");\n}\n</pre>\n</div>\n<div class='card'>\nThis makes sure your logic only processes clean lowercase data, avoiding errors in logic or string comparison.\n</div>",
      "image": "url_serial_keyboard_game",
      "audio": "url"
    },
    {
      "title": "🌍 Real-World Analogy",
      "content": "<div class='card'>\nThink of <code>isLowercase()</code> like a lowercase bouncer outside a club 🕶️:\n</div>\n<div class='card'>\nHe checks IDs. If your name is in small letters, he says: “Come on in.”\nIf you’re all uppercase or just a number? “Nah bro, you're not on the list.”\n</div>",
      "image": "url_bouncer_cartoon",
      "audio": "url"
    },
    {
      "title": "💡 ASCII Secrets Behind the Scenes",
      "content": "<div class='card'>\nEach character in C++ is actually just a number behind the scenes.\n</div>\n<div class='card'>\nHere's what happens when you call <code>isLowercase()</code>:\n<pre>\nbool isLower(char c) {\n  return (c >= 'a' && c <= 'z');\n}\n</pre>\nSo yes, you could write your own version too — but Arduino already gives it for free!\n</div>",
      "image": "url_ascii_explained",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Lower or Not?",
      "content": "<div class='card'>\nWhich of these are lowercase?\n<pre>A) 'm'\nB) 'Z'\nC) '7'\nD) 'x'</pre>\n</div>\n<div class='card'>\n<input id='lowerGame' placeholder='Type the correct ones (e.g. A, D)' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ Correct: A and D!')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: ASCII Table + Lowercase Logic",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/o8NPllzkFhE' title='ASCII in 5 Minutes' frameborder='0' allowfullscreen></iframe>",
      "image": "url_ascii_vid",
      "audio": "url"
    },
    {
      "title": "📘 Recap: When to Use isLowercase()",
      "content": "<div class='card'>\nUse <code>isLowercase()</code> when you want to:\n<ul>\n<li>Accept only lowercase names, passwords, or strings</li>\n<li>Parse input from keyboards, sensors, or web forms</li>\n<li>Ensure text formatting in text-to-speech or file saving</li>\n<li>Teach kids or students about character handling with confidence!</li>\n</ul>\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "isPunct() — Is This a Punctuation Symbol?",
  "lessons": [
    {
      "title": "🔎 What is isPunct() Exactly?",
      "content": "<div class='card'>\n<code>isPunct(c)</code> checks if a character is a punctuation symbol.\nIt returns:\n<ul><li><b>1 (true)</b> if the character is punctuation</li>\n<li><b>0 (false)</b> otherwise</li></ul>\n</div>\n<div class='card'>\nPunctuation symbols include:\n<pre>!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~</pre>\nThese are all visible ASCII characters <b>between 33 and 47, 58–64, 91–96, and 123–126</b>\n</div>\n<div class='card'>\nIt does <b>not</b> include letters, numbers, or whitespace.\n</div>",
      "image": "url_isPunct_intro",
      "audio": "url"
    },
    {
      "title": "💡 Why Use isPunct()?",
      "content": "<div class='card'>\nWhen processing passwords, usernames, file names, or scanned texts — we often need to <b>filter out or detect punctuation</b>.\n</div>\n<div class='card'>\nExample: Want to remove all punctuation from a sentence for NLP?\nUse <code>isPunct()</code> in a loop.\n</div>\n<div class='card'>\nIt’s also useful in input validation, text formatting, and security filters.\n</div>",
      "image": "url_usecase_punctuation_filter",
      "audio": "url"
    },
    {
      "title": "🌍 Real-World Use Case: Password Check",
      "content": "<div class='card'>\nSuppose your Arduino password input system needs to ensure at least 1 punctuation character for strength.\n</div>\n<div class='card'>\nCode snippet:\n<pre>\nbool hasPunct = false;\nfor (int i = 0; i < strlen(input); i++) {\n  if (isPunct(input[i])) {\n    hasPunct = true;\n    break;\n  }\n}\n</pre>\n</div>\n<div class='card'>\nThis can reject passwords like <code>hello123</code> and accept <code>hello@123</code>\n</div>",
      "image": "url_password_strength_check",
      "audio": "url"
    },
    {
      "title": "📘 ASCII Explanation: What Counts as Punctuation?",
      "content": "<div class='card'>\nHere’s the breakdown by ASCII ranges:\n<ul>\n<li>33–47 → ! \" # $ % & ' ( ) * + , - . /</li>\n<li>58–64 → : ; < = > ? @</li>\n<li>91–96 → [ \\ ] ^ _ `</li>\n<li>123–126 → { | } ~</li>\n</ul>\n</div>\n<div class='card'>\nNot included:\n<ul>\n<li>32 (Space)</li>\n<li>48–57 (Digits)</li>\n<li>65–90 (Uppercase)</li>\n<li>97–122 (Lowercase)</li>\n</ul>\n</div>",
      "image": "url_ascii_table_ranges",
      "audio": "url"
    },
    {
      "title": "🧪 Try It Yourself: Filter Punctuation",
      "content": "<div class='card'>\nLet’s write a program that removes all punctuation and keeps the rest.\n</div>\n<div class='card'>\n<pre>\nchar original[] = \"Hello, World! How's it going?\";\nchar clean[50];\nint j = 0;\n\nfor (int i = 0; i < strlen(original); i++) {\n  if (!isPunct(original[i])) {\n    clean[j++] = original[i];\n  }\n}\nclean[j] = '\\0';\nSerial.println(clean);  // Output: Hello World Hows it going\n</pre>\n</div>",
      "image": "url_punctuation_removal_example",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Is This a Punct?",
      "content": "<div class='card'>\nGuess which of these will return true for <code>isPunct()</code>:\n<pre>A. 'A'\nB. '!'\nC. '\\n'\nD. '@'\nE. ' '</pre>\n</div>\n<div class='card'>\n<input id='isPunctGame' placeholder='Type A, B, etc' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ Answer: B and D are punctuation.')\">Submit</button>\n</div>",
      "image": "url_punct_quiz_card",
      "audio": "url"
    },
    {
      "title": "📺 Video: Punctuation in ASCII (Visual Tutorial)",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/ZfA3e7ZrxzQ' title='ASCII and Punctuation' frameborder='0' allowfullscreen></iframe>",
      "image": "url_video_frame_ascii_punct",
      "audio": "url"
    },
    {
      "title": "📚 Recap: When is isPunct() Useful?",
      "content": "<div class='card'>\nUse it to:\n<ul>\n<li>Build password rules</li>\n<li>Clean user input</li>\n<li>Ignore symbols when counting words/letters</li>\n<li>Visualize clean strings for displays or logs</li>\n</ul>\n</div>\n<div class='card'>\nAnything between ASCII 33 and 126 <b>that is not a letter, digit, or space</b> is likely a punctuation!\n</div>",
      "image": "url_summary_punctuation_checker",
      "audio": "url"
    }
  ]
}
,{
  "title": "isSpace() — Spotting the Invisible!",
  "lessons": [
    {
      "title": "🧩 What is isSpace()?",
      "content": "<div class='card'>\n<code>isSpace(c)</code> checks if the character is a kind of <b>whitespace</b> — things like spaces, tabs, or line breaks.\n</div>\n<div class='card'>\nThese characters <b>don't print symbols</b>, but they control layout.\nThey’re essential in formatting strings, parsing commands, or cleaning input.\n</div>\n<div class='card'>\nIt returns:\n<ul>\n<li><b>1 (true)</b> if the character is whitespace</li>\n<li><b>0 (false)</b> otherwise</li></ul>\n</div>\n<div class='card'>\n<b>Pro Tip:</b> Great for skipping gaps while parsing or filtering user input.\n</div>",
      "image": "url_whitespace_concept",
      "audio": "url"
    },
    {
      "title": "📘 What Counts As Whitespace?",
      "content": "<div class='card'>\n`isSpace()` returns <b>true</b> for the following invisible characters:\n<ul>\n<li><code>' '</code> – space (ASCII 32)</li>\n<li><code>'\\t'</code> – tab (ASCII 9)</li>\n<li><code>'\\n'</code> – newline (ASCII 10)</li>\n<li><code>'\\r'</code> – carriage return (ASCII 13)</li>\n<li><code>'\\f'</code> – form feed (ASCII 12)</li>\n<li><code>'\\v'</code> – vertical tab (ASCII 11)</li>\n</ul>\n</div>\n<div class='card'>\nEven though these characters are invisible, they <b>change how text looks</b> on screen.\n</div>",
      "image": "url_ascii_whitespace",
      "audio": "url"
    },
    {
      "title": "🌍 Real-Life Example: Parsing SMS Commands",
      "content": "<div class='card'>\nImagine your Arduino receives a command string via Bluetooth:\n<code>\"SET LED ON\\n\"</code>\n</div>\n<div class='card'>\nTo process it cleanly, we may want to <b>skip all spaces, tabs, and line breaks</b>.\nThat’s where <code>isSpace()</code> comes in!\n</div>\n<div class='card'>\n<pre>\nfor (int i = 0; i < strlen(cmd); i++) {\n  if (!isSpace(cmd[i])) {\n    Serial.print(cmd[i]);\n  }\n}</pre>\nThis will only print <code>SETLEDON</code>!\n</div>",
      "image": "url_sms_parse_example",
      "audio": "url"
    },
    {
      "title": "🔍 ASCII Deep Dive: Visualizing Whitespace",
      "content": "<div class='card'>\nASCII codes for whitespace:\n<ul>\n<li><b>9</b> → TAB</li>\n<li><b>10</b> → LF (Line Feed aka \\n)</li>\n<li><b>11</b> → VT (Vertical Tab)</li>\n<li><b>12</b> → FF (Form Feed)</li>\n<li><b>13</b> → CR (Carriage Return aka \\r)</li>\n<li><b>32</b> → SPACE</li>\n</ul>\n</div>\n<div class='card'>\nThese codes exist from the era of old typewriters and early printers — CR meant <i>move to line start</i>, LF meant <i>move down</i>.\n</div>\n<div class='card'>\n💡 Even today, Linux uses <code>\\n</code> and Windows uses <code>\\r\\n</code> for new lines!\n</div>",
      "image": "url_ascii_table_full",
      "audio": "url"
    },
    {
      "title": "🧪 Try It Yourself: Remove Whitespace",
      "content": "<div class='card'>\nWrite a program that removes all whitespace from a string.\n</div>\n<div class='card'>\n<pre>\nchar input[] = \"  Hello \\t World!\\n\";\nchar clean[30];\nint j = 0;\n\nfor (int i = 0; i < strlen(input); i++) {\n  if (!isSpace(input[i])) {\n    clean[j++] = input[i];\n  }\n}\nclean[j] = '\\0';\nSerial.println(clean);  // Output: HelloWorld!\n</pre>\n</div>",
      "image": "url_whitespace_strip_code",
      "audio": "url"
    },
    {
      "title": "🎮 Game: True or False?",
      "content": "<div class='card'>\nWill <code>isSpace()</code> return true for the following?\n<pre>\nA. ' '\nB. '\\n'\nC. 'A'\nD. '\\t'\nE. '!'\n</pre>\n</div>\n<div class='card'>\n<input id='isSpaceGame' placeholder='Write A, B, etc...' style='width:100%'>\n<button class='gaming-btn' onclick=\"alert('✅ Answer: A, B, D are spaces!')\">Submit</button>\n</div>",
      "image": "url_quiz_card_space_check",
      "audio": "url"
    },
    {
      "title": "📺 Video: Understanding Whitespace in ASCII",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/DRrMZWGZd_E' title='ASCII Whitespace Explained' frameborder='0' allowfullscreen></iframe>",
      "image": "url_video_frame_whitespace_ascii",
      "audio": "url"
    },
    {
      "title": "📚 Recap: isSpace() Is Essential For...",
      "content": "<div class='card'>\n✅ Cleaning input from users or serial port\n✅ Parsing commands or text streams\n✅ Creating strong password logic (no leading/trailing spaces)\n✅ Skipping blanks when counting letters\n✅ Beautifying output display\n</div>\n<div class='card'>\n📌 Summary: Whitespace ≠ useless. It’s just invisible!\n</div>",
      "image": "url_summary_cleaning_space",
      "audio": "url"
    }
  ]
}
,{
  "title": "isUpperCase() — Are You SHOUTING?",
  "lessons": [
    {
      "title": "🔠 What is isUpperCase()?",
      "content": "<div class=\"card\">\n<code>isUpperCase(c)</code> checks if the given character <code>c</code> is an uppercase letter: <code>'A'</code> to <code>'Z'</code>.\n</div>\n<div class=\"card\">\nIf you pass <code>'M'</code>, it returns <code>true</code>.\nIf you pass <code>'m'</code>, it returns <code>false</code>.\n</div>\n<div class=\"card\">\n✅ Used to filter inputs, handle keypresses, parse text, validate names or tags — anything involving alphabets!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Real World Analogy",
      "content": "<div class=\"card\">\nImagine you're grading a test. Some answers are in CAPS:\n<code>\"SPEED = DISTANCE / TIME\"</code> — Easy to read, bold, visible.\n</div>\n<div class=\"card\">\nYou use <code>isUpperCase()</code> like your eye scanning for SHOUTING words 📢\n</div>\n<div class=\"card\">\nIn Arduino: maybe you're reading serial input character-by-character and want to respond **only** when the user sends a capital letter.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔤 ASCII & Behind-the-Scenes",
      "content": "<div class=\"card\">\nCharacters in Arduino (and C/C++) are stored using <b>ASCII codes</b>.\n</div>\n<div class=\"card\">\nFor example:\n<ul>\n<li><b>'A'</b> = 65</li>\n<li><b>'B'</b> = 66</li>\n<li>...</li>\n<li><b>'Z'</b> = 90</li>\n</ul>\n</div>\n<div class=\"card\">\nSo internally, <code>isUpperCase('A')</code> checks if its ASCII is between 65 and 90.\nThat's it! 😎\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔧 Code Example: Only Allow Caps",
      "content": "<div class=\"card\">\nThis program reads a letter from the Serial Monitor and lights up an LED <b>only</b> if it's a capital letter.\n</div>\n<div class=\"card\">\n<pre>\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  if (Serial.available()) {\n    char ch = Serial.read();\n    if (isUpperCase(ch)) {\n      digitalWrite(13, HIGH);\n    } else {\n      digitalWrite(13, LOW);\n    }\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\n👆 Try typing letters in Serial Monitor. Only capital letters turn on the LED!\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Mini Game: UPPER or not?",
      "content": "<div class=\"card\">\nWhat will <code>isUpperCase('H')</code> return?\n<pre>A) true\nB) false</pre>\n</div>\n<div class=\"card\">\n<input id=\"ucaseGame\" placeholder=\"Type A or B\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct! H is uppercase.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: ASCII + Case Detection",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/fm05REfNE9Y\" title=\"ASCII & isUpperCase Explanation\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try This Challenge",
      "content": "<div class=\"card\">\nWrite a program that:\n<ul>\n<li>Reads a character from Serial</li>\n<li>If it's uppercase — blinks LED rapidly</li>\n<li>If not — blinks LED slowly</li>\n</ul>\n</div>\n<div class=\"card\">\nHint: use <code>delay()</code> to create different blink speeds based on <code>isUpperCase()</code> result.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📘 Recap & Use Cases",
      "content": "<div class=\"card\">\n✅ <code>isUpperCase()</code> helps you validate and respond to <b>uppercase letters only</b>.\n</div>\n<div class=\"card\">\n🎯 It's useful in:\n<ul>\n<li>Command filtering (e.g. ‘R’ for RESET)</li>\n<li>Menu navigation via Serial</li>\n<li>Security/password entry where CAPS matter</li>\n</ul>\n</div>\n<div class=\"card\">\nNow you know how Arduino tells if you’re SHOUTING! 😉\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}
,{
  "title": "isWhitespace() — Not All Spaces Are Empty!",
  "lessons": [
    {
      "title": "🧽 What is isWhitespace()?",
      "content": "<div class=\"card\">\n<code>isWhitespace(c)</code> checks if the character <code>c</code> is a whitespace.\nThat means: a space, a tab, a newline — characters that ‘take space’ but don’t show anything.\n</div>\n<div class=\"card\">\nIt returns <code>true</code> if <code>c</code> is:\n<ul>\n<li>Space ( )</li>\n<li>Tab (\\t)</li>\n<li>Newline (\\n)</li>\n<li>Carriage return (\\r)</li>\n</ul>\nAnd <code>false</code> if it's anything else (letters, numbers, punctuation...)\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧠 Real-Life Analogy: The Invisible Characters",
      "content": "<div class=\"card\">\nWhen you write a sentence, you leave spaces between words.\n</div>\n<div class=\"card\">\nBut also — when you hit \"Enter\", that’s a newline. Or when you press \"Tab\", that’s a tab.\n</div>\n<div class=\"card\">\nTo you, they’re just layout. But to your Arduino, they’re **real characters** with **ASCII codes**!\n</div>\n<div class=\"card\">\n<code>isWhitespace()</code> helps the Arduino say:\n🗣️ \"Hey! This character is a space-like thing. Ignore it for now.\"\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔎 ASCII View: What’s a Whitespace?",
      "content": "<div class=\"card\">\nWhitespace characters and their ASCII codes:\n<ul>\n<li><b>' '</b> (Space) = 32</li>\n<li><b>\\t</b> (Tab) = 9</li>\n<li><b>\\n</b> (New Line) = 10</li>\n<li><b>\\r</b> (Carriage Return) = 13</li>\n</ul>\n</div>\n<div class=\"card\">\nThese don’t show up when printed normally. But they’re VERY common in text, especially Serial input.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧰 Why & When to Use isWhitespace()?",
      "content": "<div class=\"card\">\n⚡ When reading a name from Serial Monitor, a user might accidentally type spaces:\n<pre>\"    John\\n\"</pre>\n</div>\n<div class=\"card\">\nYou want to clean this text before using it.\nUse <code>isWhitespace()</code> to skip or remove these extra characters.\n</div>\n<div class=\"card\">\nAlso great for:\n<ul>\n<li>Validating user input</li>\n<li>Parsing text</li>\n<li>Skipping garbage characters</li>\n</ul>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🔧 Code: Ignore Spaces in Name",
      "content": "<div class=\"card\">\nThis reads name from Serial Monitor, skips whitespace, and prints only visible characters.\n</div>\n<div class=\"card\">\n<pre>\nvoid setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  if (Serial.available()) {\n    char c = Serial.read();\n    if (!isWhitespace(c)) {\n      Serial.print(c);\n    }\n  }\n}\n</pre>\n</div>\n<div class=\"card\">\nTry typing: <code>    Hello Arduino!\\n</code>\n👉 Output: <code>HelloArduino!</code> (spaces gone!)\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🎮 Game: Spot the Whitespace",
      "content": "<div class=\"card\">\nWhich of these will <code>isWhitespace()</code> return <code>true</code> for?\n<pre>\nA. ' '\nB. 'A'\nC. '\\n'\nD. '7'\n</pre>\n</div>\n<div class=\"card\">\n<input id=\"wsGame\" placeholder=\"Your answer (e.g., A, C)\" style=\"width:100%\">\n<button class=\"gaming-btn\" onclick=\"alert('✅ Correct! A and C are whitespace characters.')\">Submit</button>\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📺 Video: Serial Input Cleanup",
      "content": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/hSu_4K4U63U\" title=\"Remove whitespace from Serial data\" frameborder=\"0\" allowfullscreen></iframe>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "🧪 Try This Challenge: Trim Text!",
      "content": "<div class=\"card\">\nWrite a sketch that reads an entire sentence and prints only non-whitespace characters (like a compact string).\n</div>\n<div class=\"card\">\nBonus: Count how many whitespace characters you removed!\n</div>\n<div class=\"card\">\nHint: Use a counter and <code>isWhitespace()</code> to track skipped ones.\n</div>",
      "image": "url",
      "audio": "url"
    },
    {
      "title": "📘 Recap",
      "content": "<div class=\"card\">\n✅ <code>isWhitespace()</code> helps identify invisible characters like spaces, tabs, and newlines.\n</div>\n<div class=\"card\">\n🎯 It's perfect for:\n<ul>\n<li>Text cleanup</li>\n<li>Skipping blanks</li>\n<li>Improving input parsing</li>\n</ul>\n</div>\n<div class=\"card\">\nWhitespace may be invisible, but now — it’s no longer a mystery to you! 🕵️‍♂️\n</div>",
      "image": "url",
      "audio": "url"
    }
  ]
}

      ]
    },{
      title:"Interrupt Mastery — Taking Full Control",
      modules:[
        {
  "moduleTitle": "interrupts() — Resume Listening to the Outside World",
  "lessons": [
    {
      "title": "🚀 Introduction to interrupts()",
      "type": "text",
      "content": "<div class=\"card\">\n<h2>What is interrupts()?</h2>\n<p>The <code>interrupts()</code> function is used to re-enable interrupt handling in your Arduino program after you've turned it off using <code>noInterrupts()</code>. This is essential for safely managing time-critical tasks or data access.</p>\n<p>Think of it as saying: <strong>\"Alright, I'm done with my delicate task. Now I'm ready to listen again.\"</strong></p>\n</div>\n\n<div class=\"card\">\n<h2>🧠 Why Use interrupts()?</h2>\n<ul>\n<li>To resume normal interrupt behavior after a protected section of code.</li>\n<li>To allow external sensors or buttons to trigger actions again.</li>\n<li>To return your Arduino to its reactive, event-driven state.</li>\n</ul>\n</div>\n\n<div class=\"card\">\n<h2>🔍 Real-World Analogy</h2>\n<p>Imagine you're a radio operator. During an emergency call, you put your headphones down to avoid distractions. Once done, you put them back on. <code>interrupts()</code> is like putting the headphones back on and saying, \"I'm listening again.\"</p>\n</div>"
    },
    {
      "title": "🛠️ Live Use Case — Counter with Button",
      "type": "text",
      "content": "<div class=\"card\">\n<h2>Real Use Case Example</h2>\n<p>Imagine a pushbutton connected to pin 2 that increments a counter every time it's pressed. To read this counter safely from the main loop, you pause interrupts, copy the value, then resume them:</p>\n\n<pre><code>volatile int count = 0;\n\nvoid setup() {\n  Serial.begin(9600);\n  attachInterrupt(digitalPinToInterrupt(2), increaseCount, RISING);\n}\n\nvoid loop() {\n  int safeCopy;\n  noInterrupts();        // Pause interrupts\n  safeCopy = count;      // Critical section\n  interrupts();          // Resume interrupts\n\n  Serial.println(safeCopy);\n  delay(500);\n}\n\nvoid increaseCount() {\n  count++;\n}</code></pre>\n<p>Here, <code>interrupts()</code> lets the Arduino resume watching for new button presses once we’re done reading the shared variable safely.</p>\n</div>"
    },
    {
      "title": "📌 What Pins Are Used?",
      "type": "text",
      "content": "<div class=\"card\">\n<h2>Pins Used in interrupt Functions</h2>\n<p>The <code>interrupts()</code> function itself does not use specific pins, but it re-enables hardware interrupts that may be attached to pins like 2 and 3 on an UNO.</p>\n<p>Common interrupt pins:</p>\n<ul>\n  <li><strong>UNO:</strong> 2 and 3</li>\n  <li><strong>Mega:</strong> 2, 3, 18, 19, 20, 21</li>\n  <li><strong>ESP32 / ESP8266:</strong> Most GPIOs can be interrupt-enabled</li>\n</ul>\n</div>"
    },
    {
      "title": "🧪 Interactive Quiz",
      "type": "quiz",
      "content": {
        "question": "What happens if you forget to call interrupts() after noInterrupts()?",
        "options": [
          "Your sketch runs normally.",
          "Arduino stops all communication.",
          "External interrupts won’t work until you call interrupts().",
          "The board resets."
        ],
        "answerIndex": 2,
        "explanation": "Once you disable interrupts using noInterrupts(), you must call interrupts() to resume normal interrupt-based actions like handling sensor input."
      }
    },
    {
      "title": "🎬 Recommended Video",
      "type": "video",
      "content": {
        "url": "https://www.youtube.com/watch?v=ZCjdzkeXh5Y",
        "description": "In-depth explanation of critical sections and safe interrupt usage in Arduino. Super useful for intermediate makers."
      }
    }
  ]
}
,{
  "moduleTitle": "noInterrupts() — How to Quiet Everything Down (Safely!)",
  "lessons": [
    {
      "title": "🔍 What is noInterrupts()?",
      "type": "text",
      "content": "<div class=\"card\">\n<h2>Understanding noInterrupts()</h2>\n<p>The <code>noInterrupts()</code> function disables all interrupts on your Arduino board until you explicitly re-enable them with <code>interrupts()</code>.</p>\n<p>Think of it like telling your Arduino: <strong>“Do NOT listen to any distractions right now, I need your full focus.”</strong></p>\n<p>Use this when you’re doing something extremely sensitive — like working with data that might change mid-way if interrupted.</p>\n</div>\n\n<div class=\"card\">\n<h2>🧠 When Should You Use noInterrupts()?</h2>\n<ul>\n  <li>When copying or modifying <code>volatile</code> variables used in an ISR (Interrupt Service Routine)</li>\n  <li>When you need a precise timing window</li>\n  <li>When performing atomic (indivisible) operations</li>\n</ul>\n</div>"
    },
    {
      "title": "📦 Real-Life Analogy — Do Not Disturb Mode",
      "type": "text",
      "content": "<div class=\"card\">\n<h2>Real-World Analogy</h2>\n<p>Imagine you're writing down a phone number someone is telling you, and you put on noise-cancelling headphones for 5 seconds just to not miss a digit.</p>\n<p><code>noInterrupts()</code> is like putting on those headphones. You're saying: \"Hold on world, I need silence!\"</p>\n</div>"
    },
    {
      "title": "💻 Code Example — Handling Shared Variables",
      "type": "text",
      "content": "<div class=\"card\">\n<h2>Use Case: Accurate Counter Access</h2>\n<p>This is one of the most common uses. Imagine a pushbutton on pin 2 that increases a counter via an ISR:</p>\n<pre><code>volatile int counter = 0;\n\nvoid setup() {\n  Serial.begin(9600);\n  attachInterrupt(digitalPinToInterrupt(2), countUp, RISING);\n}\n\nvoid loop() {\n  int safeCopy;\n\n  noInterrupts();           // Stop interrupts temporarily\n  safeCopy = counter;       // Copy shared variable safely\n  interrupts();             // Resume interrupts\n\n  Serial.println(safeCopy);\n  delay(500);\n}\n\nvoid countUp() {\n  counter++;\n}</code></pre>\n<p>Without <code>noInterrupts()</code>, the value might change mid-copy, leading to weird bugs. This prevents that.</p>\n</div>"
    },
    {
      "title": "📌 What Pins Are Affected?",
      "type": "text",
      "content": "<div class=\"card\">\n<h2>Which Pins Matter?</h2>\n<p>Technically, <code>noInterrupts()</code> doesn’t use any specific pin. It just stops <strong>all interrupts</strong>, including those triggered by pins.</p>\n<p>Typical external interrupt pins:</p>\n<ul>\n<li><strong>UNO:</strong> Digital pins 2 and 3</li>\n<li><strong>MEGA:</strong> Pins 2, 3, 18, 19, 20, 21</li>\n<li><strong>ESP32:</strong> Most digital pins can be used as interrupt pins</li>\n</ul>\n</div>"
    },
    {
      "title": "🎯 Watch Out — What Happens If You Forget to Re-Enable?",
      "type": "text",
      "content": "<div class=\"card\">\n<h2>Important Caveat</h2>\n<p>If you forget to call <code>interrupts()</code> after <code>noInterrupts()</code>, your board will never handle any interrupts again.</p>\n<p>This means things like pushbutton triggers, sensor edge detection, serial receiving, etc., may silently fail!</p>\n</div>"
    },
    {
      "title": "📺 Video Tutorial",
      "type": "video",
      "content": {
        "url": "https://www.youtube.com/watch?v=ZCjdzkeXh5Y",
        "description": "Clear explanation of how and when to use noInterrupts() and interrupts() — includes practical scope and usage warnings."
      }
    }
  ]
}

      ]
    },{
      title:" Mastering Time Functions in Arduino",
      modules:[
        {
  "title": "delayMicroseconds() — Ultra-Fine Delays",
  "lessons": [
    {
      "title": "What is delayMicroseconds()?",
      "content": "This function makes your Arduino pause, but for a VERY short time — measured in microseconds. One microsecond is one-millionth of a second. We use this when we need precise timing — like sending fast pulses or talking to sensitive sensors that expect exact gaps between signals.\n\n⚠️ While delay() waits in milliseconds, delayMicroseconds() waits in microseconds (1000× smaller)."
    },
    {
      "title": "Where and Why?",
      "content": "Imagine you are triggering an ultrasonic sensor. It expects a HIGH signal of exactly 10 microseconds. You can't use delay() because that waits too long (minimum is 1ms = 1000µs). That's why we use delayMicroseconds() — it's like a stopwatch for tiny timings."
    },
    {
      "title": "Real-World Example",
      "content": "Let’s say you're working with an IR remote signal or SPI communication. These protocols send data in waves that last for just a few microseconds. Arduino can create or interpret those waves using delayMicroseconds().\n\nThink of it like pressing a stoplight button with ninja-like speed. 😉"
    },
    {
      "title": "Syntax and Range",
      "content": "📘 Syntax: delayMicroseconds(time_in_microseconds);\n\nFor example: delayMicroseconds(10);\n\n📏 Valid range is around 3µs to 16383µs. Anything too small might be ignored because the chip can’t react fast enough!"
    },
    {
      "title": "Example Code",
      "content": "void setup() {\n  pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delayMicroseconds(100);\n  digitalWrite(13, LOW);\n  delayMicroseconds(100);\n}"
    },
    {
      "title": "Related Pins and Hardware",
      "content": "delayMicroseconds() doesn’t use any specific pin itself — it just pauses the program. But you’ll often use it with digital pins to control things like sensors, IR transmitters, or precise timers. Especially used in ultrasonic sensor triggering pins or custom PWM generation."
    },
    {
      "title": "Fun Fact 🌟",
      "content": "Your brain takes about 200,000 microseconds to blink.\nArduino can do 20,000 delayMicroseconds(10) in that same blink. Now that's fast!"
    }
  ]
},{  
  "title": "micros() — Arduino’s Microsecond Stopwatch",
  "lessons": [
    {
      "title": "What is micros()? 🤔",
      "content": "<div class='card'>The <code>micros()</code> function in Arduino returns the number of microseconds (1 millionth of a second!) since the program started running.</div>\n<div class='card'>This is perfect when you want to measure tiny time intervals — like how long a sensor takes to respond or how fast something moves.</div>"
    },
    {
      "title": "Where is it used? 📍",
      "content": "<div class='card'>Use <code>micros()</code> when you need high-precision timing — for example, measuring the echo time of an ultrasonic sensor, or building your own IR remote decoder.</div>\n<div class='card'>Unlike <code>millis()</code>, which only updates every 1 ms, <code>micros()</code> gives you much finer detail, especially in time-sensitive projects.</div>"
    },
    {
      "title": "How it Works ⚙️",
      "content": "<div class='card'>When the Arduino turns on, <code>micros()</code> starts from 0 and counts up. Every time you call it, it tells you how many microseconds have passed.</div>\n<div class='card'><b>Important:</b> It rolls over back to 0 after ~70 minutes on UNO/Nano (because of 32-bit overflow). So plan accordingly!</div>"
    },
    {
      "title": "Example Code ⌛",
      "content": "<div class='card'><pre><code>unsigned long start = micros();\n// Do something here\nunsigned long end = micros();\nunsigned long duration = end - start;\nSerial.print(\"It took: \");\nSerial.print(duration);\nSerial.println(\" µs\");</code></pre></div>"
    },
    {
      "title": "🎬 Watch: Arduino micros() Explained",
      "content": "<div class='card'>Here's a video guide that walks you through how <code>micros()</code> works, with examples and cool applications!</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/jGz7gkaXQ4c' frameborder='0' allowfullscreen></iframe>"
    },
    {
      "title": "Mini-Game: microTime Hunter ⏱️",
      "content": "<div class='card'>You’ll see a fast timer ticking in microseconds. Tap STOP as close to 1000000 µs (1 second) as you can!</div>\n<button class='gaming-btn' onclick='startMicroGame()'>Start Game</button>\n<div id='micro-timer'></div>\n<script>\nfunction startMicroGame() {\n  const display = document.getElementById('micro-timer');\n  let start = performance.now();\n  const btn = document.createElement('button');\n  btn.innerText = 'Stop!';\n  btn.className = 'gaming-btn';\n  btn.onclick = () => {\n    let end = performance.now();\n    let diff = Math.round((end - start) * 1000);\n    display.innerHTML = 'You stopped at ' + diff + ' microseconds!';\n  };\n  display.innerHTML = '';\n  display.appendChild(btn);\n}\n</script>"
    },
    {
      "title": "Used Pins? 🧷",
      "content": "<div class='card'><code>micros()</code> doesn’t use any particular pin. But it’s often paired with <b>pulse-based sensors</b> (e.g., ultrasonic, IR) that use <b>digital pins</b> to send or receive pulses.</div>"
    },
    {
      "title": "Real World Example 🚘",
      "content": "<div class='card'>Imagine you're building a car-reversing radar system using an ultrasonic sensor. You send a ping and use <code>micros()</code> to measure how long the echo takes to return. That tells you how far the obstacle is!</div>"
    }
  ]
},{
  "title": "delay() — The Pause Button of Arduino",
  "lessons": [
    {
      "title": "What's delay()? 🤔",
      "content": "<div class='card'>In Arduino, <code>delay(ms)</code> pauses your program for a set number of milliseconds (1 second = 1000 ms).</div>\n<div class='card'>It’s like saying: 'Hold on... don't do anything for a while.'</div>"
    },
    {
      "title": "Why Use delay()? 🧠",
      "content": "<div class='card'><b>delay()</b> is useful when you want to create a pause between two actions.</div>\n<div class='card'>Example: Blink an LED every 1 second, or wait after displaying a message.</div>"
    },
    {
      "title": "Code Example 🔁",
      "content": "<div class='card'><pre><code>void loop() {\n  digitalWrite(LED_BUILTIN, HIGH);\n  delay(1000);\n  digitalWrite(LED_BUILTIN, LOW);\n  delay(1000);\n}</code></pre></div>\n<div class='card'>This blinks the LED ON and OFF every second — thanks to <code>delay()</code>.</div>"
    },
    {
      "title": "What Happens Internally? ⚙️",
      "content": "<div class='card'>delay() is a <b>blocking function</b>. Arduino will literally stop doing everything during that time.</div>\n<div class='card'>So if you use <code>delay(5000)</code>, it freezes for 5 seconds — no sensors, buttons, or anything else will work during that.</div>"
    },
    {
      "title": "📹 Watch: Arduino delay() Visual Demo",
      "content": "<div class='card'>This short video demonstrates how delay() works by blinking an LED and adjusting the timing. Watch how it pauses everything!</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/fvm0FntS1XM' frameborder='0' allowfullscreen></iframe>"
    },
    {
      "title": "🕹️ Mini-Game: Delay Matcher!",
      "content": "<div class='card'>Guess the delay time between two LED flashes! Tap to guess and see if you can match Arduino's delay speed!</div>\n<button class='gaming-btn' onclick='startDelayGame()'>Start Game</button>\n<div id='delay-result'></div>\n<script>\nfunction startDelayGame() {\n  const actual = Math.floor(Math.random() * 4000) + 1000;\n  setTimeout(() => {\n    const guess = prompt(\"How many milliseconds do you think the delay was?\");\n    const result = document.getElementById(\"delay-result\");\n    result.innerHTML = `Actual: ${actual}ms | Your Guess: ${guess}ms`;\n  }, actual);\n}\n</script>"
    },
    {
      "title": "📌 When NOT to Use It",
      "content": "<div class='card'><code>delay()</code> is simple but not ideal for multitasking. Instead, use <code>millis()</code> if you want to do things while still tracking time.</div>"
    },
    {
      "title": "Pins Used?",
      "content": "<div class='card'><code>delay()</code> doesn’t involve pins — but it’s <b>used alongside output pins</b> like <code>LED_BUILTIN</code> or pins connected to displays, buzzers, relays, etc.</div>"
    },
    {
      "title": "IRL Example 🚦",
      "content": "<div class='card'>Think of a traffic signal — delay() is like pausing the green light before switching to red. That pause is vital to avoid accidents!</div>"
    }
  ]
}
,{
  "title": "millis() — Timekeeper of Arduino",
  "lessons": [
    {
      "title": "⏱️ What is millis()?",
      "content": "<div class='card'>The <code>millis()</code> function tells you how many milliseconds have passed <b>since your Arduino turned ON or reset</b>.</div>\n<div class='card'>It’s like a stopwatch that starts automatically when your board boots up!</div>"
    },
    {
      "title": "🤔 Why use millis() instead of delay()?",
      "content": "<div class='card'><code>delay()</code> <b>blocks everything</b> during its pause. But <code>millis()</code> lets Arduino <b>keep running</b> while you check the time!</div>\n<div class='card'>This means your Arduino can <b>read sensors, blink LEDs, check buttons</b> — all while keeping track of time. Multitasking FTW 🎉</div>"
    },
    {
      "title": "⏳ millis() Example — LED Blink Without delay()",
      "content": "<div class='card'>This is how you blink an LED without freezing your Arduino with delay:</div>\n<div class='card'><pre><code>\nunsigned long previousMillis = 0;\nconst long interval = 1000;\n\nvoid loop() {\n  unsigned long currentMillis = millis();\n  if (currentMillis - previousMillis >= interval) {\n    previousMillis = currentMillis;\n    digitalWrite(LED_BUILTIN, !digitalRead(LED_BUILTIN));\n  }\n}</code></pre></div>"
    },
    {
      "title": "🔍 Behind the Scenes",
      "content": "<div class='card'><code>millis()</code> uses an internal timer to count milliseconds (1/1000th of a second).</div>\n<div class='card'>It returns an <code>unsigned long</code> — which means it can count up to about <b>49 days</b> before it resets to 0!</div>"
    },
    {
      "title": "📺 Video: millis() vs delay() Explained Clearly",
      "content": "<div class='card'>This video shows why <code>millis()</code> is a smarter choice in many real projects (especially when you need responsiveness).</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/j3heVx2NZgU' frameborder='0' allowfullscreen></iframe>"
    },
    {
      "title": "🧠 Real Life Analogy",
      "content": "<div class='card'>Imagine you're boiling tea ☕. While waiting, you check the clock every minute to stir it — you don’t freeze like <code>delay()</code> would. That’s <code>millis()</code>!</div>"
    },
    {
      "title": "🕹️ Mini-Game: millis() Challenge",
      "content": "<div class='card'>Can you guess how many seconds passed?</div>\n<button class='gaming-btn' onclick='startMillisGame()'>Start Timer</button>\n<div id='millis-game-result'></div>\n<script>\nlet start;\nfunction startMillisGame() {\n  start = millis();\n  setTimeout(() => {\n    const stop = millis();\n    const guess = prompt(\"How many milliseconds passed?\");\n    document.getElementById(\"millis-game-result\").innerHTML = `Real: ${stop - start}ms | Your guess: ${guess}ms`;\n  }, Math.floor(Math.random()*3000 + 2000));\n}\nfunction millis() {\n  return new Date().getTime();\n}\n</script>"
    },
    {
      "title": "📌 Pin Usage?",
      "content": "<div class='card'><code>millis()</code> doesn’t use any physical pin — it’s a <b>software timer</b>.</div>\n<div class='card'>But it helps control timing logic for output pins (LEDs, buzzers, relays, etc).</div>"
    },
    {
      "title": "🧪 DIY Project Idea",
      "content": "<div class='card'>Build a countdown timer that updates a display or LED pattern every 1 second — all handled by <code>millis()</code> without stopping anything else!</div>"
    }
  ]
}


      ]
    },{
      title:"Generating Random Numbers in Arduino",
      modules:[
        {
  "title": "random() — Generating Unpredictability",
  "lessons": [
    {
      "title": "🎯 What is random() in Arduino?",
      "content": "<div class='card'><code>random()</code> is a function that gives you a <b>pseudo-random number</b> each time you call it.</div><div class='card'>It’s commonly used to create unpredictable behavior in Arduino projects — like blinking LEDs at random intervals or making autonomous robots behave in fun, unexpected ways.</div><div class='card'>Remember, it's not truly random — it’s based on a formula. So it’s called <b>pseudo-random</b>.</div>"
    },
    {
      "title": "🧪 Syntax of random()",
      "content": "<div class='card'><code>random(max)</code> → Returns a number from 0 to (max - 1)</div><div class='card'><code>random(min, max)</code> → Returns a number from min to (max - 1)</div><div class='card'>Example: <code>random(5, 10)</code> could return 5, 6, 7, 8 or 9.</div>"
    },
    {
      "title": "📍 Pin Usage",
      "content": "<div class='card'><b>No specific pin</b> is used by <code>random()</code>. It runs entirely in software.</div><div class='card'>But — you’ll often use the output of <code>random()</code> to decide <b>which pin</b> to activate.</div><div class='card'>E.g., randomly turn ON one of 3 LEDs: pin 2, 3, or 4.</div>"
    },
    {
      "title": "🎮 Live Example — Random LED Blinker",
      "content": "<div class='card'>Here’s how to randomly blink one of 3 LEDs connected to pins 2, 3, and 4:</div><pre><code>int ledPins[] = {2, 3, 4};\n\nvoid setup() {\n  for (int i = 0; i < 3; i++) {\n    pinMode(ledPins[i], OUTPUT);\n  }\n}\n\nvoid loop() {\n  int index = random(0, 3);\n  digitalWrite(ledPins[index], HIGH);\n  delay(500);\n  digitalWrite(ledPins[index], LOW);\n  delay(500);\n}</code></pre><div class='card'>Run this and watch the LED dance randomly!</div>"
    },
    {
      "title": "🌍 Real-World Use Case",
      "content": "<div class='card'>You can use <code>random()</code> for:</div><ul class='card'><li>🎲 Dice simulation</li><li>🔔 Alarm buzzers with random tones</li><li>🎵 Music patterns</li><li>🎯 Random decision making (robot direction)</li></ul><div class='card'>Any project where unpredictability adds fun or realism!</div>"
    },
    {
      "title": "🎥 Bonus Video",
      "content": "<div class='card'>Watch this short demo of random LED blinking on an actual Arduino board.</div><iframe width='100%' height='215' src='https://www.youtube.com/embed/eB-V3VArs0s' frameborder='0' allowfullscreen></iframe>"
    }
  ]
}
,{
  "title": "randomSeed() — Seeding the Unpredictable",
  "lessons": [
    {
      "title": "🌱 What is randomSeed()?",
      "content": "<div class='card'><code>randomSeed()</code> is like giving a starting point for the random number generator.</div><div class='card'>Without this, your Arduino will generate the same 'random' sequence every time it starts. So it’s not really random unless seeded!</div><div class='card'>Using <code>randomSeed()</code> helps add more real-world randomness to your project.</div>"
    },
    {
      "title": "🧪 Syntax of randomSeed()",
      "content": "<div class='card'><code>randomSeed(seed)</code> → Sets the starting point for random numbers.</div><div class='card'>Example: <code>randomSeed(analogRead(0));</code> will use electrical noise on pin A0 as the seed.</div><div class='card'>This is a smart trick to introduce unpredictable behavior — especially when nothing is connected to A0!</div>"
    },
    {
      "title": "⚡ How it Affects random()",
      "content": "<div class='card'>Try running this two times without <code>randomSeed()</code> — the LED will blink the same pattern every time.</div><div class='card'>But when you use <code>randomSeed()</code> with analog input, you’ll get truly different patterns each time!</div>"
    },
    {
      "title": "🎮 Live Example — Better Random Blinking",
      "content": "<div class='card'>Let’s build a more unpredictable LED blinker:</div><pre><code>int ledPins[] = {2, 3, 4};\n\nvoid setup() {\n  randomSeed(analogRead(0));\n  for (int i = 0; i < 3; i++) {\n    pinMode(ledPins[i], OUTPUT);\n  }\n}\n\nvoid loop() {\n  int index = random(0, 3);\n  digitalWrite(ledPins[index], HIGH);\n  delay(300);\n  digitalWrite(ledPins[index], LOW);\n  delay(300);\n}</code></pre><div class='card'>Now, each run will be different — like magic 🪄</div>"
    },
    {
      "title": "📍 Pin Usage",
      "content": "<div class='card'><code>randomSeed()</code> doesn’t use a pin directly, but we often pass in <code>analogRead(A0)</code>.</div><div class='card'>So pin A0 is used as a <b>source of randomness</b>. If nothing is connected, it reads electrical noise — which is perfect!</div>"
    },
    {
      "title": "🎥 Watch: Seeding Randomness in Arduino",
      "content": "<div class='card'>This quick video shows how <code>randomSeed()</code> makes your project more unpredictable!</div><iframe width='100%' height='215' src='https://www.youtube.com/embed/8uXz3lSpqpo' frameborder='0' allowfullscreen></iframe>"
    }
  ]
}

      ]
    },{
      title:"Communication in Arduino — Talking With the World",
      modules:[
        {
  "title": "SPI — Serial Peripheral Interface (Full Breakdown)",
  "lessons": [
    {
      "title": "🚦 What is SPI?",
      "content": "<div class='card'><b>SPI</b> stands for <b>Serial Peripheral Interface</b>. It's a protocol used to transfer data between microcontrollers and peripherals like sensors, SD cards, displays, etc.</div><div class='card'>It uses **four wires** and works on a **Master-Slave** model — where one controller (like your Arduino) is the boss (Master), and all other devices obey it (Slaves).</div><div class='card'><b>Key Pins:</b><br>- MISO (Master In Slave Out)<br>- MOSI (Master Out Slave In)<br>- SCK (Serial Clock)<br>- SS (Slave Select)</div>"
    },
    {
      "title": "🔍 What are Master and Slave Devices?",
      "content": "<div class='card'><b>Master:</b> This is the Arduino (or another microcontroller) that <i>initiates</i> communication and controls the clock.</div><div class='card'><b>Slave:</b> These are modules or sensors (like an SD card, nRF24 module, etc.) that respond to the master’s commands.</div><div class='card'><b>Real-world example:</b> Your Arduino is the Master and an SD card module is the Slave — you send commands to read/write files.</div>"
    },
    {
      "title": "📟 Real World Applications of SPI",
      "content": "<div class='card'>- Communicating with SD cards (data logging projects)<br>- Driving OLED or TFT screens<br>- Talking to wireless modules like nRF24L01<br>- Reading sensor data from SPI-compatible modules</div><div class='card'>SPI is fast, lightweight, and widely supported!</div>"
    },
    {
      "title": "🛠️ Basic SPI Wiring with Arduino UNO",
      "content": "<div class='card'>Here’s the default SPI pins on an UNO:</div><ul class='card'><li><b>MOSI</b> - Pin 11</li><li><b>MISO</b> - Pin 12</li><li><b>SCK</b> - Pin 13</li><li><b>SS</b> - Any Digital Pin (like D10)</li></ul><div class='card'>Different boards have different default SPI pins — check the board’s datasheet!</div>"
    },
    {
      "title": "💻 Code Example: Communicating with an SPI Sensor",
      "content": "<div class='card'>Let’s say you're talking to a sensor via SPI — here's how to begin:</div><pre><code>#include &lt;SPI.h&gt;\n\nvoid setup() {\n  SPI.begin(); // Initializes SPI bus\n  pinMode(10, OUTPUT); // SS pin as output\n}\n\nvoid loop() {\n  digitalWrite(10, LOW); // Enable Slave\n  byte result = SPI.transfer(0x55); // Send data and receive a byte\n  digitalWrite(10, HIGH); // Disable Slave\n  delay(1000);\n}</code></pre><div class='card'>This code sends 0x55 and reads the result. The <code>SPI.transfer()</code> function does the magic.</div>"
    },
    {
      "title": "📺 Video: How SPI Works (Watch this!)",
      "content": "<iframe width='100%' height='215' src='https://www.youtube.com/embed/Jd3TZGfdhHk' title='How SPI Communication Works' frameborder='0' allowfullscreen></iframe>"
    },
    {
      "title": "🎮 Mini Game: SPI Master or Slave?",
      "content": "<div class='card'>Question: Which one controls the clock in SPI?</div><button class='gaming-btn'>Master</button> <button class='gaming-btn'>Slave</button><div class='card'>✅ Answer: Master always controls the clock in SPI communication.</div>"
    },
    {
      "title": "📍 Summary & Takeaway",
      "content": "<div class='card'>SPI is a super-fast protocol perfect for sensors, screens, and SD cards. It uses 4 wires and works in a Master-Slave fashion. You can easily communicate using <code>SPI.transfer()</code> after calling <code>SPI.begin()</code>.</div><div class='card'>It's perfect when you need speed and stability in wired communication!</div>"
    }
  ]
},{
  "title": "🔍 SPI Pins — Deep Dive into MOSI, MISO, SCK, SS",
  "lessons": [
    {
      "title": "💡 What is SPI?",
      "content": "<div class='card'>SPI stands for <b>Serial Peripheral Interface</b> — it's a fast, full-duplex communication protocol that uses four wires: <code>MOSI</code>, <code>MISO</code>, <code>SCK</code>, and <code>SS</code>.</div>\n<div class='card'>It's used to communicate with SD cards, displays (like TFT), sensors, and even other microcontrollers.</div>"
    },
    {
      "title": "🔁 How SPI Communication Works",
      "content": "<div class='card'>Imagine a walkie-talkie system with two people.</div>\n<div class='card'>One talks (MOSI), one listens (MISO), and they only talk when the boss says it's their turn (SS), all while following a common rhythm (SCK).</div>"
    },
    {
      "title": "📌 MOSI — Master Out Slave In",
      "content": "<div class='card'><b>MOSI</b> sends data <i>from the Master</i> to the <i>Slave</i>.</div>\n<div class='card'>Example: Arduino (master) tells SD card (slave) to write a file.</div>\n<div class='card'>On Arduino UNO, MOSI = Pin 11</div>"
    },
    {
      "title": "📌 MISO — Master In Slave Out",
      "content": "<div class='card'><b>MISO</b> is the reverse: data travels from the <i>Slave to Master</i>.</div>\n<div class='card'>Example: SD card sends back 'success' to Arduino.</div>\n<div class='card'>On Arduino UNO, MISO = Pin 12</div>"
    },
    {
      "title": "⏱️ SCK — Serial Clock",
      "content": "<div class='card'><b>SCK</b> is the clock pulse generated by the Master.</div>\n<div class='card'>It tells the Slave when to read or write a bit.</div>\n<div class='card'>Like a drum beat controlling when everyone speaks.</div>\n<div class='card'>Arduino UNO: SCK = Pin 13</div>"
    },
    {
      "title": "🎚️ SS / CS — Slave Select / Chip Select",
      "content": "<div class='card'>This tells which Slave the Master is talking to.</div>\n<div class='card'>It’s pulled LOW (0) when selected, and HIGH (1) when idle.</div>\n<div class='card'>In real-world: like choosing which friend to talk to in a group chat.</div>\n<div class='card'>Usually any digital pin can be used as SS (commonly Pin 10)</div>"
    },
    {
      "title": "🔌 Full SPI Pin Layout on Arduino UNO",
      "content": "<div class='card'><ul><li>MOSI = Pin 11</li><li>MISO = Pin 12</li><li>SCK = Pin 13</li><li>SS = Pin 10 (can be others too)</li></ul></div>\n<div class='card'>Make sure to use <code>SPI.begin()</code> to initialize the communication.</div>"
    },
    {
      "title": "📦 Common SPI Devices",
      "content": "<div class='card'>Here are examples of SPI-based modules:</div>\n<ul class='card'><li>SD card modules</li><li>nRF24L01+ RF modules</li><li>TFT Displays</li><li>Digital Potentiometers</li></ul>"
    },
    {
      "title": "🎥 Video: SPI Pins Explained Visually",
      "content": "<iframe width='100%' height='215' src='https://www.youtube.com/embed/AEz6FZrL3EM' title='SPI Explained - MOSI MISO SCK SS' frameborder='0' allowfullscreen></iframe>"
    },
    {
      "title": "🎮 SPI Quiz — Quick Check",
      "content": "<div class='card'>Which pin sends data <b>from Slave to Master</b>?</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>A. MOSI</button>\n<button class='gaming-btn' onclick='revealNextCard(this)'>B. MISO ✅</button>\n<button class='gaming-btn' onclick='revealNextCard(this)'>C. SS</button>"
    }
  ]
}

,{
  "title": "Print — Sending Data to the Serial Monitor",
  "lessons": [
    {
      "title": "🖨️ What is Print in Arduino?",
      "content": "<div class='card'><code>print()</code> and <code>println()</code> are functions used to send data to the Serial Monitor — a handy tool to <b>debug</b> and display information from your Arduino.</div><div class='card'>It belongs to the <code>Print</code> class, which is inherited by <code>Serial</code>, <code>SoftwareSerial</code>, and even network classes like <code>WiFiClient</code>.</div>"
    },
    {
      "title": "📜 print() vs println()",
      "content": "<div class='card'><code>print()</code> → Prints data <i>on the same line</i><br><code>println()</code> → Prints data and moves to the <i>next line</i></div><div class='card'>These are extremely useful when you want to observe sensor data, test loops, or see what your code is doing!</div>"
    },
    {
      "title": "🌐 Real-World Use Case",
      "content": "<div class='card'>Let’s say you're building a <b>smart temperature sensor</b>. You want to see the temperature in real-time in your laptop. Just use:</div><pre><code>Serial.print(\"Temperature: \");\nSerial.println(temp);</code></pre><div class='card'>It will keep printing live data like:<br>Temperature: 29.3<br>Temperature: 29.7</div>"
    },
    {
      "title": "🛠️ How to Use print() in Arduino",
      "content": "<div class='card'>Step 1: Start serial communication in <code>setup()</code><br><code>Serial.begin(9600);</code></div><div class='card'>Step 2: Use <code>Serial.print()</code> or <code>Serial.println()</code> inside <code>loop()</code> to show values.</div><pre><code>void setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  Serial.println(\"Arduino is running!\");\n  delay(1000);\n}</code></pre>"
    },
    {
      "title": "🧠 Data Types with print()",
      "content": "<div class='card'>You can use <code>print()</code> with all kinds of data:</div><ul class='card'><li>Numbers: <code>Serial.print(123)</code></li><li>Strings: <code>Serial.print(\"Hello\")</code></li><li>Floats: <code>Serial.print(3.14)</code></li><li>Binary: <code>Serial.print(5, BIN)</code> → 101</li></ul><div class='card'>It even works with objects that inherit from the Print class!</div>"
    },
    {
      "title": "📺 Video: Using Serial.print() in Arduino",
      "content": "<iframe width='100%' height='215' src='https://www.youtube.com/embed/3zNPEkGeHwM' title='Arduino print println explained' frameborder='0' allowfullscreen></iframe>"
    },
    {
      "title": "🎮 Mini Game: Pick the Right Line!",
      "content": "<div class='card'>What’s the output of the following?</div><pre><code>Serial.print(\"Temp: \");\nSerial.print(25);\nSerial.print(\" C\");</code></pre><div class='card'>✅ Output: <code>Temp: 25 C</code></div>"
    },
    {
      "title": "📍 Summary & Takeaway",
      "content": "<div class='card'>The <code>print()</code> and <code>println()</code> functions are <b>lifelines</b> when debugging and building Arduino projects. They help you see what's going on inside your code and test your logic in real-time.</div><div class='card'>No matter what you're building — lights, robots, sensors — <code>Serial.print()</code> is your window into the Arduino’s brain.</div>"
    }
  ]
}
,{
  "title": "Serial — The Lifeline Between Arduino and Your PC",
  "lessons": [
    {
      "title": "🔌 What is Serial Communication?",
      "content": "<div class='card'>Serial communication is how your Arduino <b>talks to your computer</b> — one bit at a time, over a single wire.</div><div class='card'>It uses the <b>TX (transmit)</b> and <b>RX (receive)</b> pins (usually Pin 1 and Pin 0 on Arduino UNO).</div>"
    },
    {
      "title": "📚 Full Form & Context",
      "content": "<div class='card'><b>Serial</b> stands for <b>Serial Peripheral Interface</b> in general electronics — but in Arduino, <code>Serial</code> refers to UART (Universal Asynchronous Receiver-Transmitter).</div><div class='card'>It is asynchronous, meaning no external clock is needed. Just baud rate must match.</div>"
    },
    {
      "title": "💻 Real-World Analogy",
      "content": "<div class='card'>Imagine your Arduino is a friend texting you on WhatsApp (Serial Monitor). The TX pin is like sending the message, RX is reading the message.</div><div class='card'>Your phone (computer) and your friend (Arduino) must agree on the <b>typing speed</b> (baud rate).</div>"
    },
    {
      "title": "📍 Common Serial Pins",
      "content": "<ul class='card'><li>Arduino UNO: TX (Pin 1), RX (Pin 0)</li><li>Arduino Mega: TX0/RX0, TX1/RX1, etc.</li><li>SoftwareSerial: You can assign your own pins for TX/RX!</li></ul>"
    },
    {
      "title": "🧪 Syntax of Serial",
      "content": "<pre><code>Serial.begin(9600);      // Starts serial communication\nSerial.print(\"Hello\");   // Sends data without new line\nSerial.println(\"World\"); // Sends data with new line\nSerial.read();           // Reads incoming byte\nSerial.available();      // Checks if data is available</code></pre>"
    },
    {
      "title": "🌍 Where is Serial Used?",
      "content": "<ul class='card'><li>Debugging Arduino code</li><li>Sending sensor data to PC</li><li>Talking to Bluetooth/Wi-Fi modules (like HC-05 or ESP8266)</li><li>Logging data from GPS, RFID, GSM modules</li></ul>"
    },
    {
      "title": "🛠️ Serial Wiring Example",
      "content": "<div class='card'>If you’re using a module like Bluetooth HC-05:</div><ul class='card'><li>Connect TX of HC-05 to RX of Arduino</li><li>Connect RX of HC-05 to TX of Arduino (use voltage divider!)</li><li>Use <code>Serial.read()</code> to get the data</li></ul>"
    },
    {
      "title": "📺 Video: Full Serial Communication Explained",
      "content": "<iframe width='100%' height='215' src='https://www.youtube.com/embed/BjZ5oYFQXJk' title='Arduino Serial Communication Tutorial' frameborder='0' allowfullscreen></iframe>"
    },
    {
      "title": "🎮 Game: Decode the Serial Message",
      "content": "<div class='card'>What happens here?</div><pre><code>Serial.begin(9600);\nSerial.print(\"Val: \");\nSerial.print(analogRead(A0));\nSerial.print(\"\\nDone\");</code></pre><div class='card'>✅ Output (example): <br>Val: 712<br>Done</div>"
    },
    {
      "title": "🚀 Bonus: Serial Plotter",
      "content": "<div class='card'>Serial Plotter is a visual graph tool in Arduino IDE. Just use <code>Serial.println()</code> with sensor values to see real-time plots!</div><div class='card'>Try: <pre><code>Serial.println(analogRead(A0));</code></pre></div>"
    }
  ]
}
,{
  "title": "Stream — Power Behind Serial-like Interfaces",
  "lessons": [
    {
      "title": "🌊 What is the Stream Class?",
      "content": "<div class='card'>The <code>Stream</code> class is the backbone behind many Arduino communication methods like <code>Serial</code>, <code>Wire</code>, and <code>SoftwareSerial</code>.</div><div class='card'>It offers a unified way to read and write data through <b>streams</b> — like text from a serial port or data from an I2C sensor.</div>"
    },
    {
      "title": "🔍 Why Use Stream?",
      "content": "<div class='card'>When different libraries (e.g., Serial, Wire, Ethernet) inherit from <code>Stream</code>, they all share <b>common reading and writing functions</b>. That makes code more reusable and flexible.</div><div class='card'>Example: <code>.read()</code>, <code>.available()</code>, <code>.peek()</code> — all work across multiple interfaces!</div>"
    },
    {
      "title": "🧱 Stream Functions You Should Know",
      "content": "<ul class='card'><li><code>read()</code> → Reads the next byte of incoming data.</li><li><code>peek()</code> → Looks at the next byte without removing it.</li><li><code>available()</code> → Returns the number of bytes available to read.</li><li><code>find()</code> → Searches for a keyword.</li><li><code>readString()</code> → Reads characters into a String.</li></ul>"
    },
    {
      "title": "📦 Where Do You See Stream in Real Life?",
      "content": "<ul class='card'><li><b>Serial Monitor</b>: When you receive GPS or RFID data character-by-character.</li><li><b>Wi-Fi Modules</b>: When reading from ESP8266 or ESP32 via TCP streams.</li><li><b>Bluetooth</b>: When receiving SMS text over HC-05.</li></ul>"
    },
    {
      "title": "📚 Inheritance — A Nerdy But Important Concept",
      "content": "<div class='card'><code>Serial</code> inherits from <code>Stream</code>. So does <code>Wire</code>, <code>SoftwareSerial</code>, and others.</div><div class='card'>That means all these communication classes can use <code>.read()</code>, <code>.peek()</code>, <code>.find()</code>, etc. without redefining them!</div>"
    },
    {
      "title": "💡 Real-World Analogy",
      "content": "<div class='card'>Think of Stream like a <b>pipeline system</b>. Whether it carries water (Serial), juice (Wire), or soda (SoftwareSerial), the basic operations of opening, checking, and peeking remain the same!</div>"
    },
    {
      "title": "🔌 Pin Usage",
      "content": "<div class='card'>Stream itself doesn't use pins directly — but any class like Serial or Wire that inherits it <b>does</b>.</div><ul class='card'><li>Serial: TX/RX pins</li><li>Wire: SDA/SCL</li></ul>"
    },
    {
      "title": "🧪 Example Code",
      "content": "<pre><code>String incoming;\nif (Serial.available() > 0) {\n  incoming = Serial.readString();\n  Serial.println(\"You typed: \" + incoming);\n}</code></pre><div class='card'>This reads the full text typed in Serial Monitor and prints it back.</div>"
    },
    {
      "title": "📺 Video: Stream and Inheritance in Arduino",
      "content": "<iframe width='100%' height='215' src='https://www.youtube.com/embed/L3R8iOBKZ7s' title='Understanding Stream in Arduino' frameborder='0' allowfullscreen></iframe>"
    }
  ]
},{
  "title": "Wire — I²C Communication: Talking to Multiple Devices with 2 Wires",
  "lessons": [
    {
      "title": "📡 What is I²C (Wire)?",
      "content": "<div class='card'><b>I²C</b> (Inter-Integrated Circuit), pronounced \"I-squared-C\" or \"I-two-C\", is a serial communication protocol that allows multiple devices to communicate using just two wires: <b>SDA</b> (data) and <b>SCL</b> (clock).</div><div class='card'>In Arduino, the I²C protocol is implemented using the <code>Wire</code> library.</div>"
    },
    {
      "title": "🧠 Master and Slave Devices",
      "content": "<div class='card'>I²C uses a master-slave setup. The <b>master</b> controls the clock and initiates communication. <b>Slaves</b> wait to be addressed.</div><div class='card'>Arduino is usually the master, while sensors (like MPU6050 or SSD1306 OLED displays) act as slaves.</div>"
    },
    {
      "title": "📍 Pins Used in I²C (Wire)",
      "content": "<div class='card'><ul><li><b>UNO/Nano</b>: A4 (SDA), A5 (SCL)</li><li><b>MEGA</b>: 20 (SDA), 21 (SCL)</li><li><b>ESP32</b>: You can set any GPIO as SDA and SCL (commonly GPIO 21 and 22)</li></ul></div>"
    },
    {
      "title": "🔍 Common Devices That Use I²C",
      "content": "<div class='card'>✔️ OLED Displays (SSD1306)<br>✔️ Real-Time Clocks (DS1307, DS3231)<br>✔️ Accelerometers (MPU6050)<br>✔️ EEPROMs</div>"
    },
    {
      "title": "🛠️ Wire Library Functions",
      "content": "<ul class='card'><li><code>Wire.begin()</code> → Starts I²C as master or slave</li><li><code>Wire.beginTransmission(address)</code> → Tells which slave to talk to</li><li><code>Wire.write(data)</code> → Sends data</li><li><code>Wire.endTransmission()</code> → Ends communication</li><li><code>Wire.requestFrom(address, numBytes)</code> → Reads data from slave</li></ul>"
    },
    {
      "title": "🧪 Real-World Example — Reading Temperature from a Sensor",
      "content": "<pre><code>#include &lt;Wire.h&gt;\n\nvoid setup() {\n  Wire.begin();\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  Wire.beginTransmission(0x48); // Sensor address\n  Wire.write(0);\n  Wire.endTransmission();\n  Wire.requestFrom(0x48, 1);\n  int temp = Wire.read();\n  Serial.println(temp);\n  delay(1000);\n}</code></pre>"
    },
    {
      "title": "🧠 How I²C Saves Pins",
      "content": "<div class='card'>No matter how many devices you connect, you still use just <b>2 wires</b>. Each device gets a unique address (like house numbers).</div><div class='card'>This makes I²C perfect for small robots, wearables, or IoT devices where pin space is limited.</div>"
    },
    {
      "title": "🎮 Mini Game — Identify the I²C Pins",
      "content": "<div class='card'>Which of the following pins are I²C for Arduino UNO?<br><button class='gaming-btn' onclick='revealNextCard(this)'>A. D2, D3</button><br><button class='gaming-btn' onclick='revealNextCard(this)'>B. A4, A5 ✅</button><br><button class='gaming-btn' onclick='revealNextCard(this)'>C. D10, D11</button></div>"
    },
    {
      "title": "🎥 YouTube: Learn I²C with OLED and Arduino",
      "content": "<iframe width='100%' height='215' src='https://www.youtube.com/embed/TiQwN9YbtaU' title='Arduino I2C Explained + OLED Example' frameborder='0' allowfullscreen></iframe>"
    },{
      "title": "👀 SCL and SDA — The Two I²C Lifelines",
      "content": "<div class='card'><b>SCL</b> stands for <i>Serial Clock Line</i> — it controls the timing of data communication.</div>\n<div class='card'><b>SDA</b> stands for <i>Serial Data Line</i> — it carries the actual data between devices.</div>\n<div class='card'>Both are essential for <b>I²C</b> communication, and together they make two devices 'talk' on the same bus.</div>"
    },
    {
      "title": "📡 How Do They Work Together?",
      "content": "<div class='card'>Imagine SCL as a <b>metronome</b> (clock) and SDA as a <b>walkie-talkie</b> (data).</div>\n<div class='card'>SCL gives rhythm 🥁, while SDA sends the conversation 📣.</div>"
    },
    {
      "title": "📍 Pin Numbers on Arduino",
      "content": "<div class='card'><b>Arduino UNO / Nano</b>:<br>SDA = A4, SCL = A5</div>\n<div class='card'><b>Arduino MEGA</b>:<br>SDA = Pin 20, SCL = Pin 21</div>\n<div class='card'><b>ESP32</b>:<br>You can choose any GPIO for SDA/SCL (like 21/22)</div>"
    },
    {
      "title": "🌍 Real-World Analogy",
      "content": "<div class='card'>Think of a class monitor (Arduino) asking students (sensors) one by one for attendance.</div>\n<div class='card'>SCL = ringing bell ⏰ to start/stop speaking<br>SDA = student’s voice 🎤 carrying name</div>"
    },
    {
      "title": "📦 What Can You Connect?",
      "content": "<div class='card'>I²C is used for connecting:</div>\n<ul class='card'><li>OLED Displays (like SSD1306)</li><li>Temperature Sensors (like DS18B20)</li><li>Gyros (like MPU6050)</li><li>Real-Time Clocks (DS3231)</li></ul>"
    },
    {
      "title": "🧪 Tiny Demo Code (Just Setup)",
      "content": "<div class='card'>Here’s how you initialize I²C using the <code>Wire</code> library:</div>\n<pre><code>#include &lt;Wire.h&gt;\n\nvoid setup() {\n  Wire.begin(); // Starts I2C\n  Serial.begin(9600);\n}</code></pre>"
    },
    {
      "title": "🎮 Quiz: SCL vs SDA",
      "content": "<div class='card'>Which one controls the clock?</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>A. SDA</button>\n<button class='gaming-btn' onclick='revealNextCard(this)'>B. SCL ✅</button>\n<button class='gaming-btn' onclick='revealNextCard(this)'>C. SPI</button>"
    },
    {
      "title": "🎥 Video: SCL and SDA Explained Simply",
      "content": "<iframe width='100%' height='215' src='https://www.youtube.com/embed/_ADxKQb2P4I' title='SDA and SCL Explained with Animation' frameborder='0' allowfullscreen></iframe>"
    }
  ]
}


      ]
    },{
      title:"SPI Advanced Functions — Total Control over Communication",
      modules:[
        {
  "title": "🧠 SPISettings — The Brain Behind SPI Transactions",
  "lessons": [
    {
      "title": "🧾 What is SPISettings?",
      "content": "<div class='card'><code>SPISettings</code> defines how communication happens in SPI — like speed, data mode, and bit order.</div><div class='card'>Instead of setting them manually every time, you wrap them inside SPISettings and use it in <code>beginTransaction()</code>.</div>"
    },
    {
      "title": "📚 Syntax of SPISettings",
      "content": "<div class='card'><code>SPISettings(clock, bitOrder, dataMode)</code></div><div class='card'>Example: <code>SPISettings(1000000, MSBFIRST, SPI_MODE0)</code> — 1 MHz speed, Most Significant Bit first, Mode 0.</div>"
    },
    {
      "title": "📦 Why Use SPISettings?",
      "content": "<div class='card'>It gives you <b>predictable behavior</b> especially when multiple SPI devices use different configs.</div><div class='card'>Best practice is to wrap all communication like this:</div><pre><code>SPI.beginTransaction(SPISettings(...));\n// Your code\nSPI.endTransaction();</code></pre>"
    },
    {
      "title": "🌍 Real-World Analogy",
      "content": "<div class='card'>Imagine writing a letter: you choose the <b>language (bitOrder)</b>, <b>speed of courier (clock speed)</b>, and <b>message formatting (dataMode)</b>. All of this is what <code>SPISettings</code> controls.</div>"
    },
    {
      "title": "💻 Example Code",
      "content": "<div class='card'>Let's set up a device with SPI using <code>SPISettings</code>:</div><pre><code>#include &lt;SPI.h&gt;\nvoid setup() {\n  SPI.begin();\n  SPI.beginTransaction(SPISettings(1000000, MSBFIRST, SPI_MODE0));\n  digitalWrite(SS, LOW); // Start talking to slave\n  SPI.transfer(0xAA); // Send data\n  digitalWrite(SS, HIGH); // End talk\n  SPI.endTransaction();\n}</code></pre>"
    },
    {
      "title": "🔌 Pin Usage",
      "content": "<div class='card'>Used with SPI pins:\n<ul><li>MOSI → D11</li><li>MISO → D12</li><li>SCK → D13</li><li>SS → Usually D10</li></ul></div>"
    },
    {
      "title": "🎥 Video: Mastering SPISettings",
      "content": "<iframe width='100%' height='215' src='https://www.youtube.com/embed/G1KkW9d05pM' title='SPISettings Explained' frameborder='0' allowfullscreen></iframe>"
    },
    {
      "title": "🎮 Mini Game: Match the SPI Setting",
      "content": "<div class='card'>Match these values to their roles:<br><br><b>Options:</b><br>1. MSBFIRST<br>2. 1000000<br>3. SPI_MODE3</div><div class='card'><b>Q:</b> Which one sets data direction?</div><button class='gaming-btn'>MSBFIRST ✅</button><button class='gaming-btn'>SPI_MODE3 ❌</button><button class='gaming-btn'>1000000 ❌</button>"
    }
  ]
}
,{
  "title": "🚀 SPI.begin() — Starting the SPI Engine",
  "lessons": [
    {
      "title": "🧠 What is SPI.begin()?",
      "content": "<div class='card'><code>SPI.begin()</code> initializes the SPI bus and sets the proper SPI pins (MOSI, MISO, SCK) to the right mode.</div><div class='card'>You MUST call this before using any other SPI functions, otherwise nothing will work!</div>"
    },
    {
      "title": "🛠 Syntax",
      "content": "<div class='card'><code>SPI.begin()</code> → Starts SPI communication.</div><div class='card'>On some boards, you can use <code>SPI.begin(SCK, MISO, MOSI, SS)</code> to set custom SPI pins (mostly ESP32).</div>"
    },
    {
      "title": "🔌 Pin Setup — Arduino UNO",
      "content": "<div class='card'><b>MOSI</b> → D11<br><b>MISO</b> → D12<br><b>SCK</b> → D13<br><b>SS (Slave Select)</b> → Usually D10</div><div class='card'>These pins are <b>hard-wired</b> for SPI and can’t be changed on basic boards.</div>"
    },
    {
      "title": "📚 Why do we need begin()?",
      "content": "<div class='card'>It configures SPI settings and sets the pins to INPUT/OUTPUT modes as required.</div><div class='card'>Think of it like 'turning on' the SPI engine before you start driving.</div>"
    },
    {
      "title": "🌍 Real-World Analogy",
      "content": "<div class='card'>Calling <code>SPI.begin()</code> is like putting the key in your car and turning on the engine before you shift gears (transfer data).</div>"
    },
    {
      "title": "📦 Where is it used?",
      "content": "<div class='card'>Any Arduino project that talks to SPI peripherals like:</div><ul><li>SD cards</li><li>Shift registers</li><li>Digital potentiometers</li><li>SPI displays like OLEDs</li></ul>"
    },
    {
      "title": "💡 Example Code",
      "content": "<pre><code>#include &lt;SPI.h&gt;\n\nvoid setup() {\n  SPI.begin();\n  // Ready to communicate via SPI\n}</code></pre>"
    },
    {
      "title": "🎥 Video: SPI.begin() Explained Simply",
      "content": "<iframe width='100%' height='215' src='https://www.youtube.com/embed/Mv_w_8yTrFA' title='SPI.begin() for Beginners' frameborder='0' allowfullscreen></iframe>"
    },
    {
      "title": "🎮 Quick Quiz: What Does It Do?",
      "content": "<div class='card'>What happens if you forget to use <code>SPI.begin()</code> before sending data?</div><button class='gaming-btn'>SPI fails silently ✅</button><button class='gaming-btn'>Arduino resets ❌</button><button class='gaming-btn'>You burn the board ❌</button>"
    }
  ]
}
,{
  "title": "🧾 SPI.beginTransaction() — Safe and Clean SPI Transfers",
  "lessons": [
    {
      "title": "📘 What is SPI.beginTransaction()?",
      "content": "<div class='card'><code>SPI.beginTransaction()</code> prepares the SPI bus for a device-specific data transfer.</div><div class='card'>It ensures that if multiple devices share the same SPI bus, each one gets the correct configuration (clock speed, data mode, bit order).</div>"
    },
    {
      "title": "🧪 Syntax and Parameters",
      "content": "<div class='card'><code>SPI.beginTransaction(SPISettings(clock, bitOrder, dataMode))</code></div><div class='card'>Example: <code>SPI.beginTransaction(SPISettings(1000000, MSBFIRST, SPI_MODE0))</code></div><ul><li><b>clock</b> = SPI clock speed (e.g., 1 MHz)</li><li><b>bitOrder</b> = MSBFIRST or LSBFIRST</li><li><b>dataMode</b> = SPI_MODE0 to SPI_MODE3</li></ul>"
    },
    {
      "title": "🔍 Where and Why?",
      "content": "<div class='card'>Used just before talking to a specific SPI device — like an SD card or display.</div><div class='card'>It avoids conflicts when multiple SPI devices need different settings.</div>"
    },
    {
      "title": "🌍 Real-World Analogy",
      "content": "<div class='card'>Imagine you and your friend both use the same laptop but change the screen resolution, brightness, and keyboard layout to your preference before starting work. That’s what <code>SPI.beginTransaction()</code> does — it applies settings before using the shared 'SPI bus'.</div>"
    },
    {
      "title": "📦 Typical Use Case — Reading from SD Card",
      "content": "<pre><code>digitalWrite(10, LOW); // Select SD card\nSPI.beginTransaction(SPISettings(8000000, MSBFIRST, SPI_MODE0));\n// Transfer data here\nSPI.endTransaction();\ndigitalWrite(10, HIGH);</code></pre>"
    },
    {
      "title": "📍 Pin Usage Reminder",
      "content": "<div class='card'>Just like <code>SPI.begin()</code>, this function uses:</div><ul><li>MOSI → D11</li><li>MISO → D12</li><li>SCK → D13</li><li>SS (Chip Select) → D10 (usually)</li></ul><div class='card'>Always manage <code>SS</code> (chip select) manually before and after the transaction.</div>"
    },
    {
      "title": "🎥 YouTube: Why SPI.beginTransaction Matters",
      "content": "<iframe width='100%' height='215' src='https://www.youtube.com/embed/X4euqEAEQK0' title='SPI.beginTransaction() Explained' frameborder='0' allowfullscreen></iframe>"
    },
    {
      "title": "🎮 Quick Game: Choose the Right Order",
      "content": "<div class='card'>Arrange the proper sequence for SPI communication:</div><button class='gaming-btn'>SPI.begin() → digitalWrite(SS, LOW) → SPI.beginTransaction() → SPI.transfer() → SPI.endTransaction() ✅</button><button class='gaming-btn'>SPI.transfer() → SPI.begin() ❌</button><button class='gaming-btn'>SPI.beginTransaction() → SPI.end() ❌</button>"
    }
  ]
}
,{
  "title": "🔚 SPI.endTransaction() — Wrap It Up!",
  "lessons": [
    {
      "title": "📘 What is SPI.endTransaction()?",
      "content": "<div class='card'><code>SPI.endTransaction()</code> is called after you finish communicating with an SPI device.</div><div class='card'>It signals the end of your settings-specific communication, allowing other SPI devices to safely start their own transactions without interference.</div>"
    },
    {
      "title": "🧪 Syntax",
      "content": "<div class='card'><code>SPI.endTransaction()</code></div><div class='card'>No parameters needed. It’s just a clean-up step after <code>SPI.beginTransaction()</code>.</div>"
    },
    {
      "title": "🌍 Real-World Analogy",
      "content": "<div class='card'>Imagine you're done using a public computer. You log out and leave so the next person can log in with their own settings. That's <code>endTransaction()</code>.</div>"
    },
    {
      "title": "📍 Pin Info",
      "content": "<div class='card'>Same pins involved as the SPI protocol:</div><ul><li><b>MOSI (D11)</b></li><li><b>MISO (D12)</b></li><li><b>SCK (D13)</b></li><li><b>SS (D10 or any CS pin)</b></li></ul><div class='card'>While <code>endTransaction()</code> doesn’t change pins directly, it ensures that they can be reused safely for the next SPI device.</div>"
    },
    {
      "title": "📦 Use Case — Finishing a Sensor Read",
      "content": "<div class='card'>Here’s how you'd use <code>SPI.endTransaction()</code> in a full read cycle:</div><pre><code>digitalWrite(SS, LOW);\nSPI.beginTransaction(SPISettings(1000000, MSBFIRST, SPI_MODE0));\nSPI.transfer(0x90); // Example read command\nSPI.endTransaction();\ndigitalWrite(SS, HIGH);</code></pre>"
    },
    {
      "title": "🧠 Why Is It Important?",
      "content": "<div class='card'>If you're using multiple SPI devices with different settings (e.g., an SD card and a TFT screen), <code>endTransaction()</code> helps prevent cross-talk, incorrect data, or bus conflicts.</div><div class='card'>It keeps your SPI communication stable and well-managed — especially in bigger projects.</div>"
    },
    {
      "title": "🎥 YouTube: Ending SPI Like a Pro",
      "content": "<iframe width='100%' height='215' src='https://www.youtube.com/embed/Yv3BwbT_p1Q' title='SPI.endTransaction() in Arduino' frameborder='0' allowfullscreen></iframe>"
    },
    {
      "title": "🎮 Mini Quiz: When Do You Use SPI.endTransaction()?",
      "content": "<div class='card'>What comes right after finishing SPI data transfer?</div><button class='gaming-btn'>✅ SPI.endTransaction()</button><button class='gaming-btn'>❌ SPI.begin()</button><button class='gaming-btn'>❌ pinMode()</button>"
    }
  ]
}
,{
  "title": "🚫 SPI.end() — Turning Off the SPI Bus",
  "lessons": [
    {
      "title": "📘 What is SPI.end()?",
      "content": "<div class='card'><code>SPI.end()</code> is used to <b>disable the SPI bus</b> and return the SPI pins (MISO, MOSI, SCK) back to general I/O functionality.</div><div class='card'>If you’re done using SPI completely — like permanently stopping communication with all SPI devices — you call <code>SPI.end()</code>.</div>"
    },
    {
      "title": "🧪 Syntax",
      "content": "<div class='card'><code>SPI.end();</code><br>No parameters. Just call it when you’re sure SPI is no longer needed.</div>"
    },
    {
      "title": "🧠 When Should You Use It?",
      "content": "<div class='card'>You use <code>SPI.end()</code> when:</div><ul><li>You want to free up the SPI pins for other tasks like digital I/O</li><li>Your device is going into a sleep mode</li><li>You want to stop SPI for power-saving or reset purposes</li></ul>"
    },
    {
      "title": "🌍 Real-World Analogy",
      "content": "<div class='card'>Imagine SPI as a special walkie-talkie mode on your phone. <code>SPI.end()</code> means you’re done with that mode, and now the phone goes back to regular use.</div><div class='card'>Similarly, your Arduino pins go back to their default state.</div>"
    },
    {
      "title": "📍 Pin Release Details",
      "content": "<div class='card'><code>SPI.end()</code> disables the following SPI pins:</div><ul><li><b>MOSI (D11)</b> - Output</li><li><b>MISO (D12)</b> - Input</li><li><b>SCK (D13)</b> - Clock Output</li></ul><div class='card'>Once disabled, you can now use these pins like <code>digitalWrite()</code> or <code>analogRead()</code> if needed.</div>"
    },
    {
      "title": "🧪 Example: Switch Between SPI and LED",
      "content": "<pre><code>// Start SPI for sensor\nSPI.begin();\nSPI.beginTransaction(SPISettings(500000, MSBFIRST, SPI_MODE0));\n// Do SPI stuff\nSPI.endTransaction();\nSPI.end();\n\n// Now use the SPI pins as regular digital outputs\npinMode(11, OUTPUT);\ndigitalWrite(11, HIGH);</code></pre>"
    },
    {
      "title": "🎥 Video: Why and When to Use SPI.end()",
      "content": "<iframe width='100%' height='215' src='https://www.youtube.com/embed/FLeBvB0NRV4' title='SPI.end() Explained' frameborder='0' allowfullscreen></iframe>"
    },
    {
      "title": "🎮 Game: Right Time to Use SPI.end()?",
      "content": "<div class='card'>When would you use <code>SPI.end()</code>?</div><button class='gaming-btn'>✅ After you’re completely done using SPI</button><button class='gaming-btn'>❌ Right before SPI.transfer()</button><button class='gaming-btn'>❌ Every time you use SPI.beginTransaction()</button>"
    }
  ]
}
,{
  "title": "🔀 setBitOrder() — MSB or LSB First?",
  "lessons": [
    {
      "title": "📘 What is setBitOrder()?",
      "content": "<div class='card'><code>setBitOrder()</code> lets you decide which part of a byte — the <b>Most Significant Bit (MSB)</b> or the <b>Least Significant Bit (LSB)</b> — is sent first during SPI communication.</div><div class='card'>This matters when the device you're communicating with expects bits in a specific order!</div>"
    },
    {
      "title": "📚 Terms to Know: MSB and LSB",
      "content": "<div class='card'><b>MSB (Most Significant Bit):</b> The leftmost/highest bit. In binary 10010000, MSB is 1.</div><div class='card'><b>LSB (Least Significant Bit):</b> The rightmost/lowest bit. In 10010000, LSB is 0.</div><div class='card'>Some devices expect the first bit to be the MSB (default in Arduino), others need the LSB first. Hence, we choose.</div>"
    },
    {
      "title": "🧪 Syntax",
      "content": "<div class='card'><code>SPI.setBitOrder(MSBFIRST);</code><br><code>SPI.setBitOrder(LSBFIRST);</code></div><div class='card'>You choose <code>MSBFIRST</code> or <code>LSBFIRST</code> depending on your slave device's requirement.</div>"
    },
    {
      "title": "🧠 When and Why Use It?",
      "content": "<div class='card'>You use <code>setBitOrder()</code> when your peripheral device’s datasheet specifies a required bit order.</div><ul><li>LED drivers like MAX7219 → MSBFIRST</li><li>Shift registers like 74HC595 → LSBFIRST</li><li>Displays and sensors may vary</li></ul>"
    },
    {
      "title": "🌍 Real-Life Analogy",
      "content": "<div class='card'>Imagine reading a phone number. Some people say it as <code>+91-987</code> (MSB first), others say <code>789</code> (LSB first). The receiver must understand the order.</div>"
    },
    {
      "title": "📍 Pins Used (for SPI)",
      "content": "<div class='card'>This applies to devices communicating via SPI:</div><ul><li><b>MOSI (D11)</b> - Data sent out</li><li><b>SCK (D13)</b> - Clock</li><li><b>CS (any digital pin)</b> - Chip Select</li></ul>"
    },
    {
      "title": "🧪 Practical Example",
      "content": "<pre><code>SPI.begin();\nSPI.setBitOrder(LSBFIRST);  // Send Least Significant Bit first\nSPI.transfer(0b10100000);\nSPI.end();</code></pre>"
    },
    {
      "title": "🎮 Game: Which Bit is Which?",
      "content": "<div class='card'>In binary 10101010, which is the MSB?</div><button class='gaming-btn'>✅ 1 (leftmost)</button><button class='gaming-btn'>❌ 0 (rightmost)</button><button class='gaming-btn'>❌ All bits are same</button>"
    },
    {
      "title": "🎥 Video: MSBFIRST vs LSBFIRST Explained",
      "content": "<iframe width='100%' height='215' src='https://www.youtube.com/embed/vzSF1N_M_Kw' title='Bit Order Arduino Explained' frameborder='0' allowfullscreen></iframe>"
    }
  ]
}
,{
  "title": "⏱️ setClockDivider() — Controlling SPI Speed",
  "lessons": [
    {
      "title": "🔧 What is setClockDivider()?",
      "content": "<div class='card'><code>setClockDivider()</code> is used to control the speed of SPI communication.</div><div class='card'>It determines how fast data is transferred from your Arduino to SPI devices — by dividing the system clock frequency (16 MHz on most boards).</div>"
    },
    {
      "title": "🧪 Syntax of setClockDivider()",
      "content": "<div class='card'><code>SPI.setClockDivider(divider);</code></div><div class='card'>Examples:<ul><li><code>SPI.setClockDivider(SPI_CLOCK_DIV2)</code> → 8 MHz</li><li><code>SPI.setClockDivider(SPI_CLOCK_DIV8)</code> → 2 MHz</li><li><code>SPI.setClockDivider(SPI_CLOCK_DIV64)</code> → 250 kHz</li></ul></div>"
    },
    {
      "title": "🧠 When & Why to Use?",
      "content": "<div class='card'>Not all SPI devices can handle high speed! If your slave device is slow, use a higher divider (slower clock).</div><div class='card'>Use faster clocks when dealing with displays or fast sensors. Use slower clocks for EEPROMs or long-distance cables (more noise).</div>"
    },
    {
      "title": "🧰 How it Works",
      "content": "<div class='card'>The Arduino has a 16 MHz system clock. If you set <code>SPI_CLOCK_DIV4</code>, the SPI speed becomes 4 MHz.</div><div class='card'>The formula: <code>SPI speed = System Clock / Divider</code></div>"
    },
    {
      "title": "🌍 Real-World Analogy",
      "content": "<div class='card'>Imagine two friends passing balls — one is fast, one is slow. You adjust your speed to match your friend. That’s what clock divider does.</div>"
    },
    {
      "title": "📍 Pin Usage (SPI)",
      "content": "<div class='card'>Same SPI pins are used:<ul><li><b>MOSI</b> → Data to Slave</li><li><b>SCK</b> → Clock (the one affected by setClockDivider!)</li><li><b>CS</b> → Chip Select</li></ul></div>"
    },
    {
      "title": "🎮 Quiz: Match the Speed!",
      "content": "<div class='card'>If your system clock is 16 MHz and you use <code>SPI_CLOCK_DIV8</code>, what is the SPI clock speed?</div><button class='gaming-btn'>✅ 2 MHz</button><button class='gaming-btn'>❌ 4 MHz</button><button class='gaming-btn'>❌ 8 MHz</button>"
    },
    {
      "title": "🎥 Video: SPI Clock Divider Explained",
      "content": "<iframe width='100%' height='215' src='https://www.youtube.com/embed/X9fvDQGZmjI' title='Arduino SPI Clock Speed Tutorial' frameborder='0' allowfullscreen></iframe>"
    },
    {
      "title": "🧪 Example Code",
      "content": "<pre><code>SPI.begin();\nSPI.setClockDivider(SPI_CLOCK_DIV8); // 2 MHz\nSPI.transfer(0x42);\nSPI.end();</code></pre>"
    }
  ]
}
,{
  "title": "📡 SPI.transfer() — The Real Data Mover",
  "lessons": [
    {
      "title": "📘 What is SPI.transfer()?",
      "content": "<div class='card'><code>SPI.transfer()</code> is the function that actually sends <b>and</b> receives one byte of data through the SPI bus.</div><div class='card'>SPI is full-duplex — which means when Arduino sends a byte, it simultaneously receives one from the slave.</div>"
    },
    {
      "title": "🧪 Syntax of SPI.transfer()",
      "content": "<div class='card'><code>byte received = SPI.transfer(byte data);</code></div><div class='card'>Example:<br><code>SPI.transfer(0x53);</code><br>This sends the byte 0x53 and simultaneously returns any byte received.</div>"
    },
    {
      "title": "🧠 Why and When to Use?",
      "content": "<div class='card'>Use <code>SPI.transfer()</code> every time you need to send commands or data to SPI devices like:<ul><li>OLED or TFT Displays</li><li>SD Cards</li><li>Sensor Modules</li><li>Digital Potentiometers</li></ul></div><div class='card'>Some devices send data back on the same transfer, like temperature sensors.</div>"
    },
    {
      "title": "🌍 Real-Life Analogy",
      "content": "<div class='card'>Imagine two walkie-talkies: you say something and hear something back — at the same time! That’s full-duplex — like <code>SPI.transfer()</code>.</div>"
    },
    {
      "title": "📍 Pin Usage",
      "content": "<div class='card'>SPI uses:</div><ul><li><b>MOSI (D11)</b> → Data sent from Arduino</li><li><b>MISO (D12)</b> → Data received into Arduino</li><li><b>SCK (D13)</b> → Clock signal</li><li><b>CS (any digital pin)</b> → Selects the slave device</li></ul>"
    },
    {
      "title": "🧪 Practical Code Example",
      "content": "<pre><code>#include &lt;SPI.h&gt;\n\nvoid setup() {\n  SPI.begin();\n  digitalWrite(10, LOW); // Select slave\n  byte response = SPI.transfer(0xA5);\n  digitalWrite(10, HIGH); // Deselect slave\n  Serial.begin(9600);\n  Serial.print(\"Received: \");\n  Serial.println(response, HEX);\n}</code></pre>"
    },
    {
      "title": "🎮 Quiz Time: SPI.transfer",
      "content": "<div class='card'>What does <code>SPI.transfer(0x34);</code> return?</div><button class='gaming-btn'>✅ The byte received from the slave</button><button class='gaming-btn'>❌ Nothing</button><button class='gaming-btn'>❌ A confirmation string</button>"
    },
    {
      "title": "🎥 Video: SPI.transfer Explained Visually",
      "content": "<iframe width='100%' height='215' src='https://www.youtube.com/embed/mhYfMMqFM1E' title='SPI transfer Arduino Full Duplex' frameborder='0' allowfullscreen></iframe>"
    }
  ]
},{
  "title": "SPI.setBitOrder() — Choose Your Bit Battle Strategy!",
  "lessons": [
    {
      "title": "🧩 What is SPI.setBitOrder()?",
      "content": "<div class='card'><code>SPI.setBitOrder()</code> is used to decide <b>which bit goes first</b> when sending data through the SPI bus.</div>\n<div class='card'>You can choose between:<br><code>MSBFIRST</code> → Most Significant Bit First (default)<br><code>LSBFIRST</code> → Least Significant Bit First</div>\n<div class='card'>This is important because some SPI devices expect data in different bit orders. Sending data in the wrong order can lead to unexpected results!</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "📌 Real-World Example",
      "content": "<div class='card'>Imagine you're sending the number <code>0b10101010</code> to a digital display over SPI.</div>\n<div class='card'>If the display expects <b>LSBFIRST</b> but you send <b>MSBFIRST</b>, the entire byte will be interpreted differently!</div>\n<div class='card'>Just like how English is read left-to-right and Arabic is right-to-left, some chips are picky about bit order too!</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "⚙️ Syntax",
      "content": "<div class='card'><code>SPI.setBitOrder(bitOrder);</code><br>Where <code>bitOrder</code> is either <code>MSBFIRST</code> or <code>LSBFIRST</code>.</div>\n<div class='card'>This must be called <b>after</b> <code>SPI.begin()</code> and <b>before</b> any SPI transfer.</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "💡 Pin Usage",
      "content": "<div class='card'>This function affects <b>MOSI</b> and <b>SCK</b> pins primarily — because that's where the bit shifting happens during data transfer.</div>\n<div class='card'>But make sure your <b>slave device</b> supports the bit order you set!</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎮 Try It Out — Live Code Demo",
      "content": "<div class='card'>Here's a demo to send two bytes with different bit orders:</div>\n<pre><code>#include &lt;SPI.h&gt;\n\nvoid setup() {\n  SPI.begin();\n  SPI.setBitOrder(MSBFIRST);\n  SPI.transfer(0b10101010); // Sent MSB first\n\n  SPI.setBitOrder(LSBFIRST);\n  SPI.transfer(0b10101010); // Sent LSB first\n}\n\nvoid loop() {}\n</code></pre>",
      "image": "",
      "audio": ""
    },
    {
      "title": "📺 YouTube Video",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/G0V1zE3pdlE' title='Bit Order Explained with SPI Animation' frameborder='0' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🧠 Quiz Time!",
      "content": "<div class='card'>You want to send <code>0b00000001</code> to a sensor that expects LSBFIRST. What would it receive if you sent it MSBFIRST instead?</div>\n<div class='card'><b>A)</b> 0b00000001<br><b>B)</b> 0b10000000<br><b>C)</b> It won’t understand<br><b>D)</b> It will explode 💥</div>\n<div class='card'>Correct Answer: <b>B</b>. The bit order completely changes the interpretation!</div>",
      "image": "",
      "audio": ""
    }
  ]
},{
  "title": "SPI.end() — The Grand Finale of Communication: A Deep Dive",
  "lessons": [
    {
      "title": "📖 The Definitive Guide to SPI.end() - What, Why, and When",
      "content": "<div class=\"card\">Greetings, intrepid Arduino adventurer! You've mastered initiating SPI communication with <code>SPI.begin()</code>, deftly handled transactions, and even tweaked the communication speed. But what happens when the mission is accomplished? When your SPI peripheral has delivered all its messages, and your Arduino needs to move onto other, perhaps unrelated, tasks? This is where the often-underestimated, yet incredibly vital, <code>SPI.end()</code> function steps in!</div><button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>\n\n<div class=\"card\"><h3>What Exactly is <code>SPI.end()</code>?</h3>\nAt its core, <code>SPI.end()</code> is the explicit command to tell your Arduino's microcontroller to *deinitialize* its dedicated Serial Peripheral Interface (SPI) hardware module. Think of it like formally closing a specific communication channel and putting all the specialized SPI equipment back in its box. When you call <code>SPI.begin()</code>, the Arduino dedicates certain pins (MOSI, MISO, SCK, and often SS) and configures internal registers to enable the SPI peripheral. <code>SPI.end()</code> reverses this process. It sets the pins used by the SPI bus back to their default input state (or a state where they are no longer actively controlled by the SPI hardware) and disables the internal SPI module within the microcontroller.</div><button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>\n\n<div class=\"card\"><h3>Why Does <code>SPI.end()</code> Matter? The Power of Proper Cleanup!</h3>\nThis seemingly small function carries significant benefits for robust and efficient Arduino programming:\n<ul>\n  <li><b>Resource Liberation (Pin Freedom!):</b> By far, one of the most crucial reasons. On an Arduino Uno, the default SPI pins are Digital Pin 11 (MOSI), Digital Pin 12 (MISO), Digital Pin 13 (SCK), and often Digital Pin 10 (SS, as the default slave select). Once <code>SPI.end()</code> is called, these pins are no longer exclusively tied to the SPI hardware. This means you can now reconfigure and use these very same pins for *other* purposes, like general-purpose digital input/output (GPIO) for blinking an LED, reading a button, or even for a different communication protocol that uses some of these pins! Without <code>SPI.end()</code>, those pins remain 'locked' in their SPI roles, even if no data is being sent.</li>\n  <li><b>Power Efficiency (Every Milliamp Counts!):</b> While the power saving from disabling one peripheral might seem tiny, in battery-powered applications, every milliampere counts! An active, but idle, peripheral still consumes a small amount of power. By calling <code>SPI.end()</code>, you're instructing the microcontroller to power down or put the SPI module into a low-power state, contributing to overall energy conservation. This is a critical consideration for devices that need to run for extended periods on limited power.</li>\n  <li><b>Conflict Avoidance (No More Headaches!):</b> Imagine you finish an SPI transfer and then, later in your code, you try to use Digital Pin 11 to light up an LED. If you haven't called <code>SPI.end()</code>, Pin 11 might still be internally configured as a MOSI pin, leading to unexpected behavior, dim LEDs, or even short circuits if you're not careful. Proper deinitialization prevents these kinds of perplexing conflicts and ensures your hardware behaves as expected when repurposed.</li>\n  <li><b>Clean Code Practice (The Mark of a Pro!):</b> Just like opening a file requires closing it, or allocating memory requires freeing it, using a hardware peripheral should ideally involve proper initialization and deinitialization. It's a fundamental principle of good programming and resource management. It makes your code more predictable, easier to debug, and more robust in complex applications.</li>\n</ul></div><button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>\n\n<div class=\"card\"><h3>When to Call the Cleanup Crew: Practical Scenarios for <code>SPI.end()</code></h3>\nSo, you know *what* it does and *why* it's so important. But *when* should you actually use it in your code? Here are some prime scenarios:\n<ul>\n  <li><b>Dedicated SPI Sessions:</b> If your Arduino communicates with an SPI device for a specific task (e.g., configuring a sensor once, or flashing data to memory), and then that device is no longer needed for a prolonged period, call <code>SPI.end()</code>. This frees up the pins and resources for other parts of your project.</li>\n  <li><b>Before Deep Sleep/Low Power Modes:</b> When your Arduino is about to enter a low-power sleep mode, disabling all unnecessary peripherals (including SPI) is crucial to achieve the lowest possible power consumption. <code>SPI.end()</code> plays a role here.</li>\n  <li><b>Dynamic Protocol Switching (Advanced):</b> In very advanced applications, you might use the same physical pins for different communication protocols at different times (e.g., SPI then I2C, if pin overlap allows). In such cases, explicitly ending one protocol before beginning another on shared pins is essential to avoid conflicts.</li>\n  <li><b>After Finishing with a Specific SPI Device:</b> If you have multiple SPI devices but only communicate with one at a time, and you're completely done with one before moving to another that perhaps needs different SPI settings or different physical pins (uncommon but possible with software SPI or more complex setups), <code>SPI.end()</code> ensures a clean break.</li>\n</ul>\n<div class=\"card\">Remember, it's about making deliberate choices about your Arduino's resources. <code>SPI.end()</code> gives you that precise control!</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "💻 Code Example: A Comprehensive SPI Exit & Pin Reclamation",
      "content": "<div class='card'>Let's put <code>SPI.end()</code> to the ultimate test! In this extended example, we'll demonstrate a full cycle: setting up SPI, performing a mock communication, then *ending* SPI, and finally, using one of the former SPI pins (Digital Pin 13, the SCK pin) to blink an LED. This visually confirms that the pin has indeed been liberated and can be repurposed!</div>\n<pre><code>#include &lt;SPI.h&gt;\n\n// Define the standard SPI pins for Arduino Uno\nconst int SS_PIN = 10;   // Slave Select (often used as output for device selection)\nconst int MOSI_PIN = 11; // Master Out, Slave In\nconst int MISO_PIN = 12; // Master In, Slave Out\nconst int SCK_PIN = 13;  // Serial Clock\n\n// We'll reuse the SCK_PIN (Digital Pin 13) for an LED after SPI.end()\nconst int LED_PIN = 13; // Connect an LED with a resistor here\n\nvoid setup() {\n  Serial.begin(9600); // Start serial communication for debugging\n  Serial.println(\"\\n--- SPI.end() Demonstration Starts ---\");\n\n  // 1. Initial setup for SPI communication\n  Serial.println(\"Configuring SS pin for SPI device selection...\");\n  pinMode(SS_PIN, OUTPUT);\n  digitalWrite(SS_PIN, HIGH); // Deselect the SPI device initially (active low)\n\n  Serial.println(\"Initializing SPI bus with SPI.begin()...\");\n  SPI.begin(); // This configures D11, D12, D13 for SPI\n  Serial.println(\"SPI bus is now active. Pins 11, 12, 13 are dedicated to SPI.\");\n  Serial.println(\"\\nSimulating SPI data transfer...\");\n\n  // 2. Simulate some critical SPI communication\n  // In a real scenario, this would involve selecting a device, transferring data,\n  // and deselecting the device.\n  digitalWrite(SS_PIN, LOW); // Select the SPI device\n  byte dataToSend = 0xAA; // A test byte\n  Serial.print(\"Sending data via SPI: 0x\");\n  Serial.println(dataToSend, HEX);\n  byte receivedData = SPI.transfer(dataToSend); // Perform the SPI transfer\n  Serial.print(\"Received data via SPI: 0x\");\n  Serial.println(receivedData, HEX); // Will be 0x00 if no slave, or actual data\n  digitalWrite(SS_PIN, HIGH); // Deselect the SPI device\n  Serial.println(\"SPI data transfer complete.\");\n  delay(2000); // Give time to observe serial output\n\n  // 3. Ending the SPI communication\n  Serial.println(\"\\nSPI communication finished. Calling SPI.end() to release pins...\");\n  SPI.end(); // This is the magic! It deinitializes the SPI hardware.\n  Serial.println(\"SPI.end() called. Pins 11, 12, 13 should now be free.\");\n  delay(1000); // Small delay for effect\n\n  // 4. Repurposing a former SPI pin (SCK_PIN / Digital Pin 13) for general I/O\n  Serial.println(\"\\nNow repurposing Digital Pin 13 (former SCK) to blink an LED.\");\n  Serial.println(\"If the LED blinks, SPI.end() worked!\");\n  pinMode(LED_PIN, OUTPUT); // Configure D13 as an output for the LED\n}\n\nvoid loop() {\n  // 5. Blinking the LED on the repurposed pin\n  digitalWrite(LED_PIN, HIGH); // Turn LED on\n  delay(500); // Wait for 500 milliseconds\n  digitalWrite(LED_PIN, LOW); // Turn LED off\n  delay(500); // Wait for 500 milliseconds\n}\n</code></pre>\n<div class='card'><b>What to Observe:</b> If you wire an LED (with a current-limiting resistor, e.g., 220 Ohm) to Digital Pin 13 and Ground, you should first see the serial output indicating SPI activity. After a brief pause, you'll see messages about `SPI.end()` being called, and then the LED connected to Pin 13 will start blinking! This vividly demonstrates how `SPI.end()` successfully liberates the SPI pins, allowing them to be used for completely different purposes. It's the ultimate proof that your cleanup crew worked its magic!</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "📺 YouTube Video: Visualizing SPI Deinitialization & Pin Reclamation",
      "content": "<div class='card'>Sometimes, seeing is believing! This video will provide an insightful visual demonstration of the entire lifecycle of SPI pins. You'll see:\n<ul>\n  <li>An oscilloscope view of SCK, MOSI, and MISO signals when SPI is active.</li>\n  <li>The moment `SPI.end()` is called, showing the signals going idle.</li>\n  <li>A practical example of reconfiguring a former SPI pin (like SCK/D13) to blink an LED, proving its liberation.</li>\n  <li>Possibly, a simple power meter showing subtle power consumption changes before and after `SPI.end()` in a battery-powered setup.</li>\n</ul>\nThis deep dive will solidify your understanding of why and how `SPI.end()` is so effective!</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/your_spi_end_visualization_video_link_here' title='Arduino SPI.end() Explained: Pin Reclamation & Resource Management' frameborder='0' allowfullscreen></iframe>\n<div class='card'>**Note**: The video link above is a placeholder. To get the most out of this lesson, search YouTube for terms like 'Arduino SPI deinitialization', 'reclaim SPI pins Arduino', 'Arduino power saving SPI', or 'oscilloscope SPI end' to find a relevant, detailed video that visually covers these concepts. Look for videos that show hardware interaction and signal analysis!</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎮 Mini-Game: The Pin Reassignment Challenge - A Digital Cleanup!",
      "content": "<div class='card'><b>Game: The Pin Reassignment Challenge!</b> Your mission, should you choose to accept it, is to successfully free up SPI pins and reassign them to new tasks after a critical SPI communication. Show off your resource management skills!</div>\n<div id='pinReassignmentGame' style='text-align: center; margin-top: 20px;'>\n  <div id='boardGraphic' style='margin-bottom: 20px;'>\n    <img src='https://via.placeholder.com/400x200?text=Arduino+Board+Graphic' alt='Arduino Board' style='width: 400px; height: 200px; border: 1px solid #ccc;'>\n    <div style='position: relative; top: -150px;'>\n      <span id='mosiPin' class='pin-status' style='left: 100px;'>MOSI (Locked)</span>\n      <span id='misoPin' class='pin-status' style='left: 180px;'>MISO (Locked)</span>\n      <span id='sckPin' class='pin-status' style='left: 260px;'>SCK (Locked)</span>\n    </div>\n  </div>\n  \n  <div class='card' style='padding: 10px; margin-bottom: 15px;'>\n    <p><b>Current Status:</b> SPI communication just finished. Pins 11, 12, 13 are still held by the SPI module.</p>\n    <p><b>Your Task:</b> Liberate these pins so Pin 13 can blink an LED!</p>\n  </div>\n\n  <button class='gaming-btn' onclick='callSPIEnd()'>Call SPI.end()</button>\n  <button class='gaming-btn' onclick='tryLED()'>Try Blinking LED on Pin 13</button>\n  <button class='gaming-btn' onclick='resetReassignmentGame()' style='margin-left: 10px;'>Reset Challenge</button>\n  \n  <p id='gameReassignmentResult' style='font-weight: bold; margin-top: 15px;'></p>\n</div>\n\n<style>\n  .pin-status {\n    background-color: #ffcccc; /* Red for locked */\n    border: 1px solid #cc0000;\n    padding: 5px 10px;\n    border-radius: 5px;\n    position: absolute;\n    top: 50px; /* Adjust based on graphic */\n    transform: translateX(-50%);\n    font-size: 0.9em;\n    font-weight: bold;\n  }\n</style>\n\n<script>\n  let spiEnded = false;\n  const mosiPin = document.getElementById('mosiPin');\n  const misoPin = document.getElementById('misoPin');\n  const sckPin = document.getElementById('sckPin');\n  const gameResult = document.getElementById('gameReassignmentResult');\n\n  function updatePinStatus() {\n    const pins = [mosiPin, misoPin, sckPin];\n    pins.forEach(pin => {\n      if (spiEnded) {\n        pin.style.backgroundColor = '#ccffcc'; /* Green for free */\n        pin.style.borderColor = '#00cc00';\n        pin.textContent = pin.textContent.replace('(Locked)', '(Free!)');\n      } else {\n        pin.style.backgroundColor = '#ffcccc';\n        pin.style.borderColor = '#cc0000';\n        pin.textContent = pin.textContent.replace('(Free!)', '(Locked)');\n      }\n    });\n  }\n\n  function callSPIEnd() {\n    if (!spiEnded) {\n      spiEnded = true;\n      gameResult.style.color = 'blue';\n      gameResult.textContent = 'SPI.end() called! Pins should now be liberated.';\n      updatePinStatus();\n    } else {\n      gameResult.style.color = 'orange';\n      gameResult.textContent = 'SPI.end() already called. Pins are already free!';\n    }\n  }\n\n  function tryLED() {\n    if (spiEnded) {\n      gameResult.style.color = 'green';\n      gameResult.textContent = 'SUCCESS! Pin 13 is now blinking an LED. You correctly freed the pins!';\n      sckPin.textContent = 'SCK (LED Blinking!)'; // Specific visual feedback\n      sckPin.style.backgroundColor = '#aaffaa';\n    } else {\n      gameResult.style.color = 'red';\n      gameResult.textContent = 'FAILURE! Pin 13 is still locked by SPI. Call SPI.end() first!';\n    }\n  }\n\n  function resetReassignmentGame() {\n    spiEnded = false;\n    gameResult.textContent = '';\n    gameResult.style.color = '#333';\n    mosiPin.textContent = 'MOSI (Locked)';\n    misoPin.textContent = 'MISO (Locked)';\n    sckPin.textContent = 'SCK (Locked)';\n    updatePinStatus();\n  }\n\n  // Initialize game\n  resetReassignmentGame();\n</script>\n<div class='card'>This interactive challenge simulates the vital role of <code>SPI.end()</code>. Only by properly 'ending' the SPI session can you reclaim those valuable pins for new, exciting functions! Master this, and you're a true resource management pro!</div>",
      "image": "https://via.placeholder.com/400x200?text=Arduino+Board+Graphic",
      "audio": ""
    }
  ]
},{
  "title": "SPI.setDataMode() — Mastering the Communication Handshake",
  "lessons": [
    {
      "title": "📖 The Secret Language: CPOL, CPHA, and Data Modes Explained",
      "content": "<div class=\"card\">Welcome back, intrepid explorer! You've learned how to start SPI communication and even how to control its speed. But there's another crucial piece of the puzzle that ensures your Arduino and its SPI buddy (the slave device) truly understand each other: the Data Mode. This is where <code>SPI.setDataMode()</code> comes into play!</div><button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>\n\n<div class=\"card\">Think of SPI communication like a secret handshake. For the handshake to work, both sides need to know *exactly* when to start and stop, and what position their hands should be in. In SPI, this 'handshake' is defined by two fundamental concepts: <b>Clock Polarity (CPOL)</b> and <b>Clock Phase (CPHA)</b>. These two settings combine to create the four different SPI Data Modes.</div><button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>\n\n<div class=\"card\"><h3>🕰️ Clock Polarity (CPOL): What's the Clock's 'Resting State'?</h3>\nCPOL determines the idle state of the clock signal (SCK pin) when no data is being transferred. Imagine the clock line before and after any data bits are sent.</div>\n<ul>\n  <li><b>CPOL = 0 (Clock Polarity Zero)</b>: The SCK pin is LOW when idle. It 'rests' at 0 volts. When data transfer begins, the clock line will go HIGH from this LOW idle state.</li>\n  <li><b>CPOL = 1 (Clock Polarity One)</b>: The SCK pin is HIGH when idle. It 'rests' at the supply voltage. When data transfer begins, the clock line will go LOW from this HIGH idle state.</li>\n</ul>\n<div class=\"card\">It's like deciding if your conversation always starts with a low hum or a high-pitched tone – both are valid, but you both need to agree!</div><button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>\n\n<div class=\"card\"><h3>⏱️ Clock Phase (CPHA): When Do We Read the Data?</h3>\nCPHA determines *when* the data bits (on MOSI and MISO) are sampled (read) relative to the clock's edges. A clock signal has two edges: a 'leading edge' (transition from idle to active, e.g., LOW to HIGH if CPOL=0) and a 'trailing edge' (transition from active to idle, e.g., HIGH to LOW if CPOL=0).</div>\n<ul>\n  <li><b>CPHA = 0 (Clock Phase Zero)</b>: Data is sampled on the <b>first</b> clock edge of a cycle. If CPOL=0, this means the rising edge. If CPOL=1, this means the falling edge.</li>\n  <li><b>CPHA = 1 (Clock Phase One)</b>: Data is sampled on the <b>second</b> clock edge of a cycle. If CPOL=0, this means the falling edge. If CPOL=1, this means the rising edge.</li>\n</ul>\n<div class=\"card\">Think of it as choosing whether you listen to someone's words at the very beginning of their breath or at the end of it. The timing has to be precise!</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "📖 Diving Deeper: The Four SPI Modes (0, 1, 2, 3)",
      "content": "<div class=\"card\">By combining CPOL and CPHA, we get the four standard SPI Data Modes. Your Arduino and the SPI slave device *must* agree on the same mode for successful communication. If they don't, it's like two people trying to dance different styles to the same music – it just won't work!</div><button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>\n\n<div class=\"card\"><h4>Mode 0: SPI_MODE0 (CPOL=0, CPHA=0)</h4>\n<ul>\n  <li><b>Clock Idle State (CPOL=0)</b>: SCK is LOW when idle.</li>\n  <li><b>Data Sampled (CPHA=0)</b>: Data is sampled on the <b>leading (first) edge</b> of the clock pulse (i.e., the rising edge).</li>\n  <li><b>Data Changed</b>: Data changes on the trailing (second) edge.</li>\n  <li><b>Analogy</b>: The clock is calm (low) and when it wakes up (rises), you immediately read the data.</li>\n</ul></div><button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>\n\n<div class=\"card\"><h4>Mode 1: SPI_MODE1 (CPOL=0, CPHA=1)</h4>\n<ul>\n  <li><b>Clock Idle State (CPOL=0)</b>: SCK is LOW when idle.</li>\n  <li><b>Data Sampled (CPHA=1)</b>: Data is sampled on the <b>trailing (second) edge</b> of the clock pulse (i.e., the falling edge).</li>\n  <li><b>Data Changed</b>: Data changes on the leading (first) edge.</li>\n  <li><b>Analogy</b>: The clock is calm (low), data appears when it wakes up (rises), but you wait until it goes back to sleep (falls) to read it.</li>\n</ul></div><button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>\n\n<div class=\"card\"><h4>Mode 2: SPI_MODE2 (CPOL=1, CPHA=0)</h4>\n<ul>\n  <li><b>Clock Idle State (CPOL=1)</b>: SCK is HIGH when idle.</li>\n  <li><b>Data Sampled (CPHA=0)</b>: Data is sampled on the <b>leading (first) edge</b> of the clock pulse (i.e., the falling edge).</li>\n  <li><b>Data Changed</b>: Data changes on the trailing (second) edge.</li>\n  <li><b>Analogy</b>: The clock is energetic (high) and when it calms down (falls), you immediately read the data.</li>\n</ul></div><button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>\n\n<div class=\"card\"><h4>Mode 3: SPI_MODE3 (CPOL=1, CPHA=1)</h4>\n<ul>\n  <li><b>Clock Idle State (CPOL=1)</b>: SCK is HIGH when idle.</li>\n  <li><b>Data Sampled (CPHA=1)</b>: Data is sampled on the <b>trailing (second) edge</b> of the clock pulse (i.e., the rising edge).</li>\n  <li><b>Data Changed</b>: Data changes on the leading (first) edge.</li>\n  <li><b>Analogy</b>: The clock is energetic (high), data appears when it calms down (falls), but you wait until it gets energetic again (rises) to read it.</li>\n</ul></div><button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>\n\n<div class=\"card\">The key takeaway? Always check the datasheet of your SPI slave device! It will explicitly state which SPI mode (or combination of CPOL/CPHA) it expects. If you don't match it, your Arduino will be talking gibberish to your device!</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "💻 Code Example: Setting the SPI Mode",
      "content": "<div class='card'>Let's see how easy it is to set the SPI Data Mode using <code>SPI.setDataMode()</code>. You'll typically call this right after <code>SPI.begin()</code> in your <code>setup()</code> function.</div>\n<pre><code>#include &lt;SPI.h&gt;\n\nconst int CS_PIN = 10; // Chip Select pin for your SPI device\n\nvoid setup() {\n  Serial.begin(9600);\n  Serial.println(\"Starting SPI Data Mode experiments...\");\n\n  pinMode(CS_PIN, OUTPUT);\n  digitalWrite(CS_PIN, HIGH); // Deselect device initially\n\n  // Initialize SPI\n  SPI.begin();\n\n  // --- Experiment with different SPI modes ---\n\n  Serial.println(\"\\nSetting SPI Mode 0...\");\n  SPI.setDataMode(SPI_MODE0); // CPOL=0, CPHA=0\n  // ... Perform SPI communication for a device requiring Mode 0 ...\n  digitalWrite(CS_PIN, LOW);\n  byte receivedData0 = SPI.transfer(0x01);\n  digitalWrite(CS_PIN, HIGH);\n  Serial.print(\"Mode 0 Transfer Result: \"); Serial.println(receivedData0, HEX);\n  delay(1000);\n\n  Serial.println(\"\\nSetting SPI Mode 1...\");\n  SPI.setDataMode(SPI_MODE1); // CPOL=0, CPHA=1\n  // ... Perform SPI communication for a device requiring Mode 1 ...\n  digitalWrite(CS_PIN, LOW);\n  byte receivedData1 = SPI.transfer(0x02);\n  digitalWrite(CS_PIN, HIGH);\n  Serial.print(\"Mode 1 Transfer Result: \"); Serial.println(receivedData1, HEX);\n  delay(1000);\n\n  Serial.println(\"\\nSetting SPI Mode 2...\");\n  SPI.setDataMode(SPI_MODE2); // CPOL=1, CPHA=0\n  // ... Perform SPI communication for a device requiring Mode 2 ...\n  digitalWrite(CS_PIN, LOW);\n  byte receivedData2 = SPI.transfer(0x03);\n  digitalWrite(CS_PIN, HIGH);\n  Serial.print(\"Mode 2 Transfer Result: \"); Serial.println(receivedData2, HEX);\n  delay(1000);\n\n  Serial.println(\"\\nSetting SPI Mode 3...\");\n  SPI.setDataMode(SPI_MODE3); // CPOL=1, CPHA=1\n  // ... Perform SPI communication for a device requiring Mode 3 ...\n  digitalWrite(CS_PIN, LOW);\n  byte receivedData3 = SPI.transfer(0x04);\n  digitalWrite(CS_PIN, HIGH);\n  Serial.print(\"Mode 3 Transfer Result: \"); Serial.println(receivedData3, HEX);\n  delay(1000);\n\n  Serial.println(\"\\nSPI Data Mode experiments complete! Remember to match your device's mode.\");\n  SPI.end();\n}\n\nvoid loop() {\n  // Nothing to see here!\n}\n</code></pre>\n<div class='card'>Notice how simple it is to switch modes! However, in a real project, you would typically determine the correct mode from your device's datasheet and set it once. This example just shows how you can programmatically change it.</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "📺 YouTube Video: Visualizing SPI Modes (CPOL & CPHA)",
      "content": "<div class='card'>Understanding CPOL and CPHA can be tricky without seeing it in action. This video will give you a fantastic visual tour of how the clock polarity and phase affect the data sampling process across all four SPI modes. It's like watching the SPI handshake unfold in slow motion!</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/your_spi_modes_cpol_cpha_video_link_here' title='SPI Modes Explained: CPOL & CPHA Visualized' frameborder='0' allowfullscreen></iframe>\n<div class='card'>**Note**: The video link above is a placeholder. You'd replace `your_spi_modes_cpol_cpha_video_link_here` with an actual relevant YouTube video that clearly explains SPI modes, CPOL, and CPHA with animations or oscilloscope readings. Search for terms like 'SPI CPOL CPHA explained', 'four SPI modes', or 'Arduino SPI tutorial modes' to find a good fit!</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎮 Mini-Game: The Mode Matcher Challenge",
      "content": "<div class='card'><b>Game: The Mode Matcher Challenge!</b> Your mission is to select the correct SPI mode based on a given 'device requirement' diagram or description. Match CPOL and CPHA to win!</div>\n<div id='modeMatcherGame' style='text-align: center; margin-top: 20px;'>\n  <div id='modeDescription' style='font-size: 1.1em; margin-bottom: 15px; background-color: #f0f0f0; padding: 15px; border-radius: 8px;'>\n    <p><b>Device Requirement:</b></p>\n    <p>Clock is <b>HIGH when idle</b>. Data is sampled on the <b>first falling edge</b>.</p>\n  </div>\n  \n  <label for='spiModeSelect'>Select the SPI Mode:</label>\n  <select id='spiModeSelect' onchange='updateModeDescription()'>\n    <option value='-1'>Select...</option>\n    <option value='0'>SPI_MODE0 (CPOL=0, CPHA=0)</option>\n    <option value='1'>SPI_MODE1 (CPOL=0, CPHA=1)</option>\n    <option value='2'>SPI_MODE2 (CPOL=1, CPHA=0)</option>\n    <option value='3'>SPI_MODE3 (CPOL=1, CPHA=1)</option>\n  </select>\n  <button class='gaming-btn' onclick='checkModeMatch()' style='margin-left: 10px;'>Check Answer</button>\n  <button class='gaming-btn' onclick='generateNewModeChallenge()' style='margin-left: 10px;'>New Challenge</button>\n  <p id='gameModeResult' style='font-weight: bold; margin-top: 15px;'></p>\n</div>\n\n<script>\n  const challenges = [\n    { description: 'Clock is <b>LOW when idle</b>. Data is sampled on the <b>first rising edge</b>.', correctMode: 0 },\n    { description: 'Clock is <b>LOW when idle</b>. Data is sampled on the <b>first falling edge</b>.', correctMode: 1 },\n    { description: 'Clock is <b>HIGH when idle</b>. Data is sampled on the <b>first falling edge</b>.', correctMode: 2 },\n    { description: 'Clock is <b>HIGH when idle</b>. Data is sampled on the <b>first rising edge</b>.', correctMode: 3 }\n  ];\n  let currentChallenge = {};\n\n  function generateNewModeChallenge() {\n    currentChallenge = challenges[Math.floor(Math.random() * challenges.length)];\n    document.getElementById('modeDescription').innerHTML = '<p><b>Device Requirement:</b></p>' + currentChallenge.description;\n    document.getElementById('spiModeSelect').value = '-1';\n    document.getElementById('gameModeResult').textContent = '';\n    document.getElementById('gameModeResult').style.color = '#333';\n  }\n\n  function checkModeMatch() {\n    const selectedMode = parseInt(document.getElementById('spiModeSelect').value);\n    if (selectedMode === -1) {\n      document.getElementById('gameModeResult').style.color = 'orange';\n      document.getElementById('gameModeResult').textContent = 'Please select a mode!';\n      return;\n    }\n\n    if (selectedMode === currentChallenge.correctMode) {\n      document.getElementById('gameModeResult').style.color = 'green';\n      document.getElementById('gameModeResult').textContent = 'Excellent! You matched the mode perfectly!';\n    } else {\n      document.getElementById('gameModeResult').style.color = 'red';\n      document.getElementById('gameModeResult').textContent = 'Not quite! Review CPOL and CPHA for this combination. Try again!';\n    }\n  }\n\n  // Initialize game\n  generateNewModeChallenge();\n</script>\n<div class='card'>This game helps you internalize the relationship between CPOL, CPHA, and the SPI Data Modes. Practice makes perfect when it comes to matching your Arduino's SPI settings with your device's requirements!</div>",
      "image": "",
      "audio": ""
    }
  ]
},{
  "title": "SPI.usingInterrupt() — Interrupt Safety for Smooth SPI",
  "lessons": [
    {
      "title": "📖 The Uninvited Guest: Understanding Interrupt Conflicts",
      "content": "<div class=\"card\">Hey there, future embedded systems guru! We've explored how to get your Arduino chatting smoothly using SPI – setting the bit order, clock speed, and data mode. But what happens if another event suddenly demands your Arduino's attention right in the middle of a delicate SPI conversation? We're talking about <b>Interrupts</b>!</div><button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>\n\n<div class=\"card\">Remember interrupts? They're like an urgent doorbell ringing – your Arduino immediately stops what it's doing to answer it. This is super useful for reacting quickly to external events (like a button press or a sensor detecting something). But when you're in the middle of sending or receiving data over SPI, an interrupt can be like an uninvited guest crashing your party and potentially messing up the data!</div><button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>\n\n<div class=\"card\"><h3>What is SPI.usingInterrupt()?</h3>\n<code>SPI.usingInterrupt()</code> is a special function that tells the SPI library: 'Hey, I'm using *this specific interrupt pin* in my sketch.' By informing the SPI library, it can take precautions to prevent conflicts during critical SPI transactions. It's like putting a 'Do Not Disturb' sign on the SPI conversation, but only when it really matters.</div><button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>\n\n<div class=\"card\"><b>Why it matters:</b> Imagine you're sending a byte of data over SPI, bit by bit. If an interrupt fires and takes control of the CPU in the middle of that byte, the SPI hardware might get confused, leading to corrupted data or incomplete transfers. <code>SPI.usingInterrupt()</code> helps the SPI library ensure that its operations are 'atomic' – meaning they complete without interruption – especially if the library itself needs to temporarily disable specific interrupts during its work. It's all about keeping your data safe and sound!</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "📖 When to Use It: Guarding Your SPI Data",
      "content": "<div class=\"card\">Now that you know *what* it is, let's talk about *when* and *how* to use <code>SPI.usingInterrupt()</code>. This function is typically called in your <code>setup()</code> function, after you've initialized SPI but before you start performing critical SPI transfers that might be affected by interrupts.</div><button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>\n\n<div class=\"card\"><h3>How it Works Internally (Simplified)</h3>\nWhen you call <code>SPI.usingInterrupt(interruptNumber)</code>, the SPI library essentially registers that interrupt. Then, when a critical SPI transaction (like `SPI.transfer()`) is about to happen, the library might temporarily disable *that specific interrupt* (or all interrupts for a very brief moment) to ensure the SPI operation completes without interference. Once the SPI operation is done, the interrupt is re-enabled. This ensures that the interrupt still fires, but not in the middle of a sensitive data transfer.</div><button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>\n\n<div class=\"card\"><h3>Common Scenario: SPI and External Interrupts</h3>\nLet's say you have an SPI sensor that you're constantly reading data from, AND you have a button connected to an interrupt pin (e.g., Digital Pin 2 on an Uno, which is interrupt 0). If the button is pressed while you're in the middle of an `SPI.transfer()`, that interrupt could potentially cause issues. By using <code>SPI.usingInterrupt(0)</code> (for Digital Pin 2), you're telling the SPI library to be extra careful when dealing with Interrupt 0.</div><button class=\"gaming-btn\" onclick=\"revealNextCard(this)\">Next Step</button>\n\n<div class=\"card\">It's less about *you* disabling interrupts manually (though `noInterrupts()` and `interrupts()` are still your friends for general critical sections) and more about letting the SPI library intelligently manage its atomic operations around known interrupts. Always check if your specific SPI library or the device's requirements suggest using this function.</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "💻 Code Example: SPI with Interrupt Awareness",
      "content": "<div class='card'>Let's craft an example where an external interrupt might occur. We'll use <code>SPI.usingInterrupt()</code> to let the SPI library know about it.</div>\n<pre><code>#include &lt;SPI.h&gt;\n\n// Define the interrupt pin. On Arduino Uno, D2 is Interrupt 0.\nconst int INTERRUPT_PIN = 2;\nconst int CS_PIN = 10; // Chip Select pin for your SPI device\n\nvolatile bool buttonPressed = false; // Flag to indicate button press\n\nvoid myISR() {\n  // This function runs when the interrupt fires.\n  buttonPressed = true;\n  // Serial.println(\"Button pressed via interrupt!\"); // Avoid Serial in ISR for real apps!\n}\n\nvoid setup() {\n  Serial.begin(9600);\n  Serial.println(\"SPI and Interrupt Management Demo...\");\n\n  pinMode(CS_PIN, OUTPUT);\n  digitalWrite(CS_PIN, HIGH); // Deselect device\n\n  // Initialize SPI\n  SPI.begin();\n\n  // Tell the SPI library that we are using Interrupt 0 (connected to D2).\n  // This helps prevent conflicts during SPI transfers.\n  SPI.usingInterrupt(digitalPinToInterrupt(INTERRUPT_PIN));\n  Serial.println(\"SPI library is now aware of Interrupt on D2.\");\n\n  // Attach the interrupt service routine (ISR) to the pin.\n  attachInterrupt(digitalPinToInterrupt(INTERRUPT_PIN), myISR, FALLING);\n  Serial.println(\"Interrupt attached to Digital Pin 2.\");\n\n  Serial.println(\"\\nReady for SPI transfers. Press button on D2.\");\n}\n\nvoid loop() {\n  // Simulate ongoing SPI communication\n  digitalWrite(CS_PIN, LOW);\n  byte data = SPI.transfer(0x55); // Critical SPI transfer\n  digitalWrite(CS_PIN, HIGH);\n  // Serial.print(\"Transferred: 0x55, Received: \");\n  // Serial.println(data, HEX);\n  delay(200); // Simulate some work\n\n  if (buttonPressed) {\n    Serial.println(\"\\n--- Button event detected! ---\");\n    // In a real application, you'd handle the button press here.\n    buttonPressed = false; // Reset the flag\n  }\n}\n</code></pre>\n<div class='card'>In this example, <code>SPI.usingInterrupt(digitalPinToInterrupt(INTERRUPT_PIN));</code> is the key line. It makes the SPI library 'aware' of the interrupt on Digital Pin 2. While not always strictly necessary for simple cases, it's good practice for robust applications where data integrity during SPI transfers is paramount, especially when multiple interrupts are involved.</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "📺 YouTube Video: Interrupts and Communication Protocols",
      "content": "<div class='card'>Want to see a visual breakdown of how interrupts can affect time-sensitive communication protocols like SPI, and strategies to manage these interactions? This video will delve into ensuring data integrity when interrupts and serial communication collide. It's essential viewing for robust embedded programming!</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/your_interrupt_management_video_link_here' title='Managing Interrupts with SPI Communication' frameborder='0' allowfullscreen></iframe>\n<div class='card'>**Note**: The video link above is a placeholder. You'd replace `your_interrupt_management_video_link_here` with an actual relevant YouTube video that explains interrupt handling in the context of communication protocols (like SPI/I2C), race conditions, or atomic operations in microcontrollers. Search for terms like 'Arduino interrupts SPI', 'microcontroller atomic operations', or 'interrupt safe communication' to find a good fit!</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎮 Mini-Game: The Data Defender",
      "content": "<div class='card'><b>Game: The Data Defender!</b> Your mission is to ensure SPI data bytes are transferred safely, even when 'interrupts' try to sneak in!</div>\n<div id='dataDefenderGame' style='text-align: center; margin-top: 20px;'>\n  <div id='spiStatus' style='font-size: 1.2em; margin-bottom: 10px; color: blue;'>SPI Status: IDLE</div>\n  <div id='interruptStatus' style='font-size: 1.2em; margin-bottom: 20px; color: purple;'>Interrupt Status: OFF</div>\n  \n  <button class='gaming-btn' onclick='startSPITransfer()'>Start SPI Transfer</button>\n  <button class='gaming-btn' onclick='triggerInterrupt()' style='margin-left: 10px;'>Trigger Interrupt (Danger!)</button>\n  <button class='gaming-btn' onclick='toggleUsingInterrupt()' style='margin-left: 10px;'>Toggle SPI.usingInterrupt()</button>\n  \n  <p id='gameResultDefender' style='font-weight: bold; margin-top: 15px;'></p>\n</div>\n\n<script>\n  let spiActive = false;\n  let interruptActive = false;\n  let usingInterruptCalled = false;\n  let transferSuccess = 0;\n  let transferFail = 0;\n\n  const spiStatusDisplay = document.getElementById('spiStatus');\n  const interruptStatusDisplay = document.getElementById('interruptStatus');\n  const gameResultDisplay = document.getElementById('gameResultDefender');\n\n  function updateStatus() {\n    spiStatusDisplay.textContent = `SPI Status: ${spiActive ? 'TRANSFERRING...' : 'IDLE'}`;\n    interruptStatusDisplay.textContent = `Interrupt Status: ${interruptActive ? 'PENDING!' : 'OFF'} (usingInterrupt: ${usingInterruptCalled ? 'ON' : 'OFF'})`;\n    gameResultDisplay.textContent = `Successes: ${transferSuccess} / Failures: ${transferFail}`;\n  }\n\n  function startSPITransfer() {\n    if (spiActive) return;\n    spiActive = true;\n    updateStatus();\n\n    // Simulate SPI transfer duration\n    setTimeout(() => {\n      if (interruptActive && !usingInterruptCalled) {\n        gameResultDisplay.style.color = 'red';\n        gameResultDisplay.textContent = 'TRANSFER FAILED! Interrupt crashed the SPI. You needed SPI.usingInterrupt()!';\n        transferFail++;\n      } else {\n        gameResultDisplay.style.color = 'green';\n        gameResultDisplay.textContent = 'TRANSFER SUCCESS! Data sent safely!';\n        transferSuccess++;\n      }\n      spiActive = false;\n      interruptActive = false; // Interrupt is handled after transfer or prevented\n      updateStatus();\n    }, 1500); // SPI transfer takes 1.5 seconds\n  }\n\n  function triggerInterrupt() {\n    if (spiActive) {\n      interruptActive = true;\n      updateStatus();\n      gameResultDisplay.style.color = 'orange';\n      gameResultDisplay.textContent = 'Interrupt triggered! Will SPI be safe?';\n    } else {\n      gameResultDisplay.style.color = 'blue';\n      gameResultDisplay.textContent = 'No active SPI transfer to interrupt!';\n    }\n  }\n\n  function toggleUsingInterrupt() {\n    usingInterruptCalled = !usingInterruptCalled;\n    gameResultDisplay.style.color = 'black';\n    gameResultDisplay.textContent = `SPI.usingInterrupt() is now ${usingInterruptCalled ? 'active' : 'inactive'}.`;\n    updateStatus();\n  }\n\n  updateStatus();\n</script>\n<div class='card'>This game helps you visualize the delicate dance between SPI and interrupts. When <code>SPI.usingInterrupt()</code> is 'active', it helps your SPI transfers complete safely even if an interrupt tries to fire during the transfer. This is crucial for preventing data corruption in real-world applications where your Arduino is doing multiple things at once!</div>",
      "image": "",
      "audio": ""
    }
  ]
}


      ]
    },{
      title:"Print Functions — Communicating with the Serial Monitor",
      modules:[
          {
  "title": "write() — Raw Byte Sender",
  "lessons": [
    {
      "title": "💡 What is write() in Arduino?",
      "content": "<div class='card'><code>write()</code> is used to send raw binary data (not human-readable text) over the Serial port.</div><div class='card'>Unlike <code>print()</code> which sends characters as readable text (like '1', '2', '3'), <code>write()</code> sends the **actual byte values** — like 0x31, 0x32, 0x33.</div><div class='card'>Think of it like this: <br><b>print(65)</b> → sends '65'<br><b>write(65)</b> → sends 'A' (ASCII 65).</div><div class='card'><b>Real-world use case:</b> Sending commands to Bluetooth modules or sending data packets to other microcontrollers where bytes matter more than text.</div>"
    },
    {
      "title": "📘 Syntax of write()",
      "content": "<div class='card'><code>Serial.write(val)</code> — Sends a single byte (0–255)<br><code>Serial.write(str)</code> — Sends each byte of a string<br><code>Serial.write(buf, len)</code> — Sends a buffer of length 'len'</div><div class='card'>Examples:<br><code>Serial.write(65);</code> // Sends ASCII 'A'<br><code>Serial.write(\"Hello\");</code> // Sends 'H', 'e', 'l', 'l', 'o'<br><code>byte data[] = {0x7E, 0x01, 0x02};<br>Serial.write(data, 3);</code> // Sends 3 bytes</div>"
    },
    {
      "title": "🔌 Hardware & Pin Info",
      "content": "<div class='card'>The <code>write()</code> function uses the TX (Transmit) pin of the Arduino — usually **Pin 1** on Uno, Nano, and Mega.</div><div class='card'>You can connect it to the RX pin of another microcontroller, Bluetooth module (like HC-05), or USB-to-Serial adapter to see raw data.</div>"
    },
    {
      "title": "🌍 Real World Use Case",
      "content": "<div class='card'>You're making a robot that receives movement commands like 0x01 for forward, 0x02 for reverse. Sending these values via <code>write()</code> keeps communication simple and fast.</div><div class='card'>Example:<br><code>Serial.write(0x02);</code> // Send command to move backward</div>"
    },
    {
      "title": "🎥 Video Tutorial",
      "content": "<iframe width='100%' height='215' src='https://www.youtube.com/embed/pW_zWv1MfOw' title='Arduino Serial.write() Explained'></iframe>"
    },
    {
      "title": "🎮 Byte Blaster Game",
      "content": "<div class='card'>You're given an ASCII character, like 'B'. You must choose the correct <code>write()</code> value that would send it. (Answer: 66)</div><div class='card'><b>Q:</b> What does <code>Serial.write(0x48)</code> send?<br><b>A:</b> 'H'</div>"
    }
  ]
}
,{
  "title": "Serial.print() — Human-Readable Data via Serial",
  "lessons": [
    {
      "title": "📝 What is Serial.print()?",
      "content": "<div class='card'><code>Serial.print()</code> sends human-readable text from your Arduino to your computer's Serial Monitor.</div><div class='card'>It's mostly used for <b>debugging</b>, <b>displaying sensor values</b>, or communicating with humans through a terminal.</div><div class='card'>Unlike <code>Serial.write()</code>, this function <b>formats</b> your data before sending it.</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Serial_monitor.png",
      "audio": "https://cdn.pixabay.com/download/audio/2022/03/15/audio_1b8d04a34b.mp3?filename=typing-fast-92176.mp3"
    },
    {
      "title": "💡 Syntax",
      "content": "<div class='card'><code>Serial.print(val);</code> — Sends the value as readable text<br><code>Serial.print(val, format);</code> — Sends the value in a specified format (BIN, DEC, HEX, OCT)</div><div class='card'>Example:<br><code>Serial.print(255, BIN);</code> → Outputs <code>11111111</code></div>",
      "image": "https://www.arduino.cc/wiki/static/8c07ad1a1c2b91d11c2fefc8390c4ef7/23fa3/serial-print.jpg",
      "audio": "https://cdn.pixabay.com/download/audio/2022/03/15/audio_4b1e3f3be8.mp3?filename=digital-quick-sweep-92178.mp3"
    },
    {
      "title": "📍 Pin Usage + Real-World Use",
      "content": "<div class='card'><b>Pin used:</b> TX pin (Digital Pin 1 on Arduino UNO)<br><b>Board-to-PC connection:</b> via USB</div><div class='card'><b>Use case:</b> You want to display temperature from a DHT11 sensor. You use:<br><code>Serial.print(\"Temperature: \");<br>Serial.print(tempC);<br>Serial.print(\" C\");</code></div>",
      "image": "https://www.circuitbasics.com/wp-content/uploads/2015/12/How-to-Use-the-Arduino-Serial-Print-Function.png",
      "audio": "https://cdn.pixabay.com/download/audio/2023/03/09/audio_84f9e9a4a3.mp3?filename=soft-chime-notification-136689.mp3"
    },
    {
      "title": "🎮 Mini Game — Guess the Output",
      "content": "<div class='card'>What will this code print?<br><code>Serial.print(10, HEX);</code></div><div class='card'><b>Options:</b><br>A) 10<br>B) A<br>C) 0A<br><b>Correct: B) A</b> — Because 10 in decimal = A in hexadecimal</div><button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Arduino_Serial_Monitor.png",
      "audio": "https://cdn.pixabay.com/download/audio/2023/06/06/audio_9e78813c8e.mp3?filename=correct-163121.mp3"
    },
    {
      "title": "📺 YouTube — Serial.print() Demo",
      "content": "<div class='card'>Watch how to use <code>Serial.print()</code> in your projects effectively:</div><iframe width='100%' height='215' src='https://www.youtube.com/embed/5nsgd_5zv9c' frameborder='0' allowfullscreen></iframe>",
      "image": "https://i.ytimg.com/vi/5nsgd_5zv9c/hqdefault.jpg",
      "audio": "https://cdn.pixabay.com/download/audio/2022/03/15/audio_3dbd10a60e.mp3?filename=tech-interface-92175.mp3"
    }
  ]
}
,{
  "title": "Serial.println() — Printing with New Line",
  "lessons": [
    {
      "title": "🧾 What is Serial.println()?",
      "content": "<div class='card'><code>Serial.println()</code> works exactly like <code>Serial.print()</code> — but adds a new line <code>\\n</code> after the printed text or value.</div><div class='card'>Think of it like pressing Enter after writing something. Every call to <code>Serial.println()</code> starts on a fresh line in the Serial Monitor.</div>",
      "image": "https://i.stack.imgur.com/NMU0s.png",
      "audio": "https://cdn.pixabay.com/download/audio/2022/03/28/audio_92b871d61a.mp3?filename=message-pop-alert-13439.mp3"
    },
    {
      "title": "📜 Syntax of println()",
      "content": "<div class='card'><code>Serial.println(val);</code> — Prints the value followed by a newline<br><code>Serial.println(val, format);</code> — Prints with specific number format (e.g., BIN, HEX, DEC, etc.)</div><div class='card'>Example:<br><code>Serial.println(42);</code> → prints 42 and moves to the next line</div>",
      "image": "https://i.ytimg.com/vi/t4D9KjjZfKc/maxresdefault.jpg",
      "audio": "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c23304203e.mp3?filename=typing-clicking-92181.mp3"
    },
    {
      "title": "📍 Pin Usage & Where It's Used",
      "content": "<div class='card'><b>Pin used:</b> TX pin (Digital Pin 1 on Uno)<br><b>Data Direction:</b> Arduino → PC (Serial Monitor)</div><div class='card'><b>Use Case:</b> You want to print sensor readings neatly:<br><code>Serial.print(\"Humidity: \");<br>Serial.println(humidity);</code><br>This prints:<br><code>Humidity: 47.00</code> (and moves to the next line)</div>",
      "image": "https://lastminuteengineers.b-cdn.net/wp-content/uploads/arduino-serial-monitor-featured-image-LME.jpg",
      "audio": "https://cdn.pixabay.com/download/audio/2023/03/15/audio_cfcde01f99.mp3?filename=button-click-menu-140881.mp3"
    },
    {
      "title": "🎮 Mini Game — Predict the Output",
      "content": "<div class='card'>What does this code print?</div><pre><code>Serial.println(\"Hello\");\nSerial.print(\"World\");</code></pre><div class='card'><b>Correct Answer:</b><br>Hello<br>World</div><div class='card'><i>The first line ends with newline. The second line continues from there without one.</i></div><button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://i.pinimg.com/originals/68/62/03/686203f9b40801b32c7fa35cc6f2c485.png",
      "audio": "https://cdn.pixabay.com/download/audio/2022/10/26/audio_44530c8717.mp3?filename=game-correct-answer-116447.mp3"
    },
    {
      "title": "🎥 YouTube — println() vs print()",
      "content": "<div class='card'>This quick video shows how <code>print()</code> and <code>println()</code> behave differently on Serial Monitor:</div><iframe width='100%' height='215' src='https://www.youtube.com/embed/TvJuMeOm3f8' frameborder='0' allowfullscreen></iframe>",
      "image": "https://i.ytimg.com/vi/TvJuMeOm3f8/hqdefault.jpg",
      "audio": "https://cdn.pixabay.com/download/audio/2022/04/19/audio_f4f2e64e63.mp3?filename=interface-navigation-110563.mp3"
    }
  ]
}

      ]
    },{
      title:"Serial Communication — Function-by-Function Mastery",
      modules:[
        {
  "title": "🔌 if (Serial) — Serial Port Readiness Check",
  "lessons": [
    {
      "title": "🤔 What is if (Serial)?",
      "content": "<div class='card'>In Arduino, <code>if (Serial)</code> is a way to check if the Serial port is ready before you try to use it.</div>\n<div class='card'>This is especially useful when you're using boards like Leonardo, Micro, or other boards that handle USB communication differently. It ensures the USB serial connection is established before sending any data.</div>\n<div class='card'>Imagine talking into a walkie-talkie before the other person has turned theirs on — you’d be wasting your breath. <code>if (Serial)</code> avoids that in code.</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🔍 Syntax & Example",
      "content": "<div class='card'>Basic syntax looks like this:</div>\n<pre><code>void setup() {\n  Serial.begin(9600);\n  while (!Serial) {\n    ; // Wait for serial port to connect. Needed for native USB\n  }\n  Serial.println(\"Ready!\");\n}</code></pre>\n<div class='card'>This ensures that the Serial monitor is fully ready to receive data. Without it, the first few messages might get lost.</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎮 Mini Game — Port or Not?",
      "content": "<div class='card'>Can you identify when the serial port is ready?</div>\n<iframe height='300' style='width:100%' scrolling='no' title='Serial Port Game' src='https://jsfiddle.net/kaustubhlearn/serialreadygame/embed/' frameborder='no' allowtransparency='true' allowfullscreen='true'></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "📺 Video: Why wait for Serial?",
      "content": "<div class='card'>Watch this to understand the importance of waiting for the serial port:</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/zI6fJvK_eeA' title='Why use if(Serial) in Arduino?' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "📌 Real-World Use",
      "content": "<div class='card'>If you're building a data logger that communicates over USB, <code>if (Serial)</code> ensures your device doesn’t miss the first messages when the serial monitor opens.</div>\n<div class='card'>It's a best practice with USB boards like the Leonardo, Micro, or any SAMD-based Arduino.</div>",
      "image": "",
      "audio": ""
    }
  ]
}
,{
  "title": "📥 Serial.available() — Check How Much Data Is Waiting",
  "lessons": [
    {
      "title": "🧐 What is Serial.available()?",
      "content": "<div class='card'><code>Serial.available()</code> returns the number of bytes (characters) available to read from the serial buffer.</div>\n<div class='card'>Think of it like checking your mailbox: this function tells you how many letters (data) are waiting to be read.</div>\n<div class='card'>If there's something waiting, your Arduino can take action immediately!</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🧪 Syntax & Explanation",
      "content": "<div class='card'><code>Serial.available()</code> returns an <code>int</code>.</div>\n<pre><code>void loop() {\n  if (Serial.available() > 0) {\n    char incoming = Serial.read();\n    Serial.print(\"You typed: \");\n    Serial.println(incoming);\n  }\n}</code></pre>\n<div class='card'>This checks if something is waiting. If yes, it reads it and echoes it back.</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎮 Mini Game — Type & Echo",
      "content": "<div class='card'>Try simulating serial input — guess how many characters are waiting!</div>\n<iframe height='300' style='width:100%' scrolling='no' title='Serial.available() Game' src='https://jsfiddle.net/kaustubhlearn/serialavailable/embed/' frameborder='no' allowtransparency='true' allowfullscreen='true'></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "📺 Video: Reading Serial Data Properly",
      "content": "<div class='card'>Watch this quick visual explainer on how <code>Serial.available()</code> works and why it’s essential.</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/xRGSpixGzBM' title='Serial.available() Explained' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🔍 Real-World Example",
      "content": "<div class='card'>When making a password door lock with serial input, use <code>Serial.available()</code> to check if the user has typed enough characters before verifying the password.</div>\n<div class='card'>This avoids bugs from incomplete data reads.</div>",
      "image": "",
      "audio": ""
    }
  ]
}
,{
  "title": "📤 Serial.availableForWrite() — Can I Send Now?",
  "lessons": [
    {
      "title": "🤔 What's Serial.availableForWrite()?",
      "content": "<div class='card'><code>Serial.availableForWrite()</code> tells you how many bytes can be written to the serial output buffer *right now* without blocking the program.</div>\n<div class='card'>If you've ever shouted into a walkie-talkie while your friend is still talking — that's what sending data to a full buffer is like. This function prevents that!</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🧪 Syntax & Behavior",
      "content": "<div class='card'><b>Syntax:</b> <code>Serial.availableForWrite()</code></div>\n<div class='card'>Returns an <code>int</code> — how many bytes you can write *right now* before the buffer fills up.</div>\n<pre><code>if (Serial.availableForWrite() > 10) {\n  Serial.print(\"Ready to send big data block!\");\n}</code></pre>\n<div class='card'>If your print data is too big and the buffer is full, Arduino will <i>pause</i> until it can send more — causing delays.</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "📡 Real-World Example — Fast Serial Chat",
      "content": "<div class='card'>If you're building a chat between two Arduinos, and sending frequent messages, this function helps check if the buffer is ready.</div>\n<div class='card'>That way, you won't miss or delay data due to overload!</div>\n<pre><code>if (Serial.availableForWrite() > 0) {\n  Serial.write(nextByte);\n}</code></pre>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎮 Mini Game — Buffer Madness",
      "content": "<div class='card'>Simulate serial writing! Can you fill the buffer responsibly?</div>\n<iframe height='300' style='width:100%' scrolling='no' title='Buffer Game' src='https://jsfiddle.net/kaustubhlearn/serialwritebuffer/embed/' frameborder='no' allowtransparency='true' allowfullscreen='true'></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎥 YouTube: Serial Buffer Management",
      "content": "<div class='card'>Learn how to avoid Arduino freezing due to serial buffer overflow. A must-watch when building high-speed serial apps!</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/SKvaHGSFqMo' title='Avoid Serial Freezing' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🧠 Important Tip: Use It With Serial.print() Loops",
      "content": "<div class='card'>If you're inside a loop that prints lots of data, and the buffer fills up, your loop will block (pause) until space frees.</div>\n<div class='card'><code>Serial.availableForWrite()</code> avoids this. Only write when there's space.</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🔁 Summary — When Should You Use It?",
      "content": "<div class='card'>✅ When sending large amounts of data quickly</div>\n<div class='card'>✅ When you want your code to stay responsive</div>\n<div class='card'>✅ In Serial-based chat, debug loggers, or file transfers</div>",
      "image": "",
      "audio": ""
    }
  ]
}
,{
  "title": "🚀 Serial.begin() — Starting Your Serial Engine",
  "lessons": [
    {
      "title": "🔌 What is Serial.begin()?",
      "content": "<div class='card'><code>Serial.begin()</code> is the first step to enable Serial Communication between your Arduino and computer (or other devices).</div><div class='card'>It sets up the communication speed in bits per second (baud rate). If you forget this — <b>no serial output will show up!</b></div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "📘 Syntax & Usage",
      "content": "<div class='card'><b>Syntax:</b> <code>Serial.begin(baud_rate)</code></div><div class='card'>Common values: <code>9600</code>, <code>115200</code> — both must match the Serial Monitor!</div><pre><code>void setup() {\n  Serial.begin(9600); // Starts serial comm at 9600 bps\n}</code></pre>",
      "image": "",
      "audio": ""
    },
    {
      "title": "💡 Real-World Example — Sensor Debugging",
      "content": "<div class='card'>Say you're printing temperature values to Serial Monitor:</div><pre><code>void setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  float temp = analogRead(A0);\n  Serial.println(temp);\n  delay(1000);\n}</code></pre><div class='card'>Without <code>Serial.begin()</code>, nothing shows on Serial Monitor!</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎮 Mini Game — Pick the Right Baud",
      "content": "<div class='card'>Match the baud rate of your Arduino with the Serial Monitor:</div><iframe height='300' style='width:100%' scrolling='no' title='Baud Rate Game' src='https://jsfiddle.net/kaustubhlearn/baudrategame/embed/' frameborder='no' allowtransparency='true' allowfullscreen='true'></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎥 YouTube: Serial.begin() Explained",
      "content": "<div class='card'>Visual guide to how Serial.begin() works, baud rate sync, and why it’s critical.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/YqkZ4p2tr8E' title='Serial.begin() Tutorial' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "📡 What is Baud Rate?",
      "content": "<div class='card'>Baud rate = number of signal changes (bits) sent per second.</div><div class='card'>If you set <code>Serial.begin(9600)</code>, that means 9600 bits per second.</div><div class='card'>Mismatched baud rate = junk characters in Serial Monitor.</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🧠 Pin Usage",
      "content": "<div class='card'>On Arduino UNO: <code>TX → Pin 1</code>, <code>RX → Pin 0</code></div><div class='card'>You don’t usually wire these yourself unless using Bluetooth or another Serial device.</div>",
      "image": "",
      "audio": ""
    }
  ]
}
,{
  "title": "🛑 Serial.end() — Say Goodbye to Serial",
  "lessons": [
    {
      "title": "🧯 What is Serial.end()?",
      "content": "<div class='card'><code>Serial.end()</code> is used to <b>stop serial communication</b> with your Arduino board.</div><div class='card'>It <b>turns off</b> the serial port, releasing the pins (TX/RX) so they can be used as <b>normal I/O</b>.</div><div class='card'>This is useful when you want to repurpose Pin 0 or 1 after initial serial setup.</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "📘 Syntax & Return Type",
      "content": "<div class='card'><b>Syntax:</b> <code>Serial.end()</code></div><div class='card'>No parameters, and returns nothing.</div><div class='card'>Once called, all <code>Serial.print()</code> and <code>Serial.read()</code> will stop working.</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🌍 Real-World Use Case — Switching to Bluetooth",
      "content": "<div class='card'>Let’s say you're debugging via USB Serial, but later switch to <b>Bluetooth Serial (HC-05)</b> using Pin 0 & 1.</div><div class='card'>You’d use:</div><pre><code>Serial.end(); // Stop USB Serial\n// Now you can use TX/RX pins freely for Bluetooth</code></pre>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎮 Mini Game — Should I end it?",
      "content": "<div class='card'>Choose whether you should call <code>Serial.end()</code> in various situations. 🔄</div><iframe height='300' style='width:100%' scrolling='no' title='Serial.end() Game' src='https://jsfiddle.net/kaustubhlearn/serialendgame/embed/' frameborder='no' allowtransparency='true' allowfullscreen='true'></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "🎥 YouTube: Serial.end() Explained with Live Example",
      "content": "<div class='card'>Here’s a video showing what happens before and after using <code>Serial.end()</code> — including usage with HC-05 module.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/nFjsJAKY_dM' title='Serial.end() Arduino Tutorial' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
      "image": "",
      "audio": ""
    },
    {
      "title": "📍 Pin Usage — Reclaiming RX/TX",
      "content": "<div class='card'><code>Serial.end()</code> allows reuse of:</div><ul><li><code>TX → Pin 1</code></li><li><code>RX → Pin 0</code></li></ul><div class='card'>Caution: Avoid using these pins during Serial Monitor sessions!</div>",
      "image": "",
      "audio": ""
    },
    {
      "title": "💡 Pro Tip",
      "content": "<div class='card'>If you're using <code>Serial.end()</code>, always remember to <b>restart Serial</b> with <code>Serial.begin()</code> if needed again.</div><div class='card'>You can switch between USB and Bluetooth Serial using this method.</div>",
      "image": "",
      "audio": ""
    }
  ]
}
,{
  "title": "Serial.find() — Search-and-Capture Magic",
  "lessons": [
    {
      "title": "🔍 What is Serial.find()?",
      "content": "<div class='card'>The <code>Serial.find()</code> function is used to scan incoming serial data for a specific target string.</div>\n<div class='card'>If it finds the string, it returns <code>true</code>. If not, it times out and returns <code>false</code>.</div>\n<div class='card'>It’s useful when waiting for specific keywords from serial input — like a secret code or command!</div>",
      "image": "https://i.imgur.com/oQSTNjs.png",
      "audio": "https://example.com/audio/serial_find_intro.mp3"
    },
    {
      "title": "🧪 Syntax & Usage",
      "content": "<div class='card'><code>Serial.find(target)</code> — Searches incoming serial data for the target string.</div>\n<div class='card'><b>Example:</b><br><pre><code>if (Serial.find(\"HELLO\")) {\n  Serial.println(\"Found the magic word!\");\n}</code></pre></div>",
      "image": "https://i.imgur.com/ABC1234.png",
      "audio": "https://example.com/audio/serial_find_syntax.mp3"
    },
    {
      "title": "🧠 Real World Example — RFID Entry",
      "content": "<div class='card'>Imagine you're scanning RFID tags, and you want to trigger an action only if the incoming serial tag contains \"OPEN123\".</div>\n<div class='card'>Use <code>Serial.find(\"OPEN123\")</code> to check if it exists before unlocking a door!</div>",
      "image": "https://i.imgur.com/rfidExample.png",
      "audio": "https://example.com/audio/rfid_scenario.mp3"
    },
    {
      "title": "🎮 Mini Game: Find the Code!",
      "content": "<div class='card'>Guess the hidden word in the serial buffer!</div>\n<button class='gaming-btn' onclick='startFindGame()'>Start Game</button>\n<script>function startFindGame() {\n  const buffer = [\"DOG\", \"CAT\", \"OPEN123\", \"FISH\"];\n  const target = \"OPEN123\";\n  let found = buffer.includes(target);\n  alert(found ? \"You found the secret code!\" : \"Not this time. Try again!\");\n}</script>",
      "image": "https://i.imgur.com/miniGame.png",
      "audio": "https://example.com/audio/find_game_instructions.mp3"
    },
    {
      "title": "▶️ YouTube: Serial.find() Tutorial",
      "content": "<div class='card'>Watch this video to see <code>Serial.find()</code> in action with live serial terminal examples:</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/Uw0ckHEvG8Y' title='Serial.find Tutorial'></iframe>",
      "image": "https://i.imgur.com/youtubeThumbnail.png",
      "audio": "https://example.com/audio/video_explainer.mp3"
    }
  ]
}
,{
  "title": "Serial.findUntil() — Read Until Match or Timeout",
  "lessons": [
    {
      "title": "🔍 What is Serial.findUntil()?",
      "content": "<div class='card'><code>Serial.findUntil()</code> is a function that looks for a specific target string in incoming Serial data, but gives up if another string (the terminator) is found first.</div><div class='card'>It's a smarter, more cautious cousin of <code>find()</code>. It stops reading if either the <b>target</b> is found or the <b>terminator</b> shows up first.</div>"
    },
    {
      "title": "📚 Syntax",
      "content": "<div class='card'><code>Serial.findUntil(target, terminator)</code></div><div class='card'>- <b>target</b>: the string you want to find<br>- <b>terminator</b>: the string that stops the search if found first</div>"
    },
    {
      "title": "🧠 How does it behave?",
      "content": "<div class='card'>It reads incoming Serial bytes one by one. If it finds the <b>target</b>, it returns true. But if it hits the <b>terminator</b> first, it returns false.</div><div class='card'>This is super useful in communication protocols where you want to detect one message but safely exit if another pattern occurs.</div>"
    },
    {
      "title": "🌍 Real-World Use Case — Device Responder",
      "content": "<div class='card'>Imagine a sensor sends either <code>\"TEMP:25\"</code> or <code>\"ERR:Timeout\"</code>. You want to find \"TEMP\" but stop if \"ERR\" appears:</div><pre><code>if (Serial.findUntil(\"TEMP\", \"ERR\")) {\n  // Extract temperature\n} else {\n  Serial.println(\"Error received instead.\");\n}</code></pre>"
    },
    {
      "title": "🎮 Mini Game — Find or Fail!",
      "content": "<div class='card'>Which result will <code>Serial.findUntil(\"OK\", \"ERR\")</code> return if the input is: <code>--ERR--</code>?</div><ul><li>A. true</li><li>B. false</li><li>C. crash</li></ul><button class='gaming-btn' onclick='alert(\"Correct answer: B — It returns false because ERR came first.\")'>Check Answer</button>"
    },
    {
      "title": "📺 YouTube: Mastering Serial.findUntil()",
      "content": "<div class='card'>Check this awesome breakdown on using <code>findUntil()</code> with communication protocols:</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/1Ptavw3-n4c' frameborder='0' allowfullscreen></iframe>"
    }
  ]
}
,{
  "title": "Serial.flush() — Make Sure It Sends!",
  "lessons": [
    {
      "title": "🧼 What is Serial.flush()?",
      "content": "<div class='card'><code>Serial.flush()</code> is used to wait until all outgoing serial data is completely sent out through the TX pin.</div><div class='card'>Imagine writing a message and standing at the mailbox until the postman actually takes the letter — that’s what flush does!</div>"
    },
    {
      "title": "📚 Syntax",
      "content": "<div class='card'><code>Serial.flush();</code></div><div class='card'>No parameters. Just one clean command to wait for the sending process to finish.</div>"
    },
    {
      "title": "💡 When & Why to Use?",
      "content": "<div class='card'>You use <code>flush()</code> when you need to make sure the message has actually gone out — for example:</div><ul><li>📤 Before resetting the board</li><li>💤 Before going to sleep mode</li><li>🔌 Before disconnecting from the serial device</li></ul>"
    },
    {
      "title": "🌍 Real Example — Sensor Logger",
      "content": "<div class='card'>You're sending sensor data and then shutting down to save power:</div><pre><code>Serial.println(\"Data: 23.7 C\");\nSerial.flush();\n// Now shut down safely</code></pre><div class='card'>Without <code>flush()</code>, some bytes might be lost!</div>"
    },
    {
      "title": "🎮 Mini Quiz — When Should You Flush?",
      "content": "<div class='card'>You just printed a value using <code>Serial.println()</code>. When should you call <code>flush()</code>?</div><ul><li>A. Before <code>delay()</code></li><li>B. Before shutdown</li><li>C. After reading data</li></ul><button class='gaming-btn' onclick='alert(\"Correct Answer: B — Before shutdown or reset.\")'>Check Answer</button>"
    },
    {
      "title": "📺 YouTube — Serial.flush Explained",
      "content": "<div class='card'>See how <code>Serial.flush()</code> works behind the scenes:</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/tRgWZFuV8yU' frameborder='0' allowfullscreen></iframe>"
    }
  ]
}
,{
  "title": "Serial.parseFloat() — Extracting Floating-Point Data from Serial",
  "lessons": [
    {
      "title": "📖 What is Serial.parseFloat()?",
      "content": "<div class='card'><code>Serial.parseFloat()</code> reads the incoming serial data and returns the first valid <b>floating-point number</b> it finds.</div><div class='card'>It’s super useful when your Arduino receives sensor values or numerical input like <i>23.78</i>, <i>0.001</i>, or even <i>-12.4</i>.</div>"
    },
    {
      "title": "🧪 Syntax & Parameters",
      "content": "<div class='card'><code>Serial.parseFloat();</code></div><div class='card'>This waits for a float in the stream and returns it.</div><div class='card'><code>Serial.parseFloat(skipChar);</code> → Optional: Skips non-numeric chars like ',' or '$'</div>"
    },
    {
      "title": "💡 How It Works",
      "content": "<div class='card'>It skips any non-digit characters until it finds a float.</div><div class='card'>Then it reads the number, including any decimal point and exponent parts.</div><div class='card'>Timeout is controlled by <code>Serial.setTimeout()</code>.</div>"
    },
    {
      "title": "📦 Real-World Example — Reading a Sensor Value",
      "content": "<div class='card'>Let's say a sensor sends: <code>TEMP:23.78</code>. You can extract 23.78 using:</div><pre><code>float temp = Serial.parseFloat();\nSerial.print(\"Temp is: \");\nSerial.println(temp);</code></pre><div class='card'>This skips 'TEMP:' and directly grabs the float!</div>"
    },
    {
      "title": "🎮 Mini Game — Find That Float!",
      "content": "<div class='card'>Which of these strings will <code>parseFloat()</code> extract a number from?</div><ul><li>A. \"abc$24.51kg\" ✅</li><li>B. \"...45e-2...\" ✅</li><li>C. \"&*no numbers\" ❌</li></ul><button class='gaming-btn' onclick='alert(\"Correct: A and B will return valid floats. C has no digits.\")'>Check Answer</button>"
    },
    {
      "title": "📺 YouTube — parseFloat() In Action",
      "content": "<div class='card'>Watch this breakdown of how <code>Serial.parseFloat()</code> works in actual Arduino projects:</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/fDyT6yXtpm4' frameborder='0' allowfullscreen></iframe>"
    }
  ]
}
,{
  "title": "Serial.parseInt() — Extracting Integers from Serial Data",
  "lessons": [
    {
      "title": "📖 What is Serial.parseInt()?",
      "content": "<div class='card'><code>Serial.parseInt()</code> scans incoming serial data and extracts the first valid <b>integer</b> number it finds.</div><div class='card'>If your Arduino receives something like <code>ID:42</code>, this function helps grab <code>42</code> from it — skipping all the letters and junk before it!</div>"
    },
    {
      "title": "🧪 Syntax & Timeout",
      "content": "<div class='card'><code>Serial.parseInt();</code> — Extracts an integer (e.g., 0, 23, -78)</div><div class='card'><b>Timeout</b>: If no digit is found, it waits based on <code>Serial.setTimeout()</code> and then returns 0.</div><div class='card'>It stops reading at the first non-digit character (like space, comma, etc).</div>"
    },
    {
      "title": "📦 Real Example — Parsing Sensor ID",
      "content": "<div class='card'>Let's say your serial input is:</div><pre><code>\"SensorID:102 Temp:36.7\"</code></pre><div class='card'>Using <code>Serial.parseInt()</code> will extract <code>102</code> as the first full number found!</div><div class='card'>Useful when decoding mixed data streams.</div>"
    },
    {
      "title": "🧠 Behind the Scenes",
      "content": "<div class='card'>It skips non-digit characters until it finds a number (0-9 or -), then returns that integer.</div><div class='card'>It stops when it sees a non-digit character, like <code>,</code> or a space.</div><div class='card'>Great for parsing comma-separated data like <code>12, 48, 98</code>.</div>"
    },
    {
      "title": "🎮 Game — Grab the Integer!",
      "content": "<div class='card'>Which string would return <code>parseInt()</code> = 78?</div><ul><li>A. \"AB78\" ✅</li><li>B. \"*78C\" ✅</li><li>C. \"Value: 78kg\" ✅</li><li>D. \"xyz\" ❌</li></ul><button class='gaming-btn' onclick='alert(\"Correct! A, B, and C will yield 78. D has no digits.\")'>Check Answer</button>"
    },
    {
      "title": "📺 YouTube Tutorial — parseInt() in Real Projects",
      "content": "<div class='card'>Learn how to use <code>Serial.parseInt()</code> with serial data from Bluetooth, sensors, and remote controls!</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/GBghf97R9GM' title='parseInt Arduino' frameborder='0' allowfullscreen></iframe>"
    }
  ]
}
,{
  "title": "Serial.peek() — Glancing at the Next Byte Without Removing It",
  "lessons": [
    {
      "title": "🔍 What is Serial.peek()?",
      "content": "<div class='card'><code>Serial.peek()</code> lets you look at the <b>next incoming byte</b> in the serial buffer <b>without removing it</b>.</div><div class='card'>This is useful when you want to make decisions based on what’s coming next — but without actually reading it yet.</div>"
    },
    {
      "title": "📘 Syntax",
      "content": "<div class='card'><code>Serial.peek();</code> — Returns the next byte from the serial buffer.</div><div class='card'>Unlike <code>Serial.read()</code>, it does <b>not remove</b> the byte. The same byte will still be there when you call <code>read()</code>.</div>"
    },
    {
      "title": "🎯 Real-Life Use Case",
      "content": "<div class='card'>Suppose you're reading serial data that starts with a command character like <code>'#'</code>. You can <code>peek()</code> to check if it’s the right command type before continuing:</div><pre><code>if (Serial.peek() == '#') {\n  Serial.read(); // Now actually consume it\n  // Handle command\n}</code></pre>"
    },
    {
      "title": "🧠 Tip — Use with Serial.available()",
      "content": "<div class='card'>Always pair <code>Serial.peek()</code> with <code>Serial.available()</code> to make sure there’s actually data to look at.</div><pre><code>if (Serial.available() > 0) {\n  char nextChar = Serial.peek();\n  // ...</code></pre>"
    },
    {
      "title": "🎮 Quiz Time — Peek or Read?",
      "content": "<div class='card'>You’re checking for a <code>'$'</code> prefix before parsing. Which function should you use first?</div><ul><li>🅰️ Serial.read()</li><li>🅱️ Serial.peek()</li></ul><button class='gaming-btn' onclick='alert(\"Correct: Use Serial.peek() to inspect without consuming.\")'>Check Answer</button>"
    },
    {
      "title": "📺 YouTube — peek() vs read()",
      "content": "<div class='card'>Understand the subtle difference between <code>peek()</code> and <code>read()</code> with this video example in a command-based parser.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/_peek_serial_demo' title='Arduino peek() function' frameborder='0' allowfullscreen></iframe>"
    }
  ]
}
,{
  "title": "Serial.print() — Displaying Data on the Serial Monitor",
  "lessons": [
    {
      "title": "🖨️ What is Serial.print()?",
      "content": "<div class='card'><code>Serial.print()</code> sends data from your Arduino to your computer's Serial Monitor — useful for debugging, logging, or displaying sensor readings.</div><div class='card'>It’s like Arduino’s way of saying: 'Hey, here’s what I’m doing!'</div>"
    },
    {
      "title": "🧠 Syntax",
      "content": "<div class='card'><code>Serial.print(value);</code> — prints the value as text.</div><div class='card'><code>Serial.print(value, format);</code> — prints the value with a specific format like binary, decimal, hex, etc.</div><pre><code>Serial.print(123);          // 123\nSerial.print(123, BIN);    // 1111011\nSerial.print(3.14, 2);     // 3.14</code></pre>"
    },
    {
      "title": "🌍 Real-World Usage",
      "content": "<div class='card'>Let’s say you’re reading a temperature sensor. You can print the value to check if it’s too hot:</div><pre><code>float temp = analogRead(A0) * 0.488;\nSerial.print(\"Temperature: \");\nSerial.print(temp);\nSerial.println(\" °C\");</code></pre><div class='card'>This helps you verify readings while developing or debugging.</div>"
    },
    {
      "title": "📎 Pin Usage",
      "content": "<div class='card'><code>Serial.print()</code> communicates over the TX pin of your Arduino (usually pin 1 on Uno).</div><div class='card'>It requires <code>Serial.begin()</code> to be called first, and you must open the Serial Monitor in the IDE to view the output.</div>"
    },
    {
      "title": "🎯 Tip: Print Everything — Variables, Text, Math",
      "content": "<div class='card'>Use <code>Serial.print()</code> to print:</div><ul><li>📦 Variables: <code>Serial.print(sensorValue)</code></li><li>🧮 Math: <code>Serial.print(a + b)</code></li><li>📝 Strings: <code>Serial.print(\"Hello\")</code></li><li>🔢 Formats: <code>Serial.print(255, HEX)</code> → FF</ul>"
    },
    {
      "title": "🎮 Game: Print Guess",
      "content": "<div class='card'>What will this print?</div><pre><code>int a = 5;\nSerial.print(\"a = \");\nSerial.print(a);\nSerial.print(\" x 2 = \");\nSerial.print(a * 2);</code></pre><button class='gaming-btn' onclick='alert(\"a = 5 x 2 = 10\")'>Check Answer</button>"
    },
    {
      "title": "📺 YouTube — Serial.print() Demo",
      "content": "<div class='card'>Watch how Serial.print() helps you debug live sensor values and logic errors!</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/serial-print-demo' title='Serial Print Arduino Tutorial' frameborder='0' allowfullscreen></iframe>"
    }
  ]
}
,{
  "title": "Serial.println() — Printing with a New Line",
  "lessons": [
    {
      "title": "🔍 What is Serial.println()?",
      "content": "<div class='card'><code>Serial.println()</code> is just like <code>Serial.print()</code> — but it adds a newline after the data!</div><div class='card'>It makes each message appear on its own line in the Serial Monitor, which is especially helpful for reading data clearly.</div>"
    },
    {
      "title": "🧠 Syntax",
      "content": "<div class='card'><code>Serial.println(value);</code> → Prints the value followed by a new line (\\n).</div><div class='card'><code>Serial.println(value, format);</code> → Formats value (binary, decimal, etc.) and adds a new line.</div><pre><code>Serial.println(100);       // 100 + newline\nSerial.println(255, HEX);  // FF + newline</code></pre>"
    },
    {
      "title": "📌 Difference from Serial.print()",
      "content": "<div class='card'><b><code>Serial.print()</code></b> continues on the same line.</div><div class='card'><b><code>Serial.println()</code></b> moves to the next line after printing. It's more readable when printing multiple values or loops.</div><pre><code>Serial.print(\"Temp: \");\nSerial.println(temp);</code></pre>"
    },
    {
      "title": "🌍 Real-World Example — Looping Sensor Data",
      "content": "<div class='card'>Want each sensor reading on its own line? Use println() in a loop:</div><pre><code>void loop() {\n  int lightVal = analogRead(A0);\n  Serial.println(lightVal);\n  delay(500);\n}</code></pre><div class='card'>Each value appears on a fresh line — clean and readable!</div>"
    },
    {
      "title": "📎 Pin Usage",
      "content": "<div class='card'>Like <code>Serial.print()</code>, it uses the TX pin (usually pin 1) and requires <code>Serial.begin()</code>.</div><div class='card'>Use it only when your board is connected to a PC or a device that reads serial output.</div>"
    },
    {
      "title": "💡 Tip: Combine print() + println()",
      "content": "<div class='card'>Use both together for readable messages:</div><pre><code>Serial.print(\"Sensor reading: \");\nSerial.println(reading);</code></pre><div class='card'>This way, you can label your values while keeping output tidy.</div>"
    },
    {
      "title": "🎮 Game: Spot the Difference",
      "content": "<div class='card'>What’s the difference in output?</div><pre><code>Serial.print(\"Hello\");\nSerial.print(\"World\");</code></pre><pre><code>Serial.println(\"Hello\");\nSerial.println(\"World\");</code></pre><button class='gaming-btn' onclick='alert(\"The second one prints each word on a new line!\")'>Check Answer</button>"
    },
    {
      "title": "📺 YouTube: println() in Action",
      "content": "<div class='card'>See <code>Serial.println()</code> used in real sensor projects and learn why newlines matter.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/arduino-serial-println' title='Arduino println Tutorial' frameborder='0' allowfullscreen></iframe>"
    }
  ]
}
,{
  "title": "Serial.read() — Reading Incoming Serial Bytes",
  "lessons": [
    {
      "title": "📥 What is Serial.read()?",
      "content": "<div class='card'><code>Serial.read()</code> is used to read the next byte of incoming serial data.</div><div class='card'>It’s like checking your mailbox and picking up one letter at a time. If no data is available, it returns -1.</div>"
    },
    {
      "title": "🧠 Syntax & Return",
      "content": "<div class='card'><code>int data = Serial.read();</code></div><div class='card'>It returns an <b>int</b> between 0–255 (byte) if data is available, or <b>-1</b> if nothing to read.</div><div class='card'>Why int and not byte? Because <b>-1</b> is outside byte range and used as a signal of 'no data'.</div>"
    },
    {
      "title": "🌍 Real-World Use — Reading a Character",
      "content": "<div class='card'>Let’s say you send a character like <code>'A'</code> from your computer to Arduino.</div><div class='card'>You can use this to read and respond:</div><pre><code>if (Serial.available()) {\n  char input = Serial.read();\n  if (input == 'A') {\n    digitalWrite(LED_BUILTIN, HIGH);\n  }\n}</code></pre>"
    },
    {
      "title": "📎 Pin Usage",
      "content": "<div class='card'>Works through RX pin (usually pin 0). Requires <code>Serial.begin()</code> first!</div><div class='card'>This pin receives data from PC or other devices like Bluetooth modules or ESP boards.</div>"
    },
    {
      "title": "🧪 Example Sketch — Mirror Input",
      "content": "<div class='card'>Echo back anything typed in Serial Monitor:</div><pre><code>void loop() {\n  if (Serial.available()) {\n    char c = Serial.read();\n    Serial.print(\"You typed: \");\n    Serial.println(c);\n  }\n}</code></pre>"
    },
    {
      "title": "🕵️ Common Gotchas",
      "content": "<div class='card'>🔸 Always check <code>Serial.available()</code> before calling <code>Serial.read()</code> to avoid getting -1.</div><div class='card'>🔸 Reading one byte at a time means longer messages need loops or buffers!</div>"
    },
    {
      "title": "🎮 Game — Read or Not?",
      "content": "<div class='card'>You're receiving data on RX. What will this print?</div><pre><code>if (Serial.read() == -1) {\n  Serial.println(\"No data\");\n}</code></pre><ul><li>🔘 A. Always \"No data\"</li><li>🔘 B. Only when buffer is empty</li></ul><button class='gaming-btn' onclick='alert(\"Correct! B — only when buffer is empty\")'>Check Answer</button>"
    },
    {
      "title": "📺 YouTube: Serial.read() Explained",
      "content": "<div class='card'>This video shows how data arrives into the Arduino and how to capture it cleanly using <code>Serial.read()</code>.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/arduino-serial-read' title='Serial.read Tutorial' frameborder='0' allowfullscreen></iframe>"
    }
  ]
}
,{
  "title": "Serial.readBytes() — Bulk Data Collector",
  "lessons": [
    {
      "title": "📜 What is Serial.readBytes()?",
      "content": "<div class='card'><code>Serial.readBytes()</code> reads multiple bytes of data from the serial buffer and stores them in an array.</div><div class='card'>It waits until the specified number of bytes are read or a timeout occurs (default: 1000 ms).</div>"
    },
    {
      "title": "🧪 Syntax & Usage",
      "content": "<div class='card'><code>Serial.readBytes(buffer, length)</code></div><div class='card'>Reads <b>length</b> bytes and stores them in <b>buffer</b> (must be a char array).</div><div class='card'><b>Returns:</b> number of bytes placed in the buffer (may be less if timeout)</div><pre><code>char input[10];\nint bytesRead = Serial.readBytes(input, 10);</code></pre>"
    },
    {
      "title": "📎 Pin Usage",
      "content": "<div class='card'>Receives data through <b>RX pin</b> (Digital Pin 0 on Uno).</div><div class='card'>Useful with devices that stream data like GPS, Bluetooth, or another Arduino.</div>"
    },
    {
      "title": "🌍 Real-World Example — Reading GPS Message",
      "content": "<div class='card'>Let’s say your GPS sends a 64-byte message each second. You can grab the full message at once like this:</div><pre><code>char gpsData[64];\nif (Serial.available() >= 64) {\n  Serial.readBytes(gpsData, 64);\n  Serial.println(gpsData);\n}</code></pre>"
    },
    {
      "title": "🚨 Timeout Behavior",
      "content": "<div class='card'>If not enough data is available within timeout, <code>readBytes()</code> will stop early and return the number of bytes it actually received.</div><div class='card'>Timeout is set with <code>Serial.setTimeout(ms)</code></div>"
    },
    {
      "title": "⚠️ Caution — No Terminator",
      "content": "<div class='card'><code>readBytes()</code> doesn’t stop at a newline or any other character — it just waits for N bytes.</div><div class='card'>Use <code>readBytesUntil()</code> if you need a terminator character.</div>"
    },
    {
      "title": "🎮 Game: Buffer Master",
      "content": "<div class='card'>You want to read 20 bytes but only 10 are in buffer. What happens?</div><ul><li>🔘 A. It crashes</li><li>🔘 B. It waits until 20 arrive</li><li>🔘 C. It waits for timeout, then returns how many were available</li></ul><button class='gaming-btn' onclick='alert(\"Correct! C — It times out and gives what it got.\")'>Check Answer</button>"
    },
    {
      "title": "📺 YouTube: Serial.readBytes() in Action",
      "content": "<div class='card'>This video walks you through using <code>readBytes()</code> to get structured data from sensors and external modules.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/arduino-readbytes' title='Serial.readBytes Tutorial' frameborder='0' allowfullscreen></iframe>"
    }
  ]
}
,{
  "title": "Serial.readBytesUntil() — Read Until You Hit the Stop!",
  "lessons": [
    {
      "title": "🔍 What is Serial.readBytesUntil()?",
      "content": "<div class='card'><code>Serial.readBytesUntil()</code> reads characters from the serial buffer into a char array until either a terminator character is found OR the buffer length is full OR timeout is reached.</div><div class='card'>It's perfect when you're waiting for specific delimiters like <code>'\\n'</code> (newline) or <code>','</code>.</div>"
    },
    {
      "title": "🧪 Syntax & Parameters",
      "content": "<div class='card'><code>Serial.readBytesUntil(terminator, buffer, length)</code></div><ul><li><b>terminator</b>: the byte that tells when to stop reading (e.g. '\\n')</li><li><b>buffer</b>: the character array to store data</li><li><b>length</b>: maximum number of characters to read</li></ul><div class='card'><b>Returns</b>: the number of characters placed into the buffer.</div>"
    },
    {
      "title": "⚡ How it Works",
      "content": "<div class='card'>Let’s say you’re receiving: <code>Temp=24.5\n</code> from a sensor. You can extract it with:</div><pre><code>char data[20];\nint len = Serial.readBytesUntil('\\n', data, 20);\nSerial.println(data);</code></pre><div class='card'>It stops reading at <code>\\n</code>, or when 20 characters are read, or after timeout.</div>"
    },
    {
      "title": "📎 Pin Usage",
      "content": "<div class='card'>This function uses the RX pin (Pin 0 on Uno). It’s especially helpful when reading structured sensor data, CSV logs, or values with delimiters.</div>"
    },
    {
      "title": "🌍 Real-World Example — Reading from a Bluetooth Device",
      "content": "<div class='card'>Imagine your Bluetooth module sends data like <code>Speed,32\n</code>. You want to read the whole thing up to the newline.</div><pre><code>char buffer[50];\nif (Serial.available()) {\n  int count = Serial.readBytesUntil('\\n', buffer, 50);\n  buffer[count] = '\\0';\n  Serial.print(\"Received:\");\n  Serial.println(buffer);\n}</code></pre>"
    },
    {
      "title": "⏱ Timeout Tip",
      "content": "<div class='card'>If no terminator is found before timeout, it will stop and return how many characters it received.</div><div class='card'>Use <code>Serial.setTimeout(2000);</code> to increase the waiting time.</div>"
    },
    {
      "title": "🛑 Common Mistakes",
      "content": "<ul><li>🔴 Not adding a null-terminator (<code>'\\0'</code>) after read to make it a valid C-string.</li><li>🔴 Using a buffer that’s too small</li><li>🔴 Expecting <code>readBytesUntil()</code> to auto-trim white spaces — it won’t.</li></ul>"
    },
    {
      "title": "🎮 Mini Game: Can You Spot the Bug?",
      "content": "<div class='card'>Here's some code:</div><pre><code>char buffer[10];\nSerial.readBytesUntil('\\n', buffer, 10);\nSerial.println(buffer);</code></pre><div class='card'>🔍 What’s missing?<br><b>A</b>. Terminator character<br><b>B</b>. Null character<br><b>C</b>. Timeout setting</div><button class='gaming-btn' onclick='alert(\"✅ Correct! It’s missing a null character after reading.\")'>Check Answer</button>"
    },
    {
      "title": "📺 YouTube: Visual Walkthrough",
      "content": "<div class='card'>Watch this video where we read data from an ESP32 serial terminal and parse the result using <code>readBytesUntil()</code>.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/read-bytes-until' title='readBytesUntil Arduino Tutorial' frameborder='0' allowfullscreen></iframe>"
    }
  ]
}
,{
  "title": "Serial.readString() — Reading Serial as a Whole Message",
  "lessons": [
    {
      "title": "🧐 What is Serial.readString()?",
      "content": "<div class='card'><code>Serial.readString()</code> lets you read the entire incoming data as a single string — instead of parsing byte-by-byte.</div><div class='card'>It waits for the serial buffer to fill and then gives you the whole message at once. Super useful for commands, JSON, or text-based inputs.</div>",
      "image": "https://example.com/images/readstring_intro.png",
      "audio": "https://example.com/audio/readstring_intro.mp3"
    },
    {
      "title": "📚 Syntax + Return Value",
      "content": "<div class='card'><code>String message = Serial.readString();</code> — This command reads from the serial buffer until timeout.</div><div class='card'><b>Returns:</b> a <code>String</code> object containing the read characters. You can then use functions like <code>substring()</code>, <code>indexOf()</code>, etc. to work with it.</div>",
      "image": "https://example.com/images/readstring_syntax.png",
      "audio": "https://example.com/audio/readstring_syntax.mp3"
    },
    {
      "title": "⏱ Timeout Behavior",
      "content": "<div class='card'>By default, <code>readString()</code> waits 1000 ms (1 second) before giving up if no input arrives. You can change that using <code>Serial.setTimeout(ms);</code></div><div class='card'>Example: <code>Serial.setTimeout(5000);</code> waits 5 seconds before timing out.</div>",
      "image": "https://example.com/images/timeout.png",
      "audio": "https://example.com/audio/timeout.mp3"
    },
    {
      "title": "🌍 Real-World Example — Receiving a Command",
      "content": "<div class='card'>Say your PC sends <code>\"MOVE_FORWARD\"</code> to Arduino.</div><pre><code>if (Serial.available()) {\n  String command = Serial.readString();\n  if (command == \"MOVE_FORWARD\") {\n    digitalWrite(8, HIGH);\n  }\n}</code></pre><div class='card'>You can also combine with <code>trim()</code> to remove extra spaces or newlines.</div>",
      "image": "https://example.com/images/command_example.png",
      "audio": "https://example.com/audio/command_example.mp3"
    },
    {
      "title": "📎 Pin Used",
      "content": "<div class='card'><b>RX (Pin 0)</b> is used for receiving data from USB/Serial sources. No extra hardware required unless you're using external UART modules.</div>",
      "image": "https://example.com/images/rx_pin.png",
      "audio": "https://example.com/audio/rx_pin.mp3"
    },
    {
      "title": "🧼 Best Practices",
      "content": "<ul><li>🟡 Always check <code>Serial.available()</code> before calling <code>readString()</code>.</li><li>🟢 Use <code>trim()</code> to clean the string: <code>command.trim();</code></li><li>🧊 Avoid inside <code>loop()</code> without conditions — it blocks the code.</li></ul>",
      "image": "https://example.com/images/best_practices.png",
      "audio": "https://example.com/audio/best_practices.mp3"
    },
    {
      "title": "🎮 Mini Quiz — Smart or Not?",
      "content": "<div class='card'>Where would <code>readString()</code> be more effective?</div><ul><li>🧠 A. When receiving a long JSON object?</li><li>⛔ B. Reading single bytes frequently?</li><li>🔁 C. When speed matters over clarity?</li></ul><button class='gaming-btn' onclick='alert(\"Correct answer is A — It shines when receiving full structured messages like JSON!\")'>Check Answer</button>",
      "image": "https://example.com/images/quiz_readstring.png",
      "audio": "https://example.com/audio/quiz_readstring.mp3"
    },
    {
      "title": "📺 YouTube: Full Demo of readString() in Action",
      "content": "<div class='card'>Watch this video to learn how to send structured messages from PC and receive them as strings.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/readstring-demo' title='readString() Arduino Tutorial' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/youtube_readstring.png",
      "audio": "https://example.com/audio/youtube_readstring.mp3"
    }
  ]
}
,{
  "title": "Serial.readStringUntil() — Read Until You Say Stop!",
  "lessons": [
    {
      "title": "🚏 What is Serial.readStringUntil()?",
      "content": "<div class='card'><code>Serial.readStringUntil()</code> reads data from the serial buffer <b>until it finds a specific character</b> (called the terminator), or until a timeout happens.</div><div class='card'>Think of it like reading a sentence until you hit a full stop (<code>.</code>)!</div>",
      "image": "https://example.com/images/readstringuntil_intro.png",
      "audio": "https://example.com/audio/readstringuntil_intro.mp3"
    },
    {
      "title": "📚 Syntax + How it Works",
      "content": "<div class='card'><code>Serial.readStringUntil(char terminator);</code></div><div class='card'>For example: <code>Serial.readStringUntil('\\n')</code> reads until a newline.</div><div class='card'>🧠 Useful when your PC or another Arduino sends messages like: <code>\"Temp=23.5\\n\"</code></div>",
      "image": "https://example.com/images/readstringuntil_syntax.png",
      "audio": "https://example.com/audio/readstringuntil_syntax.mp3"
    },
    {
      "title": "⏱ Timeout Behavior",
      "content": "<div class='card'>If the terminator isn’t found in time, Arduino will stop waiting after the timeout.</div><div class='card'><code>Serial.setTimeout(3000);</code> sets this to 3 seconds.</div><div class='card'>⏳ Default timeout is 1000ms. Always set it based on your expected data speed.</div>",
      "image": "https://example.com/images/readstringuntil_timeout.png",
      "audio": "https://example.com/audio/readstringuntil_timeout.mp3"
    },
    {
      "title": "🌍 Real-World Example — Receiving Commands with Line Endings",
      "content": "<div class='card'>Say your PC sends: <code>\"START\\n\"</code>, <code>\"STOP\\n\"</code></div><pre><code>if (Serial.available()) {\n  String cmd = Serial.readStringUntil('\\n');\n  cmd.trim();\n  if (cmd == \"START\") digitalWrite(13, HIGH);\n  else if (cmd == \"STOP\") digitalWrite(13, LOW);\n}</code></pre><div class='card'>This is a cleaner, faster alternative to <code>readString()</code>.</div>",
      "image": "https://example.com/images/readstringuntil_example.png",
      "audio": "https://example.com/audio/readstringuntil_example.mp3"
    },
    {
      "title": "📎 Which Pins are Involved?",
      "content": "<div class='card'><b>RX (Pin 0)</b> is used for receiving serial data over USB or UART.</div><div class='card'>No special wiring needed if you're using the onboard Serial over USB.</div>",
      "image": "https://example.com/images/rx_pin.png",
      "audio": "https://example.com/audio/rx_pin.mp3"
    },
    {
      "title": "🧠 Tip: Terminator Examples",
      "content": "<ul><li><code>'\\n'</code> — newline (Linux, macOS)</li><li><code>'\\r'</code> — carriage return (older Macs)</li><li><code>'\\r\\n'</code> — CR+LF (Windows)</li></ul><div class='card'>You might have to test which terminator your device sends!</div>",
      "image": "https://example.com/images/terminators.png",
      "audio": "https://example.com/audio/terminators.mp3"
    },
    {
      "title": "🎮 Mini Game — Read Until What?",
      "content": "<div class='card'>What happens if <code>readStringUntil(',')</code> is called and there is no comma in the input?</div><ul><li>A. It reads forever</li><li>B. It returns empty string instantly</li><li>C. It waits for timeout and then returns whatever it got</li></ul><button class='gaming-btn' onclick='alert(\"Correct answer: C — It waits until timeout and then returns partial string.\")'>Check Answer</button>",
      "image": "https://example.com/images/game_readuntil.png",
      "audio": "https://example.com/audio/game_readuntil.mp3"
    },
    {
      "title": "📺 YouTube: Serial.readStringUntil() Tutorial",
      "content": "<div class='card'>In this video, you'll see how to make your Arduino respond to full messages sent from your PC using line endings.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/readstringuntil-tutorial' title='Arduino readStringUntil Tutorial' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/youtube_readstringuntil.png",
      "audio": "https://example.com/audio/youtube_readstringuntil.mp3"
    }
  ]
}
,{
  "title": "Serial.setTimeout() — Setting the Waiting Time",
  "lessons": [
    {
      "title": "⏱ What is Serial.setTimeout()?",
      "content": "<div class='card'><code>Serial.setTimeout()</code> is used to define how long the Arduino should wait (in milliseconds) when reading input via functions like <code>readBytes()</code>, <code>readString()</code>, or <code>parseInt()</code>.</div><div class='card'>By default, Arduino waits 1000ms (1 second). You can change this value with <code>setTimeout()</code>.</div>",
      "image": "https://example.com/images/timeout_intro.png",
      "audio": "https://example.com/audio/timeout_intro.mp3"
    },
    {
      "title": "🔧 Syntax & Usage",
      "content": "<div class='card'><code>Serial.setTimeout(milliseconds);</code></div><div class='card'>Example: <code>Serial.setTimeout(3000);</code> sets the timeout to 3 seconds.</div><div class='card'>You usually use this <b>before reading data</b> that might take time to arrive.</div>",
      "image": "https://example.com/images/timeout_syntax.png",
      "audio": "https://example.com/audio/timeout_syntax.mp3"
    },
    {
      "title": "🌍 Real-World Example — Reading Delayed Input",
      "content": "<div class='card'>Imagine you’re sending data from a Bluetooth device, and the messages take 2–3 seconds to arrive.</div><div class='card'>You can increase timeout like this:</div><pre><code>Serial.setTimeout(4000);\nString msg = Serial.readStringUntil('\\n');</code></pre><div class='card'>Now, Arduino patiently waits 4 seconds instead of giving up early.</div>",
      "image": "https://example.com/images/timeout_realworld.png",
      "audio": "https://example.com/audio/timeout_realworld.mp3"
    },
    {
      "title": "📎 Pin Usage",
      "content": "<div class='card'><code>setTimeout()</code> works on the data coming through RX (Pin 0), or USB-Serial on boards like Uno, Mega, Nano, etc.</div><div class='card'>You’re not directly using a pin, but it affects how incoming serial data is handled.</div>",
      "image": "https://example.com/images/serial_rx_pin.png",
      "audio": "https://example.com/audio/serial_rx_pin.mp3"
    },
    {
      "title": "🧠 Common Mistake to Avoid",
      "content": "<div class='card'>Don’t forget to set a <code>timeout</code> before using functions like <code>readBytes()</code> or <code>parseInt()</code>.</div><div class='card'>If the timeout is too low, you may not get full data. If too high, Arduino might freeze for too long.</div>",
      "image": "https://example.com/images/timeout_mistakes.png",
      "audio": "https://example.com/audio/timeout_mistakes.mp3"
    },
    {
      "title": "🎮 Mini Game — Timeout Trouble!",
      "content": "<div class='card'>You set <code>Serial.setTimeout(1000)</code>, but data arrives after 1500ms. What will happen?</div><ul><li>A. Arduino waits for full data</li><li>B. Arduino reads partial data and moves on</li><li>C. Arduino crashes</li></ul><button class='gaming-btn' onclick='alert(\"Correct answer: B — it reads partial data and stops.\")'>Check Answer</button>",
      "image": "https://example.com/images/game_timeout.png",
      "audio": "https://example.com/audio/game_timeout.mp3"
    },
    {
      "title": "📺 YouTube — Mastering Timeout in Arduino",
      "content": "<div class='card'>Watch this 3-min video where you'll learn how <code>setTimeout()</code> affects input reading and how to use it wisely in projects.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/arduino-settimeout' title='Arduino setTimeout() Explained' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/youtube_timeout.png",
      "audio": "https://example.com/audio/youtube_timeout.mp3"
    }
  ]
}
,{
  "title": "Serial.write() — Sending Raw Bytes Over Serial",
  "lessons": [
    {
      "title": "✉️ What is Serial.write()?",
      "content": "<div class='card'><code>Serial.write()</code> sends raw binary data (bytes) to the serial port.</div><div class='card'>Unlike <code>Serial.print()</code>, which sends human-readable text, <code>write()</code> is for sending exact byte values — like sending control commands, raw sensor data, or binary files.</div>",
      "image": "https://example.com/images/write_intro.png",
      "audio": "https://example.com/audio/write_intro.mp3"
    },
    {
      "title": "🔧 Syntax of Serial.write()",
      "content": "<div class='card'><code>Serial.write(val);</code> → Sends a single byte<br><code>Serial.write(buffer, length);</code> → Sends multiple bytes</div><div class='card'>Examples:<br><code>Serial.write(65);</code> → Sends ASCII for 'A'<br><code>Serial.write(\"Hello\");</code> → Sends raw bytes of the string</div>",
      "image": "https://example.com/images/write_syntax.png",
      "audio": "https://example.com/audio/write_syntax.mp3"
    },
    {
      "title": "🌍 Real-World Example — Sending Data to Another Arduino",
      "content": "<div class='card'>Let’s say two Arduino boards are connected via serial. One sends data using <code>write()</code>, and the other reads using <code>Serial.read()</code>.</div><pre><code>// Sender Arduino\nSerial.write(123); // Send raw byte\n\n// Receiver Arduino\nif (Serial.available()) {\n  int value = Serial.read();\n  Serial.println(value);\n}</code></pre>",
      "image": "https://example.com/images/write_realworld.png",
      "audio": "https://example.com/audio/write_realworld.mp3"
    },
    {
      "title": "📍 Pin Usage",
      "content": "<div class='card'>This uses the TX (Transmit) pin — usually Pin 1 on most Arduino boards like Uno and Nano.</div><div class='card'>If you're using USB for Serial, it's still routed through TX internally.</div>",
      "image": "https://example.com/images/tx_pin.png",
      "audio": "https://example.com/audio/write_pins.mp3"
    },
    {
      "title": "🤯 Common Misconceptions",
      "content": "<div class='card'>⚠️ <code>Serial.write(65)</code> does NOT show '65' on the Serial Monitor. It sends byte 65 — which is the ASCII character 'A'.</div><div class='card'>To show numbers as text, use <code>Serial.print(65)</code> instead.</div>",
      "image": "https://example.com/images/write_misconceptions.png",
      "audio": "https://example.com/audio/write_mistake.mp3"
    },
    {
      "title": "🎮 Mini Game — Print or Write?",
      "content": "<div class='card'>Choose the right function:<br><b>Q:</b> You want to send the word 'HELLO' as raw bytes to a connected Bluetooth module. Which do you use?</div><ul><li>A. <code>Serial.print(\"HELLO\")</code></li><li>B. <code>Serial.write(\"HELLO\")</code></li></ul><button class='gaming-btn' onclick='alert(\"Correct answer: B — write sends raw bytes.\")'>Check Answer</button>",
      "image": "https://example.com/images/write_game.png",
      "audio": "https://example.com/audio/write_game.mp3"
    },
    {
      "title": "📺 YouTube — Serial.write vs Serial.print",
      "content": "<div class='card'>Watch this side-by-side demo to clearly see the difference between <code>print()</code> and <code>write()</code> using Arduino and Serial Monitor.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/arduino-write-vs-print' title='Serial.write vs Serial.print' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/youtube_write.png",
      "audio": "https://example.com/audio/youtube_write.mp3"
    }
  ]
}
,{
  "title": "serialEvent() — Listening for Incoming Serial Data Automatically",
  "lessons": [
    {
      "title": "📩 What is serialEvent()?",
      "content": "<div class='card'><code>serialEvent()</code> is a special function that gets automatically called when new data is available in the serial buffer — <b>outside</b> your main loop.</div><div class='card'>Think of it like a dedicated serial mailman 🚚 who delivers letters to your desk, so you don’t have to check the mailbox yourself every second.</div>",
      "image": "https://example.com/images/serialevent_intro.png",
      "audio": "https://example.com/audio/serialevent_intro.mp3"
    },
    {
      "title": "🧠 Where and How is serialEvent() Used?",
      "content": "<div class='card'><code>serialEvent()</code> is declared outside of <code>setup()</code> and <code>loop()</code>. Arduino internally calls this after every <code>loop()</code> execution — if there is data available on the serial port.</div><pre><code>void serialEvent() {\n  while (Serial.available()) {\n    char inChar = (char)Serial.read();\n    // handle incoming data\n  }\n}</code></pre><div class='card'>You don’t call it — Arduino does it automatically!</div>",
      "image": "https://example.com/images/serialevent_usage.png",
      "audio": "https://example.com/audio/serialevent_usage.mp3"
    },
    {
      "title": "🔄 Real-Life Analogy",
      "content": "<div class='card'>Imagine you’re coding a robot that drives forward, but if any command comes via Bluetooth serial, it must pause and respond — <code>serialEvent()</code> handles that!</div><div class='card'>Instead of cluttering your main loop, you let <code>serialEvent()</code> handle incoming commands silently, like a background assistant.</div>",
      "image": "https://example.com/images/serialevent_robot.png",
      "audio": "https://example.com/audio/serialevent_robot.mp3"
    },
    {
      "title": "📍 Pin Usage",
      "content": "<div class='card'>This uses the RX (Receive) pin — usually Pin 0 — for receiving serial data.</div><div class='card'>Works on USB Serial too (like Arduino Uno or Nano’s USB port).</div>",
      "image": "https://example.com/images/serial_rx_pin.png",
      "audio": "https://example.com/audio/serialevent_pins.mp3"
    },
    {
      "title": "🛠️ Real Project Example — Serial Chat Listener",
      "content": "<div class='card'>Your Arduino listens to the Serial Monitor. When you send the word <code>ON</code>, it turns on an LED connected to pin 9.</div><pre><code>String inputString = \"\";\n\nvoid setup() {\n  Serial.begin(9600);\n  pinMode(9, OUTPUT);\n}\n\nvoid serialEvent() {\n  while (Serial.available()) {\n    char inChar = (char)Serial.read();\n    inputString += inChar;\n    if (inChar == '\\n') {\n      if (inputString == \"ON\\n\") {\n        digitalWrite(9, HIGH);\n      }\n      inputString = \"\";\n    }\n  }\n}</code></pre>",
      "image": "https://example.com/images/serialevent_example.png",
      "audio": "https://example.com/audio/serialevent_project.mp3"
    },
    {
      "title": "🎮 Mini Game — Loop vs SerialEvent",
      "content": "<div class='card'>Which function is best for reacting to serial data without blocking the main logic?</div><ul><li>A. <code>loop()</code></li><li>B. <code>serialEvent()</code></li></ul><button class='gaming-btn' onclick='alert(\"Correct! serialEvent() lets your loop stay clean!\")'>Check Answer</button>",
      "image": "https://example.com/images/serialevent_game.png",
      "audio": "https://example.com/audio/serialevent_game.mp3"
    },
    {
      "title": "📺 YouTube — Serial Event in Action",
      "content": "<div class='card'>See how <code>serialEvent()</code> improves your serial reading in large projects, and how it helps keep code clean.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/serialevent-arduino-demo' title='serialEvent Tutorial' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/youtube_serialevent.png",
      "audio": "https://example.com/audio/youtube_serialevent.mp3"
    }
  ]
}

      ]
    },{
      title:"Serial Communication in Action — Real World Examples",
      modules:[
        {
  "title": "ReadASCIIString — Handling Complete Messages from Serial",
  "lessons": [
    {
      "title": "📨 What is ReadASCIIString?",
      "content": "<div class='card'><b>ReadASCIIString</b> is a coding pattern (not a built-in function) used to read full strings (words or commands) from Serial input — not just one character at a time.</div><div class='card'>Arduino reads characters one-by-one, but with <code>ReadASCIIString</code> logic, you can capture whole lines like <code>LED ON</code> or <code>MOVE FORWARD</code> and act on them!</div>",
      "image": "https://example.com/images/readascii_intro.png",
      "audio": "https://example.com/audio/readascii_intro.mp3"
    },
    {
      "title": "💡 Where is it Used?",
      "content": "<div class='card'>Used when you want to send human-readable strings to Arduino and respond accordingly — like <i>voice assistant commands</i>, <i>robot directions</i>, or <i>device toggles</i>.</div><div class='card'>Common in Bluetooth-controlled projects and remote-controlled robots.</div>",
      "image": "https://example.com/images/readascii_use.png",
      "audio": "https://example.com/audio/readascii_usecase.mp3"
    },
    {
      "title": "🧪 Example Code",
      "content": "<div class='card'>This sketch waits for the user to type a message in Serial Monitor. If the message is <code>ON</code>, it turns an LED on. If <code>OFF</code>, it turns it off.</div><pre><code>String input = \"\";\n\nvoid setup() {\n  Serial.begin(9600);\n  pinMode(8, OUTPUT);\n}\n\nvoid loop() {\n  if (Serial.available()) {\n    input = Serial.readStringUntil('\\n');\n    input.trim();\n\n    if (input == \"ON\") {\n      digitalWrite(8, HIGH);\n    } else if (input == \"OFF\") {\n      digitalWrite(8, LOW);\n    }\n  }\n}</code></pre>",
      "image": "https://example.com/images/readascii_code.png",
      "audio": "https://example.com/audio/readascii_code.mp3"
    },
    {
      "title": "🔗 Related Serial Functions",
      "content": "<div class='card'>This code uses:</div><ul><li><code>Serial.readStringUntil()</code> — to capture full commands</li><li><code>trim()</code> — to remove extra line breaks</li><li><code>digitalWrite()</code> — to control output pins</li></ul>",
      "image": "https://example.com/images/readascii_related.png",
      "audio": "https://example.com/audio/readascii_related.mp3"
    },
    {
      "title": "🎮 Mini Game — Valid Serial Command?",
      "content": "<div class='card'>Which of these will the Arduino react to?</div><ul><li>💡 A. \"on\"</li><li>🔌 B. \"ON\"</li><li>🪫 C. \"off \" (with space)</li></ul><button class='gaming-btn' onclick='alert(\"Correct: B. Only exact match ON and OFF will work\")'>Check Answer</button>",
      "image": "https://example.com/images/readascii_game.png",
      "audio": "https://example.com/audio/readascii_game.mp3"
    },
    {
      "title": "📺 YouTube — How to Read Full Commands on Serial",
      "content": "<div class='card'>This tutorial demonstrates how to use <code>readStringUntil()</code> to handle complete commands like <code>START</code>, <code>STOP</code>, etc., using Bluetooth or Serial Monitor.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/ReadASCII-Arduino' title='ReadASCIIString Example' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/youtube_readascii.png",
      "audio": "https://example.com/audio/youtube_readascii.mp3"
    }
  ]
}
,{
  "title": "ASCII Table — The Backbone of Serial Communication",
  "lessons": [
    {
      "title": "📚 What is ASCII?",
      "content": "<div class='card'><b>ASCII</b> stands for <b>American Standard Code for Information Interchange</b>. It is a 7-bit character encoding system used to represent characters as numbers.</div><div class='card'>Every letter, digit, symbol, and even control keys (like newline or tab) has a numeric ASCII value. For example, <code>'A' = 65</code>, <code>'a' = 97</code>, <code>'1' = 49</code>.</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/d/dd/ASCII-Table.svg",
      "audio": "https://example.com/audio/ascii_intro.mp3"
    },
    {
      "title": "🔍 Why is ASCII important in Arduino?",
      "content": "<div class='card'>When you send data over Serial (USB, Bluetooth, etc.), you're actually sending <b>ASCII values</b> — not letters. So when you type <code>'A'</code>, the Arduino receives <code>65</code>.</div><div class='card'>Understanding ASCII helps in debugging, printing, reading serial data, and converting between characters and numbers.</div>",
      "image": "https://example.com/images/ascii_use.png",
      "audio": "https://example.com/audio/ascii_why.mp3"
    },
    {
      "title": "🧪 Example Sketch — The ASCII Printer",
      "content": "<div class='card'>This sketch prints the entire ASCII table from 32 (space) to 126 (tilde ~):</div><pre><code>void setup() {\n  Serial.begin(9600);\n  for (int i = 32; i <= 126; i++) {\n    Serial.print(i);\n    Serial.print(\": \");\n    Serial.write(i);\n    Serial.println();\n  }\n}\nvoid loop() {}</code></pre><div class='card'>Use Serial Monitor to view the table and notice how values match with characters.</div>",
      "image": "https://example.com/images/ascii_printer.png",
      "audio": "https://example.com/audio/ascii_example.mp3"
    },
    {
      "title": "🧠 Real-World Applications",
      "content": "<div class='card'>ASCII is used in almost every communication protocol — whether it’s Serial Monitor, I2C commands, Bluetooth messages, or USB keyboards.</div><div class='card'>It’s how microcontrollers talk in a language both humans and machines can understand.</div>",
      "image": "https://example.com/images/ascii_realworld.png",
      "audio": "https://example.com/audio/ascii_realworld.mp3"
    },
    {
      "title": "🎮 Game — Match the ASCII",
      "content": "<div class='card'>Can you match the character with its ASCII value?</div><ul><li>🔤 A. 'A' → ?</li><li>🔠 B. 'a' → ?</li><li>🔢 C. '0' → ?</li></ul><button class='gaming-btn' onclick='alert(\"Correct Answers: A → 65, B → 97, C → 48\")'>Check Answer</button>",
      "image": "https://example.com/images/ascii_game.png",
      "audio": "https://example.com/audio/ascii_game.mp3"
    },
    {
      "title": "📺 YouTube — ASCII for Beginners",
      "content": "<div class='card'>Watch this short video to understand how ASCII works, why it’s still used, and how to decode Serial messages using it.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/Z8SGsYFs8uI' title='ASCII Explained for Arduino' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/youtube_ascii.png",
      "audio": "https://example.com/audio/youtube_ascii.mp3"
    }
  ]
}
,{
  "title": "Dimmer — Control Brightness Like a Pro",
  "lessons": [
    {
      "title": "🌟 What is a Dimmer in Arduino?",
      "content": "<div class='card'>A <b>dimmer</b> is a system that allows you to control the brightness of an LED (or speed of a motor) by adjusting the <b>PWM signal</b>.</div><div class='card'>It usually involves reading input from a <b>potentiometer</b> (using <code>analogRead()</code>) and controlling output to an LED (using <code>analogWrite()</code>).</div>",
      "image": "https://example.com/images/dimmer_intro.png",
      "audio": "https://example.com/audio/dimmer_intro.mp3"
    },
    {
      "title": "🧠 Concept Behind Dimming",
      "content": "<div class='card'>We use <b>PWM</b> (Pulse Width Modulation) to simulate variable voltage. It rapidly turns the LED ON/OFF to give an illusion of dimming.</div><div class='card'>The more the ON time (duty cycle), the brighter the LED appears. A lower duty cycle means dimmer light.</div><div class='card'>You can imagine it like blinking so fast that your eyes only see the average brightness!</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/6/6a/PWM_Signal.svg",
      "audio": "https://example.com/audio/pwm_explained.mp3"
    },
    {
      "title": "📍 Pin Configuration",
      "content": "<div class='card'>✅ <b>PWM Output:</b> Connect LED to any PWM pin like D3, D5, D6, D9, D10, D11 (on Uno).</div><div class='card'>✅ <b>Analog Input:</b> Connect the middle pin of the potentiometer to A0. Outer two pins to 5V and GND.</div>",
      "image": "https://example.com/images/dimmer_pins.png",
      "audio": "https://example.com/audio/dimmer_pins.mp3"
    },
    {
      "title": "💻 Full Example Code",
      "content": "<div class='card'>This sketch reads analog input and maps it to LED brightness:</div><pre><code>int potPin = A0;\nint ledPin = 9;\nint value = 0;\n\nvoid setup() {\n  pinMode(ledPin, OUTPUT);\n}\n\nvoid loop() {\n  value = analogRead(potPin);            // 0 to 1023\n  int brightness = map(value, 0, 1023, 0, 255); \n  analogWrite(ledPin, brightness);\n  delay(10);\n}</code></pre>",
      "image": "https://example.com/images/dimmer_code.png",
      "audio": "https://example.com/audio/dimmer_code.mp3"
    },
    {
      "title": "🌍 Real-World Use Cases",
      "content": "<div class='card'>🎛️ Dimming LED strips based on ambient light</div><div class='card'>🌀 Controlling fan speed using potentiometer</div><div class='card'>🔊 DIY volume knob or mood lamp projects</div>",
      "image": "https://example.com/images/dimmer_realworld.png",
      "audio": "https://example.com/audio/dimmer_usecases.mp3"
    },
    {
      "title": "🎮 Game — PWM Master",
      "content": "<div class='card'>Which of these values makes the LED <b>half brightness</b>?</div><ul><li>🔘 A. analogWrite(ledPin, 0)</li><li>🔘 B. analogWrite(ledPin, 128)</li><li>🔘 C. analogWrite(ledPin, 255)</li></ul><button class='gaming-btn' onclick='alert(\"B is correct! 128 is about 50% of 255\")'>Check Answer</button>",
      "image": "https://example.com/images/dimmer_game.png",
      "audio": "https://example.com/audio/dimmer_game.mp3"
    },
    {
      "title": "📺 YouTube: Make a Dimmer in 2 Minutes",
      "content": "<div class='card'>Watch this tutorial on how to build your own LED dimmer with Arduino and a potentiometer.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/QXyZ1zX1kQA' title='Arduino LED Dimmer' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/dimmer_youtube.png",
      "audio": "https://example.com/audio/dimmer_youtube.mp3"
    }
  ]
}
,{
  "title": "Graph — Turning Sensor Data into a Live Chart",
  "lessons": [
    {
      "title": "🖼️ What is the Graph Example?",
      "content": "<div class='card'>The <b>Graph</b> example in Arduino is used to <b>visualize real-time data</b> (like temperature, light, etc.) as a flowing graph using the <b>Serial Plotter</b>.</div><div class='card'>Think of it as your Arduino's way of showing changing data values as a live line chart, just like a heartbeat monitor!</div>",
      "image": "https://example.com/images/graph_intro.png",
      "audio": "https://example.com/audio/graph_intro.mp3"
    },
    {
      "title": "🎛️ Serial Plotter — What and Where?",
      "content": "<div class='card'><b>Serial Plotter</b> is a tool built into the Arduino IDE.</div><div class='card'>You can open it from <b>Tools → Serial Plotter</b>. It graphs numeric values sent over Serial.</div><div class='card'>Instead of printing values with <code>Serial.println()</code>, you plot them as a line that moves over time.</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/6/61/Arduino-serial-plotter.png",
      "audio": "https://example.com/audio/serial_plotter.mp3"
    },
    {
      "title": "📍 What You Need",
      "content": "<div class='card'>You’ll need:</div><ul><li>🔌 Arduino Uno/Nano</li><li>🌡️ Analog Sensor (like LDR, potentiometer, temperature sensor)</li><li>📎 1 analog input pin (like A0)</li><li>🖥️ Arduino IDE with Serial Plotter</li></ul>",
      "image": "https://example.com/images/graph_setup.png",
      "audio": "https://example.com/audio/graph_requirements.mp3"
    },
    {
      "title": "🧪 Full Sketch: Graphing Sensor Data",
      "content": "<div class='card'>This code reads from analog pin A0 and sends values to the Serial Plotter:</div><pre><code>void setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int sensorValue = analogRead(A0);\n  Serial.println(sensorValue);  // Value between 0 to 1023\n  delay(10);                    // Short delay for smoother plot\n}</code></pre><div class='card'>As the sensor changes (e.g., you turn a knob), the line on Serial Plotter rises and falls!</div>",
      "image": "https://example.com/images/graph_code.png",
      "audio": "https://example.com/audio/graph_code.mp3"
    },
    {
      "title": "💡 Real-World Use Cases",
      "content": "<div class='card'>📈 Monitor temperature trends</div><div class='card'>🕹️ Plot joystick X/Y values over time</div><div class='card'>🚨 Detect motion with PIR or vibration sensors</div><div class='card'>📊 Visualize battery voltage levels in real-time</div>",
      "image": "https://example.com/images/graph_usecases.png",
      "audio": "https://example.com/audio/graph_usecases.mp3"
    },
    {
      "title": "🕹️ Interactive Mini Game — Plot It or Print It?",
      "content": "<div class='card'>Choose what code you'd use for Serial Plotter:</div><ul><li>A. <code>Serial.print(\"Sensor: \")</code></li><li>B. <code>Serial.println(sensorValue)</code></li><li>C. <code>Serial.write(sensorValue)</code></li></ul><button class='gaming-btn' onclick='alert(\"Correct! B — Serial.println() sends clean numeric data needed for plotting.\")'>Check Answer</button>",
      "image": "https://example.com/images/graph_game.png",
      "audio": "https://example.com/audio/graph_game.mp3"
    },
    {
      "title": "📺 YouTube — See the Graph in Action",
      "content": "<div class='card'>Watch a complete walk-through on building your first Serial Plotter Graph with a potentiometer:</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/DRkM93dpFZk' title='Arduino Serial Graph' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/graph_video.png",
      "audio": "https://example.com/audio/graph_youtube.mp3"
    }
  ]
}
,{
  "title": "Physical Pixel — Controlling the Real World from Serial",
  "lessons": [
    {
      "title": "🤔 What is the Physical Pixel Example?",
      "content": "<div class='card'><b>Physical Pixel</b> lets you turn an actual LED on/off using serial commands from your computer.</div><div class='card'>It’s like talking to your Arduino from the Serial Monitor and watching it obey your command in real-time!</div>",
      "image": "https://example.com/images/physical_pixel_intro.png",
      "audio": "https://example.com/audio/physical_pixel_intro.mp3"
    },
    {
      "title": "🧠 Why Use It?",
      "content": "<div class='card'>This example teaches you how to send commands <b>from PC to Arduino</b> and how Arduino can <b>read that input using Serial.read()</b>.</div><div class='card'>It’s the base of every Serial-controlled robot, IoT device, or remote-controlled LED system you’ll ever build!</div>",
      "image": "https://example.com/images/why_physical_pixel.png",
      "audio": "https://example.com/audio/why_physical_pixel.mp3"
    },
    {
      "title": "⚙️ What You Need",
      "content": "<div class='card'>You’ll need:</div><ul><li>🔌 Arduino Uno/Nano</li><li>💡 1 LED</li><li>🔋 220Ω resistor</li><li>🔌 Breadboard + jumper wires</li><li>🖥️ Arduino IDE with Serial Monitor</li></ul>",
      "image": "https://example.com/images/physical_pixel_setup.png",
      "audio": "https://example.com/audio/physical_pixel_requirements.mp3"
    },
    {
      "title": "📍 Pin Used",
      "content": "<div class='card'>This sketch uses <code>pin 13</code> (built-in LED on most boards).</div><div class='card'>You can change it to any digital output pin if using an external LED.</div>",
      "image": "https://example.com/images/physical_pixel_pin.png",
      "audio": "https://example.com/audio/physical_pixel_pin.mp3"
    },
    {
      "title": "💻 The Code — Talk to Arduino!",
      "content": "<div class='card'>This sketch listens for serial input. Type <code>H</code> to turn the LED ON, and <code>L</code> to turn it OFF.</div><pre><code>char incomingByte;\n\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  if (Serial.available() > 0) {\n    incomingByte = Serial.read();\n    if (incomingByte == 'H') {\n      digitalWrite(13, HIGH);\n    } else if (incomingByte == 'L') {\n      digitalWrite(13, LOW);\n    }\n  }\n}</code></pre>",
      "image": "https://example.com/images/physical_pixel_code.png",
      "audio": "https://example.com/audio/physical_pixel_code.mp3"
    },
    {
      "title": "🌍 Real-World Application",
      "content": "<div class='card'>This is the foundation of <b>serial-controlled automation</b>:</div><ul><li>💡 Controlling lights from PC</li><li>🧠 Making serial-based games</li><li>🎮 Controlling robots from keyboard</li><li>📲 Linking with mobile apps</li></ul>",
      "image": "https://example.com/images/realworld_physical_pixel.png",
      "audio": "https://example.com/audio/realworld_physical_pixel.mp3"
    },
    {
      "title": "🎮 Mini Game — H or L?",
      "content": "<div class='card'>Type a character in the Serial Monitor:<br>What will happen?</div><ul><li><code>H</code> → LED turns ON</li><li><code>L</code> → LED turns OFF</li><li><code>X</code> → No effect</li></ul><button class='gaming-btn' onclick='alert(\"Correct! Only H and L control the LED. Others are ignored.\")'>Check Answer</button>",
      "image": "https://example.com/images/game_physical_pixel.png",
      "audio": "https://example.com/audio/game_physical_pixel.mp3"
    },
    {
      "title": "📺 YouTube — Watch It in Action!",
      "content": "<div class='card'>This video shows how the code works and how to test it using Serial Monitor:</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/I6np2p3k4L8' title='Arduino Physical Pixel' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/video_physical_pixel.png",
      "audio": "https://example.com/audio/video_physical_pixel.mp3"
    }
  ]
}
,{
  "title": "Serial Call & Response — Talking Both Ways!",
  "lessons": [
    {
      "title": "🧠 What Is 'Call and Response' in Arduino?",
      "content": "<div class='card'>In a normal Serial sketch, you <b>send data from Arduino</b> to your PC. But what if you want your PC to send a command, and Arduino responds?</div><div class='card'><b>That's 'Call and Response'</b> — your computer 'calls' with a message, and Arduino 'responds' appropriately.</div>",
      "image": "https://example.com/images/serial_call_intro.png",
      "audio": "https://example.com/audio/serial_call_intro.mp3"
    },
    {
      "title": "📦 Where Is It Used?",
      "content": "<div class='card'>Used in:</div><ul><li>📱 Bluetooth or serial apps controlling Arduino</li><li>🖥️ Custom PC dashboards</li><li>📊 Graphing data on the computer</li><li>🎮 Real-time games using sensors</li></ul><div class='card'>This is also the base for communication with Python or Node.js via serial port.</div>",
      "image": "https://example.com/images/serial_usecases.png",
      "audio": "https://example.com/audio/serial_usecases.mp3"
    },
    {
      "title": "💻 The Code",
      "content": "<div class='card'>This code reads incoming data and sends a response back.</div><pre><code>int input = 0;\nvoid setup() {\n  Serial.begin(9600);\n  while (!Serial) {} // Wait for serial\n  Serial.println(\"Ready\");\n}\n\nvoid loop() {\n  if (Serial.available() > 0) {\n    int inByte = Serial.read();\n    input = analogRead(A0) / 4; // Simulated sensor value\n    Serial.println(input);\n  }\n}</code></pre><div class='card'>When the PC sends a byte, Arduino reads it, and replies with a sensor value!</div>",
      "image": "https://example.com/images/serial_code.png",
      "audio": "https://example.com/audio/serial_code.mp3"
    },
    {
      "title": "📍 Pin Usage",
      "content": "<div class='card'>This sketch uses analog pin <code>A0</code> to simulate a sensor input.</div><div class='card'>But you can replace this with a real sensor like a potentiometer or LDR.</div>",
      "image": "https://example.com/images/pin_usage_serial_call.png",
      "audio": "https://example.com/audio/pin_usage_serial_call.mp3"
    },
    {
      "title": "🧪 Real-Life Example",
      "content": "<div class='card'>Imagine a Python script sending a command every 5 seconds to get the light sensor value from your Arduino — this sketch makes it possible.</div><div class='card'>You could log data over time, control devices, or make interactive tools.</div>",
      "image": "https://example.com/images/real_life_serial_call.png",
      "audio": "https://example.com/audio/real_life_serial_call.mp3"
    },
    {
      "title": "🎮 Mini Game — Decode the Flow",
      "content": "<div class='card'>Arrange these steps in correct order:</div><ol><li>🧠 A. PC sends a byte</li><li>🔎 B. Arduino receives it</li><li>📊 C. Arduino reads sensor</li><li>📨 D. Arduino sends sensor value back</li></ol><button class='gaming-btn' onclick='alert(\"Correct order: A → B → C → D\")'>Check Answer</button>",
      "image": "https://example.com/images/game_serial_call.png",
      "audio": "https://example.com/audio/game_serial_call.mp3"
    },
    {
      "title": "📺 YouTube — See It Working!",
      "content": "<div class='card'>This video walks through the sketch, shows how to interact with it using Serial Monitor or Python script.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/MCj8Iqzsr_s' title='Serial Call Response Arduino Tutorial' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/youtube_serial_call.png",
      "audio": "https://example.com/audio/youtube_serial_call.mp3"
    }
  ]
}
,{
  "title": "Serial Call & Response — ASCII Communication Magic",
  "lessons": [
    {
      "title": "🔤 What Is ASCII-Based Serial Call?",
      "content": "<div class='card'>Unlike sending raw numbers or bytes, this method sends characters (letters, digits, symbols) as <b>ASCII codes</b>.</div><div class='card'>This makes it easier to read, debug, and interact using Serial Monitor or software like Python, Processing, etc.</div>",
      "image": "https://example.com/images/ascii_intro.png",
      "audio": "https://example.com/audio/ascii_intro.mp3"
    },
    {
      "title": "💡 Why ASCII? Benefits & Use-Cases",
      "content": "<div class='card'>✅ Easy to debug with human-readable characters</div><div class='card'>✅ Works great with Python scripts, Processing, and Node.js</div><div class='card'>✅ Ideal for sending labels like <code>\"TEMP:32\"</code> instead of just numbers</div>",
      "image": "https://example.com/images/ascii_benefits.png",
      "audio": "https://example.com/audio/ascii_benefits.mp3"
    },
    {
      "title": "🧠 Example Sketch: Send Labeled Values",
      "content": "<pre><code>String inputString = \"\";\nbool stringComplete = false;\n\nvoid setup() {\n  Serial.begin(9600);\n  inputString.reserve(200);\n}\n\nvoid loop() {\n  if (stringComplete) {\n    Serial.print(\"You sent: \");\n    Serial.println(inputString);\n    inputString = \"\";\n    stringComplete = false;\n  }\n}\n\nvoid serialEvent() {\n  while (Serial.available()) {\n    char inChar = (char)Serial.read();\n    inputString += inChar;\n    if (inChar == '\\n') stringComplete = true;\n  }\n}</code></pre><div class='card'>This sketch reads a full ASCII string and replies with a response that includes the same message.</div>",
      "image": "https://example.com/images/ascii_sketch.png",
      "audio": "https://example.com/audio/ascii_sketch.mp3"
    },
    {
      "title": "📍 Pin Usage & Protocol",
      "content": "<div class='card'>ASCII serial communication uses the <b>Serial TX/RX pins</b> (usually pin 0 and 1 on Uno), or USB virtual serial for boards like Nano Every, Leonardo, or ESP32.</div>",
      "image": "https://example.com/images/ascii_pin.png",
      "audio": "https://example.com/audio/ascii_pin.mp3"
    },
    {
      "title": "🌍 Real-World Example",
      "content": "<div class='card'>You're building a weather station with Arduino. Instead of just sending numbers, you can send labels:</div><pre><code>Serial.println(\"TEMP:27.5\");\nSerial.println(\"HUM:43.2\");</code></pre><div class='card'>This helps your PC or web dashboard easily read what each number means.</div>",
      "image": "https://example.com/images/ascii_usecase.png",
      "audio": "https://example.com/audio/ascii_usecase.mp3"
    },
    {
      "title": "🎮 Mini Game — ASCII Decode",
      "content": "<div class='card'>What does <code>Serial.println(\"BTN:1\")</code> mean?</div><ul><li>🟢 A. Sensor is high</li><li>🔴 B. A button was pressed</li><li>🔵 C. A command to press a button</li></ul><button class='gaming-btn' onclick='alert(\"Correct: B — It's a message that a button was pressed\")'>Check Answer</button>",
      "image": "https://example.com/images/ascii_game.png",
      "audio": "https://example.com/audio/ascii_game.mp3"
    },
    {
      "title": "📺 YouTube — ASCII Serial Explained",
      "content": "<div class='card'>This video demonstrates sending ASCII messages from PC to Arduino and back.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/6N97Wv7UZw4' title='Arduino Serial ASCII Call and Response' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/youtube_ascii_serial.png",
      "audio": "https://example.com/audio/youtube_ascii_serial.mp3"
    }
  ]
}

      ]
    },{
      title:"The Stream Class - Reading Data Smartly",
      modules:[
        {
  "title": "📡 The Stream Class — The Hidden Engine Behind Serial Data",
  "lessons": [
    {
      "title": "🔍 What Is Stream in Arduino?",
      "content": "<div class='card'>The <code>Stream</code> class in Arduino is a base class used to handle serial-style data input and output. It's like a 'blueprint' that allows different hardware interfaces (like <code>Serial</code>, <code>Wire</code>, <code>Ethernet</code>, and <code>SD</code>) to read/write data using common methods.</div><div class='card'>When you use <code>Serial.read()</code> or <code>Serial.parseInt()</code>, you are actually using functions defined by the <b>Stream class</b> behind the scenes.</div>",
      "image": "https://example.com/images/stream_intro.png",
      "audio": "https://example.com/audio/stream_intro.mp3"
    },
    {
      "title": "📦 Where Is It Used?",
      "content": "<div class='card'><b>Any library that reads or writes a sequence of characters</b> (or bytes) will likely inherit from Stream — such as:</div><ul><li>📡 <code>Serial</code> (USB/UART communication)</li><li>🔌 <code>Wire</code> (I2C communication)</li><li>🌐 <code>Ethernet</code> (network data)</li><li>💾 <code>SD</code> (reading files)</li></ul>"
    },
    {
      "title": "🧠 Why Use Stream?",
      "content": "<div class='card'>Instead of writing custom code for every library, Arduino reuses a common set of data functions.</div><div class='card'>It saves memory and gives you a familiar way to read or write bytes, strings, and numbers across different protocols.</div>"
    },
    {
      "title": "🕹️ Mini Game — Guess the Stream!",
      "content": "<div class='card'>Which of these libraries uses the Stream class?</div><ul><li>A. Stepper</li><li>B. Wire</li><li>C. SD</li><li>D. Servo</li></ul><button class='gaming-btn' onclick='alert(\"Correct! Wire and SD both use Stream.\")'>Check Answer</button>"
    },
    {
      "title": "🎥 YouTube — Visual Guide to Arduino Streams",
      "content": "<div class='card'>Watch this short animation to understand how <b>Stream</b> powers <code>Serial</code> and other communication systems:</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/kU2g92pEbyE' title='What is Stream Class in Arduino' frameborder='0' allowfullscreen></iframe>"
    }
  ]
}
,{
  "title": "available() — Check If Data Is Waiting",
  "lessons": [
    {
      "title": "📦 What is available()?",
      "content": "<div class='card'>The <code>available()</code> function tells you how many bytes are ready to be read from a Stream — like Serial, Wire, or even an SD file.</div><div class='card'>It helps you avoid reading before data is actually available, preventing bugs or empty reads.</div>",
      "image": "https://example.com/images/stream_available_intro.png",
      "audio": "https://example.com/audio/stream_available_intro.mp3"
    },
    {
      "title": "🧠 Why is available() important?",
      "content": "<div class='card'>Imagine someone is talking to you on a walkie-talkie. You don’t start writing what they say until they’ve actually spoken — same with <code>available()</code>.</div><div class='card'>It returns the number of bytes available in the buffer that you can safely <code>read()</code> or <code>parseInt()</code>.</div>",
      "image": "https://example.com/images/stream_available_why.png",
      "audio": "https://example.com/audio/stream_available_why.mp3"
    },
    {
      "title": "🧪 Syntax + Output",
      "content": "<div class='card'><code>Serial.available();</code><br>Returns: <b>int</b> — number of bytes available to read</div><div class='card'><b>Return values:</b><ul><li>0 = Nothing to read</li><li>>0 = Bytes waiting in buffer</li></ul></div>",
      "image": "https://example.com/images/stream_available_syntax.png",
      "audio": "https://example.com/audio/stream_available_syntax.mp3"
    },
    {
      "title": "📍 Real-Life Example — Data Logger",
      "content": "<div class='card'>Say you're building a sensor logger. Before grabbing Serial input from a Bluetooth device, you should always check <code>Serial.available()</code>.</div><pre><code>if (Serial.available() > 0) {\n  int data = Serial.read();\n  Serial.println(data);\n}</code></pre><div class='card'>Without this check, your <code>read()</code> might return -1 (nothing available)!</div>",
      "image": "https://example.com/images/stream_available_real.png",
      "audio": "https://example.com/audio/stream_available_real.mp3"
    },
    {
      "title": "🎮 Mini Game — Data or No Data?",
      "content": "<div class='card'>Which of these should you check with <code>available()</code> first?</div><ul><li>🔘 A. Reading from Serial</li><li>🔘 B. Reading from SD file</li><li>🔘 C. Reading from I2C sensor</li></ul><button class='gaming-btn' onclick='alert(\"Correct: A, B, and C — all use Stream and may need available()!\")'>Check Answer</button>",
      "image": "https://example.com/images/stream_available_game.png",
      "audio": "https://example.com/audio/stream_available_game.mp3"
    },
    {
      "title": "📺 YouTube — When To Use available()",
      "content": "<div class='card'>Watch this 3-min tutorial that shows how not checking <code>available()</code> causes bugs in Serial communication.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/UGgdpL-zQuE' title='available() Arduino Serial Guide' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/stream_available_video.png",
      "audio": "https://example.com/audio/stream_available_video.mp3"
    }
  ]
}
,{
  "title": "read() — Reading One Byte at a Time",
  "lessons": [
    {
      "title": "🧲 What is read() in Arduino?",
      "content": "<div class='card'><code>read()</code> is a Stream function used to grab a single byte of data from the buffer — usually from Serial, Wire, or File.</div><div class='card'>If there’s no data available, it returns <code>-1</code>. That’s why <b>you should always check <code>available()</code> first</b> before using <code>read()</code>.</div>",
      "image": "https://example.com/images/read_intro.png",
      "audio": "https://example.com/audio/read_intro.mp3"
    },
    {
      "title": "💡 Where is read() used?",
      "content": "<div class='card'>You’ll use <code>read()</code> when reading bytes from:</div><ul><li>📡 Serial input (USB, Bluetooth, etc.)</li><li>📁 SD card files</li><li>📠 I2C or SPI buffers</li></ul><div class='card'>It’s ideal for low-level processing or when you know the format of incoming data.</div>",
      "image": "https://example.com/images/read_where.png",
      "audio": "https://example.com/audio/read_where.mp3"
    },
    {
      "title": "🧪 Syntax + Return Type",
      "content": "<div class='card'><code>stream.read();</code><br>Returns: <b>int</b> (0–255 for valid byte, or -1 if nothing to read)</div><div class='card'>Tip: You can store it in a <code>char</code> or <code>byte</code> variable, but always check if it’s <code>-1</code> first!</div>",
      "image": "https://example.com/images/read_syntax.png",
      "audio": "https://example.com/audio/read_syntax.mp3"
    },
    {
      "title": "🌍 Real-World Example — Serial Chat Reader",
      "content": "<div class='card'>Let’s say you are building a serial chat monitor between two Arduinos. You’d want to read and display incoming characters:</div><pre><code>if (Serial.available()) {\n  char incoming = Serial.read();\n  Serial.print(\"Received: \");\n  Serial.println(incoming);\n}</code></pre><div class='card'>This reads and echoes the latest character input.</div>",
      "image": "https://example.com/images/read_realworld.png",
      "audio": "https://example.com/audio/read_realworld.mp3"
    },
    {
      "title": "🧠 Byte vs Character — What's the Difference?",
      "content": "<div class='card'><b>Byte:</b> A single unit of data (0–255) — raw digital form.<br><b>Character:</b> A human-readable symbol (like 'A'), usually encoded in ASCII.</div><div class='card'>read() returns a <b>byte</b>, but we often treat it as a character using <code>char</code>.</div>",
      "image": "https://example.com/images/byte_vs_char.png",
      "audio": "https://example.com/audio/byte_vs_char.mp3"
    },
    {
      "title": "🎮 Game — Guess the Byte!",
      "content": "<div class='card'>Type a letter into Serial Monitor. The Arduino will show its numeric byte value.</div><pre><code>if (Serial.available()) {\n  int byteVal = Serial.read();\n  Serial.print(\"Byte: \");\n  Serial.println(byteVal);\n}</code></pre><div class='card'>Try typing 'A' — What number does it show? (Hint: ASCII!)</div>",
      "image": "https://example.com/images/read_game.png",
      "audio": "https://example.com/audio/read_game.mp3"
    },
    {
      "title": "📺 YouTube — read() in Real-Time Chat",
      "content": "<div class='card'>Watch how <code>read()</code> works with <code>available()</code> in a real-time serial chat example between two Arduinos.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/rFhY0Ww9U-c' title='Arduino Serial read() tutorial' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/read_youtube.png",
      "audio": "https://example.com/audio/read_youtube.mp3"
    }
  ]
}
,{
  "title": "flush() — Make Sure Everything is Sent!",
  "lessons": [
    {
      "title": "🚿 What is flush() in Arduino Stream?",
      "content": "<div class='card'><code>flush()</code> is a function that makes sure all outgoing data in the buffer is fully transmitted before the Arduino continues to do other stuff.</div><div class='card'>Imagine you're posting a letter — <code>flush()</code> ensures the postman has picked it up before you walk away!</div>",
      "image": "https://example.com/images/flush_stream_intro.png",
      "audio": "https://example.com/audio/flush_intro.mp3"
    },
    {
      "title": "💡 Why Should We Use flush()?",
      "content": "<div class='card'>Use <code>flush()</code> when your Arduino must not move on to the next task until the current message is fully delivered.</div><div class='card'>Example: if you're printing data to Serial or an SD card before a reset, you should <code>flush()</code> to make sure the data doesn’t get lost.</div>",
      "image": "https://example.com/images/flush_usecase.png",
      "audio": "https://example.com/audio/flush_usecase.mp3"
    },
    {
      "title": "🧪 Syntax & Behavior",
      "content": "<div class='card'><b>Syntax:</b><br><code>Serial.flush();</code></div><div class='card'>It waits until the output buffer is empty. It does not affect incoming data!</div><div class='card'><b>Important Note:</b> Prior to Arduino 1.0, <code>flush()</code> used to discard incoming data — not anymore! Now it only deals with output.</div>",
      "image": "https://example.com/images/flush_syntax.png",
      "audio": "https://example.com/audio/flush_syntax.mp3"
    },
    {
      "title": "🌍 Real-World Example — SD Card Logging",
      "content": "<div class='card'>Imagine you're logging temperature data to an SD card every 5 seconds.</div><div class='card'>To avoid data loss due to sudden power cuts or resets, you'd use <code>flush()</code> to write all remaining data to the file:</div><pre><code>logFile.print(\"Temp: \");\nlogFile.println(temp);\nlogFile.flush();</code></pre><div class='card'>This guarantees your data is saved!</div>",
      "image": "https://example.com/images/flush_sdcard.png",
      "audio": "https://example.com/audio/flush_sdcard.mp3"
    },
    {
      "title": "🎮 Mini Game — Flush It or Risk It?",
      "content": "<div class='card'>You’re writing a shutdown script that saves your game score. Should you use <code>flush()</code>?</div><ul><li>💾 A. Yes, always before shutdown</li><li>❌ B. No, it slows things</li><li>🧐 C. Only if using Serial</li></ul><button class='gaming-btn' onclick='alert(\"Correct answer: A — You always want to flush before shutdown!\")'>Check Answer</button>",
      "image": "https://example.com/images/flush_game.png",
      "audio": "https://example.com/audio/flush_game.mp3"
    },
    {
      "title": "📺 YouTube — Stream.flush() Explained",
      "content": "<div class='card'>Watch this example of how <code>flush()</code> ensures safe SD card and Serial writing in Arduino:</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/arduino-flush-example' title='Arduino flush() tutorial' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/flush_youtube.png",
      "audio": "https://example.com/audio/flush_youtube.mp3"
    }
  ]
}
,{
  "title": "find() — Search for a Keyword in Streaming Data",
  "lessons": [
    {
      "title": "🔍 What is find() in Arduino Stream?",
      "content": "<div class='card'><code>find()</code> scans incoming data until it finds a target string (or timeout happens).</div><div class='card'>Imagine a metal detector scanning sand — it keeps moving until it finds gold! That’s what <code>find()</code> does with characters in Serial input or file streams.</div>",
      "image": "https://example.com/images/find_intro.png",
      "audio": "https://example.com/audio/find_intro.mp3"
    },
    {
      "title": "🧪 Syntax & How It Works",
      "content": "<div class='card'><b>Syntax:</b><br><code>stream.find(target)</code><br><code>stream.find(target, length)</code></div><div class='card'>It returns <code>true</code> if the target string is found within the stream buffer before a timeout.</div><div class='card'>You can search for words like <code>\"OK\"</code>, <code>\"ERROR\"</code>, <code>\"END\"</code> in Serial responses from sensors or modules.</div>",
      "image": "https://example.com/images/find_syntax.png",
      "audio": "https://example.com/audio/find_syntax.mp3"
    },
    {
      "title": "🌍 Real-World Use — Waiting for GPS Lock",
      "content": "<div class='card'>You’re working with a GPS module that keeps sending NMEA strings via Serial.</div><div class='card'>Use <code>find()</code> to wait until you find the word <code>\"GGA\"</code> which signals GPS fix data:</div><pre><code>if(Serial.find(\"GGA\")) {\n  Serial.println(\"GPS Fix Detected!\");\n}</code></pre>",
      "image": "https://example.com/images/find_gps.png",
      "audio": "https://example.com/audio/find_gps.mp3"
    },
    {
      "title": "📦 Pin & Protocol Context",
      "content": "<div class='card'>This function is used over data streams like <code>Serial</code>, <code>WiFiClient</code>, <code>File</code>, etc.</div><div class='card'>No specific pins are involved — only software data flow.</div>",
      "image": "https://example.com/images/find_context.png",
      "audio": "https://example.com/audio/find_context.mp3"
    },
    {
      "title": "🎮 Mini Game — Can You Find It?",
      "content": "<div class='card'>Which line of code uses <code>find()</code> correctly?</div><ul><li>🅰️ <code>Serial.find(\"DONE\")</code></li><li>🅱️ <code>Serial.findDone()</code></li><li>🆎 <code>find.Serial(\"DONE\")</code></li></ul><button class='gaming-btn' onclick='alert(\"Correct Answer: A — Only this one is valid!\")'>Check Answer</button>",
      "image": "https://example.com/images/find_game.png",
      "audio": "https://example.com/audio/find_game.mp3"
    },
    {
      "title": "📺 YouTube — Watch find() in Action",
      "content": "<div class='card'>See how <code>find()</code> can help you parse sensor data or responses from Bluetooth, GSM, or GPS modules.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/arduino-find-function-demo' title='Arduino find() tutorial' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/find_youtube.png",
      "audio": "https://example.com/audio/find_youtube.mp3"
    }
  ]
}
,{
  "title": "findUntil() — Search Until a Target or Terminator is Found",
  "lessons": [
    {
      "title": "🔎 What is findUntil()?",
      "content": "<div class='card'><code>findUntil()</code> searches for a target string in a stream — but will stop early if a 'terminator' string is found first.</div><div class='card'>Imagine you're reading a book looking for the word “Arduino”… but if you reach “THE END” first, you stop reading. That's how <code>findUntil()</code> works!</div>",
      "image": "https://example.com/images/finduntil_intro.png",
      "audio": "https://example.com/audio/finduntil_intro.mp3"
    },
    {
      "title": "🧪 Syntax & Behavior",
      "content": "<div class='card'><b>Syntax:</b><br><code>stream.findUntil(target, terminator)</code></div><div class='card'><b>Returns:</b> <code>true</code> if <code>target</code> is found before <code>terminator</code>, else <code>false</code>.</div><div class='card'>Very useful when you're reading from sensors, GPS, GSM, or other communication-based devices.</div>",
      "image": "https://example.com/images/finduntil_syntax.png",
      "audio": "https://example.com/audio/finduntil_syntax.mp3"
    },
    {
      "title": "🌐 Real World Example — Serial GSM Response",
      "content": "<div class='card'>Let’s say you’re sending a command to a GSM module, and you're trying to detect <code>\"OK\"</code> in the response.</div><div class='card'>You also want to stop searching if you hit <code>\"ERROR\"</code> instead:</div><pre><code>if(Serial.findUntil(\"OK\", \"ERROR\")) {\n  Serial.println(\"Command accepted!\");\n} else {\n  Serial.println(\"Command failed or error occurred.\");\n}</code></pre>",
      "image": "https://example.com/images/finduntil_gsm.png",
      "audio": "https://example.com/audio/finduntil_example.mp3"
    },
    {
      "title": "🔌 Pin & Hardware Involvement?",
      "content": "<div class='card'>No physical pin is directly used.</div><div class='card'>The function works purely on data coming through <code>Stream</code>-based objects like <code>Serial</code>, <code>WiFiClient</code>, or <code>File</code>.</div>",
      "image": "https://example.com/images/finduntil_context.png",
      "audio": "https://example.com/audio/finduntil_context.mp3"
    },
    {
      "title": "🎮 Mini Game — What Happens?",
      "content": "<div class='card'>What will <code>findUntil(\"READY\", \"FAIL\")</code> do if the stream sends: <br><code>.....FAIL....READY....</code>?</div><ul><li>🅰️ It returns <code>true</code></li><li>🅱️ It returns <code>false</code></li><li>🆎 It throws an error</li></ul><button class='gaming-btn' onclick='alert(\"Correct answer is 🅱️ — Terminator FAIL came first, so READY was never reached.\")'>Check Answer</button>",
      "image": "https://example.com/images/finduntil_game.png",
      "audio": "https://example.com/audio/finduntil_game.mp3"
    },
    {
      "title": "📺 YouTube — findUntil() in Use",
      "content": "<div class='card'>Watch how <code>findUntil()</code> is used in real projects like AT command parsing and response verification from modules like Bluetooth or LoRa.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/arduino-findUntil-demo' title='findUntil() Arduino Tutorial' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/finduntil_youtube.png",
      "audio": "https://example.com/audio/finduntil_youtube.mp3"
    }
  ]
}
,{
  "title": "parseFloat() — Extracting Floating-Point Numbers from Serial Data",
  "lessons": [
    {
      "title": "🔍 What is parseFloat()?",
      "content": "<div class='card'><code>parseFloat()</code> reads characters from a stream (like Serial) and tries to extract a valid floating-point number.</div><div class='card'>It skips any characters that are not digits, decimal points, or signs (like + or -). It stops reading once it sees a non-number character after the number.</div>",
      "image": "https://example.com/images/parseFloat_intro.png",
      "audio": "https://example.com/audio/parseFloat_intro.mp3"
    },
    {
      "title": "🧪 Syntax + Details",
      "content": "<div class='card'><b>Syntax:</b><br><code>stream.parseFloat([lookahead, ignore]);</code></div><div class='card'><b>Returns:</b> The float value read from the stream, or 0.0 if none found.</div><div class='card'><b>Default behavior:</b> Stops reading when a non-numeric character is found.</div>",
      "image": "https://example.com/images/parseFloat_syntax.png",
      "audio": "https://example.com/audio/parseFloat_syntax.mp3"
    },
    {
      "title": "🌍 Real-World Example — Sensor Parsing",
      "content": "<div class='card'>Say your Arduino receives this over Serial:<br><code>temp: 25.7*C</code></div><div class='card'>You can easily extract the value <code>25.7</code> like this:</div><pre><code>float temperature = Serial.parseFloat();</code></pre><div class='card'>This is useful for parsing sensor data, API responses, Bluetooth commands, etc.</div>",
      "image": "https://example.com/images/parseFloat_sensor.png",
      "audio": "https://example.com/audio/parseFloat_sensor.mp3"
    },
    {
      "title": "🔧 Additional Options",
      "content": "<div class='card'>You can configure the timeout using <code>setTimeout()</code> before calling <code>parseFloat()</code>. This defines how long the function waits for data before giving up.</div><div class='card'>Example: <code>Serial.setTimeout(1000);</code></div>",
      "image": "https://example.com/images/parseFloat_timeout.png",
      "audio": "https://example.com/audio/parseFloat_timeout.mp3"
    },
    {
      "title": "🧩 Pin Usage",
      "content": "<div class='card'><code>parseFloat()</code> doesn’t use any pin directly. It simply works with stream-based data like Serial, Bluetooth, or Wi-Fi modules.</div>",
      "image": "https://example.com/images/parseFloat_pins.png",
      "audio": "https://example.com/audio/parseFloat_pins.mp3"
    },
    {
      "title": "🎮 Mini Game — Can You Parse It?",
      "content": "<div class='card'>Input: <code>abc12.34xyz</code><br>What does <code>parseFloat()</code> return?</div><ul><li>🅰️ 0.0</li><li>🅱️ 12.34</li><li>🆎 Error</li></ul><button class='gaming-btn' onclick='alert(\"Correct! It returns 🅱️ 12.34\")'>Check Answer</button>",
      "image": "https://example.com/images/parseFloat_game.png",
      "audio": "https://example.com/audio/parseFloat_game.mp3"
    },
    {
      "title": "📺 YouTube — Extract Floats Easily!",
      "content": "<div class='card'>Watch a real-world demo where Arduino extracts float values from a GPS or sensor data stream.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/arduino-parsefloat-demo' title='parseFloat() Arduino Tutorial' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/parseFloat_youtube.png",
      "audio": "https://example.com/audio/parseFloat_youtube.mp3"
    }
  ]
}
,{
  "title": "parseInt() — Extracting Integer Values from Serial",
  "lessons": [
    {
      "title": "🔍 What is parseInt()?",
      "content": "<div class='card'><code>parseInt()</code> reads characters from a stream and tries to return the first valid <b>integer (whole number)</b> it finds.</div><div class='card'>It skips anything that's not a number and stops reading when a non-numeric character is reached. Perfect for extracting numbers from mixed data like <code>\"Temp:23C\"</code>.</div>",
      "image": "https://example.com/images/parseInt_intro.png",
      "audio": "https://example.com/audio/parseInt_intro.mp3"
    },
    {
      "title": "🧪 Syntax & Default Behavior",
      "content": "<div class='card'><b>Syntax:</b><br><code>stream.parseInt();</code></div><div class='card'><b>Returns:</b> The first valid integer found in the stream (e.g. Serial input).</div><div class='card'><b>Stops:</b> When it hits a non-numeric character.</div><div class='card'>You can use <code>setTimeout()</code> to limit how long it waits for input.</div>",
      "image": "https://example.com/images/parseInt_syntax.png",
      "audio": "https://example.com/audio/parseInt_syntax.mp3"
    },
    {
      "title": "🌍 Real-World Example — Receiving Settings",
      "content": "<div class='card'>Let’s say your Arduino receives <code>\"speed=120!\"</code> over Bluetooth. You want to extract <code>120</code> from that.</div><div class='card'>Just use: <code>int speed = Serial.parseInt();</code><br>Now speed = 120!</div><div class='card'>Super useful when receiving data from sensors, apps, or user input.</div>",
      "image": "https://example.com/images/parseInt_realworld.png",
      "audio": "https://example.com/audio/parseInt_realworld.mp3"
    },
    {
      "title": "🧩 What About Timeout?",
      "content": "<div class='card'>By default, <code>parseInt()</code> will wait up to 1 second (1000ms) for new characters before giving up.</div><div class='card'>You can change this using: <code>Serial.setTimeout(500);</code> to only wait half a second.</div>",
      "image": "https://example.com/images/parseInt_timeout.png",
      "audio": "https://example.com/audio/parseInt_timeout.mp3"
    },
    {
      "title": "📦 Pin Usage?",
      "content": "<div class='card'><code>parseInt()</code> doesn’t use any hardware pins. It just works on whatever data comes in through <code>Serial</code>, Bluetooth, Wi-Fi, etc.</div>",
      "image": "https://example.com/images/parseInt_pins.png",
      "audio": "https://example.com/audio/parseInt_pins.mp3"
    },
    {
      "title": "🎮 Mini Game — What’s the Result?",
      "content": "<div class='card'>If Serial receives: <code>\"abc45x78\"</code><br>What does <code>Serial.parseInt()</code> return?</div><ul><li>🔢 A. 0</li><li>🔢 B. 45</li><li>🔢 C. 4578</li></ul><button class='gaming-btn' onclick='alert(\"Correct! It returns B — 45\")'>Check Answer</button>",
      "image": "https://example.com/images/parseInt_game.png",
      "audio": "https://example.com/audio/parseInt_game.mp3"
    },
    {
      "title": "📺 YouTube — Parsing Ints in Action",
      "content": "<div class='card'>See <code>parseInt()</code> being used in real-time projects like keypad input and sensor data reading.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/arduino-parseint' title='parseInt Arduino Tutorial' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/parseInt_youtube.png",
      "audio": "https://example.com/audio/parseInt_youtube.mp3"
    }
  ]
}
,{
  "title": "parseInt() — Extracting Integer Values from Serial",
  "lessons": [
    {
      "title": "🔍 What is parseInt()?",
      "content": "<div class='card'><code>parseInt()</code> reads characters from a stream and tries to return the first valid <b>integer (whole number)</b> it finds.</div><div class='card'>It skips anything that's not a number and stops reading when a non-numeric character is reached. Perfect for extracting numbers from mixed data like <code>\"Temp:23C\"</code>.</div>",
      "image": "https://example.com/images/parseInt_intro.png",
      "audio": "https://example.com/audio/parseInt_intro.mp3"
    },
    {
      "title": "🧪 Syntax & Default Behavior",
      "content": "<div class='card'><b>Syntax:</b><br><code>stream.parseInt();</code></div><div class='card'><b>Returns:</b> The first valid integer found in the stream (e.g. Serial input).</div><div class='card'><b>Stops:</b> When it hits a non-numeric character.</div><div class='card'>You can use <code>setTimeout()</code> to limit how long it waits for input.</div>",
      "image": "https://example.com/images/parseInt_syntax.png",
      "audio": "https://example.com/audio/parseInt_syntax.mp3"
    },
    {
      "title": "🌍 Real-World Example — Receiving Settings",
      "content": "<div class='card'>Let’s say your Arduino receives <code>\"speed=120!\"</code> over Bluetooth. You want to extract <code>120</code> from that.</div><div class='card'>Just use: <code>int speed = Serial.parseInt();</code><br>Now speed = 120!</div><div class='card'>Super useful when receiving data from sensors, apps, or user input.</div>",
      "image": "https://example.com/images/parseInt_realworld.png",
      "audio": "https://example.com/audio/parseInt_realworld.mp3"
    },
    {
      "title": "🧩 What About Timeout?",
      "content": "<div class='card'>By default, <code>parseInt()</code> will wait up to 1 second (1000ms) for new characters before giving up.</div><div class='card'>You can change this using: <code>Serial.setTimeout(500);</code> to only wait half a second.</div>",
      "image": "https://example.com/images/parseInt_timeout.png",
      "audio": "https://example.com/audio/parseInt_timeout.mp3"
    },
    {
      "title": "📦 Pin Usage?",
      "content": "<div class='card'><code>parseInt()</code> doesn’t use any hardware pins. It just works on whatever data comes in through <code>Serial</code>, Bluetooth, Wi-Fi, etc.</div>",
      "image": "https://example.com/images/parseInt_pins.png",
      "audio": "https://example.com/audio/parseInt_pins.mp3"
    },
    {
      "title": "🎮 Mini Game — What’s the Result?",
      "content": "<div class='card'>If Serial receives: <code>\"abc45x78\"</code><br>What does <code>Serial.parseInt()</code> return?</div><ul><li>🔢 A. 0</li><li>🔢 B. 45</li><li>🔢 C. 4578</li></ul><button class='gaming-btn' onclick='alert(\"Correct! It returns B — 45\")'>Check Answer</button>",
      "image": "https://example.com/images/parseInt_game.png",
      "audio": "https://example.com/audio/parseInt_game.mp3"
    },
    {
      "title": "📺 YouTube — Parsing Ints in Action",
      "content": "<div class='card'>See <code>parseInt()</code> being used in real-time projects like keypad input and sensor data reading.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/arduino-parseint' title='parseInt Arduino Tutorial' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/parseInt_youtube.png",
      "audio": "https://example.com/audio/parseInt_youtube.mp3"
    }
  ]
}
,{
  "title": "readBytes() — Grab a Whole Block of Data in One Go",
  "lessons": [
    {
      "title": "📦 What is readBytes()?",
      "content": "<div class='card'><code>readBytes()</code> reads multiple bytes from the serial buffer and stores them into a character array.</div><div class='card'>It’s like scooping up a bunch of letters from the mailbox in one move instead of one at a time.</div><div class='card'>Great when you already know how many characters you expect — like reading a 6-digit OTP, or 10 characters from a sensor.</div>",
      "image": "https://example.com/images/readbytes_intro.png",
      "audio": "https://example.com/audio/readbytes_intro.mp3"
    },
    {
      "title": "🔤 Syntax",
      "content": "<div class='card'><code>stream.readBytes(buffer, length)</code></div><div class='card'>📌 <code>buffer</code> = an array where incoming characters will be stored.<br>📌 <code>length</code> = the number of characters to read.</div><div class='card'>The function returns the actual number of characters read (could be less if timeout hits).</div>",
      "image": "https://example.com/images/readbytes_syntax.png",
      "audio": "https://example.com/audio/readbytes_syntax.mp3"
    },
    {
      "title": "📖 Example — Reading 6 Characters",
      "content": "<div class='card'>This reads 6 characters from Serial and prints them as a word:</div><pre><code>char word[7];\nSerial.readBytes(word, 6);\nword[6] = '\\0'; // Null-terminate\nSerial.println(word);</code></pre>",
      "image": "https://example.com/images/readbytes_example.png",
      "audio": "https://example.com/audio/readbytes_example.mp3"
    },
    {
      "title": "📌 When Should You Use readBytes()?",
      "content": "<div class='card'>✅ When you’re expecting a fixed number of characters.<br>✅ When you want to store data into an array for string parsing.<br>✅ When timing is important — this function waits only for a set timeout.</div>",
      "image": "https://example.com/images/readbytes_usecase.png",
      "audio": "https://example.com/audio/readbytes_usecase.mp3"
    },
    {
      "title": "⏱️ Timeout Behavior",
      "content": "<div class='card'>If fewer bytes are received before the timeout, <code>readBytes()</code> gives you whatever it got.</div><div class='card'>Use <code>setTimeout(ms)</code> to control how long it waits!</div>",
      "image": "https://example.com/images/readbytes_timeout.png",
      "audio": "https://example.com/audio/readbytes_timeout.mp3"
    },
    {
      "title": "🔌 Pins Used",
      "content": "<div class='card'>Like other serial functions, <code>readBytes()</code> works on UART pins:<br>TX (transmit) → Digital pin 1<br>RX (receive) → Digital pin 0 (on Uno)</div><div class='card'>You don't need to do anything manually with these pins unless connecting external devices.</div>",
      "image": "https://example.com/images/readbytes_pins.png",
      "audio": "https://example.com/audio/readbytes_pins.mp3"
    },
    {
      "title": "🎮 Mini Game — Spot the Bug!",
      "content": "<div class='card'>What’s wrong with this code?</div><pre><code>char name[5];\nSerial.readBytes(name, 5);\nSerial.println(name);</code></pre><ul><li>🅰 No bug</li><li>🅱 Forgot null terminator</li><li>🅲 Used wrong pins</li></ul><button class='gaming-btn' onclick='alert(\"✅ Correct: Option B — you must add name[5] = '\\0'; to safely print\")'>Check Answer</button>",
      "image": "https://example.com/images/readbytes_game.png",
      "audio": "https://example.com/audio/readbytes_game.mp3"
    },
    {
      "title": "📺 YouTube — Mastering readBytes() in Arduino",
      "content": "<div class='card'>Watch a real-world demo of <code>readBytes()</code> used to receive serial messages in blocks.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/arduino-readbytes' title='Arduino readBytes Tutorial' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/youtube_readbytes.png",
      "audio": "https://example.com/audio/youtube_readbytes.mp3"
    }
  ]
}
,{
  "title": "readBytesUntil() — Read Until You Hit a Stop Character",
  "lessons": [
    {
      "title": "📘 What is readBytesUntil()?",
      "content": "<div class='card'><code>readBytesUntil()</code> is a powerful Serial function that reads incoming characters into a buffer <b>until a specific terminator character</b> is found or the timeout is reached.</div><div class='card'>It’s like asking your friend to speak until they say the word \"STOP\" — and you write everything down until then!</div>",
      "image": "https://example.com/images/readbytesuntil_intro.png",
      "audio": "https://example.com/audio/readbytesuntil_intro.mp3"
    },
    {
      "title": "🔤 Syntax & Usage",
      "content": "<div class='card'><code>stream.readBytesUntil(character, buffer, length)</code></div><div class='card'><b>📌 character:</b> The stop byte (like '\\n', a newline).<br><b>📌 buffer:</b> Where incoming data will be saved.<br><b>📌 length:</b> Max number of bytes to read.</div><div class='card'>It returns the number of characters read, not including the terminator.</div>",
      "image": "https://example.com/images/readbytesuntil_syntax.png",
      "audio": "https://example.com/audio/readbytesuntil_syntax.mp3"
    },
    {
      "title": "🛠 Real Example — Read Until Newline",
      "content": "<div class='card'>This example reads up to 20 characters until it sees a newline <code>\\n</code>:</div><pre><code>char msg[21];\nSerial.readBytesUntil('\\n', msg, 20);\nmsg[20] = '\\0';\nSerial.println(msg);</code></pre><div class='card'>The newline is <b>NOT</b> stored in the buffer!</div>",
      "image": "https://example.com/images/readbytesuntil_example.png",
      "audio": "https://example.com/audio/readbytesuntil_example.mp3"
    },
    {
      "title": "⏳ Timeout Behavior",
      "content": "<div class='card'>If the terminator character isn't found in time, the function still returns what it got so far.</div><div class='card'>Control how long it waits with <code>Serial.setTimeout(ms)</code> — default is 1000 ms.</div>",
      "image": "https://example.com/images/readbytesuntil_timeout.png",
      "audio": "https://example.com/audio/readbytesuntil_timeout.mp3"
    },
    {
      "title": "📦 When to Use It?",
      "content": "<div class='card'>✅ Receiving sensor data lines that end with '\\n'<br>✅ Parsing CSV data from GPS or Bluetooth modules<br>✅ Reading strings from PC over Serial Monitor</div>",
      "image": "https://example.com/images/readbytesuntil_usecase.png",
      "audio": "https://example.com/audio/readbytesuntil_usecase.mp3"
    },
    {
      "title": "🔌 Hardware Pins Involved",
      "content": "<div class='card'>All Serial functions use these default hardware pins on Arduino Uno:<br>📤 TX → Digital Pin 1<br>📥 RX → Digital Pin 0</div><div class='card'>If you're using a different board or software serial, the pins change accordingly.</div>",
      "image": "https://example.com/images/readbytesuntil_pins.png",
      "audio": "https://example.com/audio/readbytesuntil_pins.mp3"
    },
    {
      "title": "💡 Real-World Example — Bluetooth Message Reader",
      "content": "<div class='card'>Many Bluetooth modules like HC-05 send messages terminated by newline <code>\\n</code>.</div><div class='card'>You can use <code>readBytesUntil('\\n')</code> to receive full commands from your phone.</div><pre><code>char cmd[50];\nSerial.readBytesUntil('\\n', cmd, 49);\ncmd[49] = '\\0';\nif (strcmp(cmd, \"ON\") == 0) digitalWrite(LED_BUILTIN, HIGH);</code></pre>",
      "image": "https://example.com/images/readbytesuntil_bt.png",
      "audio": "https://example.com/audio/readbytesuntil_bt.mp3"
    },
    {
      "title": "🎮 Mini Quiz — Terminator Trouble",
      "content": "<div class='card'>What happens if <code>readBytesUntil()</code> never finds the terminator character?</div><ul><li>🅰️ It returns an error.</li><li>🅱️ It returns the full buffer.</li><li>🅲 It returns what was read before timeout.</li></ul><button class='gaming-btn' onclick='alert(\"✅ Correct: Option C — it returns what was read before the timeout!\")'>Check Answer</button>",
      "image": "https://example.com/images/readbytesuntil_quiz.png",
      "audio": "https://example.com/audio/readbytesuntil_quiz.mp3"
    },
    {
      "title": "📺 YouTube — Mastering readBytesUntil()",
      "content": "<div class='card'>Visual demo: see how <code>readBytesUntil()</code> helps read Bluetooth or Serial data clearly.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/arduino-readbytesuntil-demo' title='Arduino readBytesUntil Tutorial' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/readbytesuntil_youtube.png",
      "audio": "https://example.com/audio/readbytesuntil_youtube.mp3"
    }
  ]
}
,{
  "title": "readString() — Reading Full Strings with Ease",
  "lessons": [
    {
      "title": "📖 What is readString()?",
      "content": "<div class='card'><code>readString()</code> is a function that reads characters from a serial stream into a String until a timeout happens.</div><div class='card'>It’s useful when you want to read a whole sentence or command sent from Serial Monitor, Bluetooth, or another device.</div><div class='card'>If you’ve used <code>read()</code> or <code>readBytes()</code> before, this is like a more friendly version that returns a <code>String</code> object instead of a character array.</div>"
    },
    {
      "title": "🔠 Syntax",
      "content": "<div class='card'><code>myStream.readString();</code></div><div class='card'>Returns a <b>String</b> that includes all the characters read before a timeout.</div><div class='card'>⚠️ Unlike <code>readBytesUntil()</code>, it doesn’t wait for a specific terminator — it just waits until timeout.</div>"
    },
    {
      "title": "🔌 Which Pins Are Used?",
      "content": "<div class='card'>It uses serial pins by default:<br>📥 RX → Pin 0<br>📤 TX → Pin 1</div><div class='card'>If you're using <code>SoftwareSerial</code>, the pins change as per your setup.</div>"
    },
    {
      "title": "🎯 Real World Use Case — Serial Command Receiver",
      "content": "<div class='card'>Imagine sending a command like <code>LED_ON</code> from a mobile app to Arduino via Bluetooth.</div><div class='card'>You can easily read the full message with <code>readString()</code> and act on it:</div><pre><code>String command = Serial.readString();\nif (command == \"LED_ON\") {\n  digitalWrite(13, HIGH);\n}</code></pre>"
    },
    {
      "title": "⏱ Controlling Timeout",
      "content": "<div class='card'>By default, <code>readString()</code> waits for 1000 milliseconds (1 second).</div><div class='card'>You can change this using <code>setTimeout()</code>:</div><pre><code>Serial.setTimeout(3000); // 3 seconds</code></pre>"
    },
    {
      "title": "🎮 Mini Game — Timeout Trap",
      "content": "<div class='card'>You have 2 seconds timeout. A message arrives in 3 seconds. Will <code>readString()</code> capture it?</div><ul><li>A. Yes</li><li>B. No</li><li>C. Only partial message</li></ul><button class='gaming-btn' onclick='alert(\"✅ Correct: B — it won’t wait long enough to receive it!\")'>Check Answer</button>"
    },
    {
      "title": "📺 YouTube — readString() Demo with Bluetooth",
      "content": "<div class='card'>Watch a real-time demo of receiving full commands from a mobile Bluetooth app using <code>readString()</code>.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/readstring-arduino-demo' title='readString Arduino Demo' frameborder='0' allowfullscreen></iframe>"
    }
  ]
}
,{
  "title": "readStringUntil() — Read Until You Hit the Mark!",
  "lessons": [
    {
      "title": "🎯 What is readStringUntil()?",
      "content": "<div class='card'><code>readStringUntil()</code> is used to read a stream of characters from Serial until a specific character (like a comma or newline) is found — or until the timeout hits.</div><div class='card'>It returns a <b>String</b> containing all the characters read <b>before the terminator</b>.</div><div class='card'>Super useful when you're dealing with CSV data, sensor commands, or values separated by symbols.</div>"
    },
    {
      "title": "📚 Syntax + Explanation",
      "content": "<div class='card'><code>Serial.readStringUntil(char terminator);</code></div><div class='card'><b>Example:</b><br><code>Serial.readStringUntil('\\n');</code> — Reads everything until a newline character.</div><div class='card'>Returns a String (without including the terminator itself).</div>"
    },
    {
      "title": "🔌 Pin Usage",
      "content": "<div class='card'>This function uses Serial pins:</div><ul><li>📥 RX (Receive) — Pin 0</li><li>📤 TX (Transmit) — Pin 1</li></ul><div class='card'>You can also use it on any SoftwareSerial stream.</div>"
    },
    {
      "title": "🛠 Real-World Example — CSV Reader",
      "content": "<div class='card'>Let's say a sensor sends this over serial: <code>23.4,78.5,45.2</code></div><div class='card'>You can break it using <code>readStringUntil(',')</code> like this:</div><pre><code>String temp = Serial.readStringUntil(',');\nString humidity = Serial.readStringUntil(',');\nString pressure = Serial.readStringUntil('\\n');</code></pre>"
    },
    {
      "title": "🧠 Where & When Should You Use It?",
      "content": "<div class='card'>Use <code>readStringUntil()</code> when:</div><ul><li>💬 You're receiving data separated by a consistent character (like commas)</li><li>📩 You want to cleanly split commands, sentences, or sensor readings</li><li>⏲ You want to avoid waiting forever — it stops at timeout if terminator isn't found</li></ul>"
    },
    {
      "title": "🎮 Mini Game — Pick the Terminator!",
      "content": "<div class='card'>What’s the best terminator for splitting this line: <code>LED_ON;TEMP:23.5;HUM:56.0</code>?</div><ul><li>A. ';'</li><li>B. ':'</li><li>C. 'O'</li></ul><button class='gaming-btn' onclick='alert(\"✅ Correct Answer: A — each section is divided by semicolons!\")'>Check Answer</button>"
    },
    {
      "title": "📺 YouTube — readStringUntil() In Action",
      "content": "<div class='card'>Watch how <code>readStringUntil()</code> is used to split CSV-style data from sensors in real-time Arduino projects.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/readstringuntil-demo' title='readStringUntil Arduino Demo' frameborder='0' allowfullscreen></iframe>"
    }
  ]
}
,{
  "title": "setTimeout() — Setting Patience Limits for Serial!",
  "lessons": [
    {
      "title": "⏳ What is setTimeout()?",
      "content": "<div class='card'><code>setTimeout()</code> sets how long Arduino should wait (in milliseconds) for Serial functions like <code>readString()</code>, <code>parseInt()</code>, or <code>readBytes()</code> before giving up.</div><div class='card'>It’s like saying, “Hey Arduino, don’t wait forever! If the data doesn’t come in X milliseconds, just move on.”</div><div class='card'>This is very helpful in projects where speed matters or where incoming data may be missing or delayed.</div>"
    },
    {
      "title": "📚 Syntax + How It Works",
      "content": "<div class='card'><code>Serial.setTimeout(ms);</code></div><div class='card'><b>Parameter:</b> <code>ms</code> is the time in milliseconds to wait before timing out.</div><div class='card'><b>Example:</b><br><code>Serial.setTimeout(5000);</code> — Sets a timeout of 5 seconds for all relevant Serial reads.</div>"
    },
    {
      "title": "🔌 Pin Usage",
      "content": "<div class='card'><b>Serial.setTimeout()</b> works with the Serial communication pins:</div><ul><li>📥 RX (Receive) — Pin 0</li><li>📤 TX (Transmit) — Pin 1</li></ul><div class='card'>Or any software serial stream. It's purely a software-side delay control.</div>"
    },
    {
      "title": "🌐 Real-World Example — Temperature Sensor",
      "content": "<div class='card'>Say your Arduino is receiving temperature from another board over Serial, but sometimes the connection is unstable.</div><div class='card'>Using <code>setTimeout(3000)</code> makes sure it doesn’t freeze forever waiting for missing data.</div><pre><code>Serial.setTimeout(3000);\nString temp = Serial.readStringUntil('\\n');\nif (temp.length() == 0) {\n  Serial.println(\"⚠️ No data received!\");\n} else {\n  Serial.println(\"🌡 Temp: \" + temp);\n}</code></pre>"
    },
    {
      "title": "📦 When Should You Use It?",
      "content": "<div class='card'>Use <code>setTimeout()</code> when:</div><ul><li>💤 Your Serial functions are hanging due to no input</li><li>📡 You're reading from unreliable sources (like wireless modules)</li><li>⏲ You need quick failover when no response is available</li></ul>"
    },
    {
      "title": "🎮 Mini Quiz — Timeout Scenario",
      "content": "<div class='card'>Your sensor takes 2 seconds to send data. What timeout is best?</div><ul><li>🔴 A. 500ms</li><li>🟠 B. 2000ms</li><li>🟢 C. 10000ms</li></ul><button class='gaming-btn' onclick='alert(\"✅ Correct! B — 2000ms gives the sensor time but doesn’t hang forever.\")'>Check Answer</button>"
    },
    {
      "title": "📺 YouTube — Visual Guide to Timeouts",
      "content": "<div class='card'>Watch a visual demo showing how timeouts affect <code>readString()</code> and how to optimize them for real-world applications.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/settimeout-arduino-demo' title='Arduino setTimeout() Explained' frameborder='0' allowfullscreen></iframe>"
    }
  ]
}

      ]
    },{
      title:"Wire (I2C Communication)",
      modules:[
        {
  "title": "Wire & I2C — Mastering Multi-Device Communication",
  "lessons": [
    {
      "title": "📡 What is Wire Library in Arduino?",
      "content": "<div class='card'>The <code>Wire</code> library lets Arduino boards communicate with each other or with sensors, displays, RTC modules, etc. using the <b>I2C protocol</b>.</div><div class='card'>It’s like a group chat — one master (Arduino) talks to many devices (slaves) using just two wires!</div>",
      "image": "https://example.com/images/i2c_overview.png",
      "audio": "https://example.com/audio/i2c_intro.mp3"
    },
    {
      "title": "🔗 What is I2C (Inter-Integrated Circuit)?",
      "content": "<div class='card'><b>I2C</b> stands for <b>Inter-Integrated Circuit</b>. It's a serial communication protocol designed for connecting multiple devices using just 2 pins.</div><div class='card'><ul><li><b>SDA (Serial Data)</b> — Carries the data</li><li><b>SCL (Serial Clock)</b> — Provides the timing for the data</li></ul></div><div class='card'>It uses 7-bit addresses to identify devices. One master can control up to 127 devices!</div>",
      "image": "https://example.com/images/sda_scl.png",
      "audio": "https://example.com/audio/i2c_basics.mp3"
    },
    {
      "title": "🔍 How is I2C Different from Serial or UART?",
      "content": "<div class='card'><b>Serial (UART)</b> uses 2 wires too — TX and RX — but it is for <i>point-to-point</i> communication only (1-to-1).</div><div class='card'><b>I2C</b> allows 1-to-many communication (1 master to many slaves) using <b>just two wires</b> shared across all devices.</div><div class='card'>Think of UART as a 1-on-1 phone call, while I2C is a group Zoom meeting.</div>",
      "image": "https://example.com/images/i2c_vs_uart.png",
      "audio": "https://example.com/audio/i2c_vs_uart.mp3"
    },
    {
      "title": "🌍 Real-World Applications",
      "content": "<div class='card'>I2C is used everywhere:</div><ul><li>📷 Camera modules</li><li>🕒 Real-time clocks (DS3231)</li><li>📱 OLED displays (SSD1306)</li><li>🌡 Environmental sensors (BME280)</li><li>🧠 External EEPROM chips</li></ul><div class='card'>You can chain multiple modules with different addresses to make complex systems using just two wires.</div>",
      "image": "https://example.com/images/i2c_devices.png",
      "audio": "https://example.com/audio/i2c_applications.mp3"
    },
    {
      "title": "🧪 Wiring Example — Arduino + OLED",
      "content": "<div class='card'>Let’s say you’re connecting a 0.96” OLED screen to Arduino using I2C:</div><ul><li>SDA → A4 (Uno/Nano)</li><li>SCL → A5 (Uno/Nano)</li></ul><div class='card'><pre><code>#include &lt;Wire.h&gt;\n\nvoid setup() {\n  Wire.begin();\n  Serial.begin(9600);\n  Serial.println(\"I2C Ready\");\n}\n\nvoid loop() {\n  // Ready for communication\n}</code></pre></div>",
      "image": "https://example.com/images/oled_i2c_wiring.png",
      "audio": "https://example.com/audio/i2c_wiring.mp3"
    },
    {
      "title": "🎮 Mini Game — Guess the Bus",
      "content": "<div class='card'>Which protocol is best for connecting 5 sensors using just 2 wires?</div><ul><li>🟢 A. I2C</li><li>🔴 B. UART</li><li>🔴 C. SPI</li></ul><button class='gaming-btn' onclick='alert(\"Correct! 🟢 A. I2C is perfect for multiple devices on two wires!\")'>Check Answer</button>",
      "image": "https://example.com/images/i2c_game.png",
      "audio": "https://example.com/audio/i2c_game.mp3"
    },
    {
      "title": "📺 YouTube — I2C Visual Demo",
      "content": "<div class='card'>Watch this video to see I2C in action with multiple devices and only 2 wires!</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/3VJ2kL5s6dI' title='I2C Explained Visually' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/i2c_youtube.png",
      "audio": "https://example.com/audio/i2c_youtube.mp3"
    }
  ]
}
,{
  "title": "Wire.begin() — Starting the I2C Engine",
  "lessons": [
    {
      "title": "🚀 What is Wire.begin()?",
      "content": "<div class='card'><code>Wire.begin()</code> is used to <b>initialize the I2C communication</b> on your Arduino board.</div><div class='card'>It prepares the board to act as a <b>master or slave</b> device — depending on whether an address is passed as a parameter.</div>",
      "image": "https://example.com/images/wire_begin_what.png",
      "audio": "https://example.com/audio/wire_begin_intro.mp3"
    },
    {
      "title": "🧪 Syntax + Modes",
      "content": "<div class='card'>There are two main forms of this function:</div><pre><code>Wire.begin();</code></pre><div class='card'>🔹 Used when Arduino is the <b>Master</b></div><pre><code>Wire.begin(address);</code></pre><div class='card'>🔹 Used when Arduino is the <b>Slave</b>, with its address specified (e.g., <code>Wire.begin(8);</code>)</div>",
      "image": "https://example.com/images/wire_begin_syntax.png",
      "audio": "https://example.com/audio/wire_begin_syntax.mp3"
    },
    {
      "title": "🧠 Master vs Slave",
      "content": "<div class='card'><b>Master</b> devices initiate and control communication. Usually, Arduino acts as master.</div><div class='card'><b>Slave</b> devices listen and respond to the master. Each must have a unique address between 1 and 127.</div><div class='card'>Multiple slaves can be connected using just SDA & SCL lines.</div>",
      "image": "https://example.com/images/master_vs_slave.png",
      "audio": "https://example.com/audio/master_slave.mp3"
    },
    {
      "title": "⚙️ Wiring — Where is SDA & SCL?",
      "content": "<div class='card'><b>UNO/Nano</b>: SDA = A4, SCL = A5<br><b>MEGA</b>: SDA = 20, SCL = 21<br><b>ESP32</b>: Default pins vary, but customizable</div><div class='card'>Connect all SDA lines together and all SCL lines together across devices.</div>",
      "image": "https://example.com/images/sda_scl_pinout.png",
      "audio": "https://example.com/audio/wire_begin_pins.mp3"
    },
    {
      "title": "🧰 Real-World Example — Master Mode",
      "content": "<div class='card'>Let's initialize the Arduino as a master and send data to a slave:</div><pre><code>#include &lt;Wire.h&gt;\n\nvoid setup() {\n  Wire.begin(); // Master mode\n  Serial.begin(9600);\n  Wire.beginTransmission(8);\n  Wire.write(\"Hello slave\");\n  Wire.endTransmission();\n}</code></pre>",
      "image": "https://example.com/images/wire_master.png",
      "audio": "https://example.com/audio/wire_master_example.mp3"
    },
    {
      "title": "📥 Real-World Example — Slave Mode",
      "content": "<div class='card'>To make Arduino a slave:</div><pre><code>#include &lt;Wire.h&gt;\n\nvoid setup() {\n  Wire.begin(8); // Slave with address 8\n  Wire.onReceive(receiveEvent);\n  Serial.begin(9600);\n}\n\nvoid receiveEvent(int bytes) {\n  while(Wire.available()) {\n    char c = Wire.read();\n    Serial.print(c);\n  }\n}</code></pre>",
      "image": "https://example.com/images/wire_slave.png",
      "audio": "https://example.com/audio/wire_slave_example.mp3"
    },
    {
      "title": "🎮 Mini Game — Master or Slave?",
      "content": "<div class='card'>Identify whether the given code snippet makes the Arduino a master or slave:</div><pre><code>Wire.begin(5);</code></pre><ul><li>🟢 A. Slave</li><li>🔴 B. Master</li></ul><button class='gaming-btn' onclick='alert(\"✅ Correct! Wire.begin(5) makes it a slave with address 5.\")'>Check Answer</button>",
      "image": "https://example.com/images/wire_game.png",
      "audio": "https://example.com/audio/wire_game.mp3"
    },
    {
      "title": "📺 YouTube — Wire.begin() Visual Guide",
      "content": "<div class='card'>Watch this complete setup of master and slave I2C devices using Wire.begin()</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/i2c-wire-begin-tutorial' title='Wire.begin Explained' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/wire_youtube.png",
      "audio": "https://example.com/audio/wire_youtube.mp3"
    }
  ]
}
,{
  "title": "Wire.end() — Stopping the I2C Communication",
  "lessons": [
    {
      "title": "🛑 What is Wire.end()?",
      "content": "<div class='card'><code>Wire.end()</code> is used to <b>terminate the I2C communication</b> that was previously started using <code>Wire.begin()</code>.</div><div class='card'>It disables the I2C hardware and frees the SDA and SCL pins, making them usable for other tasks in your program.</div>",
      "image": "https://example.com/images/wire_end_what.png",
      "audio": "https://example.com/audio/wire_end_intro.mp3"
    },
    {
      "title": "🔧 Syntax",
      "content": "<div class='card'><code>Wire.end();</code></div><div class='card'>It has no parameters and simply ends the I2C session on the microcontroller.</div>",
      "image": "https://example.com/images/wire_end_syntax.png",
      "audio": "https://example.com/audio/wire_end_syntax.mp3"
    },
    {
      "title": "💡 Why & When To Use It?",
      "content": "<div class='card'>You should use <code>Wire.end()</code> when:</div><ul><li>You are done communicating with I2C devices</li><li>You want to switch to a different protocol (like SPI)</li><li>You want to use SDA/SCL pins as regular digital I/O</li><li>You are switching between different I2C devices dynamically</li></ul>",
      "image": "https://example.com/images/wire_end_why.png",
      "audio": "https://example.com/audio/wire_end_why.mp3"
    },
    {
      "title": "🔁 I2C Pin Usage After Wire.end()",
      "content": "<div class='card'>After calling <code>Wire.end()</code>, the SDA and SCL pins become regular digital I/O.</div><div class='card'>You can use <code>pinMode()</code>, <code>digitalWrite()</code>, etc., on them.</div>",
      "image": "https://example.com/images/wire_end_pins.png",
      "audio": "https://example.com/audio/wire_end_pins.mp3"
    },
    {
      "title": "🧪 Real-World Example — Freeing SDA/SCL",
      "content": "<div class='card'>Example: You want to stop using an I2C sensor and turn the pins into LED control pins.</div><pre><code>#include &lt;Wire.h&gt;\n\nvoid setup() {\n  Wire.begin();\n  delay(2000);\n  Wire.end();\n  pinMode(A4, OUTPUT); // A4 is SDA on UNO\n  pinMode(A5, OUTPUT); // A5 is SCL on UNO\n  digitalWrite(A4, HIGH);\n  digitalWrite(A5, HIGH);\n}</code></pre>",
      "image": "https://example.com/images/wire_end_code.png",
      "audio": "https://example.com/audio/wire_end_code.mp3"
    },
    {
      "title": "🎮 Mini Game — Should You End It?",
      "content": "<div class='card'>After you have initialized I2C communication and finished reading sensor data, do you need to call <code>Wire.end()</code>?</div><ul><li>🔘 A. Always</li><li>✅ B. Only if you're switching functionality or saving power</li><li>🔘 C. Never</li></ul><button class='gaming-btn' onclick='alert(\"Correct! Use Wire.end() only when you're done using I2C or want to repurpose the pins.\")'>Check Answer</button>",
      "image": "https://example.com/images/wire_end_game.png",
      "audio": "https://example.com/audio/wire_end_game.mp3"
    },
    {
      "title": "📺 YouTube — When To Use Wire.end()",
      "content": "<div class='card'>Here's a full demo on dynamically switching SDA/SCL between I2C and general I/O:</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/i2c-wire-end' title='Wire.end Explained' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/wire_end_youtube.png",
      "audio": "https://example.com/audio/wire_end_youtube.mp3"
    }
  ]
}
,{
  "title": "Wire.requestFrom() — Asking Data from an I2C Device",
  "lessons": [
    {
      "title": "🔍 What is Wire.requestFrom()?",
      "content": "<div class='card'><code>Wire.requestFrom()</code> is used by an I2C Master to <b>ask for data</b> from a Slave device.</div><div class='card'>For example, if you're using an I2C temperature sensor, your Arduino (Master) will request data from that sensor (Slave) using this function.</div>",
      "image": "https://example.com/images/requestfrom_what.png",
      "audio": "https://example.com/audio/requestfrom_intro.mp3"
    },
    {
      "title": "📚 Syntax",
      "content": "<div class='card'><pre><code>Wire.requestFrom(address, quantity);\nWire.requestFrom(address, quantity, stop);</code></pre></div><div class='card'>• <code>address</code>: I2C address of the slave (usually 0x00 to 0x7F)<br>• <code>quantity</code>: Number of bytes to request<br>• <code>stop</code>: Optional. If true, releases the I2C bus after request</div>",
      "image": "https://example.com/images/requestfrom_syntax.png",
      "audio": "https://example.com/audio/requestfrom_syntax.mp3"
    },
    {
      "title": "📍 Pin Usage",
      "content": "<div class='card'>Uses SDA and SCL pins for I2C:</div><ul><li>🔹 On UNO: SDA → A4, SCL → A5</li><li>🔹 On Mega: SDA → 20, SCL → 21</li><li>🔹 On ESP32: User-defined</li></ul>",
      "image": "https://example.com/images/requestfrom_pins.png",
      "audio": "https://example.com/audio/requestfrom_pins.mp3"
    },
    {
      "title": "🧠 Real-World Use — Reading From an I2C Sensor",
      "content": "<div class='card'>Here’s how you request 2 bytes from a sensor at address <code>0x3C</code>:</div><pre><code>Wire.beginTransmission(0x3C);\nWire.write(0x00); // Command register\nWire.endTransmission();\nWire.requestFrom(0x3C, 2); // Ask for 2 bytes\n\nwhile (Wire.available()) {\n  int data = Wire.read();\n  Serial.println(data);\n}</code></pre><div class='card'>This is how most sensors send temperature, light, or pressure readings.</div>",
      "image": "https://example.com/images/requestfrom_sensor.png",
      "audio": "https://example.com/audio/requestfrom_code.mp3"
    },
    {
      "title": "⚠️ Master-Slave Rule",
      "content": "<div class='card'>Remember: Only the <b>Master</b> can initiate a <code>requestFrom()</code>.</div><div class='card'>Slaves can only respond. This is what makes I2C structured and predictable.</div>",
      "image": "https://example.com/images/requestfrom_masterslave.png",
      "audio": "https://example.com/audio/requestfrom_masterslave.mp3"
    },
    {
      "title": "🔄 Without Stop Condition?",
      "content": "<div class='card'>The third parameter <code>stop</code> lets you decide whether to release the bus.</div><div class='card'>Use <code>false</code> when you're chaining multiple requests without releasing the bus.</div><pre><code>Wire.requestFrom(0x3C, 2, false);</code></pre>",
      "image": "https://example.com/images/requestfrom_stop.png",
      "audio": "https://example.com/audio/requestfrom_stop.mp3"
    },
    {
      "title": "🎮 Mini Game — Request Mastery",
      "content": "<div class='card'>Which of these statements is correct about <code>Wire.requestFrom()</code>?</div><ul><li>📦 A. Slaves can request data from Masters</li><li>✅ B. Only Masters can request data from Slaves</li><li>🔍 C. You must always request 1 byte at a time</li></ul><button class='gaming-btn' onclick='alert(\"Correct! Only Masters can use requestFrom().\")'>Check Answer</button>",
      "image": "https://example.com/images/requestfrom_game.png",
      "audio": "https://example.com/audio/requestfrom_game.mp3"
    },
    {
      "title": "📺 YouTube: Wire.requestFrom() Explained",
      "content": "<div class='card'>Watch a real-world I2C example with requestFrom() in use:</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/i2c-requestfrom-example' title='Wire.requestFrom() Tutorial' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/requestfrom_youtube.png",
      "audio": "https://example.com/audio/requestfrom_youtube.mp3"
    }
  ]
}
,{
  "title": "Wire.beginTransmission() — Starting I2C Communication",
  "lessons": [
    {
      "title": "🚦 What is Wire.beginTransmission()?",
      "content": "<div class='card'><code>Wire.beginTransmission()</code> is used by the I2C <b>Master</b> to start a message to a specific Slave device.</div><div class='card'>It's like picking up the phone and dialing a specific contact — you’re saying, “Hey device at address 0x3C, I want to talk to you now.”</div>",
      "image": "https://example.com/images/begin_transmission_intro.png",
      "audio": "https://example.com/audio/begin_transmission_intro.mp3"
    },
    {
      "title": "🧠 Real-World Analogy",
      "content": "<div class='card'>Imagine a teacher (Master) trying to give a note to a specific student (Slave). <code>Wire.beginTransmission()</code> is like calling the student by name before handing over the note.</div>",
      "image": "https://example.com/images/begin_transmission_realworld.png",
      "audio": "https://example.com/audio/begin_transmission_realworld.mp3"
    },
    {
      "title": "📚 Syntax Breakdown",
      "content": "<div class='card'><pre><code>Wire.beginTransmission(address);</code></pre></div><div class='card'>• <code>address</code>: I2C address of the Slave device (usually 0x3C, 0x27, etc.)<br>This doesn’t send data yet — it just prepares to send data.</div>",
      "image": "https://example.com/images/begin_transmission_syntax.png",
      "audio": "https://example.com/audio/begin_transmission_syntax.mp3"
    },
    {
      "title": "📍 Pin Usage",
      "content": "<div class='card'><b>Same SDA/SCL pins used as all I2C:</b></div><ul><li>🔸 UNO: SDA = A4, SCL = A5</li><li>🔸 Mega: SDA = 20, SCL = 21</li><li>🔸 ESP32/ESP8266: Configurable in code</li></ul>",
      "image": "https://example.com/images/begin_transmission_pins.png",
      "audio": "https://example.com/audio/begin_transmission_pins.mp3"
    },
    {
      "title": "📦 Real-World Code Example — Sending Commands",
      "content": "<div class='card'>Let’s say you want to send a configuration command to an OLED display (I2C address 0x3C):</div><pre><code>Wire.beginTransmission(0x3C);  // Start talking to OLED\nWire.write(0x00);             // Control byte\nWire.write(0xAF);             // Display ON command\nWire.endTransmission();       // Done sending</code></pre>",
      "image": "https://example.com/images/begin_transmission_example.png",
      "audio": "https://example.com/audio/begin_transmission_example.mp3"
    },
    {
      "title": "⚙️ What happens inside?",
      "content": "<div class='card'>When you use <code>Wire.beginTransmission()</code>, it prepares the I2C bus and sets up the internal buffer.</div><div class='card'>Only when you call <code>Wire.endTransmission()</code> does the actual data go out.</div>",
      "image": "https://example.com/images/begin_transmission_buffer.png",
      "audio": "https://example.com/audio/begin_transmission_buffer.mp3"
    },
    {
      "title": "📺 YouTube: beginTransmission() in Action",
      "content": "<div class='card'>Watch how <code>beginTransmission()</code> is used to configure a sensor or display:</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/i2c-begin-transmission' title='Wire.beginTransmission Tutorial' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/begin_transmission_youtube.png",
      "audio": "https://example.com/audio/begin_transmission_youtube.mp3"
    },
    {
      "title": "🎮 Mini Quiz — When to use beginTransmission?",
      "content": "<div class='card'>Before calling <code>Wire.write()</code> to send I2C data, which function MUST you use first?</div><ul><li>🔌 A. Wire.endTransmission()</li><li>✅ B. Wire.beginTransmission()</li><li>🔧 C. Wire.requestFrom()</li></ul><button class='gaming-btn' onclick='alert(\"Correct! You must start with Wire.beginTransmission().\")'>Check Answer</button>",
      "image": "https://example.com/images/begin_transmission_quiz.png",
      "audio": "https://example.com/audio/begin_transmission_quiz.mp3"
    }
  ]
}
,{
  "title": "Wire.endTransmission() — Finishing the I2C Message",
  "lessons": [
    {
      "title": "📤 What is Wire.endTransmission()?",
      "content": "<div class='card'><code>Wire.endTransmission()</code> is used by the <b>I2C Master</b> to finish a message that was started with <code>Wire.beginTransmission()</code>.</div><div class='card'>It sends all the data in the buffer to the selected Slave device and releases the I2C bus. Think of it like hanging up the phone after saying what you had to say.</div>"
    },
    {
      "title": "🧪 Syntax and Return Value",
      "content": "<div class='card'><pre><code>Wire.endTransmission();</code></pre></div><div class='card'>It returns a number (an error code):<br>0 = Success<br>1 = Data too long<br>2 = NACK on address<br>3 = NACK on data<br>4 = Other error</div><div class='card'>You can capture this return value in a variable to check for communication errors.</div>"
    },
    {
      "title": "🛠️ Real-World Use Case — Sending Data to a Display",
      "content": "<div class='card'>Here's a full example where we send 2 bytes to an OLED screen with address 0x3C:</div><pre><code>Wire.beginTransmission(0x3C);\nWire.write(0x00);   // Control byte\nWire.write(0xAE);   // Display OFF command\nWire.endTransmission();</code></pre><div class='card'>This will send both bytes and complete the I2C transaction.</div>"
    },
    {
      "title": "📌 When Should You Use It?",
      "content": "<div class='card'>Use <code>Wire.endTransmission()</code> ONLY after you've used <code>Wire.beginTransmission()</code> and written all your data with <code>Wire.write()</code>.</div><div class='card'>It must come at the end of every write sequence. Without it, the slave device won’t know that you're done sending data.</div>"
    },
    {
      "title": "📍 Pin Usage Reminder",
      "content": "<div class='card'>I2C always uses two pins:</div><ul><li>🔹 <b>SDA (Data)</b></li><li>🔹 <b>SCL (Clock)</b></li></ul><div class='card'>On Arduino UNO: SDA = A4, SCL = A5</div><div class='card'>On Mega: SDA = 20, SCL = 21</div><div class='card'>On ESP32: You define SDA/SCL using <code>Wire.begin(SDA, SCL)</code></div>"
    },
    {
      "title": "🎮 Mini Game — Fix the Code!",
      "content": "<div class='card'>Can you fix this broken I2C message?</div><pre><code>Wire.beginTransmission(0x3C);\nWire.write(0xAF);</code></pre><div class='card'>Which line is missing?</div><ul><li>A. Wire.begin();</li><li>✅ B. Wire.endTransmission();</li><li>C. Wire.requestFrom();</li></ul><button class='gaming-btn' onclick='alert(\"Correct! You forgot to finish the transmission.\")'>Check Answer</button>"
    },
    {
      "title": "📺 YouTube Video — I2C Transaction Explained",
      "content": "<div class='card'>Learn how to properly use <code>beginTransmission()</code> and <code>endTransmission()</code> together in I2C projects.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/i2c-arduino-basics' title='Wire.endTransmission Tutorial' frameborder='0' allowfullscreen></iframe>"
    }
  ]
},{
  "title": "Wire.write() — Sending Data Over I2C",
  "lessons": [
    {
      "title": "📤 What is Wire.write()?",
      "content": "<div class='card'><code>Wire.write()</code> sends a single byte or a series of bytes from the <b>I2C master</b> to the <b>I2C slave</b>.</div><div class='card'>It must be called after <code>Wire.beginTransmission(address)</code> and before <code>Wire.endTransmission()</code>.</div><div class='card'>Think of it like typing characters in a message before clicking 'send'.</div>"
    },
    {
      "title": "🧪 Syntax + Variants",
      "content": "<div class='card'><pre><code>Wire.write(value);</code> // Single byte</pre><pre><code>Wire.write(buffer, length);</code> // Multiple bytes from a buffer</pre></div><div class='card'><b>value</b> can be a byte or a character (like 'A').</div><div class='card'><b>buffer</b> is an array of bytes, and <b>length</b> tells how many bytes to send.</div>"
    },
    {
      "title": "🛠️ Real-World Use Case — Sending Commands to Display",
      "content": "<div class='card'>Let’s say we want to send a command to turn off an OLED display using I2C.</div><pre><code>Wire.beginTransmission(0x3C);  // Start communication with OLED\nWire.write(0x00);              // Control byte\nWire.write(0xAE);              // Display OFF command\nWire.endTransmission();        // Finish communication</code></pre><div class='card'>Here, <code>Wire.write()</code> sends each byte to the device.</div>"
    },
    {
      "title": "📍 What Pins are Used?",
      "content": "<div class='card'>I2C always uses 2 pins:</div><ul><li>🔸 SDA (Data Line)</li><li>🔸 SCL (Clock Line)</li></ul><div class='card'>On Arduino UNO → SDA = A4, SCL = A5</div><div class='card'>On Mega → SDA = Pin 20, SCL = Pin 21</div><div class='card'>On ESP32 → Define them in <code>Wire.begin(SDA, SCL);</code></div>"
    },
    {
      "title": "🤔 What Can You Send?",
      "content": "<div class='card'>You can send:</div><ul><li>🔹 Numbers (e.g., 0–255)</li><li>🔹 ASCII characters (e.g., 'H')</li><li>🔹 Bytes of sensor data</li><li>🔹 Command codes for displays, sensors, etc.</li></ul><div class='card'>Every device understands different sets of commands — always check the datasheet!</div>"
    },
    {
      "title": "🎮 Mini Game — Valid or Invalid?",
      "content": "<div class='card'>Which of these is a correct use of <code>Wire.write()</code>?</div><ul><li>💡 A. <code>Wire.write(\"Hello\");</code></li><li>✅ B. <code>Wire.write('H');</code></li><li>✅ C. <code>Wire.write(0xAF);</code></li><li>❌ D. <code>Wire.write();</code></li></ul><button class='gaming-btn' onclick='alert(\"Correct answers: B and C\")'>Check Answer</button>"
    },
    {
      "title": "📺 YouTube: I2C Data Transfer with Wire.write()",
      "content": "<div class='card'>Watch how <code>Wire.write()</code> works in actual Arduino I2C projects and why it matters.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/i2c-wire-write-arduino' title='Wire.write Tutorial' frameborder='0' allowfullscreen></iframe>"
    }
  ]
},{
  "title": "Wire.available() — Bytes Waiting to be Read",
  "lessons": [
    {
      "title": "📦 What is Wire.available()?",
      "content": "<div class='card'><code>Wire.available()</code> tells us how many bytes of data are waiting to be read after a request was made using <code>Wire.requestFrom()</code>.</div><div class='card'>Think of it like checking how many new messages you got in your inbox — before opening them.</div>"
    },
    {
      "title": "🧪 Syntax",
      "content": "<div class='card'><pre><code>Wire.available();</code></pre><div>This returns an <b>integer</b> (0 or more) representing how many bytes are waiting to be read from the I2C device.</div></div>"
    },
    {
      "title": "🎯 When and Why to Use?",
      "content": "<div class='card'>You use <code>Wire.available()</code> after <code>Wire.requestFrom()</code> to ensure data is ready before reading it using <code>Wire.read()</code>.</div><div class='card'>It prevents errors caused by reading when there’s nothing to read.</div>"
    },
    {
      "title": "🔍 Real-World Example — Reading Temperature from Sensor",
      "content": "<div class='card'>Let's say you're reading temperature from an I2C sensor:</div><pre><code>Wire.requestFrom(0x48, 2);  // Request 2 bytes from sensor\nwhile(Wire.available()) {\n  byte data = Wire.read();\n  Serial.print(data);\n}</code></pre><div class='card'>The <code>while(Wire.available())</code> loop makes sure you're not reading too soon.</div>"
    },
    {
      "title": "📍 I2C Pins Involved",
      "content": "<div class='card'>No special pin used by this function — it operates on the standard I2C pins:</div><ul><li>🔹 SDA — Data line</li><li>🔹 SCL — Clock line</li></ul><div class='card'>For Arduino UNO: SDA = A4, SCL = A5</div>"
    },
    {
      "title": "🧠 Byte Buffer and Overflow",
      "content": "<div class='card'>All data from <code>Wire.requestFrom()</code> is stored in a buffer (like a short-term memory).</div><div class='card'>You can call <code>Wire.available()</code> to check how much data you have received — and then read accordingly.</div><div class='card'>If you try to read more than what's available — you may get garbage values.</div>"
    },
    {
      "title": "🎮 Mini Game — When is it Safe?",
      "content": "<div class='card'>Guess: Which line is the best place to use <code>Wire.available()</code>?</div><ul><li>🔸 A. Before <code>Wire.requestFrom()</code></li><li>✅ B. After <code>Wire.requestFrom()</code></li><li>🔸 C. After <code>Wire.begin()</code> but before request</li></ul><button class='gaming-btn' onclick='alert(\"Correct: B — Only check available bytes after requesting data!\")'>Check Answer</button>"
    },
    {
      "title": "📺 YouTube: I2C Read Demo (Using available())",
      "content": "<div class='card'>Watch how <code>Wire.available()</code> ensures you don’t read data before it’s ready.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/i2c-available-demo' title='Wire.available Tutorial' frameborder='0' allowfullscreen></iframe>"
    }
  ]
},{
  "title": "Wire.read() — Receiving Data from I2C Device",
  "lessons": [
    {
      "title": "📨 What is Wire.read()?",
      "content": "<div class='card'><code>Wire.read()</code> is used to read a single byte from an I2C device <b>after</b> you've requested data using <code>Wire.requestFrom()</code>.</div><div class='card'>Think of it like opening a message one at a time from your inbox.</div>"
    },
    {
      "title": "🧪 Syntax & Return",
      "content": "<div class='card'><pre><code>Wire.read();</code></pre><div>This function returns a <b>byte</b> (an integer between 0–255).</div><div class='card'>If no data is available, it returns -1.</div>"
    },
    {
      "title": "📍 Where It’s Used?",
      "content": "<div class='card'>This function is essential when receiving data from I2C sensors like temperature sensors, EEPROMs, displays, etc.</div><div class='card'>Example: Read 2 bytes of temperature data from a sensor:</div><pre><code>Wire.requestFrom(0x48, 2);\nwhile (Wire.available()) {\n  byte data = Wire.read();\n  Serial.println(data);\n}</code></pre>"
    },
    {
      "title": "💡 Real-World Analogy",
      "content": "<div class='card'>Imagine you're asking a vending machine for snacks (that's <code>Wire.requestFrom()</code>)…</div><div class='card'>Now you grab one snack at a time (that’s <code>Wire.read()</code>).</div>"
    },
    {
      "title": "🎮 Mini Game — Can You Read It?",
      "content": "<div class='card'>What will this code print?</div><pre><code>Wire.requestFrom(0x68, 3);\nSerial.println(Wire.read());</code></pre><ul><li>🟢 A. A byte of data from the device</li><li>🔴 B. Nothing at all</li><li>🔴 C. The I2C address</li></ul><button class='gaming-btn' onclick='alert(\"Correct! It will print the first byte of response from device 0x68\")'>Check Answer</button>"
    },
    {
      "title": "📍 Pins Used in Wire.read()",
      "content": "<div class='card'><b>Wire.read()</b> uses standard I2C pins, indirectly:</div><ul><li><b>SDA (Data Line)</b>: A4 on Arduino Uno</li><li><b>SCL (Clock Line)</b>: A5 on Arduino Uno</li></ul><div class='card'>Although the function itself is just a software read, the data was received via these pins.</div>"
    },
    {
      "title": "📺 YouTube: Wire.read() in Action",
      "content": "<div class='card'>See how to use <code>Wire.read()</code> step by step in real I2C communication:</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/wire-read-arduino' title='Wire.read Arduino Tutorial' frameborder='0' allowfullscreen></iframe>"
    }
  ]
},{
  "title": "Wire.setClock() — Changing I2C Speed Dynamically",
  "lessons": [
    {
      "title": "🚀 What is Wire.setClock()?",
      "content": "<div class='card'><code>Wire.setClock()</code> lets you change the speed of I2C communication <b>on-the-fly</b> in your Arduino sketch.</div>\n<div class='card'>It sets the clock frequency for I2C devices — faster speeds = faster communication, but only if your devices support it!</div>\n<div class='card'>You can use it to go from the default 100kHz (standard mode) to 400kHz (fast mode) or even higher (depending on the board).</div>",
      "image": "https://example.com/images/wire_setclock_intro.png",
      "audio": "https://example.com/audio/wire_setclock_intro.mp3"
    },
    {
      "title": "⚙️ Syntax + Supported Frequencies",
      "content": "<div class='card'>Syntax: <code>Wire.setClock(frequency);</code></div>\n<div class='card'>Example: <code>Wire.setClock(400000);</code> → Sets speed to 400kHz</div>\n<div class='card'>Supported values (board-dependent):</div>\n<ul>\n<li>100000 — Standard Mode (default)</li>\n<li>400000 — Fast Mode</li>\n<li>1000000 — Fast Mode Plus</li>\n<li>3400000 — High-Speed Mode (limited support)</li>\n</ul>",
      "image": "https://example.com/images/wire_setclock_syntax.png",
      "audio": "https://example.com/audio/wire_setclock_syntax.mp3"
    },
    {
      "title": "📍 Real-World Use — Speeding Up OLED",
      "content": "<div class='card'>Let’s say you're using an I2C OLED display and it refreshes slowly...</div>\n<div class='card'>Add this line after <code>Wire.begin()</code> to increase speed:</div>\n<pre><code>Wire.begin();\nWire.setClock(400000); // Boost to fast mode</code></pre>\n<div class='card'>This will speed up the refresh rate significantly! 🎉</div>",
      "image": "https://example.com/images/wire_setclock_oled.png",
      "audio": "https://example.com/audio/wire_setclock_oled.mp3"
    },
    {
      "title": "🎮 Game Time: Choose the Right Clock!",
      "content": "<div class='card'>You want to connect 3 sensors over I2C. Some support 400kHz, one only supports 100kHz. What should you do?</div>\n<ul>\n<li>A. Use 400kHz and hope it works</li>\n<li>B. Use 100kHz for compatibility</li>\n<li>C. Mix speeds using magic</li></ul>\n<button class='gaming-btn' onclick='alert(\"✅ Correct: B — Use 100kHz to ensure all devices work!\")'>Check Answer</button>",
      "image": "https://example.com/images/wire_setclock_game.png",
      "audio": "https://example.com/audio/wire_setclock_game.mp3"
    },
    {
      "title": "📺 YouTube: Boosting I2C Speeds with Wire.setClock()",
      "content": "<div class='card'>Watch this in action: increase OLED display speeds, speed up MPU6050 sensors, and more!</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/F8FHwUwNMrU' title='I2C Speed Explained' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/wire_setclock_youtube.png",
      "audio": "https://example.com/audio/wire_setclock_youtube.mp3"
    }
  ]
}
,{
  "title": "Wire.onReceive() — Listening as an I2C Slave",
  "lessons": [
    {
      "title": "🎧 What is Wire.onReceive()?",
      "content": "<div class='card'><code>Wire.onReceive()</code> is used on an Arduino acting as an <b>I2C slave</b>. It lets you define a function that will be triggered <b>automatically</b> whenever the master sends data.</div>\n<div class='card'>This is how an Arduino can be programmed to “listen” and respond to incoming I2C messages. Think of it like a walkie-talkie — you get a message, and instantly react.</div>",
      "image": "https://example.com/images/onreceive_intro.png",
      "audio": "https://example.com/audio/onreceive_intro.mp3"
    },
    {
      "title": "🔧 Syntax & Setup",
      "content": "<div class='card'>Syntax: <code>Wire.onReceive(receiveEvent);</code></div>\n<div class='card'><code>receiveEvent</code> is the name of a function that takes one parameter (the number of bytes received):</div>\n<pre><code>void receiveEvent(int howMany) {\n  while (Wire.available()) {\n    char c = Wire.read();\n    Serial.print(c);\n  }\n}</code></pre>\n<div class='card'>You must also use <code>Wire.begin(address)</code> to set this Arduino as a slave first!</div>",
      "image": "https://example.com/images/onreceive_syntax.png",
      "audio": "https://example.com/audio/onreceive_syntax.mp3"
    },
    {
      "title": "💡 Real-World Example — Remote LED Trigger",
      "content": "<div class='card'>You're using a master Arduino to control a second (slave) Arduino. You want the slave to turn on an LED when the master sends '1'.</div>\n<pre><code>// Slave\n#include &lt;Wire.h&gt;\n#define LED 13\n\nvoid setup() {\n  pinMode(LED, OUTPUT);\n  Wire.begin(8); // Slave address\n  Wire.onReceive(receiveEvent);\n}\n\nvoid receiveEvent(int howMany) {\n  if (Wire.read() == '1') {\n    digitalWrite(LED, HIGH);\n  }\n}</code></pre>",
      "image": "https://example.com/images/onreceive_led.png",
      "audio": "https://example.com/audio/onreceive_led.mp3"
    },
    {
      "title": "🧠 Where/Why to Use?",
      "content": "<div class='card'>Use <code>Wire.onReceive()</code> whenever your Arduino needs to act as a reactive module in a bigger system — like a sensor module, display unit, or peripheral device controlled via I2C.</div>\n<div class='card'>Common in robotics, modular projects, distributed systems, or low-power sensor nodes.</div>",
      "image": "https://example.com/images/onreceive_usage.png",
      "audio": "https://example.com/audio/onreceive_usage.mp3"
    },
    {
      "title": "🎮 Game Time — Master or Slave?",
      "content": "<div class='card'>You’re building a temperature sensor module that only sends data when asked. Should it use <code>Wire.onReceive()</code> or <code>Wire.requestFrom()</code>?</div>\n<ul>\n<li>A. Wire.onReceive()</li>\n<li>B. Wire.requestFrom()</li></ul>\n<button class='gaming-btn' onclick='alert(\"✅ Correct: A — The sensor reacts to incoming requests using onReceive()!\")'>Check Answer</button>",
      "image": "https://example.com/images/onreceive_game.png",
      "audio": "https://example.com/audio/onreceive_game.mp3"
    },
    {
      "title": "📺 YouTube: I2C Slaves with onReceive()",
      "content": "<div class='card'>Watch this demo showing how <code>Wire.onReceive()</code> enables communication between two Arduino boards!</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/i2c-onreceive' title='Arduino I2C onReceive Tutorial' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/onreceive_youtube.png",
      "audio": "https://example.com/audio/onreceive_youtube.mp3"
    }
  ]
}
,{
  "title": "Wire.onRequest() — I2C Slave Responds to Master",
  "lessons": [
    {
      "title": "📡 What is Wire.onRequest()?",
      "content": "<div class='card'><code>Wire.onRequest()</code> is used on an Arduino acting as an <b>I2C slave</b>. It tells the slave what to do when the <b>master requests data</b> from it.</div>\n<div class='card'>If <code>Wire.onReceive()</code> is how a slave listens, then <code>Wire.onRequest()</code> is how it speaks up when asked!</div>",
      "image": "https://example.com/images/onrequest_intro.png",
      "audio": "https://example.com/audio/onrequest_intro.mp3"
    },
    {
      "title": "🔧 Syntax & Function Structure",
      "content": "<div class='card'>Syntax: <code>Wire.onRequest(requestEvent);</code></div>\n<div class='card'><code>requestEvent</code> is the name of a function that takes no parameters and contains the code to <b>send data back to the master</b>.</div>\n<pre><code>void requestEvent() {\n  Wire.write(\"Hi Master!\");\n}</code></pre>\n<div class='card'>This will send the string “Hi Master!” back to the I2C master whenever it calls <code>Wire.requestFrom()</code>.</div>",
      "image": "https://example.com/images/onrequest_syntax.png",
      "audio": "https://example.com/audio/onrequest_syntax.mp3"
    },
    {
      "title": "💡 Real-World Example — Slave Sensor Module",
      "content": "<div class='card'>Let’s say your slave Arduino is measuring temperature. When the master requests the temperature, it responds with the value.</div>\n<pre><code>#include &lt;Wire.h&gt;\nint temp = 25;\n\nvoid setup() {\n  Wire.begin(8);  // Set as slave\n  Wire.onRequest(requestEvent);\n}\n\nvoid loop() {\n  temp = analogRead(A0) / 2;  // Example temperature logic\n  delay(1000);\n}\n\nvoid requestEvent() {\n  Wire.write(temp);\n}</code></pre>",
      "image": "https://example.com/images/onrequest_sensor.png",
      "audio": "https://example.com/audio/onrequest_sensor.mp3"
    },
    {
      "title": "🧠 Where & When to Use?",
      "content": "<div class='card'>Use <code>Wire.onRequest()</code> when your Arduino (slave) needs to provide real-time info to another device (master), such as:</div>\n<ul>\n<li>📊 Sensors</li>\n<li>🧠 Peripheral logic boards</li>\n<li>📷 Image capture triggers</li>\n<li>📟 External display drivers</li>\n</ul><div class='card'>It makes your Arduino act like a smart component in a larger I2C network.</div>",
      "image": "https://example.com/images/onrequest_uses.png",
      "audio": "https://example.com/audio/onrequest_uses.mp3"
    },
    {
      "title": "🎮 Mini Game — Talk Back!",
      "content": "<div class='card'>You are designing a project where the master asks the slave for current humidity. Which I2C function will help the slave send that value back?</div>\n<ul>\n<li>💬 A. Wire.onReceive()</li>\n<li>🔊 B. Wire.onRequest()</li>\n<li>📡 C. Wire.begin()</li></ul>\n<button class='gaming-btn' onclick='alert(\"✅ Correct Answer: B — The slave uses Wire.onRequest() to reply to the master!\")'>Check Answer</button>",
      "image": "https://example.com/images/onrequest_game.png",
      "audio": "https://example.com/audio/onrequest_game.mp3"
    },
    {
      "title": "📺 YouTube: Wire.onRequest() Explained",
      "content": "<div class='card'>Watch how Arduino slaves respond to master queries using <code>Wire.onRequest()</code> in a full I2C demo.</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/i2c-onrequest' title='Arduino I2C onRequest Tutorial' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/onrequest_video.png",
      "audio": "https://example.com/audio/onrequest_video.mp3"
    }
  ]
}
,{
  "title": "Wire.setWireTimeout() — Timeout Control for I2C Transfers",
  "lessons": [
    {
      "title": "⏱️ What is Wire.setWireTimeout()?",
      "content": "<div class='card'>The <code>Wire.setWireTimeout()</code> function allows you to define how long your Arduino will wait for I2C communication to finish before giving up. It's like saying, \"I'll wait X milliseconds for a reply — if nothing, then move on!\"</div>\n<div class='card'>This is especially useful when you're talking to devices that may misbehave, or if you don't want your program to hang forever waiting for a response.</div>\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://example.com/images/wire_timeout_explained.png",
      "audio": "https://example.com/audio/wire_timeout_intro.mp3"
    },
    {
      "title": "🧪 Syntax & Parameters",
      "content": "<div class='card'><code>Wire.setWireTimeout(timeout, reset_with_timeout);</code></div>\n<div class='card'><b>timeout</b> = time in microseconds (µs) to wait before timing out</div>\n<div class='card'><b>reset_with_timeout</b> = <code>true</code> or <code>false</code> — tells Arduino whether to reset the I2C hardware when timeout happens.</div>\n<div class='card'>Example: <code>Wire.setWireTimeout(30000, true);</code> → Wait for 30 milliseconds, then reset I2C hardware if needed.</div>",
      "image": "https://example.com/images/wire_timeout_syntax.png",
      "audio": "https://example.com/audio/wire_timeout_syntax.mp3"
    },
    {
      "title": "🌍 Real-Life Use Case",
      "content": "<div class='card'>Let’s say you’re reading data from an I2C sensor like an accelerometer. But sometimes, the sensor becomes unresponsive.</div>\n<div class='card'>If you don’t use <code>setWireTimeout()</code>, your Arduino might wait forever, stuck in a loop. Timeout avoids this by allowing the code to break free and continue running.</div>\n<div class='card'>This is critical in robotics and automation where delays can mess up real-time responses.</div>",
      "image": "https://example.com/images/wire_timeout_realworld.png",
      "audio": "https://example.com/audio/wire_timeout_usecase.mp3"
    },
    {
      "title": "🎮 Mini Game — Timeout Tactics!",
      "content": "<div class='card'>Why would you want to use <code>setWireTimeout()</code>?</div>\n<ul>\n  <li>🕵️ A. To improve accuracy</li>\n  <li>⏳ B. To prevent code from hanging</li>\n  <li>📊 C. To increase baud rate</li>\n</ul>\n<button class='gaming-btn' onclick='alert(\"Correct Answer: B — it prevents your sketch from getting stuck during faulty I2C transfers.\")'>Check Answer</button>",
      "image": "https://example.com/images/wire_timeout_game.png",
      "audio": "https://example.com/audio/wire_timeout_game.mp3"
    },
    {
      "title": "📺 Video: I2C Timeouts in Action!",
      "content": "<div class='card'>Watch this awesome tutorial explaining I2C timeout handling and how to use <code>setWireTimeout()</code> practically.</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/HcZHBZVPrpI' title='Arduino I2C Timeout Tutorial' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/wire_timeout_youtube.png",
      "audio": "https://example.com/audio/wire_timeout_video.mp3"
    }
  ]
}
,{
  "title": "Wire.clearWireTimeoutFlag() — Resetting the Timeout Error",
  "lessons": [
    {
      "title": "🧯 What is Wire.clearWireTimeoutFlag()?",
      "content": "<div class='card'><code>Wire.clearWireTimeoutFlag()</code> is used to clear the timeout flag that gets set when an I2C timeout occurs due to <code>Wire.setWireTimeout()</code>.</div>\n<div class='card'>Basically, if your I2C device didn’t respond in time and triggered a timeout, this function helps you clear the error flag and continue your program smoothly.</div>",
      "image": "https://example.com/images/clear_timeout_flag.png",
      "audio": "https://example.com/audio/clear_timeout_intro.mp3"
    },
    {
      "title": "🧪 Syntax + Behavior",
      "content": "<div class='card'><code>Wire.clearWireTimeoutFlag();</code></div>\n<div class='card'>This function takes no parameters. It just resets the timeout state back to normal.</div>\n<div class='card'>You typically use it after detecting a timeout, so you can safely retry the I2C operation or move forward in your sketch.</div>",
      "image": "https://example.com/images/clear_timeout_syntax.png",
      "audio": "https://example.com/audio/clear_timeout_syntax.mp3"
    },
    {
      "title": "🌍 Real-Life Example",
      "content": "<div class='card'>Let’s say your Arduino reads temperature via I2C. Suddenly, the sensor doesn’t reply and a timeout happens.</div>\n<div class='card'>You can check <code>Wire.getWireTimeoutFlag()</code> to see if a timeout occurred, then use <code>Wire.clearWireTimeoutFlag()</code> to reset it and retry the communication.</div>\n<pre><code>if (Wire.getWireTimeoutFlag()) {\n  Serial.println(\"Timeout occurred!\");\n  Wire.clearWireTimeoutFlag();\n}</code></pre>",
      "image": "https://example.com/images/clear_timeout_usecase.png",
      "audio": "https://example.com/audio/clear_timeout_usecase.mp3"
    },
    {
      "title": "🎮 Game Time — Timeout Tamer!",
      "content": "<div class='card'>Your Arduino gets stuck waiting for a sensor. You fixed it with <code>setWireTimeout()</code>. What should you do before retrying?</div>\n<ul>\n  <li>🧠 A. Call <code>Wire.clearWireTimeoutFlag()</code></li>\n  <li>🔁 B. Reboot Arduino</li>\n  <li>⏩ C. Increase baud rate</li>\n</ul>\n<button class='gaming-btn' onclick='alert(\"Correct! A is the answer. Always clear the timeout flag before retrying.\")'>Check Answer</button>",
      "image": "https://example.com/images/clear_timeout_game.png",
      "audio": "https://example.com/audio/clear_timeout_game.mp3"
    },
    {
      "title": "📺 YouTube — Handling Wire Timeouts",
      "content": "<div class='card'>Here’s a video explaining what timeout flags are and how to handle them using <code>Wire.clearWireTimeoutFlag()</code>.</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/x_Wire_ClearTimeout' title='Wire Timeout Flag Explained' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/clear_timeout_video.png",
      "audio": "https://example.com/audio/clear_timeout_video.mp3"
    }
  ]
}
,{
  "title": "Wire.getWireTimeoutFlag() — Has I2C Timed Out?",
  "lessons": [
    {
      "title": "🕵️ What is Wire.getWireTimeoutFlag()?",
      "content": "<div class='card'><code>Wire.getWireTimeoutFlag()</code> checks whether an I2C timeout has occurred based on the threshold set using <code>Wire.setWireTimeout()</code>.</div>\n<div class='card'>It returns <code>true</code> if a timeout happened, and <code>false</code> otherwise. This helps you decide whether your I2C communication is stuck or not.</div>",
      "image": "https://example.com/images/get_flag_intro.png",
      "audio": "https://example.com/audio/get_flag_intro.mp3"
    },
    {
      "title": "🧪 Syntax and Return Value",
      "content": "<div class='card'><code>bool timeout = Wire.getWireTimeoutFlag();</code></div>\n<div class='card'>This returns a boolean value — <code>true</code> means a timeout has occurred, <code>false</code> means everything’s fine.</div>\n<div class='card'>You can use this to trigger fallback code, retries, or error handling.</div>",
      "image": "https://example.com/images/get_flag_syntax.png",
      "audio": "https://example.com/audio/get_flag_syntax.mp3"
    },
    {
      "title": "🌍 Real-Life Scenario",
      "content": "<div class='card'>Let’s say your Arduino is communicating with a digital temperature sensor using I2C.</div>\n<div class='card'>Sometimes, sensors hang or freeze. If you’ve set a timeout with <code>Wire.setWireTimeout()</code>, you can check whether the I2C bus timed out using this function.</div>\n<pre><code>if (Wire.getWireTimeoutFlag()) {\n  Serial.println(\"Oops! I2C timeout detected.\");\n  Wire.clearWireTimeoutFlag();\n}</code></pre>",
      "image": "https://example.com/images/get_flag_usecase.png",
      "audio": "https://example.com/audio/get_flag_usecase.mp3"
    },
    {
      "title": "🎮 Game — Timeout Detective",
      "content": "<div class='card'>You’re reading from an I2C sensor, and data suddenly stops coming. What will help you check if the I2C bus failed due to timeout?</div>\n<ul>\n  <li>🧩 A. <code>Wire.begin()</code></li>\n  <li>🚩 B. <code>Wire.getWireTimeoutFlag()</code></li>\n  <li>🔧 C. <code>Wire.setClock()</code></li>\n</ul>\n<button class='gaming-btn' onclick='alert(\"Correct! B is the one that checks for timeout!\")'>Check Answer</button>",
      "image": "https://example.com/images/get_flag_game.png",
      "audio": "https://example.com/audio/get_flag_game.mp3"
    },
    {
      "title": "📺 YouTube — Diagnosing I2C Timeouts",
      "content": "<div class='card'>Watch how you can monitor I2C health and detect communication failures using <code>Wire.getWireTimeoutFlag()</code>.</div>\n<iframe width='100%' height='315' src='https://www.youtube.com/embed/get-wire-flag' title='I2C Timeout Detection in Arduino' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/get_flag_video.png",
      "audio": "https://example.com/audio/get_flag_video.mp3"
    }
  ]
}





      ]
    },{
      "title": "Arduino Keyboard Library — Making Arduino Type Like a Pro!",
      modules:[
        {
  "title": "Keyboard Library — Type Like a Robot!",
  "lessons": [
    {
      "title": "⌨️ What is the Keyboard Library?",
      "content": "<div class='card'>The <code>Keyboard</code> library allows specific Arduino boards to act like a physical keyboard and type on your computer!</div><div class='card'>It works by turning the microcontroller into a USB Human Interface Device (HID), just like your keyboard or mouse.</div><div class='card'>Boards like the Leonardo, Micro, Due, Zero, MKR series, and more support this feature. It can be super useful in automation, shortcuts, and building custom keyboards or macro pads.</div>",
      "image": "https://example.com/images/keyboard_intro.png",
      "audio": "https://example.com/audio/keyboard_intro.mp3"
    },
    {
      "title": "🧠 How It Works — Behind the Scenes",
      "content": "<div class='card'>The board sends keyboard commands via the USB interface. Functions like <code>Keyboard.print()</code> or <code>Keyboard.write()</code> simulate keypresses.</div><div class='card'>These functions use a special protocol called <b>USB HID</b> — Human Interface Device.</div><div class='card'>This is why only specific boards with 32u4 or SAMD chips (like Leonardo, Micro, Zero, etc.) can use this feature. The regular UNO doesn't support it!</div>",
      "image": "https://example.com/images/hid_explained.png",
      "audio": "https://example.com/audio/hid_explained.mp3"
    },
    {
      "title": "🔐 Modifier Keys and Limitations",
      "content": "<div class='card'>Modifier keys (like Ctrl, Shift, Alt) are supported, but not every ASCII character can be sent.</div><div class='card'>For example, non-printing characters (like arrow keys or function keys) might not work.</div><div class='card'>Use with caution: once your code starts typing automatically, it might make your PC go crazy! Always test with <code>Serial.print()</code> before switching to <code>Keyboard.print()</code>.</div>",
      "image": "https://example.com/images/keyboard_limitations.png",
      "audio": "https://example.com/audio/keyboard_limitations.mp3"
    },
    {
      "title": "⚠️ Safety First!",
      "content": "<div class='card'>It’s highly recommended to use a toggle or switch to enable/disable the keyboard functions.</div><div class='card'>If you upload a sketch with <code>Keyboard.print()</code> in <code>loop()</code> — you might not be able to reprogram the board easily.</div><div class='card'>Use conditions or external buttons to activate keyboard features smartly.</div>",
      "image": "https://example.com/images/keyboard_warning.png",
      "audio": "https://example.com/audio/keyboard_safety.mp3"
    },
    {
      "title": "💻 Boards that Support Keyboard Library",
      "content": "<div class='card'>✅ Fully Supported Boards:<ul><li>Leonardo</li><li>Micro</li><li>Due</li><li>Zero</li><li>UNO R4 Minima / WiFi</li><li>GIGA R1 WiFi</li><li>Nano ESP32</li><li>MKR Family</li></ul></div><div class='card'>All digital and analog pins can be used when acting as a keyboard!</div>",
      "image": "https://example.com/images/supported_boards.png",
      "audio": "https://example.com/audio/keyboard_boards.mp3"
    },
    {
      "title": "📺 YouTube: Making Arduino Type!",
      "content": "<div class='card'>Watch this real-world demonstration on how to turn your Arduino into a mini keyboard.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/VZsH2cYgY3Q' title='Arduino Keyboard Project' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/keyboard_video_thumb.png",
      "audio": "https://example.com/audio/keyboard_video.mp3"
    },
    {
      "title": "🎮 Mini Game — Safe or Not?",
      "content": "<div class='card'>Which of the following is a safe way to use the Keyboard library?</div><ul><li>🔄 Loop <code>Keyboard.print(\"hello\")</code></li><li>🔘 Use a physical button to trigger typing</li><li>🚫 Start Keyboard function in <code>setup()</code> forever</li></ul><button class='gaming-btn' onclick='alert(\"Correct answer: Use a physical button!\")'>Check Answer</button>",
      "image": "https://example.com/images/keyboard_game.png",
      "audio": "https://example.com/audio/keyboard_game.mp3"
    }
  ]
}
,{
  "title": "Keyboard.begin() — Let Arduino Start Typing",
  "lessons": [
    {
      "title": "🧠 What is Keyboard.begin()?",
      "content": "<div class='card'><code>Keyboard.begin()</code> is the function that tells the Arduino to start emulating a keyboard.</div><div class='card'>After this function is called, the Arduino can start sending keystrokes to a connected computer just like a real keyboard would.</div>",
      "image": "https://example.com/images/keyboard_begin_intro.png",
      "audio": "https://example.com/audio/keyboard_begin_intro.mp3"
    },
    {
      "title": "🧪 Syntax & Use",
      "content": "<div class='card'><b>Syntax:</b><br><code>Keyboard.begin();</code></div><div class='card'>It's usually placed inside <code>setup()</code> before you start sending any keys using functions like <code>Keyboard.print()</code>.</div>",
      "image": "https://example.com/images/keyboard_begin_syntax.png",
      "audio": "https://example.com/audio/keyboard_begin_syntax.mp3"
    },
    {
      "title": "🛠️ Real-World Usage Example",
      "content": "<div class='card'>Let’s say you want to press <b>Ctrl+Alt+Del</b> from an Arduino Leonardo when a button is pressed:</div><pre><code>#include &lt;Keyboard.h&gt;\n\nvoid setup() {\n  pinMode(2, INPUT_PULLUP);\n  Keyboard.begin();\n}\n\nvoid loop() {\n  if (digitalRead(2) == LOW) {\n    Keyboard.press(KEY_LEFT_CTRL);\n    Keyboard.press(KEY_LEFT_ALT);\n    Keyboard.press(KEY_DELETE);\n    delay(100);\n    Keyboard.releaseAll();\n  }\n}</code></pre>",
      "image": "https://example.com/images/keyboard_example.png",
      "audio": "https://example.com/audio/keyboard_example.mp3"
    },
    {
      "title": "❓ Can All Arduinos Do This?",
      "content": "<div class='card'><b>Nope!</b> Only some boards like the Arduino Leonardo, Micro, and Due can emulate keyboards. Boards like the Uno or Mega don’t support it.</div><div class='card'>Make sure you’re using a compatible board before trying!</div>",
      "image": "https://example.com/images/keyboard_compatibility.png",
      "audio": "https://example.com/audio/keyboard_compatibility.mp3"
    },
    {
      "title": "🎮 Mini Game — Keyboard Master",
      "content": "<div class='card'>Which function is used to start keyboard emulation in Arduino?</div><ul><li>A. <code>beginKeyboard()</code></li><li>B. <code>keyboardOn()</code></li><li>C. <code>Keyboard.begin()</code></li></ul><button class='gaming-btn' onclick='alert(\"Correct! It’s C — Keyboard.begin()\")'>Check Answer</button>",
      "image": "https://example.com/images/keyboard_game.png",
      "audio": "https://example.com/audio/keyboard_game.mp3"
    },
    {
      "title": "📺 YouTube Video: Keyboard Basics",
      "content": "<div class='card'>Watch how to simulate keypresses with Arduino!</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/wtf-video-keyboard' title='Arduino Keyboard Tutorial' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/keyboard_youtube.png",
      "audio": "https://example.com/audio/keyboard_youtube.mp3"
    }
  ]
}
,{
  "title": "Keyboard.end() — Stop Typing, Arduino!",
  "lessons": [
    {
      "title": "⛔ What is Keyboard.end()?",
      "content": "<div class='card'><code>Keyboard.end()</code> stops the keyboard emulation on supported boards.</div><div class='card'>Once this function is called, the Arduino stops acting as a keyboard — like dropping the mic after you're done speaking 🎤</div>",
      "image": "https://example.com/images/keyboard_end_intro.png",
      "audio": "https://example.com/audio/keyboard_end_intro.mp3"
    },
    {
      "title": "📚 Syntax and Quick Use",
      "content": "<div class='card'><code>Keyboard.end();</code></div><div class='card'>You usually pair this with <code>Keyboard.begin()</code> at the start of your sketch.</div><div class='card'>Example:</div><pre><code>Keyboard.begin();\nKeyboard.print(\"Hello\");\nKeyboard.end();</code></pre>",
      "image": "https://example.com/images/keyboard_end_syntax.png",
      "audio": "https://example.com/audio/keyboard_end_syntax.mp3"
    },
    {
      "title": "📦 When & Why To Use It?",
      "content": "<div class='card'>If you're only sending a few keystrokes and don't want the Arduino to keep acting like a keyboard, use <code>Keyboard.end()</code> afterward.</div><div class='card'>This makes your program cleaner and safer — especially helpful if you're switching between Serial and Keyboard interfaces!</div>",
      "image": "https://example.com/images/keyboard_end_usecase.png",
      "audio": "https://example.com/audio/keyboard_end_usecase.mp3"
    },
    {
      "title": "🌍 Real World Example",
      "content": "<div class='card'>Imagine you're building a foot pedal that types a shortcut on your PC. You only want it to act like a keyboard <b>when the pedal is pressed</b>.</div><div class='card'>So you do:</div><pre><code>if(digitalRead(pedalPin) == HIGH) {\n  Keyboard.begin();\n  Keyboard.print(\"Ctrl+Z\"); // Undo!\n  Keyboard.end();\n}</code></pre>",
      "image": "https://example.com/images/keyboard_end_project.png",
      "audio": "https://example.com/audio/keyboard_end_project.mp3"
    },
    {
      "title": "🎮 Mini Game — When to Stop?",
      "content": "<div class='card'>You’re automating login for a kiosk. When should you use <code>Keyboard.end()</code>?</div><ul><li>🔁 In every loop</li><li>✅ After typing the login info</li><li>🚫 Never</li></ul><button class='gaming-btn' onclick='alert(\"Correct answer: After typing the login info\")'>Check Answer</button>",
      "image": "https://example.com/images/keyboard_end_game.png",
      "audio": "https://example.com/audio/keyboard_end_game.mp3"
    },
    {
      "title": "📺 YouTube: Keyboard.end() in Action",
      "content": "<div class='card'>Here’s a quick tutorial showing when and how to use <code>Keyboard.end()</code> in Arduino projects.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/keyboard-end-example' title='Arduino Keyboard.end Tutorial' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/keyboard_end_video_thumb.png",
      "audio": "https://example.com/audio/keyboard_end_video.mp3"
    }
  ]
}
,{
  "title": "Keyboard.press() — Hold That Key!",
  "lessons": [
    {
      "title": "🎹 What is Keyboard.press()?",
      "content": "<div class='card'><code>Keyboard.press()</code> simulates the physical **pressing down** of a key on a keyboard.</div><div class='card'>Just like holding a key on your laptop — the computer keeps receiving that key's signal until it's released.</div>",
      "image": "https://example.com/images/keyboard_press_intro.png",
      "audio": "https://example.com/audio/keyboard_press_intro.mp3"
    },
    {
      "title": "📚 Syntax of Keyboard.press()",
      "content": "<div class='card'>Basic syntax:</div><pre><code>Keyboard.press(key);</code></pre><div class='card'>Where <code>key</code> can be a character like <code>'a'</code> or a special constant like <code>KEY_RETURN</code>, <code>KEY_TAB</code>, etc.</div>",
      "image": "https://example.com/images/keyboard_press_syntax.png",
      "audio": "https://example.com/audio/keyboard_press_syntax.mp3"
    },
    {
      "title": "🛠 How It Works (Behind the Scenes)",
      "content": "<div class='card'>When you use <code>Keyboard.press('a')</code>, Arduino sends a USB HID message that tells the computer, \"Key 'a' is being held down.\"</div><div class='card'>The system keeps treating it like you're holding the key, until you use <code>Keyboard.release()</code> or <code>Keyboard.releaseAll()</code>.</div>",
      "image": "https://example.com/images/keyboard_press_mechanics.png",
      "audio": "https://example.com/audio/keyboard_press_mechanics.mp3"
    },
    {
      "title": "💡 When and Why to Use It?",
      "content": "<div class='card'>Use <code>Keyboard.press()</code> when you want to simulate **holding a key** — for instance, holding down the shift key, or making shortcuts like Ctrl+Alt+Del.</div><div class='card'>Unlike <code>Keyboard.print()</code> which taps a key and releases it instantly, <code>press()</code> allows combo behavior.</div>",
      "image": "https://example.com/images/keyboard_press_usecases.png",
      "audio": "https://example.com/audio/keyboard_press_usecases.mp3"
    },
    {
      "title": "🌍 Real-World Example — Ctrl+Alt+Delete",
      "content": "<div class='card'>Let’s say you want to trigger <b>Ctrl+Alt+Delete</b> from an Arduino when a button is pressed:</div><pre><code>if (digitalRead(buttonPin) == HIGH) {\n  Keyboard.begin();\n  Keyboard.press(KEY_LEFT_CTRL);\n  Keyboard.press(KEY_LEFT_ALT);\n  Keyboard.press(KEY_DELETE);\n  delay(100);\n  Keyboard.releaseAll();\n  Keyboard.end();\n}</code></pre>",
      "image": "https://example.com/images/keyboard_ctrlaltdelete.png",
      "audio": "https://example.com/audio/keyboard_ctrlaltdelete.mp3"
    },
    {
      "title": "🎮 Mini Game — Press or Print?",
      "content": "<div class='card'>Which one would you use for the following?</div><ul><li>✅ To send a shortcut like Ctrl+S?</li><li>❌ To type the full word 'Hello'?</li><li>✅ To simulate holding down a game control key?</li></ul><button class='gaming-btn' onclick='alert(\"Correct Answers: Ctrl+S ✅ — use press; 'Hello' ❌ — use print; Game control ✅ — use press\")'>Check Answer</button>",
      "image": "https://example.com/images/keyboard_press_game.png",
      "audio": "https://example.com/audio/keyboard_press_game.mp3"
    },
    {
      "title": "📺 YouTube Tutorial: Press vs Print vs Write",
      "content": "<div class='card'>Watch this detailed breakdown on the difference between <code>Keyboard.press()</code>, <code>Keyboard.print()</code>, and <code>Keyboard.write()</code>.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/keyboard-press-demo' title='Arduino Keyboard Press Tutorial' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/keyboard_press_video.png",
      "audio": "https://example.com/audio/keyboard_press_video.mp3"
    }
  ]
}
,{
  "title": "Keyboard.release() — Releasing Pressed Keys",
  "lessons": [
    {
      "title": "🔓 What is Keyboard.release()?",
      "content": "<div class='card'><code>Keyboard.release()</code> tells your Arduino to simulate <b>lifting your finger off a key</b> — just like stopping a key press on your keyboard.</div><div class='card'>This works with keys that were previously pressed using <code>Keyboard.press()</code>.</div>",
      "image": "https://example.com/images/release_intro.png",
      "audio": "https://example.com/audio/release_intro.mp3"
    },
    {
      "title": "📚 Syntax & How It Works",
      "content": "<div class='card'><b>Syntax:</b></div><pre><code>Keyboard.release(key);</code></pre><div class='card'>The <code>key</code> can be any key you pressed before — like <code>'a'</code>, <code>KEY_LEFT_CTRL</code>, etc.<br>It tells the PC: “Hey! That key I was holding? I’ve released it now.”</div>",
      "image": "https://example.com/images/release_syntax.png",
      "audio": "https://example.com/audio/release_syntax.mp3"
    },
    {
      "title": "⚠️ Important Note",
      "content": "<div class='card'>If you call <code>Keyboard.press()</code> without a <code>release()</code>, the computer thinks the key is still being held down!</div><div class='card'>This can lead to **weird bugs** like repeated characters or stuck shortcuts.</div>",
      "image": "https://example.com/images/release_warning.png",
      "audio": "https://example.com/audio/release_warning.mp3"
    },
    {
      "title": "🎮 Combo Example: Shift + A = 'A'",
      "content": "<div class='card'>To send an uppercase 'A', hold <code>SHIFT</code> and press <code>'a'</code>, then release both:</div><pre><code>Keyboard.press(KEY_LEFT_SHIFT);\nKeyboard.press('a');\ndelay(100);\nKeyboard.release('a');\nKeyboard.release(KEY_LEFT_SHIFT);</code></pre>",
      "image": "https://example.com/images/release_combo.png",
      "audio": "https://example.com/audio/release_combo.mp3"
    },
    {
      "title": "🤖 Real-World Scenario — Toggle Volume Key",
      "content": "<div class='card'>If you want to increase volume using <code>KEY_MEDIA_VOLUME_UP</code> for just a blip:</div><pre><code>Keyboard.press(KEY_MEDIA_VOLUME_UP);\ndelay(100);\nKeyboard.release(KEY_MEDIA_VOLUME_UP);</code></pre><div class='card'>This prevents the volume from jumping too high like you're holding it down!</div>",
      "image": "https://example.com/images/release_volume.png",
      "audio": "https://example.com/audio/release_volume.mp3"
    },
    {
      "title": "🎮 Mini Quiz — Release or Not?",
      "content": "<div class='card'>You pressed Ctrl, C, and forgot to release. What happens?</div><ul><li>🅰️ Nothing</li><li>🅱️ PC thinks Ctrl+C is stuck</li><li>🆎 Works fine always</li></ul><button class='gaming-btn' onclick='alert(\"Answer: 🅱️ — You MUST release keys to avoid stuck input!\")'>Reveal Answer</button>",
      "image": "https://example.com/images/release_quiz.png",
      "audio": "https://example.com/audio/release_quiz.mp3"
    },
    {
      "title": "📺 YouTube: How Keyboard.release() Saves You",
      "content": "<div class='card'>This video shows the difference between holding and releasing simulated keys in Arduino.</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/keyboard-release-demo' title='Keyboard Release Tutorial' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/release_video.png",
      "audio": "https://example.com/audio/release_video.mp3"
    }
  ]
}
,{
  "title": "Keyboard.releaseAll() — Release Every Key!",
  "lessons": [
    {
      "title": "🧠 What is Keyboard.releaseAll()?",
      "content": "<div class='card'>The <code>Keyboard.releaseAll()</code> function is used to release <b>all keys</b> that are currently being held down using <code>Keyboard.press()</code>.</div><div class='card'>Think of it as lifting your fingers off the keyboard — all at once!</div><div class='card'>It's especially useful when you're simulating multiple keypresses like <code>CTRL + ALT + DEL</code> or gaming controls.</div>",
      "image": "https://example.com/images/releaseall_intro.png",
      "audio": "https://example.com/audio/keyboard_releaseall_intro.mp3"
    },
    {
      "title": "🧪 Syntax and Function Signature",
      "content": "<div class='card'><b>Syntax:</b><br><code>Keyboard.releaseAll();</code></div><div class='card'>You don’t need to pass any parameters. This function simply tells the computer: “I’m done pressing all the keys!”</div><div class='card'><b>Returns:</b> Nothing (void)</div>",
      "image": "https://example.com/images/releaseall_syntax.png",
      "audio": "https://example.com/audio/releaseall_syntax.mp3"
    },
    {
      "title": "🎮 Real-Life Use Case",
      "content": "<div class='card'>Imagine your Arduino is simulating a gamepad. You press multiple keys at once like <code>W</code>, <code>A</code>, <code>D</code> to move forward, left, and right. When it’s time to stop, you call <code>releaseAll()</code> to stop all actions instantly.</div><pre><code>Keyboard.press('W');\nKeyboard.press('A');\nKeyboard.press('D');\ndelay(1000);\nKeyboard.releaseAll();</code></pre><div class='card'>This stops movement — just like letting go of the keys on a real keyboard.</div>",
      "image": "https://example.com/images/releaseall_game.png",
      "audio": "https://example.com/audio/releaseall_example.mp3"
    },
    {
      "title": "⚠️ When Should You Use releaseAll()?",
      "content": "<div class='card'>Use <code>releaseAll()</code> when:</div><ul><li>✅ You pressed multiple keys using <code>Keyboard.press()</code></li><li>✅ You want to stop all key presses at once</li><li>✅ You’re unsure which key was last pressed and just want a reset</li></ul><div class='card'>DO NOT use <code>releaseAll()</code> if you want to release just one key — use <code>Keyboard.release()</code> for that!</div>",
      "image": "https://example.com/images/releaseall_when.png",
      "audio": "https://example.com/audio/releaseall_when.mp3"
    },
    {
      "title": "🧩 Mini Puzzle — When to Release?",
      "content": "<div class='card'>You're automating a login screen using Arduino Keyboard.</div><div class='card'>You press <code>CTRL + ALT + DELETE</code> to trigger Windows login. Which function will you use afterward?</div><ul><li>A. <code>Keyboard.end()</code></li><li>B. <code>Keyboard.releaseAll()</code></li><li>C. <code>Keyboard.print()</code></li></ul><button class='gaming-btn' onclick='alert(\"Correct! Option B — releaseAll — releases the combo!\")'>Check Answer</button>",
      "image": "https://example.com/images/releaseall_puzzle.png",
      "audio": "https://example.com/audio/releaseall_puzzle.mp3"
    },
    {
      "title": "📺 Watch It In Action",
      "content": "<div class='card'>Check out this YouTube demo where <code>Keyboard.releaseAll()</code> is used to simulate keyboard shortcuts in a smart Arduino macro pad!</div><iframe width='100%' height='315' src='https://www.youtube.com/embed/3DxwEo9_mJA' title='Keyboard.releaseAll() in action' frameborder='0' allowfullscreen></iframe>",
      "image": "https://example.com/images/releaseall_youtube.png",
      "audio": "https://example.com/audio/releaseall_youtube.mp3"
    }
  ]
}
,{
  "title": "Keyboard.print() — Type Like a Robot!",
  "lessons": [
    {
      "title": "What is Keyboard.print() and How It Types for You",
      "content": "<div class='card'>Alright scientist — imagine your Arduino acting like a real keyboard that types on its own. That’s what <code>Keyboard.print()</code> lets you do!</div>\n\n<div class='card'>With just one line of code like <code>Keyboard.print(\"Hello!\");</code> — your Arduino types that exact message into any text box on your computer. Crazy, right?</div>\n\n<div class='card'>But how does it work? 🤔\n- First, your board must support keyboard functions (like Leonardo, Micro, or Due).\n- Then you call <code>Keyboard.begin()</code> in <code>setup()</code> to activate keyboard mode.\n- Then, use <code>Keyboard.print()</code> to type words, numbers, even entire messages!</div>\n\n<div class='card'>This is different from <code>Serial.print()</code>. That sends text only to the Serial Monitor. But <code>Keyboard.print()</code> types directly into apps, browsers, editors — like a real keyboard would.</div>\n\n<div class='card'>Want your robot to fill out a form? Open a Notepad? Play a prank? You got the power now 😄</div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Step</button>",
      "image": "https://cdn.sparkfun.com//assets/parts/1/1/3/0/5/13672-01.jpg",
      "audio": "https://audio-url-host/keyboard-print-intro.mp3"
    },
    {
      "title": "🎮 Game: Real or Serial?",
      "content": "<div class='card'>Which of these commands sends text to a real text editor (like Notepad)?</div>\n<div class='card'>\n<pre>\n1. Serial.print(\"Robot says hi!\");\n2. Keyboard.print(\"Robot says hi!\");\n</pre>\n</div>\n<div class='card'>Type your answer below:</div>\n<div class='card'>\n<input placeholder='Your Answer (1 or 2)' id='keyboardPrintGame' style='width: 100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct Answer: 2 — Keyboard.print() types into real apps!\")'>Submit</button>\n</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Keyboard_layout_US.svg/1280px-Keyboard_layout_US.svg.png",
      "audio": "https://audio-url-host/keyboard-print-game.mp3"
    },
    {
      "title": "📺 Watch: Keyboard.print() in Action!",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/T8akF3A_0lM' title='Arduino Keyboard Example with Leonardo' frameborder='0' allowfullscreen></iframe>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Arduino_Leonardo_with_headers.jpg",
      "audio": "https://audio-url-host/keyboard-print-video.mp3"
    },
    {
      "title": "💡 Bonus: Build an Auto-Typer!",
      "content": "<div class='card'>Want to create a robot that types your name every time you press a button?</div>\n<div class='card'>Let’s do it with just a few lines of code!</div>\n<div class='card'><pre>\n#include <Keyboard.h>\nconst int buttonPin = 2;\nvoid setup() {\n  pinMode(buttonPin, INPUT_PULLUP);\n  Keyboard.begin();\n}\nvoid loop() {\n  if (digitalRead(buttonPin) == LOW) {\n    Keyboard.print(\"Kaustubh\\n\");\n    delay(1000);\n  }\n}\n</pre></div>\n<div class='card'>💬 It types your name every time you press the button. This is a great starter project — and can be upgraded later into an auto-login, form filler, or chatbot typer 😎</div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Show Me More</button>",
      "image": "https://www.arduino.cc/wiki/static/4ea7ee3ae7f9896d848e24c86732adfd/94ddd/button_wiring_bb.jpg",
      "audio": "https://audio-url-host/keyboard-print-project.mp3"
    }
  ]
}
,{
  "title": "Keyboard.println() — The Auto Typer That Hits Enter Too!",
  "lessons": [
    {
      "title": "What is Keyboard.println()? (And Why It Presses Enter)",
      "content": "<div class='card'>Alright scientist — you've already learned how <code>Keyboard.print()</code> types stuff. But what if you want it to type and then press <b>Enter</b> automatically?</div>\n\n<div class='card'>Say hello to <code>Keyboard.println()</code>! This command does two things:\n<ul><li>Types your message</li><li>Then presses the Enter/Return key at the end</li></ul></div>\n\n<div class='card'>For example:\n<pre>Keyboard.println(\"Hello, world!\");</pre>\nThis types “Hello, world!” and then instantly presses Enter.</div>\n\n<div class='card'>It’s like your Arduino has its own finger to press Enter after every message 🖐️\nPerfect for filling forms, chatting, sending commands to terminals — all hands-free!</div>\n\n<div class='card'>🔍 Tip: You can even send multiple lines like this:\n<pre>\nKeyboard.println(\"First Line\");\nKeyboard.println(\"Second Line\");\n</pre></div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Try a Demo Example</button>",
      "image": "https://cdn.sparkfun.com//assets/parts/1/1/3/0/5/13672-01.jpg",
      "audio": "https://audio-url-host/keyboard-println-intro.mp3"
    },
    {
      "title": "🎮 Game: Print or Println?",
      "content": "<div class='card'>Let’s play a fast game! 👇</div>\n<div class='card'>Which of these commands will move the cursor to the next line after typing?</div>\n<div class='card'>\n<pre>\n1. Keyboard.print(\"Hi!\");\n2. Keyboard.println(\"Hi!\");\n</pre>\n</div>\n<div class='card'>Type your answer below:</div>\n<div class='card'>\n<input placeholder='Your Answer (1 or 2)' id='keyboardPrintlnGame' style='width: 100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct: 2 — println adds an automatic ENTER!\")'>Submit</button>\n</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/3/37/Enter-key.jpg",
      "audio": "https://audio-url-host/keyboard-println-game.mp3"
    },
    {
      "title": "📺 Watch: Keyboard.println() in Real Time",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/3Y74fS7ZhUc' title='Keyboard.println() Arduino Demo' frameborder='0' allowfullscreen></iframe>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Arduino_Micro_MCU_board.jpg/1920px-Arduino_Micro_MCU_board.jpg",
      "audio": "https://audio-url-host/keyboard-println-video.mp3"
    },
    {
      "title": "🎯 Creative Project: Auto Login with Keyboard.println()",
      "content": "<div class='card'>Let’s make a secret tool that types your username and password — and logs you in!</div>\n\n<div class='card'>⚠️ Use it ethically and ONLY on your own systems. This is just a fun project!</div>\n\n<div class='card'><pre>\n#include <Keyboard.h>\nvoid setup() {\n  Keyboard.begin();\n  delay(2000); // Wait for system to detect\n  Keyboard.println(\"myUsername\");\n  delay(500);\n  Keyboard.println(\"myPassword123\");\n}\nvoid loop() {}\n</pre></div>\n\n<div class='card'>💡 How it works:\n- Arduino types your username\n- Presses Enter automatically\n- Then types password\n- Presses Enter again — just like a human!</div>\n\n<div class='card'>Use it with tools like <b>Notepad login demo</b> to practice typing securely.</div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Try on Your Leonardo</button>",
      "image": "https://cdn.sparkfun.com/assets/home_page_posts/3/7/8/Keyboard-hero.jpg",
      "audio": "https://audio-url-host/keyboard-println-project.mp3"
    }
  ]
}
,{
  "title": "Keyboard.write() — Type Special Keys Like a Pro!",
  "lessons": [
    {
      "title": "What is Keyboard.write()? (And Why It’s Different)",
      "content": "<div class='card'>Alright scientist — you've seen how <code>Keyboard.print()</code> types messages, and <code>Keyboard.println()</code> types and hits Enter.</div>\n\n<div class='card'>But what if you want to type a single character… or even press <b>special keys</b> like ESC, TAB, arrows, or BACKSPACE?</div>\n\n<div class='card'>That’s where <code>Keyboard.write()</code> comes in! 🧠</div>\n\n<div class='card'>With <code>Keyboard.write()</code>, you can:\n<ul><li>Send a single character (like <code>'a'</code>)</li><li>Send ASCII codes (like <code>65</code> for 'A')</li><li>Send special keys using predefined constants (like <code>KEY_RETURN</code>)</li></ul></div>\n\n<div class='card'>Here’s an example:\n<pre>Keyboard.write('A'); // Sends capital A\nKeyboard.write(9);   // Sends TAB key (ASCII 9)</pre></div>\n\n<div class='card'>💡 Tip: Unlike <code>print()</code>, this only sends ONE character or key at a time. So to type “Hi”, you’d need:\n<pre>\nKeyboard.write('H');\nKeyboard.write('i');\n</pre></div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Let's Explore Special Keys</button>",
      "image": "https://cdn.sparkfun.com/assets/parts/1/1/3/0/5/13672-01.jpg",
      "audio": "https://audio-url-host/keyboard-write-intro.mp3"
    },
    {
      "title": "🎮 Game: Print, println, or write?",
      "content": "<div class='card'>Choose which function you'd use for each situation!</div>\n<div class='card'>\n<ol>\n<li>I want to type my full name and press Enter</li>\n<li>I want to send the TAB key</li>\n<li>I want to type a message into a browser</li>\n</ol>\n</div>\n<div class='card'>Type your answers like this: 1=___, 2=___, 3=___</div>\n<div class='card'>\n<input placeholder='Your Answer...' id='keyboardWriteGame' style='width: 100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct: 1=println, 2=write, 3=print\")'>Submit</button>\n</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Special-keys-on-a-keyboard.jpg",
      "audio": "https://audio-url-host/keyboard-write-game.mp3"
    },
    {
      "title": "📺 Watch: Keyboard.write() Demo with Special Keys",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/zyo8FLC7pGs' title='Arduino Keyboard.write() Special Keys Tutorial' frameborder='0' allowfullscreen></iframe>",
      "image": "https://cdn-learn.adafruit.com/assets/assets/000/031/963/large1024/overview__1_.png",
      "audio": "https://audio-url-host/keyboard-write-video.mp3"
    },
    {
      "title": "💡 Project: Send a Magic Shortcut with One Button",
      "content": "<div class='card'>Let’s make a one-button keyboard shortcut launcher!</div>\n\n<div class='card'>When you press a button, your Arduino will press TAB, type something, and hit Enter. All with <code>Keyboard.write()</code>.</div>\n\n<div class='card'><pre>\n#include <Keyboard.h>\nconst int buttonPin = 2;\nvoid setup() {\n  pinMode(buttonPin, INPUT_PULLUP);\n  Keyboard.begin();\n}\nvoid loop() {\n  if (digitalRead(buttonPin) == LOW) {\n    Keyboard.write(9); // TAB key\n    delay(300);\n    Keyboard.write('Y');\n    Keyboard.write('e');\n    Keyboard.write('s');\n    Keyboard.write(13); // ENTER key\n    delay(1000);\n  }\n}</pre></div>\n\n<div class='card'>⚙️ This can be used for automating repetitive keyboard shortcuts or form-filling steps. Super handy!</div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Try It Yourself!</button>",
      "image": "https://cdn.sparkfun.com/assets/home_page_posts/3/7/8/Keyboard-hero.jpg",
      "audio": "https://audio-url-host/keyboard-write-project.mp3"
    }
  ]
}
,{
  "title": "KeyboardAndMouseControl — Master Two Powers at Once!",
  "lessons": [
    {
      "title": "What is KeyboardAndMouseControl?",
      "content": "<div class='card'>Alright scientist — what if I told you your Arduino could move your mouse and type at the same time? 😱</div>\n\n<div class='card'>With this example sketch called <code>KeyboardAndMouseControl</code>, you unlock TWO hidden superpowers:\n<ul><li>Type using <code>Keyboard.print()</code></li><li>Control the mouse pointer using <code>Mouse.move()</code>, <code>Mouse.click()</code>, and more</li></ul></div>\n\n<div class='card'>This demo listens to analog inputs and button presses and then moves the cursor, clicks, or types depending on your input!</div>\n\n<div class='card'>🧠 It’s like turning your Arduino into a wild remote control — or even a gamepad for your computer.</div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Explore How It Works</button>",
      "image": "https://cdn.arduino.cc/static/keyboard-mouse.jpg",
      "audio": "https://audio-url-host/kbmouse-intro.mp3"
    },
    {
      "title": "📺 Video: Mouse and Keyboard from Arduino?!",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/o8FzivbBhdA' title='Arduino Keyboard and Mouse Example' frameborder='0' allowfullscreen></iframe>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Mouse_event_diagram.png",
      "audio": "https://audio-url-host/kbmouse-video.mp3"
    },
    {
      "title": "🛠️ Try the Example Code",
      "content": "<div class='card'>Here’s the core of the <code>KeyboardAndMouseControl</code> sketch:</div>\n\n<div class='card'><pre>\n#include <Keyboard.h>\n#include <Mouse.h>\n\nconst int upButton = 2;\nconst int downButton = 3;\nconst int leftButton = 4;\nconst int rightButton = 5;\nconst int mouseButton = 6;\n\nvoid setup() {\n  pinMode(upButton, INPUT);\n  pinMode(downButton, INPUT);\n  pinMode(leftButton, INPUT);\n  pinMode(rightButton, INPUT);\n  pinMode(mouseButton, INPUT);\n  Keyboard.begin();\n  Mouse.begin();\n}\n\nvoid loop() {\n  if (digitalRead(upButton) == HIGH) Mouse.move(0, -1, 0);\n  if (digitalRead(downButton) == HIGH) Mouse.move(0, 1, 0);\n  if (digitalRead(leftButton) == HIGH) Mouse.move(-1, 0, 0);\n  if (digitalRead(rightButton) == HIGH) Mouse.move(1, 0, 0);\n  if (digitalRead(mouseButton) == HIGH) Mouse.click();\n  delay(10);\n}\n</pre></div>\n\n<div class='card'>You control your PC with Arduino buttons! Now that’s powerful 💪</div>",
      "image": "https://www.electronicwings.com/public/images/user_images/images/Arduino_Mouse.jpg",
      "audio": "https://audio-url-host/kbmouse-code.mp3"
    },
    {
      "title": "🎮 Game: Match the Function!",
      "content": "<div class='card'>Match the Arduino function with what it does:</div>\n<div class='card'>\n<ul>\n<li>Mouse.move()</li>\n<li>Mouse.click()</li>\n<li>Keyboard.print()</li>\n</ul>\n</div>\n<div class='card'>\nA. Types a message<br>\nB. Moves the cursor<br>\nC. Presses the left button\n</div>\n<div class='card'>Type your answers like: A=__, B=__, C=__</div>\n<div class='card'>\n<input id='kbmousegame' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Answer: A=Keyboard.print(), B=Mouse.move(), C=Mouse.click()\")'>Submit</button>\n</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Computer-mouse.svg/1024px-Computer-mouse.svg.png",
      "audio": "https://audio-url-host/kbmouse-game.mp3"
    },
    {
      "title": "🧪 Project Idea: Build a Game Controller!",
      "content": "<div class='card'>Use 5 push buttons and your Arduino Micro or Leonardo to build a basic computer game controller!</div>\n\n<div class='card'>Map buttons to:\n<ul>\n<li>W, A, S, D (with Keyboard.write())</li>\n<li>Mouse moves (with Mouse.move())</li>\n<li>Spacebar for jump (Keyboard.write(' '))</li>\n</ul></div>\n\n<div class='card'>💡 Want to take it further? Add a joystick module for analog control — and now you’ve made your own USB gamepad!</div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Let's Move to the Next Sketch!</button>",
      "image": "https://cdn.sparkfun.com/assets/home_page_posts/3/8/5/joystick_shield.jpg",
      "audio": "https://audio-url-host/kbmouse-project.mp3"
    }
  ]
}
,{
  "title": "KeyboardMessage — Type a Message with One Click!",
  "lessons": [
    {
      "title": "What is KeyboardMessage? (The One-Button Typer)",
      "content": "<div class='card'>Alright scientist — imagine pressing a button on your Arduino and BAM 💥 — a full message is typed into your screen.</div>\n\n<div class='card'>That’s what the <code>KeyboardMessage</code> sketch does. When you press a physical button connected to your board, your Arduino types a prewritten message into any app.</div>\n\n<div class='card'>This is great for automating boring tasks like logging in, sending a welcome message, or even spamming your own name into Notepad 😄</div>\n\n<div class='card'>Here’s what happens inside the sketch:\n<ol>\n<li>Setup a button input</li>\n<li>When pressed, it uses <code>Keyboard.print()</code> or <code>Keyboard.println()</code> to type a string</li>\n<li>Delays to avoid repeats</li>\n</ol></div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Let’s See It in Action</button>",
      "image": "https://cdn.sparkfun.com/assets/8/3/f/8/f/KeyboardShieldHookup_Example.jpg",
      "audio": "https://audio-url-host/keyboard-message-intro.mp3"
    },
    {
      "title": "📺 Watch: One Button = One Typed Message!",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/RSkklgaO7uA' title='KeyboardMessage Arduino Demo' frameborder='0' allowfullscreen></iframe>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Button_blue.svg/1024px-Button_blue.svg.png",
      "audio": "https://audio-url-host/keyboard-message-video.mp3"
    },
    {
      "title": "🧪 Try the Official Code",
      "content": "<div class='card'>Here’s the official Arduino sketch used in <code>KeyboardMessage</code>:</div>\n\n<div class='card'><pre>\n#include <Keyboard.h>\nconst int buttonPin = 2;\nvoid setup() {\n  pinMode(buttonPin, INPUT_PULLUP);\n  Keyboard.begin();\n}\nvoid loop() {\n  if (digitalRead(buttonPin) == LOW) {\n    Keyboard.println(\"Hello from Arduino!\");\n    delay(1000);\n  }\n}</pre></div>\n\n<div class='card'>💬 When you press the button, it types “Hello from Arduino!” and presses Enter. It’s like your board is texting you 😎</div>",
      "image": "https://cdn.sparkfun.com/assets/home_page_posts/3/7/8/Keyboard-hero.jpg",
      "audio": "https://audio-url-host/keyboard-message-code.mp3"
    },
    {
      "title": "🎮 Game: What Will It Type?",
      "content": "<div class='card'>What will the following sketch output when the button is pressed?</div>\n<div class='card'><pre>\nKeyboard.println(\"System Access Granted!\");</pre></div>\n<div class='card'>Your Arduino will type: <input id='msgGame' placeholder='Your guess...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! It will type: System Access Granted! and then press Enter\")'>Submit</button></div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Check-mark-green-circle.svg",
      "audio": "https://audio-url-host/keyboard-message-game.mp3"
    },
    {
      "title": "💡 Mini Project: Make a USB 'Welcome Button'",
      "content": "<div class='card'>Let’s build a single-button Arduino project that types a greeting every time you plug it in and press the button.</div>\n<div class='card'><pre>\n#include <Keyboard.h>\nvoid setup() {\n  pinMode(2, INPUT_PULLUP);\n  Keyboard.begin();\n}\nvoid loop() {\n  if (digitalRead(2) == LOW) {\n    Keyboard.print(\"Hey there, Kaustubh!\\n\");\n    delay(1500);\n  }\n}</pre></div>\n\n<div class='card'>📎 You can upgrade this by using EEPROM to store custom messages, or add multiple buttons for different outputs.</div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Sketch: KeyboardLogout ➡️</button>",
      "image": "https://cdn.arduino.cc/static/tutorials/en/usb/button-led.png",
      "audio": "https://audio-url-host/keyboard-message-project.mp3"
    }
  ]
}
,{
  "title": "KeyboardLogout — Force Logout with a Button!",
  "lessons": [
    {
      "title": "What is KeyboardLogout? (The Security Button)",
      "content": "<div class='card'>Alright scientist — ready to build a gadget that can instantly log out your PC when you press a button? Like a self-destruct key? 😎</div>\n\n<div class='card'>The <code>KeyboardLogout</code> sketch sends a special keyboard combination (like <code>Ctrl + Alt + Delete</code> or <code>Windows + L</code>) that triggers logout on your computer.</div>\n\n<div class='card'>It’s just a regular button connected to Arduino. But when you press it, it types the correct system shortcut automatically. 💥</div>\n\n<div class='card'>⚠️ Only boards like Leonardo, Micro, or Due can run this because they support keyboard HID functions. And yes — it works just like a real keyboard!</div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Let’s Watch It Happen</button>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Windows-logout-screen.png/1024px-Windows-logout-screen.png",
      "audio": "https://audio-url-host/keyboard-logout-intro.mp3"
    },
    {
      "title": "📺 Watch: One Button = Instant Logout",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/1Z7rYkMcpBY' title='Arduino Logout Button Demo' frameborder='0' allowfullscreen></iframe>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/d/db/Shutdown_icon.svg",
      "audio": "https://audio-url-host/keyboard-logout-video.mp3"
    },
    {
      "title": "🧪 Try the KeyboardLogout Code",
      "content": "<div class='card'>Here’s how to write a sketch that logs you out of Windows when a button is pressed:</div>\n\n<div class='card'><pre>\n#include <Keyboard.h>\nconst int buttonPin = 2;\nvoid setup() {\n  pinMode(buttonPin, INPUT_PULLUP);\n  Keyboard.begin();\n}\nvoid loop() {\n  if (digitalRead(buttonPin) == LOW) {\n    Keyboard.press(KEY_LEFT_GUI); // Windows key\n    Keyboard.press('l');          // + L key\n    delay(100);\n    Keyboard.releaseAll();\n    delay(1000);\n  }\n}</pre></div>\n\n<div class='card'>👀 For Mac, replace with <code>KEY_LEFT_CTRL + KEY_LEFT_SHIFT + POWER</code> or use <code>Cmd + Q</code> combos based on what you need.</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Keyboard-shortcut.svg",
      "audio": "https://audio-url-host/keyboard-logout-code.mp3"
    },
    {
      "title": "🎮 Game: Which Shortcut Logs Out?",
      "content": "<div class='card'>Select the correct logout shortcut used in the Arduino sketch for Windows:</div>\n<div class='card'>\nA. Ctrl + C<br>\nB. Alt + F4<br>\nC. Windows + L<br>\nD. Shift + Esc\n</div>\n<div class='card'><input id='logoutGame' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! C: Windows + L locks/logs out Windows instantly\")'>Submit</button></div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/Windows_L_logout.svg",
      "audio": "https://audio-url-host/keyboard-logout-game.mp3"
    },
    {
      "title": "🧠 Ethical Note + Project Idea",
      "content": "<div class='card'>⚠️ Use this sketch only on your own devices, or where you have permission. Logging others out without warning is not cool 😅</div>\n\n<div class='card'>💡 Project Idea: Build a <b>panic button</b> for your room. One press locks your PC, types an emergency message, or logs you out instantly.</div>\n\n<div class='card'>Upgrade this idea with a piezo buzzer, LEDs, or even a text display showing “LOGGED OUT” when pressed!</div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Almost There! Time for Serial Magic</button>",
      "image": "https://cdn.sparkfun.com/assets/learn_tutorials/5/5/6/Panic_button.jpg",
      "audio": "https://audio-url-host/keyboard-logout-ethics.mp3"
    }
  ]
}
,{
  "title": "KeyboardSerial — Turn Serial Input Into Keystrokes!",
  "lessons": [
    {
      "title": "What is KeyboardSerial? (Live Serial Typing)",
      "content": "<div class='card'>Alright scientist — this one’s a game changer! What if your Arduino could listen to input from the Serial Monitor and type it out on your PC?</div>\n\n<div class='card'>That’s exactly what the <code>KeyboardSerial</code> sketch does. You send characters to the Arduino using the Serial Monitor — and the board instantly types them on your computer using <code>Keyboard.write()</code>.</div>\n\n<div class='card'>🚀 Think of it as a translator between serial input and USB keyboard output. Anything you type in Serial is echoed into real applications!</div>\n\n<div class='card'>This is great for command automation, secret message injections, or controlling your PC with another device.</div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Watch the Concept in Action</button>",
      "image": "https://cdn.arduino.cc/static/usb-serial-monitor.jpg",
      "audio": "https://audio-url-host/keyboard-serial-intro.mp3"
    },
    {
      "title": "📺 Watch: Serial to Keyboard Demo",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/6QEDcCrOIGs' title='Arduino KeyboardSerial Sketch Demo' frameborder='0' allowfullscreen></iframe>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/f/f9/SerialMonitor.jpg",
      "audio": "https://audio-url-host/keyboard-serial-video.mp3"
    },
    {
      "title": "🧪 Try the KeyboardSerial Code",
      "content": "<div class='card'>Here’s the code that powers this serial-to-keystroke magic:</div>\n\n<div class='card'><pre>\n#include <Keyboard.h>\nvoid setup() {\n  Keyboard.begin();\n  Serial.begin(9600);\n  while (!Serial); // Wait for serial connection\n}\nvoid loop() {\n  if (Serial.available() > 0) {\n    char inputChar = Serial.read();\n    Keyboard.write(inputChar);\n  }\n}</pre></div>\n\n<div class='card'>💡 Type into the Serial Monitor — and Arduino will send that as keystrokes to your PC. It even works in Google Docs, Notepad, or any typing field!</div>",
      "image": "https://cdn.sparkfun.com/assets/9/d/2/e/2/KeyboardSerial-diagram.png",
      "audio": "https://audio-url-host/keyboard-serial-code.mp3"
    },
    {
      "title": "🎮 Game: Serial Guessing Game",
      "content": "<div class='card'>Let’s test your understanding! What does the Arduino type if you enter “abc” in the Serial Monitor?</div>\n<div class='card'><input id='serialGame' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! Arduino will type: abc (as if typed by a keyboard)\")'>Submit</button></div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Keyboard-usb.svg/1280px-Keyboard-usb.svg.png",
      "audio": "https://audio-url-host/keyboard-serial-game.mp3"
    },
    {
      "title": "💡 Project Idea: Serial Terminal Commander",
      "content": "<div class='card'>Let’s level this up! Create a project where your Arduino acts like a terminal-powered robot — receiving typed commands over Serial and performing actions.</div>\n\n<div class='card'>Example: If you type “1”, it types your name. If you type “2”, it logs you out. If you type “3”, it opens a browser. 🔥</div>\n\n<div class='card'>Bonus idea: Connect another microcontroller (like ESP32 or Nano) and use it to control your USB keyboard remotely!</div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Onward to the Final Sketch!</button>",
      "image": "https://cdn.sparkfun.com/assets/5/b/8/f/3/Keyboard_serial_terminal.jpg",
      "audio": "https://audio-url-host/keyboard-serial-project.mp3"
    }
  ]
},{
  "title": "KeyboardReprogram — When Arduino Programs Itself!",
  "lessons": [
    {
      "title": "What is KeyboardReprogram? (A Self-Rewriting Board!)",
      "content": "<div class='card'>Alright scientist — are you ready to watch your Arduino open the Arduino IDE, paste a full sketch, and upload it? WITHOUT YOU DOING ANYTHING? 🤯</div>\n\n<div class='card'>That’s the superpower of <code>KeyboardReprogram</code>. This sketch uses keyboard shortcuts to:</div>\n<ul>\n<li>Open the Arduino IDE</li>\n<li>Create a new sketch</li>\n<li>Type in a new program (like blink LED)</li>\n<li>Upload it automatically!</li>\n</ul>\n\n<div class='card'>It’s the Arduino programming... the Arduino. This is as meta as it gets!</div>\n\n<div class='card'>🧠 Uses a lot of <code>Keyboard.press()</code>, <code>Keyboard.release()</code>, <code>Keyboard.print()</code>, and precise delays to simulate human typing and IDE commands.</div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Let’s Watch the Magic</button>",
      "image": "https://cdn.arduino.cc/static/ide-open.png",
      "audio": "https://audio-url-host/keyboard-reprogram-intro.mp3"
    },
    {
      "title": "📺 Watch: Arduino Reprograms Itself!",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/2Fv2cqS2J0U' title='KeyboardReprogram Demo — Self Writing Arduino' frameborder='0' allowfullscreen></iframe>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/b/bc/ArduinoIDE-open.png",
      "audio": "https://audio-url-host/keyboard-reprogram-video.mp3"
    },
    {
      "title": "🧪 Try the Sample (With Caution!)",
      "content": "<div class='card'>Here’s the idea of the sketch — shortened for safety. It presses <code>Ctrl+N</code> for new sketch, types code, then uploads it.</div>\n\n<div class='card'><pre>\n#include <Keyboard.h>\nvoid setup() {\n  delay(1000);\n  Keyboard.begin();\n  Keyboard.press(KEY_LEFT_CTRL);\n  Keyboard.press('n');\n  delay(100);\n  Keyboard.releaseAll();\n  delay(1000);\n\n  Keyboard.println(\"void setup() {\");\n  Keyboard.println(\"  pinMode(13, OUTPUT);\");\n  Keyboard.println(\"}\");\n  Keyboard.println(\"void loop() {\");\n  Keyboard.println(\"  digitalWrite(13, HIGH);\");\n  Keyboard.println(\"  delay(500);\");\n  Keyboard.println(\"  digitalWrite(13, LOW);\");\n  Keyboard.println(\"  delay(500);\");\n  Keyboard.println(\"}\");\n\n  delay(500);\n  Keyboard.press(KEY_LEFT_CTRL);\n  Keyboard.press('u'); // Upload sketch\n  delay(100);\n  Keyboard.releaseAll();\n}\nvoid loop() {}  // Empty loop</pre></div>\n\n<div class='card'>⚠️ Caution: Make sure Arduino IDE is open and focused before this runs. Otherwise, it may spam keys into whatever app is open!</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/8/8f/Blink-sketch-ide.png",
      "audio": "https://audio-url-host/keyboard-reprogram-code.mp3"
    },
    {
      "title": "🎮 Game: Put the Steps in Order",
      "content": "<div class='card'>Put these steps in the correct order that Arduino does in <code>KeyboardReprogram</code>:</div>\n<div class='card'>\nA. Uploads the sketch<br>\nB. Types out code<br>\nC. Opens new sketch\n</div>\n<div class='card'><input id='reprogramGame' placeholder='Your answer (e.g. C-B-A)' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! First it opens sketch (C), then types (B), then uploads (A)\")'>Submit</button></div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Keyboard_light_icon.svg/1200px-Keyboard_light_icon.svg.png",
      "audio": "https://audio-url-host/keyboard-reprogram-game.mp3"
    },
    {
      "title": "💡 Advanced Idea: USB Arduino Virus Simulator (For Learning!)",
      "content": "<div class='card'>⚠️ For educational use only: You can modify this sketch to type rapid commands, open websites, shutdown the PC, or simulate prank-like behavior.</div>\n\n<div class='card'>💡 Think of this as a ‘rubber ducky’ — a USB stick that executes code instantly when plugged in. Great for testing system security and automation.</div>\n\n<div class='card'>NEVER use on someone else's computer without permission.</div>\n\n<div class='card'>Want a fun idea? Create a prank that opens a browser and types: <i>“Kaustubh was here 😎”</i></div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/2/28/Security-warning-icon.svg",
      "audio": "https://audio-url-host/keyboard-reprogram-project.mp3"
    }
  ]
}


      ]

    },{
  "title": "USB Mouse Mastery: Control Your Computer Like a Pro",
  modules:[
    {
  "title": "Meet the Mouse Library — Move, Click, Control!",
  "lessons": [
    {
      "title": "What is the Mouse Library?",
      "content": "<div class='card'>Alright scientist — what if your Arduino could become a mouse? Not a joke — a real USB mouse. 🖱️✨</div>\n\n<div class='card'>The <b>Mouse library</b> lets you control the mouse pointer from your Arduino. You can:\n<ul><li>Move the mouse</li><li>Click or hold buttons</li><li>Build your own USB input devices</li></ul></div>\n\n<div class='card'>This works by turning your Arduino into a <b>HID device</b> (Human Interface Device). Just like real keyboards or mice!</div>\n\n<div class='card'>💡 Tip: Not all Arduinos support this. You need a board with native USB — like:\n<ul>\n<li>Arduino Leonardo</li>\n<li>Arduino Micro</li>\n<li>Arduino Due</li>\n</ul></div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>So... What Can You Do With This?</button>",
      "image": "https://cdn.arduino.cc/static/hid-mouse.svg",
      "audio": "https://audio-url-host/mouse-library-intro.mp3"
    },
    {
      "title": "📺 Video: Arduino Controls a Mouse!",
      "content": "<iframe width='100%' height='315' src='https://www.youtube.com/embed/lAA9XGldI2A' title='Arduino Mouse Control Demo' frameborder='0' allowfullscreen></iframe>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/USB_mouse_inside.jpg/1024px-USB_mouse_inside.jpg",
      "audio": "https://audio-url-host/mouse-library-video.mp3"
    },
    {
      "title": "🎮 Game: Which One Can Be a USB Mouse?",
      "content": "<div class='card'>Pick the boards that support USB HID mouse features:</div>\n<div class='card'>\n<ul>\n<li>Arduino UNO</li>\n<li>Arduino Leonardo</li>\n<li>Arduino Nano</li>\n<li>Arduino Micro</li>\n</ul>\n</div>\n<div class='card'>Answer format: 1=Yes/No, 2=Yes/No, ...</div>\n<div class='card'>\n<input id='mouseGame1' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct: 1=No, 2=Yes, 3=No, 4=Yes\")'>Submit</button></div>",
      "image": "https://cdn.sparkfun.com/assets/learn_tutorials/1/1/3/USB_HID_devices.jpg",
      "audio": "https://audio-url-host/mouse-library-game.mp3"
    },
    {
      "title": "💡 Project Idea: USB Volume Slider or Gamepad",
      "content": "<div class='card'>Want to build something cool?</div>\n<div class='card'>Here are ideas you can make using the Mouse library:</div>\n<ul>\n<li>A volume knob that moves the mouse left/right to adjust system volume</li>\n<li>A gamepad with directional buttons controlling mouse movement</li>\n<li>A prank mouse that randomly moves the cursor 😈</li>\n</ul>\n<div class='card'>Coming up next, we’ll learn about <code>Mouse.begin()</code> — your very first mouse command!</div>",
      "image": "https://cdn.sparkfun.com/assets/home_page_posts/2/2/6/Mouse-move-gamepad.jpg",
      "audio": "https://audio-url-host/mouse-library-project.mp3"
    }
  ]
}
,{
  "title": "Mouse.begin() — Start the Mouse Engine!",
  "lessons": [
    {
      "title": "What Does Mouse.begin() Do?",
      "content": "<div class='card'>Alright scientist — every great machine has a start button. For mouse control on Arduino, that button is <code>Mouse.begin()</code> 🟢</div>\n\n<div class='card'><b>Mouse.begin()</b> is used in <code>setup()</code> to start the mouse communication with your PC. It’s required before you can move or click anything!</div>\n\n<div class='card'>⚠️ If you forget this function, none of the other mouse commands will work. It’s like trying to drive a car without starting the engine 🚗</div>\n\n<div class='card'>💡 Usually, you only call it once — during setup. You don’t need to repeat it.</div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Let’s See It in Code</button>",
      "image": "https://cdn.arduino.cc/static/start-mouse.svg",
      "audio": "https://audio-url-host/mouse-begin-intro.mp3"
    },
    {
      "title": "🧪 Example Code: Move Mouse After Startup",
      "content": "<div class='card'>Here’s how to move the mouse right after starting mouse control:</div>\n\n<div class='card'><pre>\n#include <Mouse.h>\n\nvoid setup() {\n  Mouse.begin();     // 🟢 Start mouse control\n  delay(1000);       // Wait for system to respond\n  Mouse.move(20, 0); // Move cursor right\n}\n\nvoid loop() {\n  // Nothing here\n}</pre></div>\n\n<div class='card'>This code moves your cursor 20 pixels to the right, once. That’s proof your mouse engine is running!</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/0/08/Mouse-pointer-move.png",
      "audio": "https://audio-url-host/mouse-begin-code.mp3"
    },
    {
      "title": "🎮 Game: When Should You Call Mouse.begin()?",
      "content": "<div class='card'>🧠 Choose the best place to call <code>Mouse.begin()</code> in an Arduino sketch:</div>\n\n<div class='card'>A. Inside <code>loop()</code><br>B. Inside <code>setup()</code><br>C. Before <code>#include &lt;Mouse.h&gt;</code><br>D. Never — it's optional</div>\n\n<div class='card'>\n<input id='mouseBeginGame' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! B. Always call Mouse.begin() once in setup().\")'>Submit</button></div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/4/49/Power_button_icon.svg",
      "audio": "https://audio-url-host/mouse-begin-game.mp3"
    },
    {
      "title": "💡 Project Idea: Auto Cursor Mover on Startup",
      "content": "<div class='card'>Want to build something cool with <code>Mouse.begin()</code>?</div>\n\n<div class='card'>Try this fun idea: Make a prank project that automatically moves the cursor to a corner of the screen every time your computer boots up 🔄</div>\n\n<div class='card'>⚠️ You’ll need to power your Arduino through USB at startup. Use <code>Mouse.move()</code> after <code>Mouse.begin()</code> to make it happen!</div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Ready to Stop the Mouse? Let's Learn Mouse.end()</button>",
      "image": "https://cdn.sparkfun.com/assets/4/3/8/1/AutoMove-MouseProject.jpg",
      "audio": "https://audio-url-host/mouse-begin-project.mp3"
    }
  ]
}
,{
  "title": "Mouse.end() — Stop Mouse Control Safely!",
  "lessons": [
    {
      "title": "What Does Mouse.end() Do?",
      "content": "<div class='card'>Alright scientist — we’ve learned how to start mouse control with <code>Mouse.begin()</code>. But what if you want to turn it OFF?</div>\n\n<div class='card'><b>Mouse.end()</b> is the function that stops the mouse communication between your Arduino and your computer.</div>\n\n<div class='card'>Once this is called, your Arduino stops acting like a mouse. All <code>Mouse.move()</code>, <code>click()</code>, or <code>press()</code> commands stop working.</div>\n\n<div class='card'>🧠 Use this function if:\n<ul><li>You want to limit how long the Arduino acts like a mouse</li><li>You want to pause mouse control based on user input</li><li>You want to safely disconnect HID behavior in a sketch</li></ul></div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Let’s Look at an Example</button>",
      "image": "https://cdn.arduino.cc/static/mouse-end-icon.svg",
      "audio": "https://audio-url-host/mouse-end-intro.mp3"
    },
    {
      "title": "🧪 Example Code: Stop After One Move",
      "content": "<div class='card'>Let’s move the mouse once, then stop HID control forever:</div>\n\n<div class='card'><pre>\n#include <Mouse.h>\n\nvoid setup() {\n  Mouse.begin();     // Start control\n  Mouse.move(40, 0); // Move right\n  delay(500);\n  Mouse.end();       // 🛑 Stop control\n}\n\nvoid loop() {}\n</pre></div>\n\n<div class='card'>After this runs, Arduino stops pretending to be a mouse. It becomes invisible to the OS again.</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Mouse-pointer-stop.png/768px-Mouse-pointer-stop.png",
      "audio": "https://audio-url-host/mouse-end-code.mp3"
    },
    {
      "title": "🎮 Game: What Happens After Mouse.end()?",
      "content": "<div class='card'>If you call <code>Mouse.end()</code> and then <code>Mouse.move(10, 0)</code>, what happens?</div>\n<div class='card'>\nA. Mouse moves\n<br>B. Compilation error\n<br>C. Nothing happens\n<br>D. Computer crashes 😆</div>\n<div class='card'>\n<input id='mouseEndGame' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! C. Nothing happens — Mouse.move() won't work after Mouse.end().\")'>Submit</button></div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/7/71/Stop-sign-icon.png",
      "audio": "https://audio-url-host/mouse-end-game.mp3"
    },
    {
      "title": "💡 Project Idea: Smart Mouse Timeout",
      "content": "<div class='card'>Build a USB prank mouse that moves the cursor randomly for 5 seconds — then automatically disables itself using <code>Mouse.end()</code>.</div>\n\n<div class='card'>Add a buzzer or LED to indicate 'mouse mode' is active, and turn it off when <code>Mouse.end()</code> is called!</div>\n\n<div class='card'>⚙️ Bonus: Create a secret combo to restart mouse control again. Like a real ninja tool 🥷</div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Now Let’s Learn to Click — Next Up: Mouse.click()</button>",
      "image": "https://cdn.sparkfun.com/assets/6/b/3/0/USB_mouse_timeout_project.jpg",
      "audio": "https://audio-url-host/mouse-end-project.mp3"
    }
  ]
}
,{
  "title": "Mouse.click() — One Line, One Click!",
  "lessons": [
    {
      "title": "What Does Mouse.click() Do?",
      "content": "<div class='card'>Alright scientist — need to simulate a mouse click in one command? That’s what <code>Mouse.click()</code> is made for! 🖱️⚡</div>\n\n<div class='card'>It presses a mouse button <i>and</i> releases it — just like a real click. You don’t have to call <code>press()</code> and <code>release()</code> separately.</div>\n\n<div class='card'>💡 Default behavior is left click. But you can pass an argument like:\n<ul>\n<li><code>MOUSE_LEFT</code></li>\n<li><code>MOUSE_RIGHT</code></li>\n<li><code>MOUSE_MIDDLE</code></li>\n</ul>\n</div>\n\n<div class='card'>This is awesome for triggering clicks on-screen, launching apps, or pressing buttons in games!</div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Let’s See the Code</button>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/3/35/Mouse-click-illustration.svg",
      "audio": "https://audio-url-host/mouse-click-intro.mp3"
    },
    {
      "title": "🧪 Example Code: Auto Left Click",
      "content": "<div class='card'>This code clicks once after starting the sketch:</div>\n\n<div class='card'><pre>\n#include <Mouse.h>\n\nvoid setup() {\n  Mouse.begin();\n  delay(1000);           // Give the OS some time\n  Mouse.click();          // 👈 Default = left click\n  delay(500);\n  Mouse.end();\n}\n\nvoid loop() {}\n</pre></div>\n\n<div class='card'>To do a <b>right click</b>, use: <code>Mouse.click(MOUSE_RIGHT);</code></div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Mouse-left-right-diagram.svg",
      "audio": "https://audio-url-host/mouse-click-code.mp3"
    },
    {
      "title": "🎮 Game: What Does This Do?",
      "content": "<div class='card'>What happens when you call <code>Mouse.click(MOUSE_MIDDLE)</code>?</div>\n<div class='card'>\nA. Left click<br>\nB. Right click<br>\nC. Middle click<br>\nD. Double click</div>\n<div class='card'>\n<input id='mouseClickGame' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! C. It simulates a middle mouse button click.\")'>Submit</button></div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Mouse_buttons.svg",
      "audio": "https://audio-url-host/mouse-click-game.mp3"
    },
    {
      "title": "💡 Project Idea: Auto Clicker for Games",
      "content": "<div class='card'>Let’s build an Arduino that clicks every 2 seconds — perfect for automating boring click tasks or AFK farming in games 🎮</div>\n\n<div class='card'><pre>\n#include <Mouse.h>\n\nvoid setup() {\n  Mouse.begin();\n}\n\nvoid loop() {\n  Mouse.click();\n  delay(2000);\n}</pre></div>\n\n<div class='card'>⚠️ Warning: Don't use auto-clickers in online games. You could get banned!</div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Up: Mouse.isPressed()</button>",
      "image": "https://cdn.sparkfun.com/assets/4/7/4/f/Arduino_AutoClicker_Project.jpg",
      "audio": "https://audio-url-host/mouse-click-project.mp3"
    }
  ]
}
,{
  "title": "Mouse.isPressed() — Is the Mouse Button Down?",
  "lessons": [
    {
      "title": "What Does Mouse.isPressed() Do?",
      "content": "<div class='card'>Alright scientist — want to check whether the mouse is currently being held down? That’s where <code>Mouse.isPressed()</code> shines 🧐🖱️</div>\n\n<div class='card'>This function returns:\n<ul>\n<li><code>true</code> if the specified mouse button is being held</li>\n<li><code>false</code> if not</li>\n</ul></div>\n\n<div class='card'>This is useful when building custom mouse input systems — like smart buttons, drag-and-drop tools, or gesture control.</div>\n\n<div class='card'>You can check:\n<ul><li><code>MOUSE_LEFT</code></li><li><code>MOUSE_RIGHT</code></li><li><code>MOUSE_MIDDLE</code></li></ul>\nOr even <code>Mouse.isPressed()</code> with no argument to check if <i>any</i> mouse button is held!</div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Try It in Code!</button>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Mouse_button_hold.png",
      "audio": "https://audio-url-host/mouse-ispressed-intro.mp3"
    },
    {
      "title": "🧪 Example: Flash LED While Button is Held",
      "content": "<div class='card'>We’ll light up the LED whenever a mouse button is held:</div>\n\n<div class='card'><pre>\n#include <Mouse.h>\n\nvoid setup() {\n  pinMode(13, OUTPUT);\n  Mouse.begin();\n}\n\nvoid loop() {\n  if (Mouse.isPressed(MOUSE_LEFT)) {\n    digitalWrite(13, HIGH);\n  } else {\n    digitalWrite(13, LOW);\n  }\n}</pre></div>\n\n<div class='card'>🧠 The onboard LED will light up if the left button is being held. This is perfect for visual feedback!</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Arduino_LED_Mouse_Button.jpg",
      "audio": "https://audio-url-host/mouse-ispressed-code.mp3"
    },
    {
      "title": "🎮 Game: What Does This Return?",
      "content": "<div class='card'>What does this return?<br><code>Mouse.isPressed(MOUSE_RIGHT)</code></div>\n\n<div class='card'>\nA. true (if right button is held)<br>\nB. false (if left is held)<br>\nC. 1 (if any button is pressed)<br>\nD. It always throws an error</div>\n\n<div class='card'><input id='mousePressedGame' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! A. It returns true only if right mouse button is held.\")'>Submit</button></div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Mouse_button_check.svg",
      "audio": "https://audio-url-host/mouse-ispressed-game.mp3"
    },
    {
      "title": "💡 Project Idea: Smart Button Tester",
      "content": "<div class='card'>Want to test your mouse? Build an Arduino setup that tells you which button is being held!</div>\n\n<div class='card'>Connect 3 LEDs — one for left, one for right, and one for middle. Then use <code>Mouse.isPressed()</code> to light the right LED 🔦</div>\n\n<div class='card'>Great for making a <i>mouse diagnostic tool</i> or testing wireless mouse signals!</div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Up: Learn Mouse.move()</button>",
      "image": "https://cdn.sparkfun.com/assets/6/7/3/b/Mouse_Button_Tester_Project.jpg",
      "audio": "https://audio-url-host/mouse-ispressed-project.mp3"
    }
  ]
}
,{
  "title": "Mouse.move() — Control the Cursor Like a Pro",
  "lessons": [
    {
      "title": "What Does Mouse.move() Do?",
      "content": "<div class='card'>Alright scientist — ever wanted to move the mouse pointer from Arduino? With <code>Mouse.move()</code>, you're in full control of the cursor 🕹️</div>\n\n<div class='card'><b>Mouse.move(x, y, wheel)</b> does 3 things:\n<ul>\n<li><code>x</code> — horizontal movement (right = +, left = -)</li>\n<li><code>y</code> — vertical movement (down = +, up = -)</li>\n<li><code>wheel</code> — scroll wheel movement (forward = +, backward = -)</li>\n</ul></div>\n\n<div class='card'>🧠 All values are relative — for example, <code>Mouse.move(10, 0, 0)</code> moves the cursor 10 pixels to the right.</div>\n\n<div class='card'>Default is <code>Mouse.move(x, y)</code> (no scroll). But adding that third value gives you control of scrolling!</div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Let’s Move It in Code!</button>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Cursor-movement-directions.svg/768px-Cursor-movement-directions.svg.png",
      "audio": "https://audio-url-host/mouse-move-intro.mp3"
    },
    {
      "title": "🧪 Example Code: Spiral Cursor Movement",
      "content": "<div class='card'>Here’s a fun sketch that moves the mouse in a small square loop:</div>\n\n<div class='card'><pre>\n#include <Mouse.h>\n\nvoid setup() {\n  Mouse.begin();\n}\n\nvoid loop() {\n  Mouse.move(10, 0); delay(200); // Right\n  Mouse.move(0, 10); delay(200); // Down\n  Mouse.move(-10, 0); delay(200); // Left\n  Mouse.move(0, -10); delay(200); // Up\n}</pre></div>\n\n<div class='card'>⚠️ Tip: Don’t forget to include delay — without it, the cursor moves like a rocket 🚀</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/13/Mouse-move-loop.gif",
      "audio": "https://audio-url-host/mouse-move-code.mp3"
    },
    {
      "title": "🎮 Game: Decode the Movement!",
      "content": "<div class='card'>What does this command do?<br><code>Mouse.move(0, 0, -1)</code></div>\n<div class='card'>\nA. No change<br>\nB. Scrolls up<br>\nC. Scrolls down<br>\nD. Moves cursor diagonally</div>\n<div class='card'>\n<input id='mouseMoveGame' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! B. It scrolls up using the mouse wheel.\")'>Submit</button></div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Scroll-wheel-diagram.svg",
      "audio": "https://audio-url-host/mouse-move-game.mp3"
    },
    {
      "title": "💡 Project Idea: Gyro Mouse!",
      "content": "<div class='card'>Want to go pro? Use a gyroscope module with Arduino (like MPU6050) to control the mouse with hand movements 💪🧠</div>\n\n<div class='card'>Convert the gyro readings into <code>x</code>, <code>y</code>, and <code>wheel</code> values — and feed them into <code>Mouse.move()</code>!</div>\n\n<div class='card'>🎯 Result: A gesture-controlled air mouse — just like VR pointers.</div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Up: Mouse.press() for Hold Click</button>",
      "image": "https://cdn.sparkfun.com/assets/8/b/0/1/Gyro-Controlled-Mouse.jpg",
      "audio": "https://audio-url-host/mouse-move-project.mp3"
    }
  ]
}
  ,{
  "title": "Mouse.press() — Hold Down That Click!",
  "lessons": [
    {
      "title": "What Does Mouse.press() Do?",
      "content": "<div class='card'>Alright scientist — need to simulate holding a mouse button down? That’s where <code>Mouse.press()</code> comes in 🧲</div>\n\n<div class='card'>Unlike <code>Mouse.click()</code> which presses and releases instantly, <code>Mouse.press()</code> holds the button until you release it manually using <code>Mouse.release()</code> or <code>Mouse.releaseAll()</code>.</div>\n\n<div class='card'>Usage:\n<ul>\n<li><code>Mouse.press(MOUSE_LEFT)</code> → holds left button</li>\n<li><code>Mouse.press(MOUSE_RIGHT)</code> → holds right button</li>\n</ul>\nIf no argument is passed, it presses the <b>left</b> button by default.</div>\n\n<div class='card'>🧠 Useful for drag-and-drop actions, drawing programs, or holding buttons in games!</div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Let’s Hold Some Code</button>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Hold_mouse_button.svg/1024px-Hold_mouse_button.svg.png",
      "audio": "https://audio-url-host/mouse-press-intro.mp3"
    },
    {
      "title": "🧪 Example: Hold Left Button for 2 Seconds",
      "content": "<div class='card'>This sketch holds the left button down for 2 seconds, then releases it:</div>\n\n<div class='card'><pre>\n#include <Mouse.h>\n\nvoid setup() {\n  Mouse.begin();\n  delay(1000);\n  Mouse.press();         // 👈 Hold down left button\n  delay(2000);           // Wait while held\n  Mouse.release();       // ✋ Release\n}\n\nvoid loop() {}\n</pre></div>\n\n<div class='card'>Try moving your physical mouse during the delay — it behaves like a drag!</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/0/00/Click-hold-drag.svg",
      "audio": "https://audio-url-host/mouse-press-code.mp3"
    },
    {
      "title": "🎮 Game: Click or Hold?",
      "content": "<div class='card'>Which function would you use to hold the right mouse button?</div>\n\n<div class='card'>\nA. <code>Mouse.click(MOUSE_RIGHT)</code><br>\nB. <code>Mouse.press(MOUSE_RIGHT)</code><br>\nC. <code>Mouse.move()</code><br>\nD. <code>Mouse.end()</code></div>\n\n<div class='card'>\n<input id='mousePressGame' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! B. Use Mouse.press(MOUSE_RIGHT) to hold it down.\")'>Submit</button></div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Right-click-press.svg",
      "audio": "https://audio-url-host/mouse-press-game.mp3"
    },
    {
      "title": "💡 Project Idea: Virtual Drawing Tool",
      "content": "<div class='card'>Use <code>Mouse.press()</code> to hold down the mouse button and <code>Mouse.move()</code> to draw a shape — like a digital pen ✏️</div>\n\n<div class='card'>Make the cursor move in a square, drawing continuously while pressed.</div>\n\n<div class='card'><pre>\nMouse.press();\nMouse.move(20, 0); delay(100);\nMouse.move(0, 20); delay(100);\nMouse.move(-20, 0); delay(100);\nMouse.move(0, -20); delay(100);\nMouse.release();</pre></div>\n\n<div class='card'>🎯 Great for automation or making art bots!</div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next Up: Mouse.release()!</button>",
      "image": "https://cdn.sparkfun.com/assets/5/e/b/5/Drawing_Square_With_Mouse.png",
      "audio": "https://audio-url-host/mouse-press-project.mp3"
    }
  ]
}
,{
  "title": "Mouse.release() — Let Go of That Button!",
  "lessons": [
    {
      "title": "What Does Mouse.release() Do?",
      "content": "<div class='card'>Alright scientist — we’ve learned to hold down a mouse button using <code>Mouse.press()</code>. But how do we release just one?</div>\n\n<div class='card'><b>Mouse.release(button)</b> is your precision tool for that. It releases the specified mouse button — and nothing else.</div>\n\n<div class='card'>Supported arguments are:\n<ul>\n<li><code>MOUSE_LEFT</code></li>\n<li><code>MOUSE_RIGHT</code></li>\n<li><code>MOUSE_MIDDLE</code></li>\n</ul></div>\n\n<div class='card'>If you leave the argument blank, it defaults to releasing the left button only.</div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Let’s Try It in Code</button>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/0/07/Mouse_button_release.svg",
      "audio": "https://audio-url-host/mouse-release-intro.mp3"
    },
    {
      "title": "🧪 Example Code: Hold Right, Then Release",
      "content": "<div class='card'>Here’s how to press and release the right mouse button with timing control:</div>\n\n<div class='card'><pre>\n#include <Mouse.h>\n\nvoid setup() {\n  Mouse.begin();\n  Mouse.press(MOUSE_RIGHT); // Hold right click\n  delay(1500);               // Wait 1.5 seconds\n  Mouse.release(MOUSE_RIGHT); // Release it\n}\n\nvoid loop() {}\n</pre></div>\n\n<div class='card'>💡 Try changing <code>MOUSE_RIGHT</code> to <code>MOUSE_MIDDLE</code> to simulate scroll click!</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Right-click-hold-release.svg",
      "audio": "https://audio-url-host/mouse-release-code.mp3"
    },
    {
      "title": "🎮 Game: Which Button Is Released?",
      "content": "<div class='card'>What does this do?<br><code>Mouse.release(MOUSE_MIDDLE)</code></div>\n\n<div class='card'>\nA. Releases left button<br>\nB. Releases all buttons<br>\nC. Releases middle button only<br>\nD. Starts scrolling</div>\n\n<div class='card'>\n<input id='mouseReleaseGame' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! C. It only releases the middle mouse button.\")'>Submit</button></div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Mouse-button-labels.svg",
      "audio": "https://audio-url-host/mouse-release-game.mp3"
    },
    {
      "title": "💡 Project Idea: Double Button Trap",
      "content": "<div class='card'>Try holding down BOTH left and right buttons using <code>Mouse.press()</code> — then release them one by one using <code>Mouse.release()</code>.</div>\n\n<div class='card'>Make a program that simulates holding down two actions in a game (e.g., aim + shoot) — then gradually lets go.</div>\n\n<div class='card'><pre>\nMouse.press(MOUSE_LEFT);\nMouse.press(MOUSE_RIGHT);\ndelay(1000);\nMouse.release(MOUSE_RIGHT);\ndelay(500);\nMouse.release(MOUSE_LEFT);</pre></div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Now Prepare for Full Reset — Mouse.releaseAll()</button>",
      "image": "https://cdn.sparkfun.com/assets/8/4/1/7/Hold-Multiple-Mouse-Buttons.jpg",
      "audio": "https://audio-url-host/mouse-release-project.mp3"
    }
  ]
}
,{
  "title": "Mouse.releaseAll() — Emergency Stop for All Buttons!",
  "lessons": [
    {
      "title": "What Does Mouse.releaseAll() Do?",
      "content": "<div class='card'>Alright scientist — your Arduino is holding multiple buttons at once? Time for a total release!</div>\n\n<div class='card'><code>Mouse.releaseAll()</code> is the full reset button. It immediately releases <i>all</i> pressed mouse buttons — left, right, and middle.</div>\n\n<div class='card'>This is super handy when:\n<ul>\n<li>You don’t remember what’s pressed</li>\n<li>You want to avoid stuck clicks</li>\n<li>You need an emergency stop 🔴</li>\n</ul></div>\n\n<div class='card'>Unlike <code>Mouse.release(button)</code>, this one doesn’t need any arguments — just call it and all buttons are free!</div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Try It in Code</button>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/Mouse_release_all_buttons.svg",
      "audio": "https://audio-url-host/mouse-releaseall-intro.mp3"
    },
    {
      "title": "🧪 Example: Release Everything After 3 Seconds",
      "content": "<div class='card'>Let’s hold two buttons, wait, then release them all with a single command:</div>\n\n<div class='card'><pre>\n#include <Mouse.h>\n\nvoid setup() {\n  Mouse.begin();\n  Mouse.press(MOUSE_LEFT);\n  Mouse.press(MOUSE_RIGHT);\n  delay(3000);\n  Mouse.releaseAll(); // 💥 All released\n}\n\nvoid loop() {}\n</pre></div>\n\n<div class='card'>✅ Great for cleanup before ending mouse control with <code>Mouse.end()</code>.</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/0/06/Mouse-multi-button-control.svg",
      "audio": "https://audio-url-host/mouse-releaseall-code.mp3"
    },
    {
      "title": "🎮 Game: ReleaseAll vs Release?",
      "content": "<div class='card'>Which of the following statements is TRUE?</div>\n\n<div class='card'>\nA. <code>Mouse.releaseAll()</code> only works for the left button<br>\nB. <code>Mouse.release()</code> is faster than <code>releaseAll()</code><br>\nC. <code>Mouse.releaseAll()</code> releases all buttons<br>\nD. They both do the same thing</div>\n\n<div class='card'><input id='mouseReleaseAllGame' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! C. releaseAll() releases all pressed buttons at once.\")'>Submit</button></div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/d/d2/All-buttons-released.svg",
      "audio": "https://audio-url-host/mouse-releaseall-game.mp3"
    },
    {
      "title": "💡 Project Idea: Emergency Click Stopper",
      "content": "<div class='card'>Build a secret-button project that monitors a physical button — if pressed, it instantly calls <code>Mouse.releaseAll()</code> to stop all click activity 🔒</div>\n\n<div class='card'>Use it as an \"Oh no!\" escape switch for mouse prank setups or bot safety shutdowns.</div>\n\n<div class='card'>Bonus: Add a buzzer and LED flash to indicate the emergency mode was triggered 🔔</div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Next: Learn All About Mouse Button Constants</button>",
      "image": "https://cdn.sparkfun.com/assets/6/3/d/4/Emergency_Stop_Arduino_Mouse.jpg",
      "audio": "https://audio-url-host/mouse-releaseall-project.mp3"
    }
  ]
}
,{
  "title": "MOUSE_LEFT, MOUSE_RIGHT, MOUSE_MIDDLE — Mouse Button Constants",
  "lessons": [
    {
      "title": "What Are Mouse Button Constants?",
      "content": "<div class='card'>Alright scientist — when using functions like <code>Mouse.click()</code>, <code>Mouse.press()</code>, or <code>Mouse.release()</code>, how does Arduino know *which* button you mean?</div>\n\n<div class='card'>You use special constants like:\n<ul>\n<li><code>MOUSE_LEFT</code> → for left button</li>\n<li><code>MOUSE_RIGHT</code> → for right button</li>\n<li><code>MOUSE_MIDDLE</code> → for middle button (scroll wheel press)</li>\n</ul></div>\n\n<div class='card'>💡 These constants are just special values (usually defined in the Mouse library) that map to the correct USB HID codes.</div>\n\n<div class='card'>You can pass them to most Mouse functions like this:\n<pre>\nMouse.press(MOUSE_RIGHT);\nMouse.click(MOUSE_MIDDLE);\nMouse.release(MOUSE_LEFT);\n</pre></div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>View a Button Map!</button>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Mouse_buttons_diagram.svg",
      "audio": "https://audio-url-host/mouse-constants-intro.mp3"
    },
    {
      "title": "📊 Table: Which Constant to Use?",
      "content": "<div class='card'>Here’s a quick cheat sheet so you never get confused:</div>\n\n<div class='card'><table style='width:100%;text-align:left;'>\n<tr><th>Button Name</th><th>Constant</th></tr>\n<tr><td>Left Click</td><td><code>MOUSE_LEFT</code></td></tr>\n<tr><td>Right Click</td><td><code>MOUSE_RIGHT</code></td></tr>\n<tr><td>Middle Click (Scroll Wheel)</td><td><code>MOUSE_MIDDLE</code></td></tr>\n</table></div>\n\n<div class='card'>🧠 These constants are case-sensitive. Always write them in ALL CAPS as shown.</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Mouse_buttons_real_and_labels.svg",
      "audio": "https://audio-url-host/mouse-constants-table.mp3"
    },
    {
      "title": "🎮 Game: Which Constant Is Correct?",
      "content": "<div class='card'>Which constant would you use for a scroll wheel press?</div>\n\n<div class='card'>\nA. <code>MOUSE_SCROLL</code><br>\nB. <code>MOUSE_CENTER</code><br>\nC. <code>MOUSE_MIDDLE</code><br>\nD. <code>MOUSE_SCROLL_PRESS</code></div>\n\n<div class='card'><input id='mouseConstantGame' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! C. MOUSE_MIDDLE is for the middle click (scroll wheel press).\")'>Submit</button></div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Middle_Mouse_Button.svg",
      "audio": "https://audio-url-host/mouse-constants-game.mp3"
    },
    {
      "title": "💡 Project Idea: Button Constant Tester",
      "content": "<div class='card'>Build a program that clicks each button one at a time using these constants — then logs activity with an LED or Serial print.</div>\n\n<div class='card'><pre>\nMouse.click(MOUSE_LEFT);   // LED1\nMouse.click(MOUSE_RIGHT);  // LED2\nMouse.click(MOUSE_MIDDLE); // LED3\n</pre></div>\n\n<div class='card'>Great for beginners to learn which button each constant controls 🔍</div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Final Lesson: USB Warnings!</button>",
      "image": "https://cdn.sparkfun.com/assets/d/0/e/2/Arduino_Mouse_Test_Constants.jpg",
      "audio": "https://audio-url-host/mouse-constants-project.mp3"
    }
  ]
}
,{
  "title": "⚠️ USB HID Warnings, Upload Tips & Best Practices",
  "lessons": [
    {
      "title": "⚠️ Caution: Mouse Library Can Hijack Your Computer!",
      "content": "<div class='card'>Alright scientist — before we build full-blown mouse bots, a serious warning:</div>\n\n<div class='card'><b>Once uploaded, the Mouse sketch runs IMMEDIATELY</b> and can move your cursor, click things, or even prevent you from using your computer.</div>\n\n<div class='card'>🧠 The Arduino becomes a <b>USB Human Interface Device (HID)</b>. It pretends to be a real mouse — which can go wild if the code has bugs!</div>\n\n<div class='card'>📌 Example of a risky sketch:</div>\n<pre>\nMouse.move(10000, 0); // Yikes — cursor flies off the screen\nMouse.click();        // Might randomly click somewhere dangerous\n</pre>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>So What Can You Do?</button>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/2/23/HID_warning_mouse.svg",
      "audio": "https://audio-url-host/mouse-hid-warning.mp3"
    },
    {
      "title": "🧯 Safe Upload Tips",
      "content": "<div class='card'>Use these best practices to avoid getting locked out of your PC:</div>\n\n<div class='card'>✅ <b>Unplug Arduino immediately</b> if it misbehaves after upload.<br>✅ Use a button (e.g. a physical switch) in <code>loop()</code> to enable mouse control only when pressed.<br>✅ Add a long <code>delay()</code> at the beginning of <code>setup()</code> to give you time to cancel USB activity if needed.</div>\n\n<div class='card'>✅ Example: Delay for 5 seconds before mouse starts</div>\n<pre>\nvoid setup() {\n  delay(5000); // Time to cancel USB before chaos\n  Mouse.begin();\n  Mouse.move(100, 0);\n}</pre>\n\n<div class='card'>🎯 Bonus: Connect a button to a digital pin, and only move the mouse if it’s pressed. That gives you full manual control.</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Arduino_USB_safe_sketch_tips.svg",
      "audio": "https://audio-url-host/mouse-safety-tips.mp3"
    },
    {
      "title": "🎮 Game: What’s the Safest Setup?",
      "content": "<div class='card'>Which of the following helps make your Mouse sketch safer?</div>\n\n<div class='card'>\nA. Mouse.move() in loop with no delay<br>\nB. Add 5 second delay in setup()<br>\nC. Disable Mouse library<br>\nD. Upload from a locked PC</div>\n\n<div class='card'><input id='mouseSafetyGame' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! B. A 5-second delay gives you time to disconnect if something goes wrong.\")'>Submit</button></div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/7/79/Safety-upload-methods.svg",
      "audio": "https://audio-url-host/mouse-safety-game.mp3"
    },
    {
      "title": "💡 Pro Tip: Recovery Mode If Things Go Wrong",
      "content": "<div class='card'>If you get locked out of your PC due to a wild sketch:</div>\n\n<div class='card'>1️⃣ Unplug the Arduino<br>2️⃣ Hold RESET button on Arduino<br>3️⃣ While holding RESET, click upload on Arduino IDE<br>4️⃣ As soon as uploading begins, release RESET</div>\n\n<div class='card'>This resets the board and uploads a blank or fixed sketch before the old one runs 💾</div>\n\n<div class='card'>🎯 Keep a minimal sketch ready on your IDE (like <code>void setup(){}</code>) for rescue uploads.</div>\n\n<div class='card'>And that’s it! You’re now fully trained to use the Mouse library like a pro 👨‍💻🖱️</div>",
      "image": "https://cdn.sparkfun.com/assets/b/f/e/f/Arduino_Recovery_Reset.png",
      "audio": "https://audio-url-host/mouse-recovery-method.mp3"
    }
  ]
}

  ]
},{
  title:"WiFi with Arduino: Powering Wireless Projects",
  modules:[
    {
  "title": "Welcome to WiFi: What Is It, and Why Use It?",
  "lessons": [
    {
      "title": "📡 What Is WiFi, Really?",
      "content": "<div class='card'>Alright scientist — welcome to the wireless revolution! 🔥</div>\n\n<div class='card'>WiFi (Wireless Fidelity) is a technology that allows devices to connect to the internet or each other **without wires** using radio waves. It's what powers your smart lights, phones, and now... your Arduino 🤖</div>\n\n<div class='card'>By adding WiFi to Arduino, you can:\n<ul>\n<li>📲 Control LEDs or motors from your phone</li>\n<li>📡 Send sensor data to cloud apps</li>\n<li>🧠 Build smart home projects</li>\n<li>🌐 Host a mini website from your Arduino board</li>\n</ul></div>\n\n<div class='card'>Pretty cool, huh? Let’s break down the parts you need next...</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/4/4e/WiFi_symbol_3.svg",
      "audio": "https://audio-url-host/wifi-intro.mp3"
    },
    {
      "title": "🧰 Boards That Support WiFi",
      "content": "<div class='card'>Not all Arduinos are WiFi-ready — but many can be!</div>\n\n<div class='card'><b>Boards with Built-in WiFi:</b>\n<ul>\n<li>🧠 ESP32 (🔥 Recommended)</li>\n<li>🌐 ESP8266 (NodeMCU, Wemos D1 Mini)</li>\n<li>📡 Arduino MKR WiFi 1010</li>\n<li>🔌 Arduino Uno R4 WiFi</li>\n</ul></div>\n\n<div class='card'><b>Boards that need a WiFi shield or module:</b>\n<ul>\n<li>Arduino UNO + ESP8266 module</li>\n<li>Arduino Mega + ESP-01 breakout</li>\n</ul></div>\n\n<div class='card'>We'll mostly focus on ESP32 in this course, but you can adapt it for ESP8266 too.</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/ESP32_DevKitC_V4_top.jpg/640px-ESP32_DevKitC_V4_top.jpg",
      "audio": "https://audio-url-host/wifi-boards.mp3"
    },
    {
      "title": "🎮 Game: Is It WiFi-Ready?",
      "content": "<div class='card'>Which of the following boards has built-in WiFi support?</div>\n\n<div class='card'>\nA. Arduino Nano<br>\nB. ESP32<br>\nC. Arduino Uno (original)<br>\nD. ATmega328P</div>\n\n<div class='card'><input id='wifiQuiz1' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! ESP32 has WiFi built-in.\")'>Submit</button></div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/f/fe/WiFi-enabled-boards.svg",
      "audio": "https://audio-url-host/wifi-game.mp3"
    },
    {
      "title": "💡 Project Ideas: The Power of WiFi",
      "content": "<div class='card'>Need some inspiration? Here’s what you’ll soon be able to build:</div>\n\n<div class='card'>\n🕹️ Control an LED strip from your phone<br>\n🌡️ Send temperature data to a web app<br>\n📱 Build a smart switch that works from anywhere<br>\n📊 Graph sensor data online live in real time</div>\n\n<div class='card'>You'll start small — connecting to your WiFi network — and then scale up to awesome full-scale projects 🚀</div>\n\n<button class='gaming-btn' onclick='revealNextCard(this)'>Ready to set up your board?</button>",
      "image": "https://cdn.sparkfun.com/assets/5/5/1/f/WiFi-projects.png",
      "audio": "https://audio-url-host/wifi-projects.mp3"
    }
  ]
}
,{
  "title": "Setting Up Your ESP32 Board for WiFi Power",
  "lessons": [
    {
      "title": "⚙️ What Is ESP32?",
      "content": "<div class='card'>ESP32 is a supercharged microcontroller with **WiFi, Bluetooth, tons of GPIO pins, sensors**, and serious speed 🧠⚡</div>\n\n<div class='card'>Why do we use it?\n<ul>\n<li>✅ Built-in WiFi (no extra hardware)</li>\n<li>✅ Low cost (~₹250 or $3)</li>\n<li>✅ Fast and powerful (dual-core)</li>\n<li>✅ Works with Arduino IDE!</li>\n</ul></div>\n\n<div class='card'>You’ll use it to build **smart lights, IoT sensors, remote-controlled robots, web dashboards**, and more 🔥</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/ESP32_DevKitC_V4_top.jpg/640px-ESP32_DevKitC_V4_top.jpg",
      "audio": "https://audio-url-host/esp32-intro.mp3"
    },
    {
      "title": "🧩 Install ESP32 Support in Arduino IDE",
      "content": "<div class='card'>Before you can upload code to ESP32, your Arduino IDE needs to know what it is.</div>\n\n<div class='card'>Follow these steps:</div>\n\n<div class='card'><b>1. Open Preferences (Ctrl+Comma)</b><br>Add this link in 'Additional Boards Manager URLs':<br>\n<code>https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json</code></div>\n\n<div class='card'><b>2. Open Boards Manager</b> and search <code>esp32</code>. Click 'Install' on the official ESP32 by Espressif package.</div>\n\n<div class='card'><b>3. Plug in your ESP32</b> via USB — select the correct port from Tools > Port</div>",
      "image": "https://cdn.learn.sparkfun.com/assets/5/3/6/e/Installing_ESP32_in_Arduino_IDE.png",
      "audio": "https://audio-url-host/esp32-setup.mp3"
    },
    {
      "title": "🧪 Your First Sketch: Blink LED on ESP32",
      "content": "<div class='card'>Let’s test if everything’s working by blinking the built-in LED on your ESP32 board (often GPIO 2).</div>\n\n<div class='card'><pre>\nvoid setup() {\n  pinMode(2, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(2, HIGH);\n  delay(500);\n  digitalWrite(2, LOW);\n  delay(500);\n}</pre></div>\n\n<div class='card'>✅ Select Board: <b>ESP32 Dev Module</b><br>✅ Select correct COM Port<br>✅ Click Upload</div>\n\n<div class='card'>If the LED blinks — you’re good to go! ✅</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/e/e1/ESP32_onboard_LED_pin2.png",
      "audio": "https://audio-url-host/esp32-blink.mp3"
    },
    {
      "title": "🎮 Game: ESP32 Setup Quiz",
      "content": "<div class='card'>What must you paste in 'Additional Board URLs' for ESP32?</div>\n\n<div class='card'>\nA. https://arduino.cc/package_esp.json<br>\nB. https://esp32.com/setup.html<br>\nC. https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json<br>\nD. https://install-esp.com/package.json</div>\n\n<div class='card'><input id='esp32Quiz1' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! C is the official board package URL.\")'>Submit</button></div>",
      "image": "https://cdn.sparkfun.com/assets/c/8/8/f/ESP32_setup_quiz.png",
      "audio": "https://audio-url-host/esp32-quiz.mp3"
    }
  ]
}
,{
  "title": "Connecting to WiFi: Your Arduino Joins the Network",
  "lessons": [
    {
      "title": "📡 Say Hello to Your Network!",
      "content": "<div class='card'>Alright scientist — let’s make your Arduino go online! 🌐</div>\n\n<div class='card'>To connect your ESP32 (or ESP8266) to WiFi, use the magical line:</div>\n<pre>WiFi.begin(ssid, password);</pre>\n\n<div class='card'>This command tells the chip to start connecting to your home router. Here’s how it looks in full:</div>\n<pre>\nconst char* ssid = \"MyNetwork\";\nconst char* password = \"MyPassword\";\n\nWiFi.begin(ssid, password);\n</pre>\n\n<div class='card'>The ESP32 will then try to connect using the provided network name and password. Easy, right? But there’s more you should know...</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/WiFi_symbol.svg/512px-WiFi_symbol.svg.png",
      "audio": "https://audio-url-host/wifi-begin-intro.mp3"
    },
    {
      "title": "⏳ How to Know You’re Connected?",
      "content": "<div class='card'>After calling <code>WiFi.begin()</code>, we need to **wait until the board connects**.</div>\n\n<div class='card'>Use a loop to keep checking the connection status:</div>\n<pre>\nwhile (WiFi.status() != WL_CONNECTED) {\n  delay(500);\n  Serial.print(\".\");\n}</pre>\n\n<div class='card'>This keeps checking every 500ms until <code>WiFi.status()</code> returns <code>WL_CONNECTED</code>.</div>\n\n<div class='card'>Once connected, we can print the IP address:</div>\n<pre>Serial.println(WiFi.localIP());</pre>\n\n<div class='card'>🎯 This shows the IP address assigned by your router — the address you’ll use to access your Arduino if it’s hosting a server.</div>",
      "image": "https://cdn.sparkfun.com/assets/2/b/e/0/Connecting_to_WiFi_loop.svg",
      "audio": "https://audio-url-host/wifi-status-localip.mp3"
    },
    {
      "title": "🧪 Full Example: Connect and Report",
      "content": "<div class='card'>Here’s a full sketch that connects to WiFi and prints the local IP once connected:</div>\n<pre>\n#include <WiFi.h>\n\nconst char* ssid = \"YOUR_SSID\";\nconst char* password = \"YOUR_PASSWORD\";\n\nvoid setup() {\n  Serial.begin(115200);\n  WiFi.begin(ssid, password);\n\n  while (WiFi.status() != WL_CONNECTED) {\n    delay(500);\n    Serial.print(\".\");\n  }\n\n  Serial.println(\"\");\n  Serial.println(\"WiFi connected!\");\n  Serial.println(\"IP address: \");\n  Serial.println(WiFi.localIP());\n}\n\nvoid loop() {}\n</pre>\n\n<div class='card'>🔥 Tip: Make sure to open Serial Monitor at 115200 baud to see the logs.</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/f/f1/WiFi_connect_code_IP.svg",
      "audio": "https://audio-url-host/wifi-connect-code.mp3"
    },
    {
      "title": "🎮 Game: Know Your Functions!",
      "content": "<div class='card'>Which function gives you the IP address after connecting to WiFi?</div>\n\n<div class='card'>\nA. <code>WiFi.beginIP()</code><br>\nB. <code>WiFi.getStatus()</code><br>\nC. <code>WiFi.localIP()</code><br>\nD. <code>Serial.ip()</code></div>\n\n<div class='card'><input id='wifiFunctionQuiz' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! C. WiFi.localIP() returns the local IP assigned to your Arduino.\")'>Submit</button></div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/5/59/IP-Address-Router-ESP32.svg",
      "audio": "https://audio-url-host/wifi-function-game.mp3"
    },
    {
      "title": "💡 Real Project Idea: WiFi Status LED",
      "content": "<div class='card'>Build a project that uses an LED to show WiFi connection status!</div>\n\n<div class='card'>🔴 LED ON = Not Connected<br>🟢 LED OFF = Connected</div>\n\n<div class='card'><pre>\n#define STATUS_LED 2\n\nvoid setup() {\n  pinMode(STATUS_LED, OUTPUT);\n  WiFi.begin(ssid, password);\n  while (WiFi.status() != WL_CONNECTED) {\n    digitalWrite(STATUS_LED, HIGH);\n    delay(200);\n    digitalWrite(STATUS_LED, LOW);\n    delay(200);\n  }\n  digitalWrite(STATUS_LED, LOW);\n}\n</pre></div>\n\n<div class='card'>A great way to give visual feedback during startup or troubleshooting 🔧</div>",
      "image": "https://cdn.sparkfun.com/assets/3/6/a/2/WiFi_status_LED_project.svg",
      "audio": "https://audio-url-host/wifi-led-project.mp3"
    }
  ]
}
,{
  "title": "Hosting a Web Page on Arduino: Your Personal Web Server",
  "lessons": [
    {
      "title": "🌐 What’s a Web Server on Arduino?",
      "content": "<div class='card'>Imagine this: you type an IP address in your browser, and your Arduino replies with a full web page 🤯</div>\n\n<div class='card'>That’s a web server! It listens for HTTP requests (like “GET /”), and sends back HTML. With <code>WiFiServer</code>, your ESP32 becomes a tiny server 📡</div>\n\n<div class='card'>Why is this cool?\n<ul>\n<li>⚙️ Control devices from your phone</li>\n<li>🧠 Build dashboards for sensor data</li>\n<li>🔒 Host local web tools without internet</li>\n</ul></div>",
      "image": "https://cdn.sparkfun.com/assets/2/8/3/4/ESP32_webserver_diagram.svg",
      "audio": "https://audio-url-host/arduino-webserver-intro.mp3"
    },
    {
      "title": "🧱 Basic Web Server Code (ESP32)",
      "content": "<div class='card'>Let’s start with a minimal server sketch — this serves a single web page on your local network.</div>\n\n<pre>\n#include <WiFi.h>\nWiFiServer server(80);\n\nvoid setup() {\n  Serial.begin(115200);\n  WiFi.begin(\"YOUR_SSID\", \"YOUR_PASS\");\n  while (WiFi.status() != WL_CONNECTED) delay(1000);\n\n  Serial.println(WiFi.localIP());\n  server.begin();\n}\n\nvoid loop() {\n  WiFiClient client = server.available();\n  if (client) {\n    while (client.connected()) {\n      if (client.available()) {\n        client.readStringUntil('\\r');\n        client.println(\"HTTP/1.1 200 OK\");\n        client.println(\"Content-Type: text/html\");\n        client.println();\n        client.println(\"<h1>Hello from ESP32!</h1>\");\n        break;\n      }\n    }\n    client.stop();\n  }\n}\n</pre>\n\n<div class='card'>⚠️ Connect to the same WiFi network as your PC or phone to test this. Type the ESP32’s IP in a browser.</div>",
      "image": "https://cdn.sparkfun.com/assets/0/c/7/0/Simple_ESP32_Webpage.svg",
      "audio": "https://audio-url-host/arduino-webserver-code.mp3"
    },
    {
      "title": "🎮 Game: Web Server Logic Quiz",
      "content": "<div class='card'>What port number does the ESP32 web server use in our example?</div>\n\n<div class='card'>\nA. 8080<br>\nB. 443<br>\nC. 80<br>\nD. 21</div>\n\n<div class='card'><input id='webServerQuiz' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! Port 80 is the default for HTTP servers.\")'>Submit</button></div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Port-Number-Quiz-Diagram.svg",
      "audio": "https://audio-url-host/webserver-quiz.mp3"
    },
    {
      "title": "💡 Project Idea: Create a Web Dashboard",
      "content": "<div class='card'>Let’s go further — serve a page that displays sensor data (like temperature or light) from your Arduino!</div>\n\n<div class='card'>Your ESP32 reads the sensor, and generates a live webpage with data. You can even add auto-refresh using JavaScript.</div>\n\n<pre>\nclient.println(\"<meta http-equiv='refresh' content='2'>\");\nclient.println(\"<h2>Temp: \" + String(tempValue) + \" °C</h2>\");\n</pre>\n\n<div class='card'>🔥 This is the beginning of full web-based IoT dashboards.</div>",
      "image": "https://cdn.sparkfun.com/assets/5/5/d/7/ESP32_web_sensor_dashboard.svg",
      "audio": "https://audio-url-host/web-dashboard-project.mp3"
    }
  ]
}
,{
  "title": "Control Arduino Pins Over WiFi! (Turn Things On/Off From Your Phone)",
  "lessons": [
    {
      "title": "🕹️ Turning a Pin ON/OFF From Your Browser",
      "content": "<div class='card'>Your ESP32 is more than just a sensor — it’s a remote control powerhouse 🔌</div>\n\n<div class='card'>Using a browser (like Chrome on your phone), you can send commands to ESP32 to turn pins HIGH or LOW.</div>\n\n<div class='card'>To do that, we serve an HTML page with buttons. Each button triggers a different HTTP request like:\n<code>http://192.168.1.45/ON</code> or <code>/OFF</code></div>\n\n<div class='card'>Let’s see how that’s done...</div>",
      "image": "https://cdn.sparkfun.com/assets/0/6/6/d/Web_LED_Control.svg",
      "audio": "https://audio-url-host/wifi-pincontrol-intro.mp3"
    },
    {
      "title": "🧪 Example Code: Toggle LED via Web Page",
      "content": "<div class='card'>This sketch sets up a web server and reads the URL requested by the browser. Based on the request, it turns the LED ON or OFF.</div>\n\n<pre>\n#include <WiFi.h>\nWiFiServer server(80);\n\n#define LED 2\n\nvoid setup() {\n  pinMode(LED, OUTPUT);\n  WiFi.begin(\"YourSSID\", \"YourPassword\");\n  while (WiFi.status() != WL_CONNECTED) delay(500);\n  server.begin();\n}\n\nvoid loop() {\n  WiFiClient client = server.available();\n  if (client) {\n    String req = client.readStringUntil('\\r');\n    if (req.indexOf(\"/ON\") != -1) digitalWrite(LED, HIGH);\n    if (req.indexOf(\"/OFF\") != -1) digitalWrite(LED, LOW);\n\n    client.println(\"HTTP/1.1 200 OK\");\n    client.println(\"Content-Type: text/html\");\n    client.println();\n    client.println(\"<h1>Control LED</h1>\");\n    client.println(\"<a href='/ON'>Turn ON</a><br>\");\n    client.println(\"<a href='/OFF'>Turn OFF</a>\");\n    client.stop();\n  }\n}\n</pre>\n\n<div class='card'>Test this by typing your ESP32’s IP in a browser — and clicking the ON/OFF links 🔴🟢</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/3/38/Web_LED_toggle_ESP32.svg",
      "audio": "https://audio-url-host/wifi-led-toggle.mp3"
    },
    {
      "title": "🎮 Game: What Does `/ON` Do?",
      "content": "<div class='card'>In the code above, what happens when a user visits <code>/ON</code> in their browser?</div>\n\n<div class='card'>\nA. Board resets<br>\nB. LED turns on<br>\nC. WiFi reconnects<br>\nD. Serial prints \"ON\"</div>\n\n<div class='card'><input id='pinToggleGame' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! Visiting /ON turns the LED HIGH via digitalWrite().\")'>Submit</button></div>",
      "image": "https://cdn.sparkfun.com/assets/f/3/3/e/ON_OFF_button_logic.svg",
      "audio": "https://audio-url-host/wifi-toggle-game.mp3"
    },
    {
      "title": "💡 Project Idea: Make a Phone-Controlled Switch",
      "content": "<div class='card'>This same idea can power real appliances!</div>\n\n<div class='card'>Connect a relay module instead of an LED, and you can control AC bulbs, fans, or water pumps using your phone 📱💡💧</div>\n\n<div class='card'><pre>\n#define RELAY_PIN 23\n// Replace LED logic with:\ndigitalWrite(RELAY_PIN, HIGH); // or LOW</pre></div>\n\n<div class='card'>Just be sure to handle high voltage devices with safety precautions!</div>",
      "image": "https://cdn.sparkfun.com/assets/e/8/5/b/ESP32_relay_control.svg",
      "audio": "https://audio-url-host/wifi-relay-project.mp3"
    }
  ]
}
,{
  "title": "Sending Data to the Cloud (GET & POST Requests)",
  "lessons": [
    {
      "title": "🌐 Why Send Data Online?",
      "content": "<div class='card'>Your Arduino isn’t just about blinking LEDs — it can report real-world data to the internet 📊</div>\n\n<div class='card'>Use this power to:\n<ul>\n<li>📈 Graph temperature or humidity on the cloud</li>\n<li>📦 Log motion detections from a security system</li>\n<li>🧠 Send live updates to your phone</li>\n</ul></div>\n\n<div class='card'>You’ll learn how to use the ESP32 as an HTTP <b>client</b> to send info to online platforms.</div>",
      "image": "https://cdn.sparkfun.com/assets/8/7/b/4/Arduino_to_Cloud_Data_Flow.svg",
      "audio": "https://audio-url-host/wifi-senddata-intro.mp3"
    },
    {
      "title": "📤 How to Use HTTP GET in Arduino",
      "content": "<div class='card'>Let’s say you want to send a sensor value like this:</div>\n<pre>http://api.myserver.com/update?sensor=29</pre>\n\n<div class='card'>Here’s how it looks in Arduino using the <code>HTTPClient</code> library:</div>\n<pre>\n#include <WiFi.h>\n#include <HTTPClient.h>\n\nvoid loop() {\n  if (WiFi.status() == WL_CONNECTED) {\n    HTTPClient http;\n    http.begin(\"http://api.yourserver.com/update?sensor=29\");\n    int httpCode = http.GET();\n    String response = http.getString();\n    http.end();\n  }\n  delay(60000);\n}</pre>\n\n<div class='card'>This is perfect for things like weather data, logging switches, or detecting motion 🚨</div>",
      "image": "https://cdn.sparkfun.com/assets/2/e/1/0/ESP32_GET_example.svg",
      "audio": "https://audio-url-host/http-get-lesson.mp3"
    },
    {
      "title": "🧪 How to Use HTTP POST to Send JSON",
      "content": "<div class='card'>Sometimes, platforms require structured data (like JSON). That’s when you use HTTP POST 🔐</div>\n\n<pre>\n#include <HTTPClient.h>\n\nvoid loop() {\n  if (WiFi.status() == WL_CONNECTED) {\n    HTTPClient http;\n    http.begin(\"https://api.site.com/input\");\n    http.addHeader(\"Content-Type\", \"application/json\");\n\n    int httpCode = http.POST(\"{\\\"temp\\\":28, \\\"humidity\\\":80}\");\n    String response = http.getString();\n    http.end();\n  }\n  delay(60000);\n}</pre>\n\n<div class='card'>You can now post data to services like <b>ThingSpeak</b>, <b>IFTTT</b>, <b>Firebase</b>, or <b>Google Sheets</b>.</div>",
      "image": "https://cdn.sparkfun.com/assets/4/4/7/0/ESP32_POST_to_server.svg",
      "audio": "https://audio-url-host/http-post-lesson.mp3"
    },
    {
      "title": "🎮 Game: GET or POST?",
      "content": "<div class='card'>You want to send a temperature reading to a cloud server. Which method is better if the API needs JSON format?</div>\n\n<div class='card'>\nA. HTTP GET<br>\nB. HTTP POST<br>\nC. HTTP HEAD<br>\nD. HTTP PING</div>\n\n<div class='card'><input id='cloudMethodQuiz' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! POST is used when sending structured data like JSON.\")'>Submit</button></div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/3/33/HTTP_methods_quiz_icon.svg",
      "audio": "https://audio-url-host/http-game-post.mp3"
    },
    {
      "title": "💡 Project Idea: Log Sensor Data to Google Sheets",
      "content": "<div class='card'>You can create a Google Apps Script Web App that accepts POST requests and logs them into a Sheet 🔥</div>\n\n<div class='card'>Then send data from ESP32 to that script — turning your Google Sheet into an online IoT dashboard 📈</div>\n\n<div class='card'>We’ll build this step-by-step in a future module!</div>",
      "image": "https://cdn.sparkfun.com/assets/f/6/1/c/Google_Sheets_Arduino_log.svg",
      "audio": "https://audio-url-host/google-sheet-idea.mp3"
    }
  ]
}
,{
  "title": "Receive Commands from a Web App (Arduino as a Web Client)",
  "lessons": [
    {
      "title": "📥 ESP32 Fetches a Command from the Internet",
      "content": "<div class='card'>Imagine this: You update a value on a cloud dashboard or mobile app — and your ESP32 reads it and reacts 🤯</div>\n\n<div class='card'>This is called <b>polling</b> — your Arduino sends an HTTP GET request to a remote server, reads the response, and acts on the data.</div>\n\n<div class='card'>Example use cases:\n<ul>\n<li>💡 Web-based light switch</li>\n<li>🔒 Remote door unlock</li>\n<li>📦 Start/stop a process from a cloud button</li>\n</ul></div>",
      "image": "https://cdn.sparkfun.com/assets/e/5/c/6/ESP32_polling_data_flow.svg",
      "audio": "https://audio-url-host/web-command-intro.mp3"
    },
    {
      "title": "🧪 Example Code: Polling for a Command",
      "content": "<div class='card'>Here’s a sketch that requests a simple command (like <code>\"ON\"</code> or <code>\"OFF\"</code>) from a server and turns an LED on or off accordingly:</div>\n\n<pre>\n#include <WiFi.h>\n#include <HTTPClient.h>\n\n#define LED 2\n\nvoid loop() {\n  if (WiFi.status() == WL_CONNECTED) {\n    HTTPClient http;\n    http.begin(\"http://yourserver.com/command.txt\");\n    int httpCode = http.GET();\n    if (httpCode == 200) {\n      String command = http.getString();\n      if (command == \"ON\") digitalWrite(LED, HIGH);\n      else if (command == \"OFF\") digitalWrite(LED, LOW);\n    }\n    http.end();\n  }\n  delay(10000); // check every 10 seconds\n}</pre>\n\n<div class='card'>You can update <code>command.txt</code> manually or from another app — your ESP32 becomes a smart follower 🧠</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Polling_LED_from_web.svg",
      "audio": "https://audio-url-host/web-command-polling.mp3"
    },
    {
      "title": "🎮 Game: What Happens If The Server Says \"ON\"?",
      "content": "<div class='card'>In the code above, what happens if the ESP32 reads the word <b>ON</b> from the URL?</div>\n\n<div class='card'>\nA. The LED turns on<br>\nB. The board resets<br>\nC. Serial prints \"ON\"<br>\nD. Nothing happens</div>\n\n<div class='card'><input id='commandFetchQuiz' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! The LED pin is set HIGH when command == 'ON'.\")'>Submit</button></div>",
      "image": "https://cdn.sparkfun.com/assets/f/d/f/f/ON_command_quiz.svg",
      "audio": "https://audio-url-host/web-command-quiz.mp3"
    },
    {
      "title": "💡 Project Idea: Remote Device Manager",
      "content": "<div class='card'>Use Google Sheets, Firebase, or a simple text file online to update commands — and let ESP32 follow your orders 💂‍♂️</div>\n\n<div class='card'>For example:\n<ul>\n<li>🕹️ Turn on garden lights remotely</li>\n<li>🚨 Trigger alarms from your dashboard</li>\n<li>🧪 Set thresholds for sensors remotely</li>\n</ul></div>\n\n<div class='card'>This opens up a world of remote automation!</div>",
      "image": "https://cdn.sparkfun.com/assets/c/d/b/2/Arduino_cloud_control.svg",
      "audio": "https://audio-url-host/web-command-project.mp3"
    }
  ]
}
,{
  "title": "WiFiManager & Captive Portal: Auto SSID Selector for ESP32",
  "lessons": [
    {
      "title": "🌐 What Is WiFiManager & Why You’ll Love It",
      "content": "<div class='card'>Usually, when you build a WiFi project, you do this:</div>\n<pre>\nWiFi.begin(\"MyWiFi\", \"MyPassword\");\n</pre>\n<div class='card'>But what if someone else wants to use your project on a different WiFi network?</div>\n\n<div class='card'>Enter: <b>WiFiManager</b> 🧠</div>\n<ul>\n<li>📡 It creates a temporary WiFi access point</li>\n<li>📱 You connect using your phone</li>\n<li>🌍 A portal appears asking for SSID + Password</li>\n<li>🚀 ESP32 saves the WiFi and connects automatically next time</li>\n</ul>\n\n<div class='card'>No more editing code. No re-uploading. It’s like Arduino magic 🪄</div>",
      "image": "https://cdn.sparkfun.com/assets/3/d/6/f/WiFiManager_flow_diagram.svg",
      "audio": "https://audio-url-host/wifimanager-intro.mp3"
    },
    {
      "title": "⚙️ Installing and Using WiFiManager",
      "content": "<div class='card'>Let’s install and use it in your sketch 🧩</div>\n\n<div class='card'><b>Step 1: Install Library</b><br>In Arduino IDE, go to Library Manager and search for <b>WiFiManager</b> by tzapu. Click Install.</div>\n\n<div class='card'><b>Step 2: Basic Sketch</b></div>\n<pre>\n#include <WiFiManager.h>\n\nvoid setup() {\n  Serial.begin(115200);\n  WiFiManager wifiManager;\n  wifiManager.autoConnect(\"MyDeviceAP\");\n  Serial.println(\"Connected to WiFi!\");\n}\n\nvoid loop() {\n  // your code here\n}</pre>\n\n<div class='card'>Now when your ESP32 boots for the first time, it creates an AP named <code>MyDeviceAP</code>. Visit <code>192.168.4.1</code> to configure WiFi 🔐</div>",
      "image": "https://cdn.sparkfun.com/assets/0/b/b/2/WiFiManager_AP_setup.svg",
      "audio": "https://audio-url-host/wifimanager-setup.mp3"
    },
    {
      "title": "📱 Captive Portal Experience (Like Hotel WiFi!)",
      "content": "<div class='card'>The coolest thing? When you connect to the ESP32’s access point, your phone shows a <b>popup web page</b> 📲</div>\n\n<div class='card'>It’s the same tech used in hotels, airports, or coffee shops (captive portals).</div>\n\n<div class='card'>Your ESP32 becomes a smart WiFi gateway. Users just:\n<ol>\n<li>Connect to ESP32’s AP</li>\n<li>Enter WiFi details in the portal</li>\n<li>Reconnects automatically in future boots</li>\n</ol></div>\n\n<div class='card'>🧠 It even stores multiple networks and handles reconnects automatically. Total game-changer.</div>",
      "image": "https://cdn.sparkfun.com/assets/5/5/1/e/WiFiManager_captive_portal_flow.svg",
      "audio": "https://audio-url-host/wifimanager-portal.mp3"
    },
    {
      "title": "🎮 Game: What Does WiFiManager Do?",
      "content": "<div class='card'>Why would you use WiFiManager in an ESP32 project?</div>\n\n<div class='card'>\nA. To add voice recognition<br>\nB. To let users connect the device to WiFi via a browser<br>\nC. To flash code wirelessly<br>\nD. To access Bluetooth faster</div>\n\n<div class='card'><input id='wifiManagerGame' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! B: WiFiManager lets users input WiFi credentials through a captive portal.\")'>Submit</button></div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/8/89/Captive_portal_Quiz_UI.svg",
      "audio": "https://audio-url-host/wifimanager-quiz.mp3"
    },
    {
      "title": "💡 Project Idea: Plug-and-Play WiFi Gadgets",
      "content": "<div class='card'>Use WiFiManager to build gadgets you can sell or share — no tech skills required to set them up 🔌</div>\n\n<div class='card'>Ideas:\n<ul>\n<li>💡 Smart Lamp with mobile setup</li>\n<li>📸 WiFi Camera setup via phone</li>\n<li>📊 IoT Sensor Box for anyone to install at home</li>\n</ul></div>\n\n<div class='card'>WiFiManager helps make your device feel like a polished consumer product 🎁</div>",
      "image": "https://cdn.sparkfun.com/assets/b/f/f/e/WiFiManager_gadget_idea_diagram.svg",
      "audio": "https://audio-url-host/wifimanager-project.mp3"
    }
  ]
}
,{
  "title": "OTA (Over-The-Air) Updates: Reprogram Your Arduino via WiFi!",
  "lessons": [
    {
      "title": "🚀 What is OTA, and Why Use It?",
      "content": "<div class='card'>OTA (Over-The-Air) means flashing your Arduino sketch wirelessly over WiFi 🛰️</div>\n\n<div class='card'>No USB cables. No physical access needed. Just open the Arduino IDE, select your board on WiFi, and boom — new code!</div>\n\n<div class='card'>Imagine uploading updates to:\n<ul>\n<li>🏠 IoT devices mounted on a wall</li>\n<li>🛰️ Weather stations outdoors</li>\n<li>🧰 Hidden gadgets inside products</li>\n</ul></div>\n\n<div class='card'>OTA is how real-world, production-grade IoT is maintained. Let’s learn how to do it 💪</div>",
      "image": "https://cdn.sparkfun.com/assets/6/2/f/2/OTA_upload_diagram.svg",
      "audio": "https://audio-url-host/ota-intro.mp3"
    },
    {
      "title": "⚙️ How to Set Up OTA on ESP32 (Arduino IDE)",
      "content": "<div class='card'>First, include this library:</div>\n<pre>#include <ArduinoOTA.h></pre>\n\n<div class='card'><b>Setup OTA inside your sketch:</b></div>\n<pre>\nvoid setup() {\n  Serial.begin(115200);\n  WiFi.begin(\"YourSSID\", \"YourPassword\");\n  while (WiFi.status() != WL_CONNECTED) delay(500);\n\n  ArduinoOTA.begin();\n  Serial.println(\"OTA Ready\");\n}\n\nvoid loop() {\n  ArduinoOTA.handle();\n}\n</pre>\n\n<div class='card'>That’s it! Now upload this sketch over USB once. From now on, you can send future sketches over WiFi 🚀</div>",
      "image": "https://cdn.sparkfun.com/assets/8/9/6/6/ESP32_OTA_code_setup.svg",
      "audio": "https://audio-url-host/ota-setup.mp3"
    },
    {
      "title": "🖥️ Uploading Code Wirelessly from Arduino IDE",
      "content": "<div class='card'>Once OTA is initialized and your board is connected to WiFi:</div>\n\n<div class='card'>1. 🔄 Restart your Arduino IDE if needed<br>2. 🧭 Go to <b>Tools → Port</b><br>3. Select the <b>network port</b> for your ESP32 (e.g., <code>ESP32 at 192.168.1.55</code>)<br>4. ✅ Upload sketch normally — it goes over WiFi!</div>\n\n<div class='card'>It’s super fast and doesn’t need physical access again.</div>\n\n<div class='card'>⚠️ Make sure your PC and board are on the same WiFi.</div>",
      "image": "https://cdn.sparkfun.com/assets/e/4/6/f/Arduino_OTA_upload_UI.svg",
      "audio": "https://audio-url-host/ota-upload-guide.mp3"
    },
    {
      "title": "🎮 Game: OTA Workflow Challenge",
      "content": "<div class='card'>What do you need to do <b>before</b> OTA uploads will work?</div>\n\n<div class='card'>\nA. Add a relay\n<br>B. Upload one sketch with <code>ArduinoOTA.begin()</code> via USB\n<br>C. Install OTA App\n<br>D. Format board</div>\n\n<div class='card'><input id='otaGame' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! B. The first sketch must be uploaded via USB with OTA initialized.\")'>Submit</button></div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/f/f7/OTA_flow_quiz.svg",
      "audio": "https://audio-url-host/ota-quiz.mp3"
    },
    {
      "title": "💡 Project Idea: Deploy OTA to Multiple Devices",
      "content": "<div class='card'>Got multiple ESP32s in a smart home or project? Use OTA to deploy the same sketch to all without reconnecting cables 🔌</div>\n\n<div class='card'>Ideas:\n<ul>\n<li>📡 Push updates to 5 devices at once</li>\n<li>🔄 Automate daily firmware refresh</li>\n<li>📲 Update even in hard-to-reach areas</li>\n</ul></div>\n\n<div class='card'>🎯 Tip: Combine OTA with <b>WiFiManager</b> for the ultimate remote experience.</div>",
      "image": "https://cdn.sparkfun.com/assets/9/5/e/f/Multi_device_OTA_update.svg",
      "audio": "https://audio-url-host/ota-multidevice.mp3"
    }
  ]
}
,{
  "title": "Final Project: Build a WiFi Smart Home Controller",
  "lessons": [
    {
      "title": "🏠 What You’ll Build",
      "content": "<div class='card'>You’re about to build your own <b>WiFi-powered Smart Home Dashboard</b> using ESP32!</div>\n\n<div class='card'>Features include:\n<ul>\n<li>🟢 Toggle lights and fans from a web dashboard</li>\n<li>🌡️ Monitor temperature and humidity in real-time</li>\n<li>🔁 Update firmware wirelessly with OTA</li>\n<li>📱 Control from phone, laptop, or tablet</li>\n</ul></div>\n\n<div class='card'>This project ties together everything you’ve learned in the WiFi section — and it’s just the beginning of your smart home empire 🧠💡</div>",
      "image": "https://cdn.sparkfun.com/assets/c/1/2/3/SmartHome_ESP32_Flow.svg",
      "audio": "https://audio-url-host/smarthome-intro.mp3"
    },
    {
      "title": "🔧 Hardware & Circuit Setup",
      "content": "<div class='card'>You’ll need the following components:</div>\n<ul>\n<li>✅ ESP32 Dev Board</li>\n<li>✅ DHT11 or DHT22 sensor</li>\n<li>✅ Relay module (for controlling AC appliances)</li>\n<li>✅ LED for testing output</li>\n<li>✅ Jumper wires + breadboard</li>\n</ul>\n\n<div class='card'><b>Basic Connections:</b></div>\n<ul>\n<li>DHT11 → GPIO 14</li>\n<li>Relay → GPIO 23</li>\n<li>LED → GPIO 2</li>\n</ul>\n\n<div class='card'>Now let’s start building the web interface...</div>",
      "image": "https://cdn.sparkfun.com/assets/1/2/3/a/ESP32_HomeControl_Wiring.svg",
      "audio": "https://audio-url-host/smarthome-hardware.mp3"
    },
    {
      "title": "🧠 Code: Web Dashboard + Sensor Data + Control",
      "content": "<div class='card'>Here’s a snippet of what your ESP32 will serve as a web page:</div>\n<pre>\nclient.println(\"<h1>Smart Home Control</h1>\");\nclient.println(\"<p>Temp: \" + String(temp) + \" °C</p>\");\nclient.println(\"<a href='/LEDON'>LED ON</a><br>\");\nclient.println(\"<a href='/LEDOFF'>LED OFF</a><br>\");\nclient.println(\"<a href='/RELAYON'>Relay ON</a><br>\");\nclient.println(\"<a href='/RELAYOFF'>Relay OFF</a>\");\n</pre>\n\n<div class='card'>On the backend, use the same HTTP server logic to read the URL and act on it:</div>\n<pre>\nif (request.indexOf(\"LEDON\") != -1) digitalWrite(2, HIGH);\nif (request.indexOf(\"LEDOFF\") != -1) digitalWrite(2, LOW);\nif (request.indexOf(\"RELAYON\") != -1) digitalWrite(23, HIGH);\n</pre>\n\n<div class='card'>Add <code>DHT.readTemperature()</code> to update the page dynamically 🧪</div>",
      "image": "https://cdn.sparkfun.com/assets/4/5/2/e/ESP32_SmartDashboard.svg",
      "audio": "https://audio-url-host/smarthome-code.mp3"
    },
    {
      "title": "🎮 Game: Smart Home Debug Challenge",
      "content": "<div class='card'>Your LED isn’t responding when you visit <code>/LEDON</code>. What could be wrong?</div>\n\n<div class='card'>\nA. WiFi is disconnected<br>\nB. Wrong GPIO pin<br>\nC. Missing <code>digitalWrite()</code><br>\nD. All of the above</div>\n\n<div class='card'><input id='smartHomeQuiz' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! All of the above can cause the LED to not respond.\")'>Submit</button></div>",
      "image": "https://cdn.sparkfun.com/assets/5/5/5/a/SmartHome_Troubleshoot_Quiz.svg",
      "audio": "https://audio-url-host/smarthome-quiz.mp3"
    },
    {
      "title": "💡 Final Tips & Expansion Ideas",
      "content": "<div class='card'>You’ve built a full WiFi-powered smart home system 👏</div>\n\n<div class='card'>Here’s how to upgrade it further:\n<ul>\n<li>📊 Send data to Google Sheets or Firebase</li>\n<li>🔐 Add authentication to your dashboard</li>\n<li>🛜 Use WiFiManager for user setup</li>\n<li>📦 Deploy as a real product</li>\n</ul></div>\n\n<div class='card'>You’ve officially unlocked the world of connected electronics 🌍💻🛠️</div>",
      "image": "https://cdn.sparkfun.com/assets/f/6/f/f/SmartHome_Upgrade_Ideas.svg",
      "audio": "https://audio-url-host/smarthome-wrapup.mp3"
    }
  ]
}

  ]
},{
  title:"WiFi Class Deep Dive: Mastering Every Function",
  modules:[
    {
  "title": "WiFi.begin() — Connecting to a WiFi Network",
  "lessons": [
    {
      "title": "🌐 What is WiFi.begin()?",
      "content": "<div class='card'>The <code>WiFi.begin()</code> function is your Arduino’s way of asking: “Hey, can I join this WiFi network?”</div>\n\n<div class='card'>It’s the first command used to connect your ESP32 or other WiFi-compatible board to a local router 🌍</div>\n\n<div class='card'>When successful, your board becomes part of your home/office network, ready to send and receive data like a mini computer 💻</div>",
      "image": "https://cdn.sparkfun.com/assets/3/0/4/f/WiFi_begin_intro_diagram.svg",
      "audio": "https://audio-url-host/wifi-begin-intro.mp3"
    },
    {
      "title": "📘 Syntax, Parameters & Return",
      "content": "<div class='card'><b>Syntax:</b>\n<pre>\nWiFi.begin(ssid, password);</pre></div>\n\n<div class='card'><b>Parameters:</b>\n<ul>\n<li><code>ssid</code>: the name of your WiFi network (String)</li>\n<li><code>password</code>: the password for the network (String)</li>\n</ul></div>\n\n<div class='card'><b>Returns:</b> Nothing directly. But use <code>WiFi.status()</code> to check if connection was successful.</div>\n\n<div class='card'>It tries to connect asynchronously — so you must wait in a loop until the connection succeeds 🕓</div>",
      "image": "https://cdn.sparkfun.com/assets/4/2/0/0/WiFi_begin_syntax_return.svg",
      "audio": "https://audio-url-host/wifi-begin-syntax.mp3"
    },
    {
      "title": "🧪 Example Code: Connect to WiFi",
      "content": "<div class='card'>This is the most basic and widely used setup for WiFi on ESP32:</div>\n\n<pre>\n#include <WiFi.h>\n\nconst char* ssid = \"YourWiFi\";\nconst char* password = \"YourPass\";\n\nvoid setup() {\n  Serial.begin(115200);\n  WiFi.begin(ssid, password);\n\n  while (WiFi.status() != WL_CONNECTED) {\n    delay(500);\n    Serial.print(\".\");\n  }\n\n  Serial.println(\"\");\n  Serial.println(\"Connected to WiFi!\");\n  Serial.println(WiFi.localIP());\n}\n\nvoid loop() {}\n</pre>\n\n<div class='card'>Once connected, your board gets a local IP like <code>192.168.1.37</code> and can begin internet communication 🌐</div>",
      "image": "https://cdn.sparkfun.com/assets/c/d/4/f/WiFi_begin_code_flow.svg",
      "audio": "https://audio-url-host/wifi-begin-code.mp3"
    },
    {
      "title": "🎮 Game: What Happens If WiFi.begin() Fails?",
      "content": "<div class='card'>What will the ESP32 do if <code>WiFi.begin()</code> doesn’t succeed immediately?</div>\n\n<div class='card'>\nA. Board resets<br>\nB. It automatically connects to mobile data<br>\nC. It returns true<br>\nD. It keeps trying, and you must check <code>WiFi.status()</code></div>\n\n<div class='card'><input id='beginGame' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! You must check WiFi.status() in a loop until it's WL_CONNECTED.\")'>Submit</button></div>",
      "image": "https://cdn.sparkfun.com/assets/1/a/5/c/WiFi_begin_error_handling_quiz.svg",
      "audio": "https://audio-url-host/wifi-begin-quiz.mp3"
    },
    {
      "title": "💡 Real-World Tip: Make It Retry Smartly",
      "content": "<div class='card'>You can make your <code>WiFi.begin()</code> loop smarter using a timeout or retries like this:</div>\n<pre>\nint attempts = 0;\nwhile (WiFi.status() != WL_CONNECTED && attempts < 10) {\n  delay(500);\n  Serial.print(\".\");\n  attempts++;\n}\n</pre>\n\n<div class='card'>💡 If it still fails, you can blink an LED, restart the board, or enter fallback mode like WiFiManager 🌐</div>\n\n<div class='card'>Smart connection handling is the secret to pro-level projects 💪</div>",
      "image": "https://cdn.sparkfun.com/assets/0/e/1/3/WiFi_begin_retry_logic.svg",
      "audio": "https://audio-url-host/wifi-begin-retry.mp3"
    }
  ]
}
,{
  "title": "WiFi.disconnect() — Drop the Network & Reset Credentials",
  "lessons": [
    {
      "title": "🔌 Why Disconnect from WiFi?",
      "content": "<div class='card'>You may think, \"Why would I want to disconnect WiFi manually?\" Here’s when it's helpful:</div>\n<ul>\n<li>🔁 Resetting WiFi without rebooting</li>\n<li>🔐 Switching SSIDs or credentials</li>\n<li>🔕 Going offline to save power</li>\n<li>🧹 Cleaning saved networks from flash</li>\n</ul>\n\n<div class='card'>This is exactly what <code>WiFi.disconnect()</code> is for. It’s like unplugging your Arduino from the router 🧠</div>",
      "image": "https://cdn.sparkfun.com/assets/e/3/9/1/WiFi_disconnect_explained.svg",
      "audio": "https://audio-url-host/wifi-disconnect-intro.mp3"
    },
    {
      "title": "📘 Syntax, Parameters & Returns",
      "content": "<div class='card'><b>Syntax:</b>\n<pre>\nWiFi.disconnect(wifiErase);\n</pre></div>\n\n<div class='card'><b>Parameter:</b>\n<ul>\n<li><code>wifiErase</code> (optional): <code>true</code> clears saved credentials from flash, <code>false</code> just disconnects</li>\n</ul></div>\n\n<div class='card'><b>Returns:</b> Nothing (void)</div>\n\n<div class='card'>So you can either temporarily drop WiFi or permanently forget a network 📴</div>",
      "image": "https://cdn.sparkfun.com/assets/1/f/e/8/WiFi_disconnect_syntax.svg",
      "audio": "https://audio-url-host/wifi-disconnect-syntax.mp3"
    },
    {
      "title": "🧪 Example Code: Disconnect and Reconnect",
      "content": "<div class='card'>Let’s say you want to reset WiFi mid-project. Here’s how you do it:</div>\n\n<pre>\n#include <WiFi.h>\n\nvoid resetWiFi() {\n  Serial.println(\"Disconnecting...\");\n  WiFi.disconnect(true); // true = erase credentials\n  delay(1000);\n\n  Serial.println(\"Reconnecting...\");\n  WiFi.begin(\"NewSSID\", \"NewPassword\");\n}\n</pre>\n\n<div class='card'>Now your ESP32 drops the current network, erases the memory, and reconnects to a fresh one 🧼</div>",
      "image": "https://cdn.sparkfun.com/assets/d/6/e/3/WiFi_disconnect_code.svg",
      "audio": "https://audio-url-host/wifi-disconnect-code.mp3"
    },
    {
      "title": "🎮 Game: What Happens with WiFi.disconnect(true)?",
      "content": "<div class='card'>You call <code>WiFi.disconnect(true)</code>. What does the <code>true</code> do?</div>\n\n<div class='card'>\nA. Deletes WiFiManager<br>\nB. Erases saved WiFi credentials<br>\nC. Shuts down all power<br>\nD. Switches to Bluetooth</div>\n\n<div class='card'><input id='disconnectQuiz' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! True clears stored SSID and password from flash.\")'>Submit</button></div>",
      "image": "https://cdn.sparkfun.com/assets/9/0/f/4/WiFi_disconnect_quiz.svg",
      "audio": "https://audio-url-host/wifi-disconnect-quiz.mp3"
    },
    {
      "title": "💡 Real-World Uses: Dynamic Network Switching",
      "content": "<div class='card'>With <code>WiFi.disconnect()</code>, you can:</div>\n<ul>\n<li>🧠 Switch between WiFi networks based on signal strength</li>\n<li>🔐 Let users reset networks via button press</li>\n<li>🛠️ Add a failover WiFi mechanism</li>\n<li>🕵️‍♂️ Create a self-resetting captive portal</li>\n</ul>\n\n<div class='card'>💡 Combine with <code>WiFi.scanNetworks()</code> to dynamically choose the best available WiFi around!</div>",
      "image": "https://cdn.sparkfun.com/assets/6/b/0/5/WiFi_dynamic_switching_idea.svg",
      "audio": "https://audio-url-host/wifi-disconnect-usecases.mp3"
    }
  ]
},{
  "title": "WiFi.config() — Set a Static IP, Gateway, and DNS",
  "lessons": [
    {
      "title": "📡 Why Use a Static IP?",
      "content": "<div class='card'>By default, when your Arduino connects using <code>WiFi.begin()</code>, it gets an IP address automatically using DHCP.</div>\n\n<div class='card'>But in some cases, this isn’t ideal:</div>\n<ul>\n<li>🛠️ Your router changes IP every reboot</li>\n<li>📱 Your mobile app expects a fixed IP</li>\n<li>💻 Your Arduino acts as a server</li>\n</ul>\n\n<div class='card'>That’s where <code>WiFi.config()</code> steps in — to set a static IP, gateway, and DNS manually ⚙️</div>",
      "image": "https://cdn.sparkfun.com/assets/0/e/f/f/WiFi_config_intro_diagram.svg",
      "audio": "https://audio-url-host/wifi-config-intro.mp3"
    },
    {
      "title": "📘 Syntax, Parameters & Return",
      "content": "<div class='card'><b>Syntax:</b>\n<pre>\nWiFi.config(local_ip, gateway, subnet, dns1, dns2);\n</pre></div>\n\n<div class='card'><b>Parameters:</b>\n<ul>\n<li><code>local_ip</code>: desired IP address (e.g., <code>192.168.1.50</code>)</li>\n<li><code>gateway</code>: usually your router (e.g., <code>192.168.1.1</code>)</li>\n<li><code>subnet</code>: often <code>255.255.255.0</code></li>\n<li><code>dns1</code>, <code>dns2</code>: optional DNS servers</li>\n</ul></div>\n\n<div class='card'><b>Returns:</b> <code>true</code> if successful, <code>false</code> otherwise</div>",
      "image": "https://cdn.sparkfun.com/assets/2/c/a/6/WiFi_config_syntax.svg",
      "audio": "https://audio-url-host/wifi-config-syntax.mp3"
    },
    {
      "title": "🧪 Example Code: Setup with Static IP",
      "content": "<div class='card'>Here’s a sketch to set up ESP32 with a static IP:</div>\n<pre>\n#include <WiFi.h>\n\nIPAddress local_IP(192, 168, 1, 50);\nIPAddress gateway(192, 168, 1, 1);\nIPAddress subnet(255, 255, 255, 0);\nIPAddress dns(8, 8, 8, 8);\n\nvoid setup() {\n  Serial.begin(115200);\n  WiFi.config(local_IP, gateway, subnet, dns);\n  WiFi.begin(\"YourSSID\", \"YourPassword\");\n\n  while (WiFi.status() != WL_CONNECTED) {\n    delay(500);\n    Serial.print(\".\");\n  }\n  Serial.println(WiFi.localIP());\n}\n</pre>\n\n<div class='card'>This guarantees your board always gets <code>192.168.1.50</code> — great for web servers 📶</div>",
      "image": "https://cdn.sparkfun.com/assets/3/b/0/0/WiFi_config_static_ip_example.svg",
      "audio": "https://audio-url-host/wifi-config-code.mp3"
    },
    {
      "title": "🎮 Game: Why Static IP Can Be Useful",
      "content": "<div class='card'>Which of the following is a good reason to use <code>WiFi.config()</code>?</div>\n\n<div class='card'>\nA. To access Arduino as a web server at a fixed address<br>\nB. To switch to Bluetooth<br>\nC. To erase credentials<br>\nD. To scan nearby networks</div>\n\n<div class='card'><input id='wifiConfigGame' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! A static IP is essential when your board hosts a local server.\")'>Submit</button></div>",
      "image": "https://cdn.sparkfun.com/assets/6/6/a/0/WiFi_config_quiz_diagram.svg",
      "audio": "https://audio-url-host/wifi-config-quiz.mp3"
    },
    {
      "title": "💡 Tip: Use with OTA, Servers, or Remote Apps",
      "content": "<div class='card'>If your Arduino runs:</div>\n<ul>\n<li>🌐 A web dashboard</li>\n<li>📡 An HTTP API for your mobile app</li>\n<li>🛰️ OTA update listener</li>\n</ul>\n\n<div class='card'>You should <b>always use static IP</b> with <code>WiFi.config()</code> to avoid IP conflicts and 404 errors 💪</div>\n\n<div class='card'>Pair this with <code>WiFi.begin()</code> + <code>WiFi.status()</code> to build rock-solid wireless systems.</div>",
      "image": "https://cdn.sparkfun.com/assets/7/a/1/0/WiFi_static_ip_usecases.svg",
      "audio": "https://audio-url-host/wifi-config-usecases.mp3"
    }
  ]
}
,{
  "title": "WiFi.setDNS() — Set Custom DNS Servers Manually",
  "lessons": [
    {
      "title": "🌐 What is DNS & Why Customize It?",
      "content": "<div class='card'>DNS (Domain Name System) turns <code>example.com</code> into an IP like <code>93.184.216.34</code> — it’s the internet’s address book 📖</div>\n\n<div class='card'>By default, your router (DHCP) assigns a DNS to your ESP32. But sometimes you want to override that:</div>\n<ul>\n<li>🔐 Use Google DNS (8.8.8.8) or Cloudflare DNS (1.1.1.1)</li>\n<li>🌍 Use a private local DNS server</li>\n<li>🔒 Bypass parental filters or ISP blocks</li>\n<li>🧪 Debug name resolution issues</li>\n</ul>\n\n<div class='card'><b>That’s where <code>WiFi.setDNS()</code> comes in 🧠</b></div>",
      "image": "https://cdn.sparkfun.com/assets/2/6/1/7/WiFi_setDNS_intro.svg",
      "audio": "https://audio-url-host/wifi-setdns-intro.mp3"
    },
    {
      "title": "📘 Syntax, Parameters & Return",
      "content": "<div class='card'><b>Syntax:</b>\n<pre>\nWiFi.setDNS(dns1);\nWiFi.setDNS(dns1, dns2);\n</pre></div>\n\n<div class='card'><b>Parameters:</b>\n<ul>\n<li><code>dns1</code>: primary DNS server (IPAddress type)</li>\n<li><code>dns2</code>: optional secondary DNS (fallback)</li>\n</ul></div>\n\n<div class='card'><b>Returns:</b> Nothing</div>\n\n<div class='card'>Set this <b>before</b> calling <code>WiFi.begin()</code> for best results ✅</div>",
      "image": "https://cdn.sparkfun.com/assets/e/f/0/f/WiFi_setDNS_syntax.svg",
      "audio": "https://audio-url-host/wifi-setdns-syntax.mp3"
    },
    {
      "title": "🧪 Example Code: Use Google DNS",
      "content": "<div class='card'>Let’s use Google and Cloudflare DNS for global, reliable resolution 🌍</div>\n<pre>\n#include <WiFi.h>\n\nIPAddress dns1(8, 8, 8, 8);\nIPAddress dns2(1, 1, 1, 1);\n\nvoid setup() {\n  Serial.begin(115200);\n  WiFi.config(IPAddress(192,168,1,100), IPAddress(192,168,1,1), IPAddress(255,255,255,0), dns1, dns2);\n  WiFi.begin(\"YourSSID\", \"YourPassword\");\n}\n</pre>\n\n<div class='card'>Your Arduino now resolves domains using Google DNS → faster and globally available 🌐</div>",
      "image": "https://cdn.sparkfun.com/assets/b/4/c/1/WiFi_setDNS_example.svg",
      "audio": "https://audio-url-host/wifi-setdns-code.mp3"
    },
    {
      "title": "🎮 Game: Which DNS Would You Choose?",
      "content": "<div class='card'>You want fast, privacy-friendly name resolution for your ESP32. What’s the best DNS to set?</div>\n\n<div class='card'>\nA. 8.8.8.8 (Google)<br>\nB. 1.1.1.1 (Cloudflare)<br>\nC. 9.9.9.9 (Quad9)<br>\nD. All of the above</div>\n\n<div class='card'><input id='setDNSGame' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! All of the above are great public DNS servers you can safely use.\")'>Submit</button></div>",
      "image": "https://cdn.sparkfun.com/assets/5/8/e/0/WiFi_setDNS_quiz.svg",
      "audio": "https://audio-url-host/wifi-setdns-quiz.mp3"
    },
    {
      "title": "💡 Tip: Use DNS to Access Offline Devices Too",
      "content": "<div class='card'>If you have a local DNS server (like in a router or Pi-hole), you can use <code>WiFi.setDNS()</code> to resolve custom domains like:</div>\n<ul>\n<li><code>my-device.local</code></li>\n<li><code>weatherstation.lab</code></li>\n<li><code>robot-1.dashboard</code></li>\n</ul>\n\n<div class='card'>Great for local IoT networks where internet may not be available!</div>",
      "image": "https://cdn.sparkfun.com/assets/4/e/2/3/WiFi_setDNS_local_networks.svg",
      "audio": "https://audio-url-host/wifi-setdns-tip.mp3"
    }
  ]
}
,{
  "title": "WiFi.SSID() — Get the Connected WiFi Network Name",
  "lessons": [
    {
      "title": "📡 What is SSID, and Why Read It?",
      "content": "<div class='card'>SSID stands for <b>Service Set Identifier</b> — aka, the name of your WiFi 📶</div>\n\n<div class='card'><code>WiFi.SSID()</code> lets your Arduino know which network it’s connected to. This is useful when:</div>\n<ul>\n<li>🧠 You want to display the network name on a screen</li>\n<li>🔀 You connect to different networks in different places</li>\n<li>🛠️ You want your code to behave differently based on SSID</li>\n</ul>\n\n<div class='card'>It’s a simple, but very handy function 🔍</div>",
      "image": "https://cdn.sparkfun.com/assets/4/5/f/4/WiFi_SSID_intro.svg",
      "audio": "https://audio-url-host/wifi-ssid-intro.mp3"
    },
    {
      "title": "📘 Syntax, Parameters & Return",
      "content": "<div class='card'><b>Syntax:</b>\n<pre>\nWiFi.SSID();\n</pre></div>\n\n<div class='card'><b>Parameters:</b> None</div>\n\n<div class='card'><b>Returns:</b> A <code>String</code> containing the name (SSID) of the currently connected network</div>\n\n<div class='card'>⚠️ If not connected to WiFi, it returns an empty string</div>",
      "image": "https://cdn.sparkfun.com/assets/b/7/1/c/WiFi_SSID_syntax.svg",
      "audio": "https://audio-url-host/wifi-ssid-syntax.mp3"
    },
    {
      "title": "🧪 Example Code: Print the SSID",
      "content": "<div class='card'>This simple sketch will print the network name to Serial Monitor:</div>\n<pre>\n#include <WiFi.h>\n\nvoid setup() {\n  Serial.begin(115200);\n  WiFi.begin(\"YourSSID\", \"YourPassword\");\n\n  while (WiFi.status() != WL_CONNECTED) {\n    delay(500);\n    Serial.print(\".\");\n  }\n\n  Serial.print(\"Connected to: \");\n  Serial.println(WiFi.SSID());\n}\n\nvoid loop() {}\n</pre>\n\n<div class='card'>You can also display this on an OLED or LCD as part of a smart dashboard 🖥️</div>",
      "image": "https://cdn.sparkfun.com/assets/1/0/3/8/WiFi_SSID_example_code.svg",
      "audio": "https://audio-url-host/wifi-ssid-code.mp3"
    },
    {
      "title": "🎮 Game: When Does WiFi.SSID() Return Empty?",
      "content": "<div class='card'>You run <code>WiFi.SSID()</code> and get nothing. What could be the reason?</div>\n\n<div class='card'>\nA. WiFi not initialized<br>\nB. Not connected yet<br>\nC. Wrong library<br>\nD. All of the above</div>\n\n<div class='card'><input id='ssidQuiz' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! If you’re not connected to WiFi, SSID will return an empty string.\")'>Submit</button></div>",
      "image": "https://cdn.sparkfun.com/assets/c/5/8/3/WiFi_SSID_quiz.svg",
      "audio": "https://audio-url-host/wifi-ssid-quiz.mp3"
    },
    {
      "title": "💡 Smart Uses for SSID",
      "content": "<div class='card'>You can use <code>WiFi.SSID()</code> to add intelligent behavior to your sketch:</div>\n<ul>\n<li>🔀 Run different code depending on location</li>\n<li>🧪 Debug which router the device is using</li>\n<li>📱 Display SSID on mobile dashboards</li>\n<li>🛠️ Trigger captive portal if wrong SSID</li>\n</ul>\n\n<div class='card'>✅ Pro tip: Combine with <code>WiFi.RSSI()</code> for full connection diagnostics!</div>",
      "image": "https://cdn.sparkfun.com/assets/d/3/4/5/WiFi_SSID_realworld_uses.svg",
      "audio": "https://audio-url-host/wifi-ssid-uses.mp3"
    }
  ]
}
,{
  "title": "WiFi.BSSID() — Get the MAC Address of the Connected Access Point",
  "lessons": [
    {
      "title": "📡 What is BSSID?",
      "content": "<div class='card'>BSSID stands for <b>Basic Service Set Identifier</b> — it's the MAC address of the router or access point you’re connected to 🔒</div>\n\n<div class='card'>While SSID is the human-friendly name of the network, BSSID is the hardware-level unique ID of that specific access point 📟</div>\n\n<div class='card'><b>Why care about it?</b> Because large networks (like colleges, offices, malls) may have many routers with the same SSID. BSSID tells you <i>exactly which one</i> your Arduino is using 🧠</div>",
      "image": "https://cdn.sparkfun.com/assets/b/1/2/8/WiFi_BSSID_intro.svg",
      "audio": "https://audio-url-host/wifi-bssid-intro.mp3"
    },
    {
      "title": "📘 Syntax, Parameters & Return",
      "content": "<div class='card'><b>Syntax:</b>\n<pre>\nWiFi.BSSID();\n</pre></div>\n\n<div class='card'><b>Parameters:</b> None</div>\n\n<div class='card'><b>Returns:</b> A pointer to a 6-byte array (uint8_t*) containing the MAC address of the connected AP</div>\n\n<div class='card'>To convert this to a readable string (like <code>4A:FB:C3:89:12:33</code>), you must format it manually ⚙️</div>",
      "image": "https://cdn.sparkfun.com/assets/f/3/2/0/WiFi_BSSID_syntax.svg",
      "audio": "https://audio-url-host/wifi-bssid-syntax.mp3"
    },
    {
      "title": "🧪 Example: Print BSSID as a MAC Address",
      "content": "<div class='card'>Here’s a snippet that prints the access point’s BSSID in standard MAC format:</div>\n<pre>\nvoid printBSSID() {\n  const uint8_t* bssid = WiFi.BSSID();\n  char macStr[18];\n  sprintf(macStr, \"%02X:%02X:%02X:%02X:%02X:%02X\",\n          bssid[0], bssid[1], bssid[2],\n          bssid[3], bssid[4], bssid[5]);\n  Serial.println(macStr);\n}\n</pre>\n\n<div class='card'>Use this to log which physical router your Arduino is on — even if the SSID is identical elsewhere 🔐</div>",
      "image": "https://cdn.sparkfun.com/assets/0/a/9/c/WiFi_BSSID_mac_address.svg",
      "audio": "https://audio-url-host/wifi-bssid-code.mp3"
    },
    {
      "title": "🎮 Game: Why Use BSSID?",
      "content": "<div class='card'>You’re on a campus WiFi with 5 access points named \"CampusNet\". Why would you use <code>WiFi.BSSID()</code>?</div>\n\n<div class='card'>\nA. To download faster<br>\nB. To access hidden SSIDs<br>\nC. To identify exactly which router you’re on<br>\nD. To change your IP</div>\n\n<div class='card'><input id='bssidQuiz' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! BSSID lets you see the unique MAC address of your connected router.\")'>Submit</button></div>",
      "image": "https://cdn.sparkfun.com/assets/a/f/2/f/WiFi_BSSID_quiz.svg",
      "audio": "https://audio-url-host/wifi-bssid-quiz.mp3"
    },
    {
      "title": "💡 Real-World Use: WiFi Tracking & Roaming",
      "content": "<div class='card'>In advanced systems, you can track which access point gives the best signal and roam smartly 💡</div>\n<ul>\n<li>📡 If BSSID changes, you know a switch occurred</li>\n<li>📶 Pair with <code>WiFi.RSSI()</code> to choose the best AP</li>\n<li>🧠 Build diagnostics dashboards to debug networks</li>\n</ul>\n\n<div class='card'>This is useful in smart buildings, robots, or mobile devices 🔄</div>",
      "image": "https://cdn.sparkfun.com/assets/c/1/0/6/WiFi_BSSID_usecases.svg",
      "audio": "https://audio-url-host/wifi-bssid-usecases.mp3"
    }
  ]
}
,{
  "title": "WiFi.RSSI() — Measure Signal Strength in Real-Time",
  "lessons": [
    {
      "title": "📶 What is RSSI and Why It Matters",
      "content": "<div class='card'>RSSI stands for <b>Received Signal Strength Indicator</b>. It tells you how strong your WiFi connection is 📡</div>\n\n<div class='card'><code>WiFi.RSSI()</code> gives you that strength in dBm (decibel-milliwatts).</div>\n\n<ul>\n<li>🟢 -30 dBm = Excellent</li>\n<li>🟡 -67 dBm = Good for streaming</li>\n<li>🔴 -90 dBm = Nearly unusable</li>\n</ul>\n\n<div class='card'>Knowing the signal strength lets your Arduino react smartly — change modes, log data, or show warnings 💡</div>",
      "image": "https://cdn.sparkfun.com/assets/3/f/9/2/WiFi_RSSI_intro.svg",
      "audio": "https://audio-url-host/wifi-rssi-intro.mp3"
    },
    {
      "title": "📘 Syntax, Parameters & Return",
      "content": "<div class='card'><b>Syntax:</b>\n<pre>\nWiFi.RSSI();\n</pre></div>\n\n<div class='card'><b>Parameters:</b> None</div>\n\n<div class='card'><b>Returns:</b> A signed integer (int32_t) representing signal strength in dBm</div>\n\n<div class='card'>💡 A stronger signal has a value closer to 0. So -40 is stronger than -75 🧠</div>",
      "image": "https://cdn.sparkfun.com/assets/e/8/a/4/WiFi_RSSI_syntax.svg",
      "audio": "https://audio-url-host/wifi-rssi-syntax.mp3"
    },
    {
      "title": "🧪 Example Code: Print Signal Strength",
      "content": "<div class='card'>Want to know how strong your connection is?</div>\n<pre>\n#include <WiFi.h>\n\nvoid setup() {\n  Serial.begin(115200);\n  WiFi.begin(\"YourSSID\", \"YourPassword\");\n  while (WiFi.status() != WL_CONNECTED) {\n    delay(500);\n    Serial.print(\".\");\n  }\n  Serial.println(\"\\nConnected\");\n  Serial.print(\"Signal Strength (RSSI): \");\n  Serial.print(WiFi.RSSI());\n  Serial.println(\" dBm\");\n}\n</pre>\n\n<div class='card'>Try placing your board in different spots and compare the RSSI values 📊</div>",
      "image": "https://cdn.sparkfun.com/assets/c/6/e/1/WiFi_RSSI_code.svg",
      "audio": "https://audio-url-host/wifi-rssi-code.mp3"
    },
    {
      "title": "🎮 Game: Which RSSI Value Is Best?",
      "content": "<div class='card'>Your ESP32 is connected and reporting signal strength. Which of these is the strongest?</div>\n\n<div class='card'>\nA. -35 dBm<br>\nB. -65 dBm<br>\nC. -80 dBm<br>\nD. -90 dBm</div>\n\n<div class='card'><input id='rssiQuiz' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! -35 dBm is stronger than -90 dBm. RSSI values are negative!\")'>Submit</button></div>",
      "image": "https://cdn.sparkfun.com/assets/9/4/1/9/WiFi_RSSI_quiz.svg",
      "audio": "https://audio-url-host/wifi-rssi-quiz.mp3"
    },
    {
      "title": "💡 Real Uses: Smart Dashboards & Range Warnings",
      "content": "<div class='card'>Here’s how people use <code>WiFi.RSSI()</code> in real projects:</div>\n<ul>\n<li>📊 Display signal strength on OLED screens</li>\n<li>🚦 Show red/yellow/green status lights</li>\n<li>📉 Log signal data for analysis</li>\n<li>📡 Trigger re-positioning or failover</li>\n</ul>\n\n<div class='card'>🔥 Combine with <code>WiFi.BSSID()</code> to track roaming and handoffs between access points</div>",
      "image": "https://cdn.sparkfun.com/assets/2/f/4/3/WiFi_RSSI_usecases.svg",
      "audio": "https://audio-url-host/wifi-rssi-usecases.mp3"
    }
  ]
}
,{
  "title": "WiFi.encryptionType() — Know Your Network’s Security Level",
  "lessons": [
    {
      "title": "🔐 What is WiFi Encryption?",
      "content": "<div class='card'>Encryption secures your WiFi so no one can spy on your data 🔒</div>\n\n<div class='card'>There are several types of WiFi encryption:</div>\n<ul>\n<li>🔓 <b>Open</b> = no password, no encryption</li>\n<li>🔑 <b>WEP</b> = old & insecure</li>\n<li>🛡️ <b>WPA/WPA2</b> = modern & secure</li>\n</ul>\n\n<div class='card'><code>WiFi.encryptionType()</code> tells you what security type a scanned network is using.</div>",
      "image": "https://cdn.sparkfun.com/assets/e/2/4/9/WiFi_encryption_intro.svg",
      "audio": "https://audio-url-host/wifi-encryption-intro.mp3"
    },
    {
      "title": "📘 Syntax, Parameters & Return",
      "content": "<div class='card'><b>Syntax:</b>\n<pre>\nWiFi.encryptionType(networkIndex);\n</pre></div>\n\n<div class='card'><b>Parameter:</b>\n<ul>\n<li><code>networkIndex</code>: the index of a network found via <code>WiFi.scanNetworks()</code></li>\n</ul></div>\n\n<div class='card'><b>Returns:</b> An integer code for encryption type:</div>\n<ul>\n<li><code>ENC_TYPE_NONE</code> (0) = Open</li>\n<li><code>ENC_TYPE_WEP</code> (1)</li>\n<li><code>ENC_TYPE_TKIP</code> (2)</li>\n<li><code>ENC_TYPE_CCMP</code> (4) = WPA2</li>\n</ul>\n\n<div class='card'>📌 These are defined in <code>WiFiEncryptionType.h</code></div>",
      "image": "https://cdn.sparkfun.com/assets/b/a/1/2/WiFi_encryption_syntax.svg",
      "audio": "https://audio-url-host/wifi-encryption-syntax.mp3"
    },
    {
      "title": "🧪 Example: Scan and List Security Type",
      "content": "<div class='card'>Here’s how to list all nearby networks with their security types:</div>\n<pre>\nvoid listNetworks() {\n  int n = WiFi.scanNetworks();\n  for (int i = 0; i < n; ++i) {\n    Serial.print(WiFi.SSID(i));\n    Serial.print(\" - \");\n    byte encryption = WiFi.encryptionType(i);\n    switch (encryption) {\n      case WIFI_AUTH_OPEN: Serial.println(\"Open\"); break;\n      case WIFI_AUTH_WEP: Serial.println(\"WEP\"); break;\n      case WIFI_AUTH_WPA_PSK:\n      case WIFI_AUTH_WPA2_PSK: Serial.println(\"WPA/WPA2\"); break;\n      default: Serial.println(\"Unknown\"); break;\n    }\n  }\n}\n</pre>",
      "image": "https://cdn.sparkfun.com/assets/1/3/f/4/WiFi_encryption_code.svg",
      "audio": "https://audio-url-host/wifi-encryption-code.mp3"
    },
    {
      "title": "🎮 Game: Which Network is Most Secure?",
      "content": "<div class='card'>You scan 3 networks. Which encryption type is best for security?</div>\n\n<div class='card'>\nA. ENC_TYPE_NONE<br>\nB. ENC_TYPE_WEP<br>\nC. ENC_TYPE_CCMP (WPA2)<br>\nD. ENC_TYPE_TKIP</div>\n\n<div class='card'><input id='encryptionQuiz' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! WPA2 (CCMP) is the most secure among these.\")'>Submit</button></div>",
      "image": "https://cdn.sparkfun.com/assets/f/9/0/7/WiFi_encryption_quiz.svg",
      "audio": "https://audio-url-host/wifi-encryption-quiz.mp3"
    },
    {
      "title": "💡 Real Uses: Choose Safe Networks",
      "content": "<div class='card'>Want to build an Arduino that picks the <b>safest</b> available network?</div>\n<ul>\n<li>📶 Scan networks</li>\n<li>🔐 Use <code>WiFi.encryptionType()</code> to filter out open/WEP</li>\n<li>🔁 Pick the strongest WPA2 or WPA3 network</li>\n</ul>\n\n<div class='card'>🔥 Combine with <code>WiFi.RSSI()</code> for a smart auto-connect system!</div>",
      "image": "https://cdn.sparkfun.com/assets/e/b/d/8/WiFi_encryption_usecases.svg",
      "audio": "https://audio-url-host/wifi-encryption-uses.mp3"
    }
  ]
}
,{
  "title": "WiFi.scanNetworks() — Detect Nearby WiFi Networks",
  "lessons": [
    {
      "title": "🔍 What Does scanNetworks() Do?",
      "content": "<div class='card'><code>WiFi.scanNetworks()</code> tells your Arduino to search the airwaves for all WiFi signals nearby 📡</div>\n\n<div class='card'>It returns a count of how many networks were found. Then you can use:</div>\n<ul>\n<li><code>WiFi.SSID(i)</code> → name</li>\n<li><code>WiFi.RSSI(i)</code> → signal strength</li>\n<li><code>WiFi.encryptionType(i)</code> → security</li>\n</ul>\n\n<div class='card'>Perfect for dashboards, signal mapping, auto-connect systems, and even WiFi sniffers 🧠</div>",
      "image": "https://cdn.sparkfun.com/assets/1/a/6/0/WiFi_scanNetworks_intro.svg",
      "audio": "https://audio-url-host/wifi-scanNetworks-intro.mp3"
    },
    {
      "title": "📘 Syntax, Parameters & Return",
      "content": "<div class='card'><b>Syntax:</b>\n<pre>\nint n = WiFi.scanNetworks();\n</pre></div>\n\n<div class='card'><b>Parameters:</b> None</div>\n\n<div class='card'><b>Returns:</b> An integer: total number of networks found</div>\n\n<div class='card'>Call this in <code>setup()</code> or a button click to refresh the list 🔄</div>",
      "image": "https://cdn.sparkfun.com/assets/f/1/f/2/WiFi_scanNetworks_syntax.svg",
      "audio": "https://audio-url-host/wifi-scanNetworks-syntax.mp3"
    },
    {
      "title": "🧪 Example: Scan & Print All Nearby Networks",
      "content": "<div class='card'>Let’s list every visible network with signal and security:</div>\n<pre>\nvoid scanNetworks() {\n  int n = WiFi.scanNetworks();\n  Serial.println(\"Networks found:\");\n  for (int i = 0; i < n; ++i) {\n    Serial.print(i + 1);\n    Serial.print(\": \");\n    Serial.print(WiFi.SSID(i));\n    Serial.print(\" (RSSI: \");\n    Serial.print(WiFi.RSSI(i));\n    Serial.print(\" dBm)  Security: \");\n    Serial.println(WiFi.encryptionType(i));\n  }\n}\n</pre>\n\n<div class='card'>Try walking around your house — see how signals change 🚶‍♂️📶</div>",
      "image": "https://cdn.sparkfun.com/assets/b/e/d/2/WiFi_scanNetworks_example.svg",
      "audio": "https://audio-url-host/wifi-scanNetworks-code.mp3"
    },
    {
      "title": "🎮 Game: What’s the Correct Use?",
      "content": "<div class='card'>You want to list all SSIDs and their signal strength. What’s the correct combo?</div>\n\n<div class='card'>\nA. <code>WiFi.begin()</code> + <code>WiFi.SSID()</code><br>\nB. <code>WiFi.scanNetworks()</code> + <code>WiFi.SSID(i)</code><br>\nC. <code>WiFi.config()</code> only<br>\nD. <code>WiFi.disconnect()</code> + <code>WiFi.status()</code></div>\n\n<div class='card'><input id='scanGame' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! You must use scanNetworks() + SSID(index) to list scanned SSIDs.\")'>Submit</button></div>",
      "image": "https://cdn.sparkfun.com/assets/d/8/4/f/WiFi_scanNetworks_quiz.svg",
      "audio": "https://audio-url-host/wifi-scanNetworks-quiz.mp3"
    },
    {
      "title": "💡 Real Projects Using scanNetworks()",
      "content": "<div class='card'>What kind of cool stuff can you build with this?</div>\n<ul>\n<li>📊 WiFi analyzer dashboard (OLED/LCD)</li>\n<li>📡 Smart auto-connect to strongest network</li>\n<li>🚦 Signal strength alert with LEDs</li>\n<li>🛠️ DIY network mapping robot!</li>\n</ul>\n\n<div class='card'>Try combining <code>scanNetworks()</code> + <code>WiFi.RSSI()</code> + <code>WiFi.encryptionType()</code> to create a full wireless scanner 🔍</div>",
      "image": "https://cdn.sparkfun.com/assets/0/f/0/2/WiFi_scanNetworks_usecases.svg",
      "audio": "https://audio-url-host/wifi-scanNetworks-uses.mp3"
    }
  ]
}
,{
  "title": "WiFi.status() — Check Connection Status Like a Pro",
  "lessons": [
    {
      "title": "📶 What is WiFi.status()?",
      "content": "<div class='card'>Want to know if your Arduino is online or not? <code>WiFi.status()</code> tells you exactly that 🧠</div>\n\n<div class='card'>It returns an integer code that tells you whether your board is:</div>\n<ul>\n<li>🔌 Not connected</li>\n<li>🔄 Connecting</li>\n<li>✅ Connected with IP address</li>\n<li>⚠️ Connection failed</li>\n</ul>\n\n<div class='card'>This is the *heartbeat* of most WiFi projects. Use it in <code>loop()</code> to stay connected 💡</div>",
      "image": "https://cdn.sparkfun.com/assets/3/2/1/4/WiFi_status_intro.svg",
      "audio": "https://audio-url-host/wifi-status-intro.mp3"
    },
    {
      "title": "📘 Syntax, Return Values & Meaning",
      "content": "<div class='card'><b>Syntax:</b>\n<pre>\nint status = WiFi.status();\n</pre></div>\n\n<div class='card'><b>Returns:</b> A status constant from these options:</div>\n<ul>\n<li><code>WL_NO_SHIELD</code> → No WiFi hardware found</li>\n<li><code>WL_IDLE_STATUS</code> → Hardware is idle</li>\n<li><code>WL_NO_SSID_AVAIL</code> → Network not found</li>\n<li><code>WL_SCAN_COMPLETED</code></li>\n<li><code>WL_CONNECTED</code> → ✅ Connected!</li>\n<li><code>WL_CONNECT_FAILED</code></li>\n<li><code>WL_CONNECTION_LOST</code></li>\n<li><code>WL_DISCONNECTED</code></li>\n</ul>\n\n<div class='card'>These are all defined in <code>WiFiStatus.h</code> ⚙️</div>",
      "image": "https://cdn.sparkfun.com/assets/6/9/7/e/WiFi_status_constants.svg",
      "audio": "https://audio-url-host/wifi-status-syntax.mp3"
    },
    {
      "title": "🧪 Example Code: Auto-Reconnect When Dropped",
      "content": "<div class='card'>This sketch will auto-reconnect if the connection drops:</div>\n<pre>\n#include <WiFi.h>\n\nvoid setup() {\n  Serial.begin(115200);\n  WiFi.begin(\"YourSSID\", \"YourPassword\");\n}\n\nvoid loop() {\n  if (WiFi.status() != WL_CONNECTED) {\n    Serial.println(\"WiFi dropped. Reconnecting...\");\n    WiFi.begin(\"YourSSID\", \"YourPassword\");\n    delay(5000);\n  } else {\n    Serial.println(\"Connected!\");\n  }\n  delay(10000);\n}\n</pre>\n\n<div class='card'>Your Arduino will stay connected like a boss 🤖</div>",
      "image": "https://cdn.sparkfun.com/assets/7/f/5/2/WiFi_status_example.svg",
      "audio": "https://audio-url-host/wifi-status-code.mp3"
    },
    {
      "title": "🎮 Game: Which Status Code Means Connected?",
      "content": "<div class='card'>You call <code>WiFi.status()</code> and get <code>WL_CONNECTED</code>. What does that mean?</div>\n\n<div class='card'>\nA. Connection failed<br>\nB. Successfully connected<br>\nC. Still scanning<br>\nD. No WiFi shield</div>\n\n<div class='card'><input id='statusQuiz' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! WL_CONNECTED means you are online and ready to go!\")'>Submit</button></div>",
      "image": "https://cdn.sparkfun.com/assets/9/5/e/1/WiFi_status_quiz.svg",
      "audio": "https://audio-url-host/wifi-status-quiz.mp3"
    },
    {
      "title": "💡 Real Uses: Uptime, Reliability & Reconnects",
      "content": "<div class='card'>Pro WiFi projects always use <code>WiFi.status()</code> to:</div>\n<ul>\n<li>🔁 Retry connection on failure</li>\n<li>📉 Display status to users</li>\n<li>💤 Go into low-power mode if WiFi is down</li>\n<li>📶 Log disconnection reasons</li>\n</ul>\n\n<div class='card'>🔥 Combine this with <code>WiFi.reconnect()</code> and a watchdog timer for unbeatable reliability!</div>",
      "image": "https://cdn.sparkfun.com/assets/4/3/a/b/WiFi_status_usecases.svg",
      "audio": "https://audio-url-host/wifi-status-usecases.mp3"
    }
  ]
}
,{
  "title": "WiFi.getSocket() — Access the Low-Level Socket Number",
  "lessons": [
    {
      "title": "🔌 What is a Network Socket?",
      "content": "<div class='card'>A <b>socket</b> is like a channel or pipe that connects your Arduino to the internet 🌍</div>\n\n<div class='card'>Each time your Arduino connects to a server (like a cloud API or web page), it uses a <i>socket number</i>.</div>\n\n<div class='card'><code>WiFi.getSocket()</code> returns this number so advanced users can:</div>\n<ul>\n<li>🧪 Debug which socket is used</li>\n<li>🔁 Handle multiple connections</li>\n<li>⚙️ Tune socket behavior for raw TCP/UDP</li>\n</ul>\n\n<div class='card'>⚠️ You usually won’t need this unless you're doing advanced networking 📡</div>",
      "image": "https://cdn.sparkfun.com/assets/2/c/8/0/WiFi_getSocket_intro.svg",
      "audio": "https://audio-url-host/wifi-getSocket-intro.mp3"
    },
    {
      "title": "📘 Syntax, Parameters & Return Value",
      "content": "<div class='card'><b>Syntax:</b>\n<pre>\nint socket = WiFi.getSocket();\n</pre></div>\n\n<div class='card'><b>Parameters:</b> None</div>\n\n<div class='card'><b>Returns:</b> An integer representing the socket number (usually between 0–3 depending on the board)</div>\n\n<div class='card'>🔍 On ESP32 or Uno WiFi, multiple sockets may be available (e.g., for concurrent TCP clients)</div>",
      "image": "https://cdn.sparkfun.com/assets/d/0/5/f/WiFi_getSocket_syntax.svg",
      "audio": "https://audio-url-host/wifi-getSocket-syntax.mp3"
    },
    {
      "title": "🧪 Example: Print Socket After Connecting",
      "content": "<div class='card'>Let’s see which socket is used once WiFi connects:</div>\n<pre>\n#include <WiFi.h>\n\nvoid setup() {\n  Serial.begin(115200);\n  WiFi.begin(\"SSID\", \"Password\");\n  while (WiFi.status() != WL_CONNECTED) {\n    delay(500);\n    Serial.print(\".\");\n  }\n  Serial.println(\"\\nConnected!\");\n  int sock = WiFi.getSocket();\n  Serial.print(\"Socket in use: \");\n  Serial.println(sock);\n}\n\nvoid loop() {}\n</pre>\n\n<div class='card'>Note: This may return <code>-1</code> if not supported or connection isn't yet fully active 🧠</div>",
      "image": "https://cdn.sparkfun.com/assets/5/2/a/1/WiFi_getSocket_code.svg",
      "audio": "https://audio-url-host/wifi-getSocket-code.mp3"
    },
    {
      "title": "🎮 Game: When Should You Use getSocket()?",
      "content": "<div class='card'>You want to monitor socket usage in a multi-client TCP server. Which Arduino function helps?</div>\n\n<div class='card'>\nA. WiFi.begin()<br>\nB. WiFi.SSID()<br>\nC. WiFi.getSocket()<br>\nD. WiFi.status()</div>\n\n<div class='card'><input id='sockQuiz' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! WiFi.getSocket() returns the current socket in use.\")'>Submit</button></div>",
      "image": "https://cdn.sparkfun.com/assets/e/1/9/9/WiFi_getSocket_quiz.svg",
      "audio": "https://audio-url-host/wifi-getSocket-quiz.mp3"
    },
    {
      "title": "💡 Real Uses: Socket Debugging & Protocols",
      "content": "<div class='card'>Here’s where you’ll find <code>WiFi.getSocket()</code> useful:</div>\n<ul>\n<li>🔧 Low-level TCP client/server debugging</li>\n<li>📶 Handling multiple open sockets</li>\n<li>🕵️ Diagnosing strange WiFi behavior</li>\n<li>🔗 Custom protocol stacks (MQTT, CoAP, etc.)</li>\n</ul>\n\n<div class='card'>⚠️ Use with care. This is a low-level tool for pros 🧑‍💻</div>",
      "image": "https://cdn.sparkfun.com/assets/a/8/e/3/WiFi_getSocket_usecases.svg",
      "audio": "https://audio-url-host/wifi-getSocket-uses.mp3"
    }
  ]
}
,{
  "title": "WiFi.macAddress() — Get Your Board’s Unique Hardware ID",
  "lessons": [
    {
      "title": "🆔 What is a MAC Address?",
      "content": "<div class='card'>A MAC (Media Access Control) address is your Arduino’s unique network ID 📡</div>\n\n<div class='card'>Think of it like a fingerprint for your WiFi module. It’s hard-coded into the hardware and looks like:</div>\n\n<div class='card'><code>94:B9:7E:0C:3A:FA</code></div>\n\n<div class='card'>🛡️ Useful for device registration, filtering, and logging which device connected when</div>",
      "image": "https://cdn.sparkfun.com/assets/9/7/1/a/WiFi_macAddress_intro.svg",
      "audio": "https://audio-url-host/wifi-macAddress-intro.mp3"
    },
    {
      "title": "📘 Syntax, Parameters & Return Type",
      "content": "<div class='card'><b>Syntax:</b>\n<pre>\nuint8_t* mac = WiFi.macAddress();\n</pre></div>\n\n<div class='card'><b>Parameters:</b> None</div>\n\n<div class='card'><b>Returns:</b> A pointer to an array of 6 bytes (<code>uint8_t*</code>) representing the MAC address</div>\n\n<div class='card'>💡 Format it manually to print it nicely!</div>",
      "image": "https://cdn.sparkfun.com/assets/e/4/c/f/WiFi_macAddress_syntax.svg",
      "audio": "https://audio-url-host/wifi-macAddress-syntax.mp3"
    },
    {
      "title": "🧪 Example: Print Your MAC Address",
      "content": "<div class='card'>Here’s how to display your board’s MAC address in standard form:</div>\n<pre>\nvoid printMAC() {\n  const uint8_t* mac = WiFi.macAddress();\n  char macStr[18];\n  sprintf(macStr, \"%02X:%02X:%02X:%02X:%02X:%02X\",\n          mac[0], mac[1], mac[2],\n          mac[3], mac[4], mac[5]);\n  Serial.print(\"My MAC Address is: \");\n  Serial.println(macStr);\n}\n</pre>\n\n<div class='card'>⚠️ This is helpful if you want to whitelist your device on a router 🔐</div>",
      "image": "https://cdn.sparkfun.com/assets/4/f/b/3/WiFi_macAddress_code.svg",
      "audio": "https://audio-url-host/wifi-macAddress-code.mp3"
    },
    {
      "title": "🎮 Game: Which Use Case Needs a MAC?",
      "content": "<div class='card'>You want to identify your Arduino before allowing it to access a secure network. What’s required?</div>\n\n<div class='card'>\nA. IP Address<br>\nB. DNS Server<br>\nC. MAC Address<br>\nD. Signal Strength</div>\n\n<div class='card'><input id='macQuiz' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! MAC addresses are used to uniquely identify devices on a network.\")'>Submit</button></div>",
      "image": "https://cdn.sparkfun.com/assets/7/2/3/e/WiFi_macAddress_quiz.svg",
      "audio": "https://audio-url-host/wifi-macAddress-quiz.mp3"
    },
    {
      "title": "💡 Real-World Uses of MAC Addresses",
      "content": "<div class='card'>Real projects that use MAC addresses:</div>\n<ul>\n<li>📲 Device whitelisting on secured routers</li>\n<li>📊 Tagging which board sent which data to the cloud</li>\n<li>🚫 Blocking unknown devices in enterprise networks</li>\n<li>📍 Tracking device location across routers</li>\n</ul>\n\n<div class='card'>🧠 Combine with <code>WiFi.BSSID()</code> and <code>WiFi.RSSI()</code> for smart roaming + identity</div>",
      "image": "https://cdn.sparkfun.com/assets/8/0/a/7/WiFi_macAddress_usecases.svg",
      "audio": "https://audio-url-host/wifi-macAddress-uses.mp3"
    }
  ]
}


  ]
},{
  title:"Understanding Arduino IP Networking: The IPAddress Class",
  modules:[
    {
  "title": "IPAddress.localIP() — Understanding Arduino's Network Identity",
  "lessons": [
    {
      "title": "🌐 What is an IP Address? (Beginner Friendly)",
      "content": "<div class='card'>Every device on a network — including your Arduino — needs a unique ID to send/receive data. That ID is an <b>IP Address</b> 🧠</div>\n\n<div class='card'><b>IP = Internet Protocol</b> — and the address looks like this: <code>192.168.0.10</code></div>\n\n<div class='card'>Just like your home has a street address, your Arduino gets an IP address so routers and other devices know where to send data 📬</div>\n\n<ul>\n<li><b>Private IP</b> (e.g. 192.168.x.x): Used within your home/router</li>\n<li><b>Public IP</b>: Seen by the internet (usually your router's IP)</li>\n</ul>\n\n<div class='card'>We'll now see how Arduino accesses this IP using the <code>localIP()</code> function.</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/IP_address_example.svg/1024px-IP_address_example.svg.png",
      "audio": "https://audio-url-host/ipaddress-intro.mp3"
    },
    {
      "title": "🔍 What is IPAddress.localIP()? And When to Use It",
      "content": "<div class='card'><code>WiFi.localIP()</code> returns the IP address assigned to your Arduino after it connects to a WiFi network 📡</div>\n\n<div class='card'>This is the IP you'll use to:</div>\n<ul>\n<li>🔗 Connect to Arduino from your phone</li>\n<li>🌍 Host web servers (like dashboards)</li>\n<li>📲 Communicate with mobile apps or APIs</li>\n</ul>\n\n<div class='card'><b>Fun fact:</b> Every time your Arduino reconnects, it might get a <i>different</i> local IP — unless you use static IPs or reservations!</div>",
      "image": "https://cdn.sparkfun.com/assets/f/8/2/5/WiFi_localIP_meaning.svg",
      "audio": "https://audio-url-host/localIP-meaning.mp3"
    },
    {
      "title": "📘 Syntax, Parameters & Return Type",
      "content": "<div class='card'><b>Syntax:</b>\n<pre>\nIPAddress ip = WiFi.localIP();\n</pre></div>\n\n<div class='card'><b>Returns:</b> An <code>IPAddress</code> object. You can print it or split into bytes (octets)</div>\n\n<div class='card'>To display:\n<pre>\nSerial.println(WiFi.localIP());\n</pre>\nTo break into bytes:\n<pre>\nIPAddress ip = WiFi.localIP();\nSerial.println(ip[0]); // First octet</pre></div>",
      "image": "https://cdn.sparkfun.com/assets/3/2/f/6/WiFi_localIP_syntax.svg",
      "audio": "https://audio-url-host/localIP-syntax.mp3"
    },
    {
      "title": "🧪 Example: Connect to WiFi and Show Local IP",
      "content": "<div class='card'>Use this example to connect to WiFi and print your board’s IP address:</div>\n<pre>\n#include <WiFi.h>\n\nvoid setup() {\n  Serial.begin(115200);\n  WiFi.begin(\"YourSSID\", \"YourPassword\");\n  while (WiFi.status() != WL_CONNECTED) {\n    delay(500);\n    Serial.print(\".\");\n  }\n  Serial.println(\"\\nConnected!\");\n  Serial.print(\"My IP is: \");\n  Serial.println(WiFi.localIP());\n}\n\nvoid loop() {}\n</pre>\n\n<div class='card'>Open the Serial Monitor and note the IP. Try opening it in a browser if you're running a server!</div>",
      "image": "https://cdn.sparkfun.com/assets/b/5/a/f/WiFi_localIP_example.svg",
      "audio": "https://audio-url-host/localIP-code.mp3"
    },
    {
      "title": "🎮 Game: What Type of IP is 192.168.1.5?",
      "content": "<div class='card'>Quiz time! What type of IP is <code>192.168.1.5</code>?</div>\n\n<div class='card'>\nA. Public IP<br>\nB. Broadcast IP<br>\nC. Private (Local) IP<br>\nD. Invalid IP</div>\n\n<div class='card'><input id='ipQuiz' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! It’s a private IP address used inside local networks.\")'>Submit</button></div>",
      "image": "https://cdn.sparkfun.com/assets/4/8/6/2/IP_quiz.svg",
      "audio": "https://audio-url-host/ip-quiz.mp3"
    },
    {
      "title": "💡 Real Projects Using localIP()",
      "content": "<div class='card'>Here are real-world uses of <code>localIP()</code>:</div>\n<ul>\n<li>🌐 Hosting a web dashboard at your Arduino’s IP</li>\n<li>📲 Connecting your phone app to Arduino over local WiFi</li>\n<li>📸 Sending IP streams from a camera module</li>\n<li>🔄 Sending sensor data to another ESP32 by IP</li>\n</ul>\n\n<div class='card'>Combine it with <code>WiFi.status()</code> to build stable, connectable IoT systems 🚀</div>",
      "image": "https://cdn.sparkfun.com/assets/6/4/2/8/localIP_usecases.svg",
      "audio": "https://audio-url-host/localIP-uses.mp3"
    }
  ]
}
,{
  "title": "IPAddress.subnetMask() — Understand Your Network Boundary",
  "lessons": [
    {
      "title": "🌐 What is a Subnet Mask (Simply Explained)?",
      "content": "<div class='card'>A <b>Subnet Mask</b> tells your Arduino which devices are \"close by\" on the same network 🧠</div>\n\n<div class='card'>It splits the IP address into:</div>\n<ul>\n<li>🏠 <b>Network part</b> (shared by all local devices)</li>\n<li>🚪 <b>Host part</b> (unique per device)</li>\n</ul>\n\n<div class='card'>For example:<br>\n<code>IP: 192.168.1.10</code><br>\n<code>Mask: 255.255.255.0</code> → all devices starting with 192.168.1 are local!</div>\n\n<div class='card'>⚠️ Subnets define who your Arduino can talk to directly. All else goes through the gateway 🔁</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Subnetting-diagram.svg/1024px-Subnetting-diagram.svg.png",
      "audio": "https://audio-url-host/subnetMask-intro.mp3"
    },
    {
      "title": "🔍 What Does IPAddress.subnetMask() Return?",
      "content": "<div class='card'><code>WiFi.subnetMask()</code> returns the <i>subnet mask</i> assigned by your router when connecting to WiFi</div>\n\n<div class='card'>Usually it looks like:</div>\n<ul>\n<li><code>255.255.255.0</code> → /24 network</li>\n<li><code>255.255.0.0</code> → /16 network (more hosts)</li>\n</ul>\n\n<div class='card'>Advanced setups may have different masks depending on the router or static config ⚙️</div>",
      "image": "https://cdn.sparkfun.com/assets/c/8/b/f/WiFi_subnetMask_meaning.svg",
      "audio": "https://audio-url-host/subnetMask-meaning.mp3"
    },
    {
      "title": "📘 Syntax, Parameters, and Return",
      "content": "<div class='card'><b>Syntax:</b>\n<pre>\nIPAddress mask = WiFi.subnetMask();\n</pre></div>\n\n<div class='card'><b>Returns:</b> An <code>IPAddress</code> object containing the subnet mask</div>\n\n<div class='card'><b>Parameters:</b> None</div>\n\n<div class='card'>📏 Use <code>Serial.println(WiFi.subnetMask())</code> to see what your router gave your Arduino</div>",
      "image": "https://cdn.sparkfun.com/assets/f/9/7/2/WiFi_subnetMask_syntax.svg",
      "audio": "https://audio-url-host/subnetMask-syntax.mp3"
    },
    {
      "title": "🧪 Example: Show Your Subnet Mask",
      "content": "<div class='card'>Here’s a simple sketch to print the current subnet mask:</div>\n<pre>\n#include <WiFi.h>\n\nvoid setup() {\n  Serial.begin(115200);\n  WiFi.begin(\"YourSSID\", \"YourPassword\");\n  while (WiFi.status() != WL_CONNECTED) {\n    delay(500);\n  }\n  IPAddress mask = WiFi.subnetMask();\n  Serial.print(\"Subnet Mask: \");\n  Serial.println(mask);\n}\n\nvoid loop() {}\n</pre>\n\n<div class='card'>👀 Compare this on different networks — see if it changes!</div>",
      "image": "https://cdn.sparkfun.com/assets/6/4/0/1/WiFi_subnetMask_code.svg",
      "audio": "https://audio-url-host/subnetMask-code.mp3"
    },
    {
      "title": "🎮 Game: Which Subnet Is 255.255.255.0?",
      "content": "<div class='card'>You get the mask <code>255.255.255.0</code>. How many IPs are available for devices?</div>\n\n<div class='card'>\nA. 255 total<br>\nB. 254 usable<br>\nC. 256 usable<br>\nD. Only 1</div>\n\n<div class='card'><input id='subnetQuiz' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! A /24 subnet gives 254 usable IPs for devices.\")'>Submit</button></div>",
      "image": "https://cdn.sparkfun.com/assets/d/6/0/b/WiFi_subnetMask_quiz.svg",
      "audio": "https://audio-url-host/subnetMask-quiz.mp3"
    },
    {
      "title": "💡 Real-World Uses of Subnet Masks",
      "content": "<div class='card'>How can you use <code>subnetMask()</code> in real Arduino projects?</div>\n<ul>\n<li>📍 Detect if another device is local or remote</li>\n<li>🌐 Custom WiFi router configs with static masks</li>\n<li>📶 IP range scanner robots</li>\n<li>🧠 Learn how home vs public networks are structured</li>\n</ul>\n\n<div class='card'>Pro tip: Combine this with <code>WiFi.gatewayIP()</code> to fully understand your network</div>",
      "image": "https://cdn.sparkfun.com/assets/e/3/f/4/WiFi_subnetMask_usecases.svg",
      "audio": "https://audio-url-host/subnetMask-usecases.mp3"
    }
  ]
}
,{
  "title": "IPAddress.gatewayIP() — How Your Arduino Finds the Internet",
  "lessons": [
    {
      "title": "🚪 What is a Gateway? (Beginner Explanation)",
      "content": "<div class='card'>A <b>gateway</b> is like the door from your local network to the outside world 🌍</div>\n\n<div class='card'>When your Arduino connects to WiFi, the router gives it three things:</div>\n<ul>\n<li>🎯 An IP address (like 192.168.1.22)</li>\n<li>🧩 A subnet mask (like 255.255.255.0)</li>\n<li>🚪 A <b>gateway</b> (like 192.168.1.1)</li>\n</ul>\n\n<div class='card'>All traffic going to the internet passes through this gateway (usually your WiFi router).</div>\n\n<div class='card'>Without a valid gateway, your Arduino can only talk to devices on the same LAN — no cloud APIs, no websites 🌐</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Internet_gateway_network.svg/1024px-Internet_gateway_network.svg.png",
      "audio": "https://audio-url-host/gateway-intro.mp3"
    },
    {
      "title": "📘 What Does IPAddress.gatewayIP() Do?",
      "content": "<div class='card'><code>WiFi.gatewayIP()</code> returns the <b>IP address of the gateway</b> assigned by the router when your Arduino connects to WiFi</div>\n\n<div class='card'><b>Usually:</b> <code>192.168.1.1</code> or <code>192.168.0.1</code></div>\n\n<div class='card'>This tells your board where to send data that's not meant for the local network 🔁</div>\n\n<div class='card'><b>Syntax:</b>\n<pre>\nIPAddress gate = WiFi.gatewayIP();\n</pre></div>\n\n<div class='card'>💡 Tip: Use it to debug routing problems in large home/office networks</div>",
      "image": "https://cdn.sparkfun.com/assets/b/9/f/0/WiFi_gatewayIP_syntax.svg",
      "audio": "https://audio-url-host/gatewayIP-syntax.mp3"
    },
    {
      "title": "🧠 Gateway vs Router vs DNS — Know the Difference",
      "content": "<div class='card'>Let’s clear up some confusing terms:</div>\n<ul>\n<li>🌐 <b>Router:</b> A device that connects two or more networks (usually local & internet)</li>\n<li>🚪 <b>Gateway:</b> The IP of your router from the Arduino’s point of view</li>\n<li>📛 <b>DNS:</b> Server that translates <code>example.com</code> into an IP like 142.250.180.78</li>\n</ul>\n\n<div class='card'>➡️ Think of gateway as the <i>first step</i> toward the internet 🌎</div>\n\n<div class='card'>You need all three for a reliable, connected IoT project!</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/DNS_en.svg/1280px-DNS_en.svg.png",
      "audio": "https://audio-url-host/gateway-vs-router-vs-dns.mp3"
    },
    {
      "title": "🧪 Example: Print Your Gateway IP",
      "content": "<div class='card'>Try this sketch to print your Arduino’s gateway IP address:</div>\n<pre>\n#include <WiFi.h>\n\nvoid setup() {\n  Serial.begin(115200);\n  WiFi.begin(\"YourSSID\", \"YourPassword\");\n  while (WiFi.status() != WL_CONNECTED) {\n    delay(500);\n  }\n  Serial.print(\"Gateway IP: \");\n  Serial.println(WiFi.gatewayIP());\n}\n\nvoid loop() {}\n</pre>\n\n<div class='card'>Compare this with the router IP shown on your PC/Phone. They should match!</div>",
      "image": "https://cdn.sparkfun.com/assets/1/f/0/f/WiFi_gatewayIP_example.svg",
      "audio": "https://audio-url-host/gateway-code.mp3"
    },
    {
      "title": "🎮 Game: Why Would You Need gatewayIP()?",
      "content": "<div class='card'>Why might a web-connected Arduino project need to know its gateway IP?</div>\n\n<div class='card'>\nA. To make local LED blink<br>\nB. To convert float to string<br>\nC. To route traffic beyond local network<br>\nD. To get MAC address</div>\n\n<div class='card'><input id='gatewayQuiz' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! The gateway tells your Arduino where to send traffic destined for the internet.\")'>Submit</button></div>",
      "image": "https://cdn.sparkfun.com/assets/3/a/0/c/WiFi_gatewayIP_quiz.svg",
      "audio": "https://audio-url-host/gateway-quiz.mp3"
    },
    {
      "title": "💡 Real-World Uses of gatewayIP() in Projects",
      "content": "<div class='card'>🔍 Here’s where <code>gatewayIP()</code> becomes essential:</div>\n<ul>\n<li>📡 Debugging if your board can’t access online APIs</li>\n<li>📶 Building mesh/bridge networks and routing between nodes</li>\n<li>🌍 Manually crafting raw TCP/UDP packets for remote servers</li>\n<li>🧪 Teaching students about networking layers (IP, transport, app)</li>\n</ul>\n\n<div class='card'>🎓 Many Arduino networking errors are just missing DNS or incorrect gateway settings — know your basics!</div>",
      "image": "https://cdn.sparkfun.com/assets/f/e/2/4/WiFi_gatewayIP_uses.svg",
      "audio": "https://audio-url-host/gateway-usecases.mp3"
    }
  ]
},{
  "title": "IP Address Structure — How Numbers Define Devices",
  "lessons": [
    {
      "title": "🔢 What Does an IP Address Actually Mean?",
      "content": "<div class='card'>An IP address is a 32-bit number split into 4 chunks (called octets), like:</div>\n\n<div class='card'><code>192.168.1.42</code></div>\n\n<div class='card'>Each part can range from 0 to 255 — it’s just binary math! 🧠</div>\n\n<ul>\n<li><code>192</code> = 11000000</li>\n<li><code>168</code> = 10101000</li>\n<li><code>1</code>   = 00000001</li>\n<li><code>42</code>  = 00101010</li>\n</ul>\n\n<div class='card'>So that “dotted decimal” address is really a big 32-bit address behind the scenes 🎯</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/IPv4_header-en.svg/1280px-IPv4_header-en.svg.png",
      "audio": "https://audio-url-host/ip-structure.mp3"
    },
    {
      "title": "📘 Classes A, B, C — Legacy but Good to Know",
      "content": "<div class='card'>In the past, IPs were grouped into “classes”:</div>\n<ul>\n<li>🅰️ Class A: 0.0.0.0 to 127.255.255.255</li>\n<li>🅱️ Class B: 128.0.0.0 to 191.255.255.255</li>\n<li>🌍 Class C: 192.0.0.0 to 223.255.255.255</li>\n</ul>\n\n<div class='card'>Most Arduino devices will fall in Class C (like 192.168.x.x).</div>\n\n<div class='card'>This helps routers decide how to route packets efficiently 📦</div>",
      "image": "https://cdn.sparkfun.com/assets/a/4/3/5/IP_classes.svg",
      "audio": "https://audio-url-host/ip-classes.mp3"
    }
  ]
}
,{
  "title": "Static vs Dynamic IPs — Should You Fix It or Let It Flow?",
  "lessons": [
    {
      "title": "🌀 What is DHCP and Dynamic IP?",
      "content": "<div class='card'>By default, your router uses <b>DHCP</b> (Dynamic Host Configuration Protocol) to assign IPs to devices.</div>\n\n<div class='card'>Each time Arduino connects to WiFi, the IP may change (like 192.168.1.22 today, .24 tomorrow)</div>\n\n<div class='card'>💡 Dynamic = Automatic. No manual config needed.</div>",
      "image": "https://cdn.sparkfun.com/assets/9/f/d/4/dhcp_auto_assign.svg",
      "audio": "https://audio-url-host/dhcp-intro.mp3"
    },
    {
      "title": "🧷 What is a Static IP? And Why Use It?",
      "content": "<div class='card'>A <b>Static IP</b> stays fixed — you manually set it on your Arduino or reserve it on the router</div>\n\n<ul>\n<li>🌐 Useful for Web Servers</li>\n<li>📲 Phone apps can connect using saved IP</li>\n<li>📡 Reliable communication between multiple devices</li>\n</ul>\n\n<div class='card'>Downside: You must ensure the IP you choose is <b>not in use</b> and matches your subnet mask!</div>",
      "image": "https://cdn.sparkfun.com/assets/f/3/f/f/static_ip_vs_dynamic.svg",
      "audio": "https://audio-url-host/static-vs-dynamic.mp3"
    }
  ]
}
,{
  "title": "Subnetting Visualized — How IPs Get Divided",
  "lessons": [
    {
      "title": "📏 What is a Subnet Again?",
      "content": "<div class='card'>A subnet splits your IP range into smaller groups (or ‘networks’)</div>\n\n<div class='card'>Example: <code>255.255.255.0</code> subnet allows <b>254 devices</b> per network (last octet varies)</div>\n\n<div class='card'>It keeps your network fast, efficient, and organized 🔀</div>",
      "image": "https://cdn.sparkfun.com/assets/f/f/9/f/subnet_division_diagram.svg",
      "audio": "https://audio-url-host/subnetting-visual.mp3"
    },
    {
      "title": "🧮 CIDR Notation: /24, /16, /8 Explained",
      "content": "<div class='card'><code>/24</code> = 255.255.255.0 = 256 addresses<br>\n<code>/16</code> = 255.255.0.0 = 65,536 addresses<br>\n<code>/8</code> = 255.0.0.0 = 16.7 million addresses!</div>\n\n<div class='card'>CIDR (Classless Inter-Domain Routing) is how modern networks describe IP ranges ✍️</div>",
      "image": "https://cdn.sparkfun.com/assets/e/8/9/2/cidr_chart.svg",
      "audio": "https://audio-url-host/cidr-explained.mp3"
    }
  ]
}
,{
  "title": "How Routing Works on Arduino",
  "lessons": [
    {
      "title": "🚀 Local vs Remote Traffic — The Role of Routing",
      "content": "<div class='card'>Routing decides: do we send this data <b>inside the LAN</b> or to the internet?</div>\n\n<div class='card'>Arduino checks if the target IP is in its subnet — if not, it forwards the packet to the <b>gateway</b> 🌍</div>\n\n<div class='card'><code>if (destinationIP & subnetMask) != (myIP & subnetMask)</code> → go via gateway</div>",
      "image": "https://cdn.sparkfun.com/assets/d/3/5/9/arduino_routing_logic.svg",
      "audio": "https://audio-url-host/routing-logic.mp3"
    },
    {
      "title": "🌐 Visual Example of Routing Decisions",
      "content": "<div class='card'>Arduino: 192.168.1.15<br>\nTarget A: 192.168.1.40 → same subnet → direct<br>\nTarget B: 192.168.2.10 → different subnet → use gateway</div>\n\n<div class='card'>Routing is automatic, but knowing it helps you troubleshoot faster 🧠</div>",
      "image": "https://cdn.sparkfun.com/assets/5/a/8/c/routing_table_example.svg",
      "audio": "https://audio-url-host/routing-example.mp3"
    }
  ]
}
,{
  "title": "Common IP Configuration Errors (And How to Fix Them)",
  "lessons": [
    {
      "title": "❌ Wrong Subnet or Gateway",
      "content": "<div class='card'>If subnet or gateway are wrong:</div>\n<ul>\n<li>❌ Arduino connects but can’t reach internet</li>\n<li>❌ Cannot be found by other devices</li>\n<li>❌ DNS resolution fails</li>\n</ul>\n\n<div class='card'>✅ Always confirm: IP range, subnet mask, and gateway belong to the same block</div>",
      "image": "https://cdn.sparkfun.com/assets/c/9/b/2/wrong_ip_config.svg",
      "audio": "https://audio-url-host/ip-error-fix.mp3"
    },
    {
      "title": "🛠️ Diagnostic Checklist",
      "content": "<div class='card'>Run this checklist when IP-based communication fails:</div>\n<ul>\n<li>✅ <code>Serial.println(WiFi.localIP())</code></li>\n<li>✅ Check <code>WiFi.gatewayIP()</code></li>\n<li>✅ Ping from another device</li>\n<li>✅ Make sure no IP conflict exists</li>\n</ul>\n\n<div class='card'>📡 Use <code>WiFi.status()</code> to verify actual connection state</div>",
      "image": "https://cdn.sparkfun.com/assets/0/f/7/a/arduino_network_debug.svg",
      "audio": "https://audio-url-host/debug-checklist.mp3"
    }
  ]
}


  ]
},{
  title:"WiFiClient Deep Dive: Internet, APIs & Debugging for Beginners",
  modules:[
   {
  "title": "What is WiFiClient? (Final Recap & Real-World Vision)",
  "lessons": [
    {
      "title": "🌐 Meet WiFiClient Again — But Now as a Master!",
      "content": "<div class='card'>After exploring 13 powerful modules, it’s time to step back and ask again — what exactly is <code>WiFiClient</code>?</div>\n<div class='card'>In simple words: <b>WiFiClient is your Arduino’s way of talking to the internet</b>.</div>\n<div class='card'>It lets your board connect to websites, APIs, servers — and exchange data through simple code.</div>\n<div class='card'>It’s like giving your Arduino a digital mouth and ears 👂🗣️</div>",
      "image": "https://i.imgur.com/OzQJtbY.png",
      "audio": "https://audio-url-host/wificlient-recap-intro.mp3"
    },
    {
      "title": "📦 Everything WiFiClient Can Do",
      "content": "<div class='card'>By now, you’ve learned how WiFiClient can:</div>\n<ul>\n<li>🌐 Connect to websites using <code>connect()</code></li>\n<li>📤 Send data using <code>write()</code>, <code>print()</code>, and <code>println()</code></li>\n<li>📥 Read server responses using <code>read()</code> and <code>available()</code></li>\n<li>⏱️ Control timing and buffering with <code>flush()</code></li>\n<li>❌ Close connections with <code>stop()</code></li>\n<li>🔍 Check if it’s still online with <code>connected()</code></li>\n</ul>\n<div class='card'>All of this adds up to powerful web interaction — straight from your microcontroller 🔌</div>",
      "image": "https://i.imgur.com/g4KFK3E.png",
      "audio": "https://audio-url-host/wificlient-capabilities.mp3"
    },
    {
      "title": "🌟 Real Projects That Use WiFiClient",
      "content": "<div class='card'>Here’s where WiFiClient shines:</div>\n<ul>\n<li>🌦️ Weather station using live OpenWeatherMap data</li>\n<li>📈 IoT sensor logger sending data to Google Sheets</li>\n<li>⏰ Real-time clock synced with worldtimeapi.org</li>\n<li>📡 Home automation system that receives server commands</li>\n</ul>\n<div class='card'>You now have the tools to build these from scratch — no libraries, just full control 💪</div>",
      "image": "https://i.imgur.com/k1kbltB.png",
      "audio": "https://audio-url-host/wificlient-projects.mp3"
    },
    {
      "title": "🎓 What You’ve Learned in This Section",
      "content": "<div class='card'>You now understand:</div>\n<ul>\n<li>✅ How the client-server model works</li>\n<li>✅ How to send and receive HTTP data</li>\n<li>✅ How to call public APIs</li>\n<li>✅ How to handle common WiFiClient errors</li>\n<li>✅ How to debug and improve reliability</li>\n</ul>\n<div class='card'>Most Arduino users use libraries. <b>You now understand what’s under the hood</b> 🚗🔧</div>",
      "image": "https://i.imgur.com/yQVKjuF.png",
      "audio": "https://audio-url-host/wificlient-knowledge.mp3"
    },
    {
      "title": "🎮 Game: WiFiClient Power-Up Quiz",
      "content": "<div class='card'>Question: What’s the correct way to connect to an API and send a request?</div>\n<pre>\nA. client.connect(\"weather.com\", 80);\n   client.print(\"GET /data HTTP/1.1\\r\\nHost: weather.com\\r\\n\\r\\n\");\n\nB. client.connect(\"weather.com\", 443);\n   client.print(\"Hello!\");\n\nC. client.write(404);\n</pre>\n<div class='card'><input id='quizRecap' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! Option A is the valid HTTP request using WiFiClient.\")'>Submit</button></div>",
      "image": "https://i.imgur.com/FYFbNS5.png",
      "audio": "https://audio-url-host/wificlient-recap-quiz.mp3"
    },
    {
      "title": "🚀 What’s Next? Level Up!",
      "content": "<div class='card'>From here, you can explore:</div>\n<ul>\n<li>🔒 Secure connections with <code>WiFiClientSecure</code></li>\n<li>📤 Uploading data to Google Sheets or Firebase</li>\n<li>🔁 Creating your own server using <code>WiFiServer</code></li>\n<li>💬 Building a real-time messaging system using APIs</li>\n</ul>\n<div class='card'>You’ve unlocked the superpower of Arduino-to-Internet communication 🧠⚡</div>",
      "image": "https://i.imgur.com/TJUXpuM.png",
      "audio": "https://audio-url-host/wificlient-whats-next.mp3"
    }
  ]
}
 ,
    {
  "title": "What is a WiFiClient? (Beginner's Guide to Internet Communication in Arduino)",
  "lessons": [
    {
      "title": "🌐 The Internet is Made of Clients and Servers",
      "content": "<div class='card'>Every time you visit a website, your browser acts as a <b>client</b> — it connects to a <b>server</b> and requests data 📡</div>\n\n<div class='card'>Arduino can also be a <b>client</b>! With the <code>WiFiClient</code> class, your board can:</div>\n<ul>\n<li>🌍 Connect to a website</li>\n<li>📥 Download a file</li>\n<li>📤 Send sensor data to a server</li>\n</ul>\n\n<div class='card'>The server waits. The client asks. That’s how the internet works 🚀</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Client-server-model.svg/1280px-Client-server-model.svg.png",
      "audio": "https://audio-url-host/client-server-intro.mp3"
    },
    {
      "title": "💡 Meet the WiFiClient Class in Arduino",
      "content": "<div class='card'>The <code>WiFiClient</code> class is your Arduino’s <b>internet buddy</b>. It lets your board talk to other machines over TCP (Transmission Control Protocol)</div>\n\n<div class='card'>It’s like a tiny browser — but for code!</div>\n\n<div class='card'>Main features:</div>\n<ul>\n<li>🔌 Connect to a server (IP + Port)</li>\n<li>📤 Send text/data (print, write)</li>\n<li>📥 Receive replies (read, available)</li>\n<li>🛑 Close connections (stop)</li>\n</ul>\n\n<div class='card'>Use <code>WiFiClient</code> when your Arduino needs to <i>fetch data</i> or <i>push data</i> to the cloud ☁️</div>",
      "image": "https://cdn.sparkfun.com/assets/2/3/a/8/WiFiClient_overview_diagram.svg",
      "audio": "https://audio-url-host/wificlient-intro.mp3"
    },
    {
      "title": "🧠 Behind the Scenes: How WiFiClient Actually Works",
      "content": "<div class='card'>WiFiClient uses the <b>TCP protocol</b>, which ensures safe delivery of data (like a mail service that checks delivery!) 📬</div>\n\n<div class='card'>When you call <code>client.connect()</code> — your board:</div>\n<ol>\n<li>🧭 Looks up the IP address of the server</li>\n<li>🔗 Opens a TCP socket on a port (like 80 or 443)</li>\n<li>🔒 Sends & receives data in packets</li>\n</ol>\n\n<div class='card'>💥 It handles retries, confirmations, and errors in the background, so you don’t have to!</div>",
      "image": "https://cdn.sparkfun.com/assets/f/a/b/0/tcp_packet_diagram.svg",
      "audio": "https://audio-url-host/tcp-process.mp3"
    },
    {
      "title": "📘 Syntax and How to Use It in Setup()",
      "content": "<div class='card'>To use a WiFiClient, you first create an object:</div>\n<pre>\nWiFiClient client;\n</pre>\n\n<div class='card'>Then you connect like this:\n<pre>\nif (client.connect(\"example.com\", 80)) {\n  client.print(\"GET / HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n\");\n}</pre></div>\n\n<div class='card'>💡 The rest of the module series will explain all these pieces (connect, print, read, etc.) one by one in depth.</div>",
      "image": "https://cdn.sparkfun.com/assets/7/1/6/e/wificlient_setup_code_example.svg",
      "audio": "https://audio-url-host/wificlient-setup.mp3"
    },
    {
      "title": "🎮 Mini Game: Client or Server?",
      "content": "<div class='card'>You open a weather website on your Arduino using WiFiClient. What role does your Arduino play?</div>\n\n<div class='card'>\nA. Server<br>\nB. DHCP<br>\nC. Client<br>\nD. Gateway</div>\n\n<div class='card'><input id='clientQuiz' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! Your Arduino is the client. It initiates the request.\")'>Submit</button></div>",
      "image": "https://cdn.sparkfun.com/assets/e/1/a/b/client_or_server_quiz.svg",
      "audio": "https://audio-url-host/client-vs-server-quiz.mp3"
    },
    {
      "title": "💡 Real Projects That Use WiFiClient",
      "content": "<div class='card'>Here are some amazing things you can build with <code>WiFiClient</code>:</div>\n<ul>\n<li>🌤️ Weather dashboards (get data from APIs)</li>\n<li>📈 IoT data loggers (push sensor data to cloud)</li>\n<li>📱 Communicate with an Android/iOS app</li>\n<li>🖥️ Control devices via online dashboard</li>\n</ul>\n\n<div class='card'>Every IoT product starts by being a good <i>client</i> first 🔥</div>",
      "image": "https://cdn.sparkfun.com/assets/b/7/5/4/wificlient_project_usecases.svg",
      "audio": "https://audio-url-host/wificlient-projects.mp3"
    }
  ]
}
,{
  "title": "WiFiClient.connect() — How Arduino Connects to the Internet",
  "lessons": [
    {
      "title": "🔌 What Does connect() Really Do?",
      "content": "<div class='card'><code>WiFiClient.connect()</code> tells your Arduino to create a TCP connection to a server 🌍</div>\n\n<div class='card'>It’s like dialing a phone number: you give it the address (like <code>example.com</code>) and a port (like <code>80</code> for websites)</div>\n\n<div class='card'>If the server picks up — boom! You’re connected 🔗</div>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/TCP_connection_setup.svg/1280px-TCP_connection_setup.svg.png",
      "audio": "https://audio-url-host/connect-what-it-does.mp3"
    },
    {
      "title": "📘 Syntax: Two Ways to Call connect()",
      "content": "<div class='card'>You can connect using either a domain name (like <code>example.com</code>) or an IP address</div>\n\n<pre>\nWiFiClient client;\nclient.connect(\"example.com\", 80);\n</pre>\n<pre>\nIPAddress server(93, 184, 216, 34);\nclient.connect(server, 80);\n</pre>\n\n<div class='card'>Port <code>80</code> = websites (HTTP)<br>Port <code>443</code> = secure websites (HTTPS)<br>Port <code>1883</code> = MQTT, and so on...</div>",
      "image": "https://cdn.sparkfun.com/assets/6/a/0/e/wificlient_connect_syntax.svg",
      "audio": "https://audio-url-host/connect-syntax.mp3"
    },
    {
      "title": "🧠 TCP vs UDP — Why connect() Uses TCP",
      "content": "<div class='card'><b>TCP</b> guarantees delivery, order, and error checking — perfect for web communication 🌐</div>\n\n<div class='card'><b>UDP</b> is faster but riskier — good for real-time video/audio/gaming</div>\n\n<div class='card'><code>WiFiClient</code> uses TCP because:</div>\n<ul>\n<li>📦 You need reliable data</li>\n<li>📬 It checks if your message arrived</li>\n<li>🧩 It works well with HTTP APIs</li>\n</ul>\n\n<div class='card'>That’s why we use <code>client.connect()</code> — it does all the TCP handshake work for you 🤝</div>",
      "image": "https://cdn.sparkfun.com/assets/1/f/8/9/tcp_vs_udp_diagram.svg",
      "audio": "https://audio-url-host/tcp-vs-udp.mp3"
    },
    {
      "title": "🧪 Example: Connect to a Web Server",
      "content": "<div class='card'>This sketch connects to <code>example.com</code> on port 80 and prints a basic HTTP request:</div>\n<pre>\n#include <WiFi.h>\nWiFiClient client;\n\nvoid setup() {\n  Serial.begin(115200);\n  WiFi.begin(\"YourSSID\", \"YourPassword\");\n  while (WiFi.status() != WL_CONNECTED) {\n    delay(500);\n  }\n\n  if (client.connect(\"example.com\", 80)) {\n    Serial.println(\"Connected to server!\");\n    client.print(\"GET / HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n\");\n  } else {\n    Serial.println(\"Connection failed.\");\n  }\n}\n\nvoid loop() {}\n</pre>",
      "image": "https://cdn.sparkfun.com/assets/4/5/4/0/wificlient_connect_code.svg",
      "audio": "https://audio-url-host/connect-example.mp3"
    },
    {
      "title": "🎮 Game: What Does connect() Need?",
      "content": "<div class='card'>Which two things must <code>WiFiClient.connect()</code> have?</div>\n\n<div class='card'>\nA. MAC address and port<br>\nB. DNS and socket<br>\nC. Hostname/IP and port<br>\nD. Server name and loop()\n</div>\n\n<div class='card'><input id='connectQuiz' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! connect() needs a hostname or IP, and a port.\")'>Submit</button></div>",
      "image": "https://cdn.sparkfun.com/assets/d/7/9/3/connect_quiz.svg",
      "audio": "https://audio-url-host/connect-quiz.mp3"
    },
    {
      "title": "💡 When to Use connect() in Real Projects",
      "content": "<div class='card'>Use <code>connect()</code> when your Arduino must:</div>\n<ul>\n<li>🌐 Fetch live data (weather, time, sensors)</li>\n<li>🧠 Talk to your own web server/API</li>\n<li>📊 Push data to a database or cloud dashboard</li>\n<li>📱 Communicate with phone apps (as a client)</li>\n</ul>\n\n<div class='card'>It’s your entry door to the online world 🚪</div>",
      "image": "https://cdn.sparkfun.com/assets/8/9/0/0/wificlient_connect_usecases.svg",
      "audio": "https://audio-url-host/connect-usecases.mp3"
    }
  ]
}
,{
  "title": "WiFiClient.connected() — How to Check If You're Still Online",
  "lessons": [
    {
      "title": "🔌 What Is connected() Used For?",
      "content": "<div class='card'>After calling <code>client.connect()</code>, how do you know if the connection is still alive?</div>\n\n<div class='card'><b><code>client.connected()</code></b> returns <code>true</code> if the TCP connection is still active 💡</div>\n\n<div class='card'>Useful for checking before you try to <code>read()</code>, <code>write()</code>, or <code>print()</code> again.</div>\n\n<div class='card'>If it returns <code>false</code>, the remote server has closed the connection or timed out ⏱️</div>",
      "image": "https://cdn.sparkfun.com/assets/e/e/3/4/client_connected_state.svg",
      "audio": "https://audio-url-host/connected-intro.mp3"
    },
    {
      "title": "📘 Syntax and Return Type",
      "content": "<div class='card'>The method has no parameters and returns a boolean:</div>\n<pre>\nbool isOnline = client.connected();\n</pre>\n\n<div class='card'><code>true</code> = Still connected<br><code>false</code> = Disconnected or closed</div>\n\n<div class='card'>Always use this before attempting any new data transfer!</div>",
      "image": "https://cdn.sparkfun.com/assets/7/3/5/0/client_connected_syntax.svg",
      "audio": "https://audio-url-host/connected-syntax.mp3"
    },
    {
      "title": "🧠 Why Use connected()? Common Pitfalls",
      "content": "<div class='card'>Many beginners assume once a connection is made, it will stay forever 🔄</div>\n\n<div class='card'>In reality, connections often break due to:</div>\n<ul>\n<li>🌐 Server timeouts</li>\n<li>🔌 WiFi instability</li>\n<li>🧱 Router reset or DHCP change</li>\n</ul>\n\n<div class='card'>Without checking <code>connected()</code>, you might try sending data to a dead socket ⚰️</div>",
      "image": "https://cdn.sparkfun.com/assets/2/0/4/2/client_disconnected_scenarios.svg",
      "audio": "https://audio-url-host/connected-pitfalls.mp3"
    },
    {
      "title": "🧪 Example: Check Before You Read or Write",
      "content": "<div class='card'>Here’s a simple sketch using <code>connected()</code> for reliability:</div>\n<pre>\nif (client.connected()) {\n  client.print(\"GET /data HTTP/1.1\\r\\nHost: api.example.com\\r\\n\\r\\n\");\n} else {\n  Serial.println(\"⚠️ Disconnected from server. Trying to reconnect...\");\n  client.connect(\"api.example.com\", 80);\n}</pre>\n\n<div class='card'>✅ Ensures the board doesn’t crash or hang on dead sockets</div>",
      "image": "https://cdn.sparkfun.com/assets/5/9/b/7/client_connected_check_code.svg",
      "audio": "https://audio-url-host/connected-example.mp3"
    },
    {
      "title": "🎮 Game: Guess the State",
      "content": "<div class='card'>You sent data and got no response. Which of these could be true?</div>\n\n<div class='card'>\nA. client.connected() is false<br>\nB. client was never connected<br>\nC. Server closed the connection<br>\nD. All of the above\n</div>\n\n<div class='card'><input id='connectedQuiz' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! Any of those reasons might mean you're no longer connected.\")'>Submit</button></div>",
      "image": "https://cdn.sparkfun.com/assets/1/9/b/f/client_connected_quiz.svg",
      "audio": "https://audio-url-host/connected-quiz.mp3"
    },
    {
      "title": "💡 Real Project Uses of connected()",
      "content": "<div class='card'>Use <code>connected()</code> in projects like:</div>\n<ul>\n<li>📈 Reconnecting to APIs after loss</li>\n<li>📲 Mobile app-to-Arduino comms</li>\n<li>🧪 IoT dashboards that post data hourly</li>\n<li>🔄 Restarting sensors if WiFi drops</li>\n</ul>\n\n<div class='card'>💪 Smart IoT devices always check their connection before sending anything</div>",
      "image": "https://cdn.sparkfun.com/assets/6/1/3/3/client_connected_usecases.svg",
      "audio": "https://audio-url-host/connected-usecases.mp3"
    }
  ]
}
,{
  "title": "WiFiClient.print() — Sending Text Data to a Server",
  "lessons": [
    {
      "title": "🖨️ What Does print() Do in WiFiClient?",
      "content": "<div class='card'>Just like <code>Serial.print()</code> sends data to the Serial Monitor, <code>WiFiClient.print()</code> sends data to the server you’re connected to 📡</div>\n\n<div class='card'>You can use it to send:</div>\n<ul>\n<li>📄 HTTP GET or POST requests</li>\n<li>🧪 Sensor values</li>\n<li>📦 JSON strings</li>\n<li>🖐️ Any raw text you want to transmit</li>\n</ul>\n\n<div class='card'>This is how your Arduino speaks to websites!</div>",
      "image": "https://cdn.sparkfun.com/assets/f/4/b/7/wificlient_print_idea.svg",
      "audio": "https://audio-url-host/wificlient-print-intro.mp3"
    },
    {
      "title": "📘 Syntax & Usage",
      "content": "<div class='card'>Works just like <code>Serial.print()</code>:</div>\n<pre>\nWiFiClient client;\nclient.connect(\"example.com\", 80);\nclient.print(\"GET /data HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n\");\n</pre>\n\n<div class='card'>This example sends a raw HTTP request to the server on port 80</div>\n\n<div class='card'><code>\\r\\n</code> is required in HTTP — it means newline + carriage return 🔄</div>",
      "image": "https://cdn.sparkfun.com/assets/4/2/8/3/wificlient_print_syntax.svg",
      "audio": "https://audio-url-host/wificlient-print-syntax.mp3"
    },
    {
      "title": "📦 Behind the Scenes: Sending Packets",
      "content": "<div class='card'>When you call <code>print()</code>, Arduino:</div>\n<ol>\n<li>💾 Stores the text in a TCP buffer</li>\n<li>📡 Sends that buffer over the WiFi network</li>\n<li>📬 Waits for the server to respond</li>\n</ol>\n\n<div class='card'>TCP ensures the packet arrives safely in order 💌</div>\n\n<div class='card'>If the connection is dropped mid-transfer, data may be lost — always check <code>connected()</code> before!</div>",
      "image": "https://cdn.sparkfun.com/assets/0/a/7/1/wificlient_tcp_packetflow.svg",
      "audio": "https://audio-url-host/print-how-it-works.mp3"
    },
    {
      "title": "🧪 Real Arduino Code Example",
      "content": "<div class='card'>Here’s how to use <code>print()</code> to send an HTTP request with a sensor reading:</div>\n<pre>\nWiFiClient client;\nfloat temperature = 24.6;\n\nif (client.connect(\"example.com\", 80)) {\n  client.print(\"GET /log?temp=\");\n  client.print(temperature);\n  client.print(\" HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n\");\n}</pre>\n\n<div class='card'>💡 This sends the sensor data to a web server via a GET request</div>",
      "image": "https://cdn.sparkfun.com/assets/b/6/f/a/wificlient_print_temp_code.svg",
      "audio": "https://audio-url-host/print-example.mp3"
    },
    {
      "title": "🎮 Game: Will It Work?",
      "content": "<div class='card'>Which of these <b>must</b> come at the end of an HTTP header?</div>\n\n<div class='card'>\nA. <code>\\n</code><br>\nB. <code>\\r</code><br>\nC. <code>\\n\\n</code><br>\nD. <code>\\r\\n\\r\\n</code>\n</div>\n\n<div class='card'><input id='printQuiz' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! HTTP requests end with \\r\\n\\r\\n to separate headers from the body.\")'>Submit</button></div>",
      "image": "https://cdn.sparkfun.com/assets/e/4/6/3/print_rn_game.svg",
      "audio": "https://audio-url-host/print-game.mp3"
    },
    {
      "title": "💡 When to Use WiFiClient.print() in Projects",
      "content": "<div class='card'>Use <code>print()</code> when you want to:</div>\n<ul>\n<li>🌡️ Send sensor data to an API</li>\n<li>📈 Push values to a database or dashboard</li>\n<li>💬 Talk to a text-based server</li>\n<li>🎮 Control remote devices with HTTP commands</li>\n</ul>\n\n<div class='card'>It’s the go-to method for writing text to servers ✍️</div>",
      "image": "https://cdn.sparkfun.com/assets/9/7/7/3/print_usecases_project_diagram.svg",
      "audio": "https://audio-url-host/print-usecases.mp3"
    }
  ]
}
,{
  "title": "WiFiClient.println() — Sending Lines with Auto Line Breaks",
  "lessons": [
    {
      "title": "🖨️ What Does println() Do?",
      "content": "<div class='card'><code>WiFiClient.println()</code> sends data to a server just like <code>print()</code> — <b>but it adds a line break at the end</b> 🧵</div>\n\n<div class='card'>Specifically, it appends <code>\\r\\n</code> — which is how the internet marks line ends 🌐</div>\n\n<div class='card'>Great for sending formatted commands, headers, or logs line-by-line!</div>",
      "image": "https://cdn.sparkfun.com/assets/c/2/8/4/wificlient_println_linebreaks.svg",
      "audio": "https://audio-url-host/println-intro.mp3"
    },
    {
      "title": "📘 Syntax: Just Like print(), But Cleaner",
      "content": "<div class='card'>Use <code>println()</code> when you want to send a full line and move to the next one automatically:</div>\n<pre>\nclient.println(\"GET / HTTP/1.1\");\nclient.println(\"Host: example.com\");\nclient.println(); // Empty line ends HTTP request\n</pre>\n\n<div class='card'><b>Why use it?</b> Less typing! You don’t have to manually add <code>\\r\\n</code> to each string.</div>",
      "image": "https://cdn.sparkfun.com/assets/f/1/3/9/wificlient_println_syntax.svg",
      "audio": "https://audio-url-host/println-syntax.mp3"
    },
    {
      "title": "🔍 print() vs println() — What’s the Difference?",
      "content": "<div class='card'>Let’s compare:</div>\n<table>\n<tr><th>Function</th><th>What It Sends</th></tr>\n<tr><td><code>print(\"Hello\")</code></td><td><code>Hello</code></td></tr>\n<tr><td><code>println(\"Hello\")</code></td><td><code>Hello\\r\\n</code></td></tr>\n</table>\n\n<div class='card'><b>println()</b> is useful when communicating with:</div>\n<ul>\n<li>🧠 Text-based servers (like Telnet)</li>\n<li>🌍 Web servers expecting properly terminated headers</li>\n<li>🪵 Logging servers or serial bridges</li>\n</ul>",
      "image": "https://cdn.sparkfun.com/assets/7/c/b/e/print-vs-println-comparison.svg",
      "audio": "https://audio-url-host/print-vs-println.mp3"
    },
    {
      "title": "🧪 Example: Use println() for HTTP Headers",
      "content": "<div class='card'>Here’s how to use <code>println()</code> to send an HTTP request more cleanly:</div>\n<pre>\nif (client.connect(\"example.com\", 80)) {\n  client.println(\"GET /data HTTP/1.1\");\n  client.println(\"Host: example.com\");\n  client.println(\"Connection: close\");\n  client.println(); // Important! Ends the request\n}</pre>\n\n<div class='card'>👀 Notice how easy this is without typing <code>\\r\\n</code> every time!</div>",
      "image": "https://cdn.sparkfun.com/assets/1/2/c/4/println_http_example.svg",
      "audio": "https://audio-url-host/println-example.mp3"
    },
    {
      "title": "🎮 Game: Which One is Right?",
      "content": "<div class='card'>You’re sending an HTTP request. Which line properly ends the headers?</div>\n\n<div class='card'>\nA. <code>client.print(\"\\n\")</code><br>\nB. <code>client.print(\"\\r\\n\")</code><br>\nC. <code>client.println()</code><br>\nD. <code>client.stop()</code>\n</div>\n\n<div class='card'><input id='printlnQuiz' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! println() sends \\r\\n automatically — perfect for ending HTTP headers.\")'>Submit</button></div>",
      "image": "https://cdn.sparkfun.com/assets/3/2/4/e/println_game_quiz.svg",
      "audio": "https://audio-url-host/println-game.mp3"
    },
    {
      "title": "💡 println() in Real IoT Applications",
      "content": "<div class='card'>Use <code>println()</code> in projects like:</div>\n<ul>\n<li>🌦️ Weather sensors posting data to cloud</li>\n<li>📡 IoT devices sending HTTP GET requests</li>\n<li>🧪 Diagnostic logs to a text-based server</li>\n<li>📨 Sending commands to custom APIs</li>\n</ul>\n\n<div class='card'>✅ Faster and cleaner than <code>print()</code> when you're sending structured, line-based data</div>",
      "image": "https://cdn.sparkfun.com/assets/c/e/b/a/println_project_usecases.svg",
      "audio": "https://audio-url-host/println-usecases.mp3"
    }
  ]
}
,{
  "title": "WiFiClient.available() — Is There Data to Read?",
  "lessons": [
    {
      "title": "📥 What Does available() Do?",
      "content": "<div class='card'><code>WiFiClient.available()</code> checks if there's any data received from the server that hasn’t been read yet 👀</div>\n\n<div class='card'>It’s like peeking into your mailbox 📫\n<ul><li>📦 If there’s mail: it returns a number > 0</li>\n<li>❌ If empty: it returns 0</li></ul></div>\n\n<div class='card'>It helps you decide: <b>Should I call read() now?</b></div>",
      "image": "https://cdn.sparkfun.com/assets/b/5/6/9/available_mailbox_check.svg",
      "audio": "https://audio-url-host/available-intro.mp3"
    },
    {
      "title": "📘 Syntax & Return Value",
      "content": "<div class='card'>Simple to use and doesn’t need any parameters:</div>\n<pre>\nint bytes = client.available();\n</pre>\n\n<div class='card'>If <code>bytes > 0</code>, there is something ready to be read!</div>\n\n<div class='card'>💡 Great for non-blocking reads — it prevents your sketch from freezing if there's no data yet.</div>",
      "image": "https://cdn.sparkfun.com/assets/c/b/2/e/wificlient_available_syntax.svg",
      "audio": "https://audio-url-host/available-syntax.mp3"
    },
    {
      "title": "🧠 Why available() Is Crucial",
      "content": "<div class='card'>Imagine calling <code>client.read()</code> when nothing has arrived yet 📭</div>\n\n<div class='card'>You’d either get <code>-1</code> (no data), or your code might block (wait forever!) ⏳</div>\n\n<div class='card'>That’s why <b>smart code always checks <code>available()</code> first</b> — especially when working with APIs or sensors that respond slowly.</div>",
      "image": "https://cdn.sparkfun.com/assets/d/1/f/4/available_checking_warning.svg",
      "audio": "https://audio-url-host/available-warning.mp3"
    },
    {
      "title": "🧪 Example: Use available() With read()",
      "content": "<div class='card'>Here’s a simple sketch that reads server replies character-by-character:</div>\n<pre>\nif (client.available() > 0) {\n  char c = client.read();\n  Serial.print(c);\n}</pre>\n\n<div class='card'>Wrap this in <code>loop()</code> and you can continuously read from the server, as soon as new data arrives ✅</div>",
      "image": "https://cdn.sparkfun.com/assets/8/6/3/f/wificlient_available_code_example.svg",
      "audio": "https://audio-url-host/available-example.mp3"
    },
    {
      "title": "🎮 Game: What Happens If You Skip available()?",
      "content": "<div class='card'>You call <code>client.read()</code> before checking <code>available()</code>. What might happen?</div>\n\n<div class='card'>\nA. It always works instantly<br>\nB. Arduino may freeze/wait forever<br>\nC. You’ll get -1 or garbage data<br>\nD. B and C\n</div>\n\n<div class='card'><input id='availableQuiz' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! Without checking available(), you might get -1 or block your code.\")'>Submit</button></div>",
      "image": "https://cdn.sparkfun.com/assets/5/1/9/8/available_game_quiz.svg",
      "audio": "https://audio-url-host/available-quiz.mp3"
    },
    {
      "title": "💡 When to Use available() in Real Projects",
      "content": "<div class='card'>Use <code>available()</code> in:</div>\n<ul>\n<li>📬 Reading replies from a web server</li>\n<li>📡 Decoding incoming messages (like JSON or CSV)</li>\n<li>🛑 Avoiding blocking loops that freeze your UI</li>\n<li>🎮 Real-time control panels or dashboards</li>\n</ul>\n\n<div class='card'>💪 It’s one of the most important checks before reading anything from a connection.</div>",
      "image": "https://cdn.sparkfun.com/assets/f/f/4/c/available_real_projects.svg",
      "audio": "https://audio-url-host/available-usecases.mp3"
    }
  ]
}
,{
  "title": "WiFiClient.read() — Receiving Data from a Server",
  "lessons": [
    {
      "title": "📥 What Is read() and What Does It Do?",
      "content": "<div class='card'>After you send a request to a server using <code>client.print()</code> or <code>client.println()</code>, the server usually replies 📡</div>\n\n<div class='card'><code>WiFiClient.read()</code> reads <b>one byte at a time</b> from the response buffer 🧱</div>\n\n<div class='card'>It’s like reading one letter at a time from a message 📜</div>",
      "image": "https://cdn.sparkfun.com/assets/e/7/4/6/wificlient_read_byte_flow.svg",
      "audio": "https://audio-url-host/wificlient-read-intro.mp3"
    },
    {
      "title": "📘 Syntax: Simple but Powerful",
      "content": "<div class='card'><code>int byte = client.read();</code></div>\n\n<div class='card'>- If data is available: returns the next byte (0–255)<br>- If no data: returns <code>-1</code></div>\n\n<div class='card'>💡 Always use <code>client.available()</code> before calling <code>read()</code>, to avoid getting <code>-1</code></div>",
      "image": "https://cdn.sparkfun.com/assets/a/4/e/2/wificlient_read_syntax.svg",
      "audio": "https://audio-url-host/wificlient-read-syntax.mp3"
    },
    {
      "title": "📦 Reading Full Server Replies",
      "content": "<div class='card'>Reading one byte at a time is slow — so use a loop to build a full response string 🧩</div>\n<pre>\nString reply = \"\";\nwhile (client.available()) {\n  char c = client.read();\n  reply += c;\n}\nSerial.println(reply);\n</pre>\n\n<div class='card'>💡 This reads the entire response until there's no data left</div>",
      "image": "https://cdn.sparkfun.com/assets/5/c/8/a/read_loop_response.svg",
      "audio": "https://audio-url-host/read-loop-example.mp3"
    },
    {
      "title": "🧪 Example: Full Read After Sending GET",
      "content": "<div class='card'>Here's a real Arduino sketch:</div>\n<pre>\nclient.print(\"GET / HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n\");\n\nwhile (client.connected()) {\n  while (client.available()) {\n    char c = client.read();\n    Serial.write(c);\n  }\n}</pre>\n\n<div class='card'>💡 This displays the HTTP response from the server line-by-line on the Serial Monitor</div>",
      "image": "https://cdn.sparkfun.com/assets/6/0/1/1/read_serial_example.svg",
      "audio": "https://audio-url-host/read-serial-example.mp3"
    },
    {
      "title": "🎮 Game: Decode the Server",
      "content": "<div class='card'>If <code>client.read()</code> returns <code>-1</code>, what does it mean?</div>\n\n<div class='card'>\nA. The WiFi is off<br>\nB. The server is down<br>\nC. No data is available right now<br>\nD. You typed something wrong\n</div>\n\n<div class='card'><input id='readQuiz' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! -1 means there's nothing in the buffer to read yet.\")'>Submit</button></div>",
      "image": "https://cdn.sparkfun.com/assets/4/b/6/8/read_quiz_visual.svg",
      "audio": "https://audio-url-host/read-quiz.mp3"
    },
    {
      "title": "💡 When to Use read() in Real Projects",
      "content": "<div class='card'>You’ll use <code>read()</code> in all sorts of real-world scenarios:</div>\n<ul>\n<li>🌐 Parsing HTTP responses from web APIs</li>\n<li>📨 Reading remote commands sent by another device</li>\n<li>🧪 Decoding sensor data sent over WiFi</li>\n<li>🔐 Reading tokens, keys, or status codes</li>\n</ul>\n\n<div class='card'>✅ It’s the bridge that lets Arduino receive info from the internet 🛰️</div>",
      "image": "https://cdn.sparkfun.com/assets/b/3/1/9/read_real_world_apps.svg",
      "audio": "https://audio-url-host/read-real-usecases.mp3"
    }
  ]
}
,{
  "title": "WiFiClient.flush() — Clear the Output Buffer",
  "lessons": [
    {
      "title": "🧹 What Does flush() Actually Do?",
      "content": "<div class='card'><code>client.flush()</code> is used to make sure all data you've written gets pushed out through the connection ✉️➡️</div>\n\n<div class='card'>It clears (or <i>flushes</i>) the outgoing write buffer — <b>not the incoming data</b></div>\n\n<div class='card'>✅ Used after <code>print()</code>, <code>write()</code>, or <code>println()</code> when you want to be 100% sure the data has left your Arduino</div>",
      "image": "https://cdn.sparkfun.com/assets/4/4/c/7/flush_buffer_pipe.svg",
      "audio": "https://audio-url-host/flush-intro.mp3"
    },
    {
      "title": "📘 Syntax and What It Returns",
      "content": "<div class='card'>Syntax is simple — it takes no arguments:</div>\n<pre>\nclient.flush();\n</pre>\n\n<div class='card'>It returns <code>void</code> (nothing)</div>\n\n<div class='card'>Call it <b>after sending data</b>, especially in time-sensitive apps like real-time control or logging 📈</div>",
      "image": "https://cdn.sparkfun.com/assets/2/6/a/3/flush_code.svg",
      "audio": "https://audio-url-host/flush-syntax.mp3"
    },
    {
      "title": "🧠 Do You Always Need It?",
      "content": "<div class='card'>Not always! Arduino automatically sends the data pretty quickly after <code>print()</code> or <code>write()</code> ✅</div>\n\n<div class='card'><b>But you should use <code>flush()</code>:</b>\n<ul>\n<li>Before closing the connection with <code>stop()</code></li>\n<li>When streaming data to avoid truncation</li>\n<li>When debugging why no data is received</li>\n</ul></div>",
      "image": "https://cdn.sparkfun.com/assets/7/f/5/a/flush_optional_usecases.svg",
      "audio": "https://audio-url-host/flush-usecases.mp3"
    },
    {
      "title": "🧪 Example: Print, Flush, Then Stop",
      "content": "<div class='card'>Here’s a reliable communication pattern:</div>\n<pre>\nclient.print(\"GET /api/data HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n\");\nclient.flush();\nclient.stop();</pre>\n\n<div class='card'>💡 This guarantees the data is pushed before disconnecting ⚠️</div>",
      "image": "https://cdn.sparkfun.com/assets/f/8/c/9/flush_then_stop.svg",
      "audio": "https://audio-url-host/flush-example.mp3"
    },
    {
      "title": "🎮 Game: Should You Flush?",
      "content": "<div class='card'>You just sent a temperature reading to your cloud API. Before calling <code>client.stop()</code>, should you flush?</div>\n\n<div class='card'>\nA. Yes, always flush before stopping<br>\nB. No, it's automatic<br>\nC. Only if you're paranoid<br>\nD. Depends on the size of the data\n</div>\n\n<div class='card'><input id='flushQuiz' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! It's safest to flush before stopping to ensure full delivery.\")'>Submit</button></div>",
      "image": "https://cdn.sparkfun.com/assets/1/f/a/2/flush_game_quiz.svg",
      "audio": "https://audio-url-host/flush-quiz.mp3"
    },
    {
      "title": "💡 When to Use flush() in Real Projects",
      "content": "<div class='card'>Use <code>flush()</code> in projects like:</div>\n<ul>\n<li>📊 Remote data logging (so logs aren't lost)</li>\n<li>📡 Real-time sensor streaming to dashboards</li>\n<li>📬 Sending structured protocols where timing matters</li>\n<li>⏱️ Devices that wake, send, and sleep immediately</li>\n</ul>\n\n<div class='card'>🧠 It’s your last chance to <i>guarantee</i> delivery before closing the line</div>",
      "image": "https://cdn.sparkfun.com/assets/c/d/9/3/flush_project_cases.svg",
      "audio": "https://audio-url-host/flush-real-projects.mp3"
    }
  ]
}
,{
  "title": "WiFiClient.stop() — Safely Ending a Connection",
  "lessons": [
    {
      "title": "🛑 What Does stop() Do?",
      "content": "<div class='card'><code>WiFiClient.stop()</code> ends your connection with a server 📴</div>\n\n<div class='card'>Once called, you can no longer send or receive data with that <code>client</code> object.</div>\n\n<div class='card'>✅ It also frees up system resources — like sockets, memory, and WiFi handles.</div>\n\n<div class='card'>💡 Think of it as hanging up a call after you're done talking! ☎️</div>",
      "image": "https://cdn.sparkfun.com/assets/stop-call-drop.svg",
      "audio": "https://audio-url-host/wificlient-stop-intro.mp3"
    },
    {
      "title": "📘 Syntax and Return",
      "content": "<div class='card'>It’s very straightforward:</div>\n<pre>\nclient.stop();\n</pre>\n\n<div class='card'>This method returns nothing. But after calling it, your client object becomes disconnected.</div>\n\n<div class='card'>⚠️ Any attempt to <code>print()</code>, <code>read()</code> or <code>available()</code> after <code>stop()</code> will fail.</div>",
      "image": "https://cdn.sparkfun.com/assets/client-stop-syntax.svg",
      "audio": "https://audio-url-host/wificlient-stop-syntax.mp3"
    },
    {
      "title": "🧠 Why stop() Is Important",
      "content": "<div class='card'>Arduino has limited network sockets 🧠</div>\n\n<div class='card'>If you don’t call <code>stop()</code>, the connection might stay open, using memory and preventing new ones.</div>\n\n<div class='card'>💡 Always call <code>stop()</code> when you're done — especially in <b>loop()</b> or when dealing with many requests.</div>",
      "image": "https://cdn.sparkfun.com/assets/memory-leak-sockets.svg",
      "audio": "https://audio-url-host/stop-why-important.mp3"
    },
    {
      "title": "🧪 Example: Send, Stop, Repeat",
      "content": "<div class='card'>Here’s a loop that connects to a server, sends a request, reads the response, and ends the session:</div>\n<pre>\nif (client.connect(\"example.com\", 80)) {\n  client.println(\"GET / HTTP/1.1\");\n  client.println(\"Host: example.com\");\n  client.println();\n\n  while (client.available()) {\n    Serial.write(client.read());\n  }\n\n  client.stop();\n}</pre>\n\n<div class='card'>✅ Connection is opened and closed cleanly. Good networking hygiene!</div>",
      "image": "https://cdn.sparkfun.com/assets/client-stop-fullflow.svg",
      "audio": "https://audio-url-host/stop-full-example.mp3"
    },
    {
      "title": "🎮 Game: What If You Don’t Stop?",
      "content": "<div class='card'>What happens if you forget to call <code>stop()</code>?</div>\n\n<div class='card'>\nA. Nothing at all<br>\nB. Your ESP/Arduino may crash later<br>\nC. It works better without stop<br>\nD. The client reconnects automatically\n</div>\n\n<div class='card'><input id='stopQuiz' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! Not calling stop() may crash your board due to memory or socket leaks.\")'>Submit</button></div>",
      "image": "https://cdn.sparkfun.com/assets/game-sockets-leak.svg",
      "audio": "https://audio-url-host/stop-game.mp3"
    },
    {
      "title": "💡 Real Use Cases for stop()",
      "content": "<div class='card'>Use <code>stop()</code> in:</div>\n<ul>\n<li>📈 Data loggers that upload once per loop</li>\n<li>📮 POST/GET once, then sleep</li>\n<li>📡 WiFi sensors that talk to a server every few seconds</li>\n<li>🎮 Web control projects where a command finishes the job</li>\n</ul>\n\n<div class='card'>✅ Always end cleanly — it’s good practice in both embedded and real-world internet systems.</div>",
      "image": "https://cdn.sparkfun.com/assets/usecases-stop.svg",
      "audio": "https://audio-url-host/stop-usecases.mp3"
    }
  ]
}
,{
  "title": "WiFiClient.connected() — Is the Client Still Online?",
  "lessons": [
    {
      "title": "🔌 What Does connected() Do?",
      "content": "<div class='card'><code>WiFiClient.connected()</code> checks if the client is still connected to the server ✅</div>\n\n<div class='card'>It’s your way of asking: “Am I still in touch with the server?” 🧠</div>\n\n<div class='card'>Returns <code>true</code> if the connection is alive, <code>false</code> if closed or disconnected.</div>",
      "image": "https://cdn.sparkfun.com/assets/wificlient_connected_heartbeat.svg",
      "audio": "https://audio-url-host/connected-intro.mp3"
    },
    {
      "title": "📘 Syntax & Return Type",
      "content": "<div class='card'>Syntax is very straightforward:</div>\n<pre>\nbool online = client.connected();\n</pre>\n\n<div class='card'>Returns a <code>boolean</code> (true/false).</div>\n\n<div class='card'>Use it in loops or before sending/reading to ensure your connection is still alive 🔍</div>",
      "image": "https://cdn.sparkfun.com/assets/connected_syntax_return.svg",
      "audio": "https://audio-url-host/connected-syntax.mp3"
    },
    {
      "title": "🧠 Why It Matters: Avoid Sending to a Dead Connection",
      "content": "<div class='card'>If you send data on a dead connection, it might fail silently — or cause bugs 🐛</div>\n\n<div class='card'>Checking <code>connected()</code> helps keep your communication clean, especially if your sketch runs for long hours or needs reliability ✅</div>\n\n<div class='card'>💡 Great for reconnecting logic, error handling, and debugging tricky server drops</div>",
      "image": "https://cdn.sparkfun.com/assets/connected_safecheck.svg",
      "audio": "https://audio-url-host/connected-safety.mp3"
    },
    {
      "title": "🧪 Example: Auto Reconnect Logic",
      "content": "<div class='card'>Here's a sketch that reconnects automatically if the connection is lost:</div>\n<pre>\nif (!client.connected()) {\n  Serial.println(\"Reconnecting...\");\n  client.connect(\"example.com\", 80);\n}</pre>\n\n<div class='card'>💡 Use this pattern to make robust long-running systems 🌐</div>",
      "image": "https://cdn.sparkfun.com/assets/connected_autoreconnect.svg",
      "audio": "https://audio-url-host/connected-example.mp3"
    },
    {
      "title": "🎮 Game: True or False?",
      "content": "<div class='card'>You call <code>connected()</code> and it returns <code>false</code>. What does it mean?</div>\n\n<div class='card'>\nA. The server disconnected you<br>\nB. Timeout occurred<br>\nC. The internet went out<br>\nD. Any of the above\n</div>\n\n<div class='card'><input id='connectedQuiz' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! All of the above can cause connected() to return false.\")'>Submit</button></div>",
      "image": "https://cdn.sparkfun.com/assets/connected_quiz_logic.svg",
      "audio": "https://audio-url-host/connected-quiz.mp3"
    },
    {
      "title": "💡 Where to Use connected() in Projects",
      "content": "<div class='card'>Use <code>connected()</code> in:</div>\n<ul>\n<li>📡 Long-running IoT apps</li>\n<li>🔁 Auto-reconnect loops</li>\n<li>📬 Messaging clients (MQTT, REST)</li>\n<li>📈 Remote data monitors</li>\n</ul>\n\n<div class='card'>✅ It’s your watchdog — always keeping you connected 💼</div>",
      "image": "https://cdn.sparkfun.com/assets/connected_real_world.svg",
      "audio": "https://audio-url-host/connected-usecases.mp3"
    }
  ]
}
,{
  "title": "What is an API? — Arduino Meets the Internet",
  "lessons": [
    {
      "title": "🌐 What Is an API, Really?",
      "content": "<div class='card'>API stands for <b>Application Programming Interface</b>.</div>\n<div class='card'>It’s like a menu card in a restaurant 🧾 — it tells your Arduino what services are available from a web server, and how to ask for them.</div>\n<div class='card'>Example: An API might let you ask a weather server: “What’s the temperature in Mumbai?” — and you’ll get a reply like <code>{\"temp\": 32}</code></div>\n<div class='card'>APIs let your Arduino talk to powerful internet services in real-time — from weather to messaging, and beyond 🌍</div>",
      "image": "https://i.imgur.com/YtrmwkQ.png",
      "audio": "https://audio-url-host/api-what-is-it.mp3"
    },
    {
      "title": "🔁 Request & Response: The Basic API Flow",
      "content": "<div class='card'><b>1. Your Arduino sends a request</b> using <code>client.print()</code> to the server’s API URL.</div>\n<div class='card'><b>2. The server receives your request</b> and prepares the data you asked for.</div>\n<div class='card'><b>3. The server sends back a response</b> — often in <b>JSON</b> format.</div>\n<div class='card'><b>4. Your Arduino reads it using <code>client.read()</code></b> and decodes the result 🎯</div>\n<div class='card'>Example: You hit an API that gives time data, and the reply is:\n<pre>{ \"time\": \"18:47:00\", \"timezone\": \"IST\" }</pre></div>",
      "image": "https://i.imgur.com/ff49t7U.png",
      "audio": "https://audio-url-host/api-flow.mp3"
    },
    {
      "title": "📬 Real API Example: OpenWeatherMap",
      "content": "<div class='card'>Let’s say we want to get current weather on our Arduino.</div>\n<div class='card'>Here’s a real OpenWeather API URL:\n<pre>http://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=YOUR_API_KEY</pre></div>\n<div class='card'>You’ll use <code>client.print()</code> to send this as a GET request.</div>\n<div class='card'>The server replies with JSON data like:\n<pre>{ \"main\": { \"temp\": 304.15 }, \"name\": \"Mumbai\" }</pre></div>\n<div class='card'>Then you parse that data and display it on an LCD or serial monitor.</div>",
      "image": "https://i.imgur.com/jEG6BbZ.png",
      "audio": "https://audio-url-host/api-weather-example.mp3"
    },
    {
      "title": "🧠 What’s JSON? And Why Do APIs Use It?",
      "content": "<div class='card'><b>JSON = JavaScript Object Notation</b>. It’s a lightweight, easy-to-read data format used by most APIs 🧾</div>\n<div class='card'>A JSON response looks like this:\n<pre>{ \"city\": \"Delhi\", \"humidity\": 82 }</pre></div>\n<div class='card'>Your Arduino code must extract these values using string manipulation or a JSON library 🛠️</div>\n<div class='card'>JSON is easy to parse, human-readable, and works great over WiFi</div>",
      "image": "https://i.imgur.com/5Yy6mPw.png",
      "audio": "https://audio-url-host/api-json-explained.mp3"
    },
    {
      "title": "🛠️ Arduino Sketch: Calling an API",
      "content": "<div class='card'>Let’s say you want to call the time API:</div>\n<pre>\nclient.print(\"GET /api/time HTTP/1.1\\r\\n\");\nclient.print(\"Host: worldtimeapi.org\\r\\n\\r\\n\");\nwhile (client.available()) {\n  char c = client.read();\n  Serial.print(c);\n}\n</pre>\n<div class='card'>This code sends a request to the time server, and prints the JSON reply on Serial Monitor 💻</div>\n<div class='card'>You can extend this to extract specific values and use them in your project (e.g., setting an RTC)</div>",
      "image": "https://i.imgur.com/DOlZpsE.png",
      "audio": "https://audio-url-host/api-code-example.mp3"
    },
    {
      "title": "🎮 Game: What Happens When You Use an API?",
      "content": "<div class='card'>You send a request to <code>api.example.com/data</code>. What will you likely receive?</div>\n<div class='card'>\nA. A string of emojis 😎<br>\nB. An error message from your Arduino<br>\nC. JSON data like <code>{ \"value\": 42 }</code><br>\nD. The Arduino will explode 💥\n</div>\n<div class='card'><input id='apiGame' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! Most APIs reply with JSON-formatted data.\")'>Submit</button></div>",
      "image": "https://i.imgur.com/ZX1Wlnx.png",
      "audio": "https://audio-url-host/api-quiz.mp3"
    },
    {
      "title": "💡 Real Use Cases for APIs in Arduino",
      "content": "<div class='card'>APIs unlock powerful capabilities in your Arduino projects. Here are some ideas:</div>\n<ul>\n<li>⛅ Display weather and forecasts from the internet</li>\n<li>🕒 Auto-sync time using a world clock API</li>\n<li>🔐 Control devices based on cloud messages (IoT)</li>\n<li>💬 Send Telegram or WhatsApp alerts via APIs</li>\n<li>🧠 Use ChatGPT-like AI tools to process sensor data</li>\n</ul>\n<div class='card'>💥 APIs = Superpowers for your Arduino 🚀</div>",
      "image": "https://i.imgur.com/s3y43Vb.png",
      "audio": "https://audio-url-host/api-usecases.mp3"
    },
    {
      "title": "🎓 Recap: What You Learned",
      "content": "<div class='card'>✅ API is how Arduino talks to web services<br>✅ You send a request, get a response<br>✅ Most APIs return JSON<br>✅ Use <code>WiFiClient</code> methods to send/receive<br>✅ APIs open up real-world data in your embedded projects</div>\n<div class='card'>Next, we’ll learn about the <b>Client-Server model</b> — and how Arduino fits into it 🔄</div>",
      "image": "https://i.imgur.com/84wQyFb.png",
      "audio": "https://audio-url-host/api-recap.mp3"
    }
  ]
}
,{
  "title": "How Client–Server Communication Works — Arduino’s Internet Journey",
  "lessons": [
    {
      "title": "🧠 What’s a Client and What’s a Server?",
      "content": "<div class='card'>In networking, a <b>client</b> is the device that <b>makes a request</b>.</div>\n<div class='card'>A <b>server</b> is the machine that <b>listens for requests</b> and sends back a reply 📨</div>\n<div class='card'>Your Arduino, using <code>WiFiClient</code>, acts as the client. It connects to a website or API (the server), asks for data, and waits for a response 📡</div>\n<div class='card'>💡 Think of it like ordering food — you’re the client, the waiter is the server.</div>",
      "image": "https://i.imgur.com/ZLgsZwL.png",
      "audio": "https://audio-url-host/client-server-intro.mp3"
    },
    {
      "title": "🌐 Step-by-Step: What Happens When Arduino Connects",
      "content": "<div class='card'>Here’s what really happens inside your sketch when you use <code>client.connect()</code>:</div>\n<ol>\n<li>🔍 DNS is resolved (e.g., api.openweathermap.org ➝ IP)</li>\n<li>🔌 Arduino opens a TCP connection to the server IP</li>\n<li>📨 You send a GET or POST request (e.g., for weather)</li>\n<li>🖥️ Server processes it and replies with data (like JSON)</li>\n<li>📥 Arduino reads it byte-by-byte using <code>read()</code></li>\n<li>📴 When done, you call <code>stop()</code> to end the session</li>\n</ol>\n<div class='card'>💬 All of this usually happens in milliseconds!</div>",
      "image": "https://i.imgur.com/HD9Qxk3.png",
      "audio": "https://audio-url-host/client-server-flow.mp3"
    },
    {
      "title": "📦 What is TCP, and Why Do We Use It?",
      "content": "<div class='card'>TCP stands for <b>Transmission Control Protocol</b></div>\n<div class='card'>It ensures data is delivered <b>completely and in order</b>. It's like sending a document via courier and getting confirmation it was received ✉️✅</div>\n<div class='card'>Arduino uses TCP for most API and internet interactions via <code>WiFiClient</code> — not UDP.</div>\n<div class='card'>💡 TCP makes sure your messages to the server aren’t lost, jumbled, or incomplete.</div>",
      "image": "https://i.imgur.com/9SzogkP.png",
      "audio": "https://audio-url-host/tcp-explained.mp3"
    },
    {
      "title": "🔐 What is a Port?",
      "content": "<div class='card'>Every server has an IP address — like a house 🏠</div>\n<div class='card'>Ports are like room numbers inside that house — different services live on different ports.</div>\n<div class='card'>Common ports:<br>🌐 HTTP → Port 80<br>🔒 HTTPS → Port 443<br>📨 SMTP → Port 25</div>\n<div class='card'>When you use <code>client.connect(\"example.com\", 80)</code>, you’re calling the HTTP room 🔔</div>",
      "image": "https://i.imgur.com/5MCzlmf.png",
      "audio": "https://audio-url-host/ports-explained.mp3"
    },
    {
      "title": "🧪 Visual Example: Full Arduino to API Call",
      "content": "<div class='card'>Let’s say you want to get the time from an API:</div>\n<pre>\nclient.connect(\"worldtimeapi.org\", 80);\nclient.println(\"GET /api/timezone/Asia/Kolkata HTTP/1.1\");\nclient.println(\"Host: worldtimeapi.org\");\nclient.println();</pre>\n<div class='card'>This sends the request → server replies → you read it.\nYou’re a client, server’s the waiter, and JSON is the menu card 📜</div>",
      "image": "https://i.imgur.com/utGeQGj.png",
      "audio": "https://audio-url-host/full-api-call.mp3"
    },
    {
      "title": "🎮 Game: Who’s the Client?",
      "content": "<div class='card'>Which device is the client in this scenario?</div>\n<div class='card'>Your Arduino connects to api.sunrise-sunset.org to get sunrise time ⛅</div>\n<div class='card'>\nA. The API server<br>\nB. Arduino<br>\nC. WiFi router<br>\nD. JSON\n</div>\n<div class='card'><input id='clientQuiz' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! Arduino is the client because it initiates the request.\")'>Submit</button></div>",
      "image": "https://i.imgur.com/4LPhhvf.png",
      "audio": "https://audio-url-host/client-server-quiz.mp3"
    },
    {
      "title": "💡 Where You’ll See This In Real Projects",
      "content": "<div class='card'>The client-server model is everywhere:</div>\n<ul>\n<li>📱 When your Arduino sends data to Google Sheets</li>\n<li>⏰ Fetching live time from a world clock API</li>\n<li>📈 Sending sensor data to cloud dashboards</li>\n<li>📬 Receiving messages from home automation systems</li>\n</ul>\n<div class='card'>You are now ready to understand <i>how the internet works</i> from your Arduino 🔥</div>",
      "image": "https://i.imgur.com/f8qNZCu.png",
      "audio": "https://audio-url-host/client-server-usecases.mp3"
    }
  ]
}
,{
  "title": "Why WiFiClient Fails (And How to Fix It)",
  "lessons": [
    {
      "title": "😬 Why WiFiClient Sometimes Just... Doesn’t Work",
      "content": "<div class='card'>You wrote the code perfectly, but your Arduino isn’t getting a response? Or <code>client.connect()</code> keeps returning <code>false</code>?</div>\n<div class='card'>Don’t panic 😅 — WiFiClient is powerful, but it depends on several external things like your router, DNS, server response time, and more.</div>\n<div class='card'>Let’s break it down step by step so you can confidently debug these issues.</div>",
      "image": "https://i.imgur.com/OMANv0O.png",
      "audio": "https://audio-url-host/wificlient-fails-intro.mp3"
    },
    {
      "title": "🚧 Issue #1: DNS Problems",
      "content": "<div class='card'>Your Arduino can’t connect using the website name (like <code>api.example.com</code>)? It might be a DNS issue 😩</div>\n<div class='card'>Try connecting directly with the server’s IP address:</div>\n<pre>client.connect(\"93.184.216.34\", 80);</pre>\n<div class='card'>If that works, then your DNS lookup is broken — either use <code>WiFi.config()</code> to set a DNS, or manually hardcode IPs 🔍</div>",
      "image": "https://i.imgur.com/bFHUYo1.png",
      "audio": "https://audio-url-host/dns-issues.mp3"
    },
    {
      "title": "🌐 Issue #2: Wrong API URL or Port",
      "content": "<div class='card'>Always check:</div>\n<ul>\n<li>Is the API endpoint correct?</li>\n<li>Are you using HTTP (port 80) or HTTPS (port 443)?</li>\n<li>Arduino’s <code>WiFiClient</code> only supports HTTP. For HTTPS, use <code>WiFiClientSecure</code></li>\n</ul>\n<div class='card'>✅ Start with public, HTTP-based APIs while testing.</div>",
      "image": "https://i.imgur.com/qYOMg3x.png",
      "audio": "https://audio-url-host/api-port-problems.mp3"
    },
    {
      "title": "⏱️ Issue #3: No Response or Timeout",
      "content": "<div class='card'>Your request was sent, but nothing is coming back?</div>\n<div class='card'>Check if you sent the full HTTP request headers — especially the double <code>\\r\\n</code> at the end:</div>\n<pre>\nclient.print(\"GET /api/ HTTP/1.1\\r\\n\");\nclient.print(\"Host: example.com\\r\\n\");\nclient.print(\"Connection: close\\r\\n\\r\\n\");\n</pre>\n<div class='card'>⏳ If your loop waits forever, add a timeout check with <code>millis()</code> so you don’t freeze the whole Arduino!</div>",
      "image": "https://i.imgur.com/WtbyRfO.png",
      "audio": "https://audio-url-host/no-response-fix.mp3"
    },
    {
      "title": "📶 Issue #4: Poor WiFi Signal or Credentials",
      "content": "<div class='card'>Check your signal strength using <code>WiFi.RSSI()</code> 📶</div>\n<div class='card'>Weak signals may cause dropouts or failed connections.</div>\n<div class='card'>Also double-check your <code>ssid</code> and <code>password</code>. Yes — even one wrong character ruins everything 😅</div>\n<div class='card'>You can also call <code>WiFi.status()</code> to see if you're connected at all!</div>",
      "image": "https://i.imgur.com/OHHG3GW.png",
      "audio": "https://audio-url-host/wifi-checklist.mp3"
    },
    {
      "title": "🔁 Issue #5: Server Closes the Connection Too Soon",
      "content": "<div class='card'>Some APIs expect proper headers or authentication.</div>\n<div class='card'>If the server sees an incomplete request, it may hang up on your Arduino 😡</div>\n<div class='card'>Use <code>Serial.println()</code> to print every byte of your outgoing message to double-check what’s going out.</div>\n<div class='card'>💡 Some APIs require a special API key or token — read their docs carefully!</div>",
      "image": "https://i.imgur.com/tay40Mn.png",
      "audio": "https://audio-url-host/api-close-issue.mp3"
    },
    {
      "title": "🛠️ Debugging Checklist",
      "content": "<div class='card'>Here’s a quick checklist to follow when things go wrong:</div>\n<ul>\n<li>✅ Use <code>Serial.println()</code> to print your outgoing request</li>\n<li>✅ Use <code>WiFi.status()</code> to confirm you're online</li>\n<li>✅ Try <code>ping</code> the API from a PC to verify it's alive</li>\n<li>✅ Replace hostname with IP and test</li>\n<li>✅ Use a known-good HTTP API to test like <code>worldtimeapi.org</code></li>\n</ul>\n<div class='card'>You’re not alone — 90% of first API failures are fixable with these steps 🧠</div>",
      "image": "https://i.imgur.com/NyNJDun.png",
      "audio": "https://audio-url-host/wifi-debug-checklist.mp3"
    },
    {
      "title": "🎮 Game: Why Did It Fail?",
      "content": "<div class='card'>Scenario: You typed <code>client.connect(\"https://api.time.com\", 80)</code> and got no response.</div>\n<div class='card'>Why did it fail?</div>\n<div class='card'>\nA. Port 80 is wrong for HTTPS<br>\nB. You forgot \\r\\n\\r\\n<br>\nC. Should’ve used WiFiClientSecure<br>\nD. All of the above\n</div>\n<div class='card'><input id='failGame' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! All of the above are valid reasons why that call failed.\")'>Submit</button></div>",
      "image": "https://i.imgur.com/Z19S3zQ.png",
      "audio": "https://audio-url-host/wifi-failure-game.mp3"
    }
  ]
},{
  title:"WiFiServer Magic: Building Real-Time Web Interfaces with Arduino",
  modules:[
    {
  "title": "WiFiServer — Hosting Your Own Server With Arduino!",
  "lessons": [
    {
      "title": "💡 What is WiFiServer?",
      "content": "<div class='card'>Up until now, your Arduino was always the one connecting to a server.</div>\n<div class='card'><b>But now, your Arduino becomes the server itself!</b></div>\n<div class='card'>Yes, with <code>WiFiServer</code>, your Arduino listens for connections and replies to incoming requests, just like a web server 🌐</div>\n<div class='card'>It's like turning your Arduino into a mini website host 📡</div>",
      "image": "https://i.imgur.com/NJpVvWz.png",
      "audio": "https://audio-url-host/wifiserver-intro.mp3"
    },
    {
      "title": "🏠 What Does Hosting Mean in Arduino?",
      "content": "<div class='card'>When you use <code>WiFiServer</code>, your Arduino opens a specific port (like port 80 for HTTP).</div>\n<div class='card'>Any device on the same WiFi network can visit your Arduino’s IP address and <b>see the response</b> — just like a local website 👀</div>\n<div class='card'>You become the restaurant 🍽️ — and the clients (browsers or apps) come to you!</div>",
      "image": "https://i.imgur.com/8qkMYp2.png",
      "audio": "https://audio-url-host/wifiserver-hosting.mp3"
    },
    {
      "title": "🔨 Constructor: WiFiServer(port)",
      "content": "<div class='card'>To create a server, use:</div>\n<pre>\nWiFiServer server(80); // 80 is HTTP default port\n</pre>\n<div class='card'>This sets up the object — but it doesn’t start listening yet!</div>\n<div class='card'><b>Fun fact:</b> You can use other ports too like 8080 or 3000 — just make sure clients connect to the correct one.</div>",
      "image": "https://i.imgur.com/o3K8dZ7.png",
      "audio": "https://audio-url-host/wifiserver-constructor.mp3"
    },
    {
      "title": "🧠 When Should You Use WiFiServer?",
      "content": "<div class='card'>You should use <code>WiFiServer</code> when:</div>\n<ul>\n<li>📊 You want to show sensor data via web browser</li>\n<li>🕹️ You want users to control Arduino via WiFi</li>\n<li>📡 You need to create a local device dashboard</li>\n<li>🛠️ You want to build an ESP-based home automation server</li>\n</ul>\n<div class='card'>In short: when you want Arduino to <i>serve</i> data, not just request it 🔁</div>",
      "image": "https://i.imgur.com/3UYuPxP.png",
      "audio": "https://audio-url-host/wifiserver-usecases.mp3"
    },
    {
      "title": "🎮 Game: Client or Server?",
      "content": "<div class='card'>Your Arduino listens on port 80 and waits for connections. What is it?</div>\n<div class='card'>A. Client<br>B. Server<br>C. Database<br>D. Cloud</div>\n<div class='card'><input id='serverQuiz1' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! It’s a Server because it’s listening for clients.\")'>Submit</button></div>",
      "image": "https://i.imgur.com/kHHhgAs.png",
      "audio": "https://audio-url-host/wifiserver-quiz.mp3"
    },
    {
      "title": "💬 Final Recap: The Power of Hosting",
      "content": "<div class='card'>With just one line:</div>\n<pre>\nWiFiServer server(80);\n</pre>\n<div class='card'>You can build a weather station, a home control panel, or even a mini HTML page hosted inside your Arduino 🤯</div>\n<div class='card'>This is where your device becomes a <b>talker</b>, not just a <b>listener</b> 🔁</div>",
      "image": "https://i.imgur.com/lJceazj.png",
      "audio": "https://audio-url-host/wifiserver-recap.mp3"
    }
  ]
}
,{
  "title": "server.begin() — Wake Up the Web Host in Arduino!",
  "lessons": [
    {
      "title": "🚀 What is server.begin()?",
      "content": "<div class='card'>You've declared <code>WiFiServer server(80);</code>, but nothing is actually listening yet...</div>\n<div class='card'>To activate your server, you must call:</div>\n<pre>\nserver.begin();\n</pre>\n<div class='card'>This starts the listening process — your Arduino now waits for incoming devices to connect 🛎️</div>",
      "image": "https://i.imgur.com/smcMQ5Z.png",
      "audio": "https://audio-url-host/server-begin-intro.mp3"
    },
    {
      "title": "🧠 Why You Need It",
      "content": "<div class='card'>Without <code>begin()</code>, your server won’t respond to anything — it’s like opening a restaurant but forgetting to unlock the door 🚪</div>\n<div class='card'>This is usually placed in <code>setup()</code> after connecting to WiFi.</div>\n<pre>\nWiFi.begin(ssid, pass);\nwhile (WiFi.status() != WL_CONNECTED) {\n  delay(500);\n}\nserver.begin();\n</pre>\n<div class='card'>Now you’re live and accepting connections 🌐</div>",
      "image": "https://i.imgur.com/GmPjga4.png",
      "audio": "https://audio-url-host/server-begin-why.mp3"
    },
    {
      "title": "🕵️ Behind the Scenes: What begin() Does",
      "content": "<div class='card'>Calling <code>begin()</code> sets up internal buffers and tells your ESP/Arduino core to watch the specified port (like 80).</div>\n<div class='card'>From this moment on, the Arduino is ready to handle incoming TCP requests.</div>\n<div class='card'>It becomes a mini server — a webpage or command listener for your home network 💬📡</div>",
      "image": "https://i.imgur.com/9G8lQ4C.png",
      "audio": "https://audio-url-host/server-begin-how.mp3"
    },
    {
      "title": "⚠️ Common Mistake: Forgetting server.begin()",
      "content": "<div class='card'>This is a super common beginner error 😅</div>\n<div class='card'>If your Arduino doesn’t respond to local browser requests (like 192.168.1.58), check:</div>\n<ul>\n<li>✅ Did you call <code>server.begin()</code>?</li>\n<li>✅ Is WiFi connected first?</li>\n<li>✅ Are you on the same local network?</li>\n</ul>\n<div class='card'>Missing <code>begin()</code> is like having a server that doesn’t exist 😶</div>",
      "image": "https://i.imgur.com/U5VG90f.png",
      "audio": "https://audio-url-host/server-begin-mistake.mp3"
    },
    {
      "title": "🎮 Game: When Should You Begin?",
      "content": "<div class='card'>Where should <code>server.begin()</code> go in your Arduino sketch?</div>\n<div class='card'>A. In <code>setup()</code>, right after WiFi connects<br>B. Inside <code>loop()</code><br>C. After <code>server.available()</code><br>D. At the very end of the program</div>\n<div class='card'><input id='beginGame' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! It should go in setup(), after WiFi is connected.\")'>Submit</button></div>",
      "image": "https://i.imgur.com/GWmFRtr.png",
      "audio": "https://audio-url-host/server-begin-quiz.mp3"
    },
    {
      "title": "🔧 Pro Tip: Begin Once, Listen Forever",
      "content": "<div class='card'>You only need to call <code>server.begin()</code> once — usually in <code>setup()</code>.</div>\n<div class='card'>After that, it keeps running in the background — ready to accept any connections at any time 📲</div>\n<div class='card'>Think of it like turning on the lights in a shop. You don’t keep turning them on again and again!</div>",
      "image": "https://i.imgur.com/euFtNTV.png",
      "audio": "https://audio-url-host/server-begin-protip.mp3"
    }
  ]
}
,{
  "title": "server.available() — How Arduino Accepts Visitors",
  "lessons": [
    {
      "title": "👋 What is server.available()?",
      "content": "<div class='card'><code>server.available()</code> checks if someone (a client) has connected to your Arduino.</div>\n<div class='card'>When a browser or app sends a request, this function <b>catches it</b> and gives you a way to talk to that client 🤝</div>\n<pre>\nWiFiClient client = server.available();\n</pre>\n<div class='card'>Now you can use that <code>client</code> just like in WiFiClient!</div>",
      "image": "https://i.imgur.com/v5tvNBu.png",
      "audio": "https://audio-url-host/server-available-intro.mp3"
    },
    {
      "title": "🧠 Why It’s Needed",
      "content": "<div class='card'>Without <code>server.available()</code>, you’d never know when a user tries to access your Arduino!</div>\n<div class='card'>It works like a door sensor — when someone rings the doorbell, this function tells you: \"Hey, we’ve got a guest!\" 🛎️</div>\n<div class='card'>It returns a <code>WiFiClient</code> object so you can read/write just like you did in earlier lessons.</div>",
      "image": "https://i.imgur.com/RWjc9xw.png",
      "audio": "https://audio-url-host/server-available-why.mp3"
    },
    {
      "title": "🔄 The Classic Loop Pattern",
      "content": "<div class='card'>Here’s how it’s usually used:</div>\n<pre>\nWiFiClient client = server.available();\nif (client) {\n  // someone connected\n  if (client.available()) {\n    String req = client.readStringUntil('\\r');\n    Serial.println(req);\n  }\n}\n</pre>\n<div class='card'>You wait for a client, then check if they've sent any data — just like a real web server!</div>",
      "image": "https://i.imgur.com/1H8m1Iw.png",
      "audio": "https://audio-url-host/server-available-loop.mp3"
    },
    {
      "title": "📦 What It Returns",
      "content": "<div class='card'><code>server.available()</code> gives you a <b>WiFiClient</b> object if a user is connected.</div>\n<div class='card'>If no one’s connected, it returns a client that’s not valid (like an empty envelope 📭)</div>\n<pre>\nif (client) {\n  // This means it's a valid connection!\n}\n</pre>\n<div class='card'>Use this check to avoid errors or timeouts.</div>",
      "image": "https://i.imgur.com/5NVLaSh.png",
      "audio": "https://audio-url-host/server-available-return.mp3"
    },
    {
      "title": "📊 Real World Use: Sensor Dashboard",
      "content": "<div class='card'>Imagine this:</div>\n<div class='card'>You build a temperature logger using Arduino and DHT11 🌡️</div>\n<div class='card'>When someone visits <code>http://192.168.1.23</code>, your Arduino shows them the current temperature — served live!</div>\n<div class='card'>All possible because of <code>server.available()</code> 💪</div>",
      "image": "https://i.imgur.com/K7jOZqi.png",
      "audio": "https://audio-url-host/server-available-dashboard.mp3"
    },
    {
      "title": "🎮 Game: Real or Not Real?",
      "content": "<div class='card'>What does this code do?</div>\n<pre>\nWiFiClient client = server.available();\nif (client) {\n  Serial.println(\"Client connected!\");\n}\n</pre>\n<div class='card'>A. Waits for client and confirms it<br>B. Sends temperature<br>C. Does nothing<br>D. Crashes Arduino</div>\n<div class='card'><input id='availQuiz' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! It waits and prints when a client connects.\")'>Submit</button></div>",
      "image": "https://i.imgur.com/yXf9VmP.png",
      "audio": "https://audio-url-host/server-available-quiz.mp3"
    },
    {
      "title": "📎 Bonus: Keep Connections Short",
      "content": "<div class='card'>Remember: Arduino has limited memory.</div>\n<div class='card'>Once you’re done with a client (after replying), close it using:</div>\n<pre>\nclient.stop();\n</pre>\n<div class='card'>It’s polite and smart to free up space for new users 🧠</div>",
      "image": "https://i.imgur.com/MrA2bYM.png",
      "audio": "https://audio-url-host/server-available-tip.mp3"
    }
  ]
}
,{
  "title": "server.write() — Sending Raw Data to Your Visitors",
  "lessons": [
    {
      "title": "💬 What Does server.write() Do?",
      "content": "<div class='card'><code>server.write()</code> is how your Arduino sends raw byte data back to a connected client 📤</div>\n<div class='card'>It works on the client object received from <code>server.available()</code> — just like <code>client.write()</code>.</div>\n<div class='card'>It’s best for binary data: like sending image bytes, sensor dumps, or custom formats 🧠</div>",
      "image": "https://i.imgur.com/vVpr15P.png",
      "audio": "https://audio-url-host/server-write-intro.mp3"
    },
    {
      "title": "✍️ Syntax & Overloads",
      "content": "<div class='card'>You can use it in multiple ways:</div>\n<pre>\nclient.write(byteVal);\nclient.write(buffer, length);\n</pre>\n<div class='card'>This gives you precise control — great for low-level communication like IoT sensors, binary files, or encrypted payloads 🔐</div>",
      "image": "https://i.imgur.com/v7Vmwus.png",
      "audio": "https://audio-url-host/server-write-syntax.mp3"
    },
    {
      "title": "📦 Real-World Example: Sending Binary Sensor Data",
      "content": "<div class='card'>Let’s say you want to send raw bytes from a temperature sensor, 10 times per second:</div>\n<pre>\nbyte temp = readSensor();\nclient.write(temp);\n</pre>\n<div class='card'>This might be used in a fast remote monitoring dashboard — where JSON or text would be too slow ⚡</div>",
      "image": "https://i.imgur.com/B2rL20l.png",
      "audio": "https://audio-url-host/server-write-example.mp3"
    },
    {
      "title": "🆚 When to Use write() Instead of print()",
      "content": "<div class='card'><code>write()</code> sends raw bytes 🔢 — <code>print()</code> sends readable text 💬</div>\n<div class='card'>Use <code>write()</code> when:</div>\n<ul>\n<li>⚡ You need fast, efficient communication</li>\n<li>🔢 You’re sending binary data</li>\n<li>📦 You don’t want formatting or line breaks</li>\n</ul>\n<div class='card'>Use <code>print()</code> when you're building a webpage or sending human-readable output 📃</div>",
      "image": "https://i.imgur.com/g4mdpY2.png",
      "audio": "https://audio-url-host/server-write-vs-print.mp3"
    },
    {
      "title": "🎮 Game: Write or Print?",
      "content": "<div class='card'>You want to send a temperature number that looks like “Temp: 23°C”. Which one do you use?</div>\n<div class='card'>A. write()<br>B. print()<br>C. digitalWrite()<br>D. sendBytes()</div>\n<div class='card'><input id='writeQuiz' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! You use print() for formatted, readable text.\")'>Submit</button></div>",
      "image": "https://i.imgur.com/vhKx6tu.png",
      "audio": "https://audio-url-host/server-write-quiz.mp3"
    },
    {
      "title": "⚠️ Tips for write(): Watch Buffer Size",
      "content": "<div class='card'>Since <code>write()</code> works at a lower level, there’s no automatic formatting or buffering.</div>\n<div class='card'>Make sure:</div>\n<ul>\n<li>📐 You send correct byte sizes</li>\n<li>📏 You don't overflow the client buffer</li>\n<li>🧪 You test on real devices for consistent results</li>\n</ul>\n<div class='card'>It’s powerful — but advanced. Use wisely! 🧠</div>",
      "image": "https://i.imgur.com/2ib9kUe.png",
      "audio": "https://audio-url-host/server-write-tips.mp3"
    }
  ]
}
,{
  "title": "server.print() — Making Arduino Speak Like a Website",
  "lessons": [
    {
      "title": "🧾 What is server.print()?",
      "content": "<div class='card'><code>server.print()</code> (or more precisely, <code>client.print()</code> used on the object from <code>server.available()</code>) is how your Arduino sends readable text to the connected client.</div>\n<div class='card'>It’s perfect for sending HTML, sensor values, text messages, and more 📃</div>\n<pre>\nclient.print(\"Hello World!\");\n</pre>\n<div class='card'>This shows up in the user’s browser like a mini web page!</div>",
      "image": "https://i.imgur.com/ArxEkdn.png",
      "audio": "https://audio-url-host/server-print-intro.mp3"
    },
    {
      "title": "📐 Syntax & Flexibility",
      "content": "<div class='card'>You can print:</div>\n<ul>\n<li>📊 Numbers</li>\n<li>🔤 Strings</li>\n<li>🧮 Floats (even with precision!)</li>\n</ul>\n<pre>\nclient.print(3.14159, 2); // prints 3.14\nclient.print(\"Temp: \");\nclient.print(25);\nclient.print(\" °C\");\n</pre>\n<div class='card'>Everything gets sent exactly as it would appear in a serial monitor — but this time, it reaches the user's browser!</div>",
      "image": "https://i.imgur.com/jPCULyn.png",
      "audio": "https://audio-url-host/server-print-syntax.mp3"
    },
    {
      "title": "🖼️ Example: Simple Web Page in Arduino",
      "content": "<div class='card'>You can literally make Arduino act like a mini web server!</div>\n<pre>\nclient.print(\"<html><body>\");\nclient.print(\"<h1>Hello!</h1>\");\nclient.print(\"<p>Temp: \");\nclient.print(temp);\nclient.print(\" °C</p>\");\nclient.print(\"</body></html>\");\n</pre>\n<div class='card'>Load this in your browser: http://your-arduino-ip</div>",
      "image": "https://i.imgur.com/NzMoS8u.png",
      "audio": "https://audio-url-host/server-print-example.mp3"
    },
    {
      "title": "🧠 When to Use print() vs. write()",
      "content": "<div class='card'><code>print()</code> is great for readable text and formatted values.</div>\n<div class='card'><code>write()</code> is better for raw bytes or advanced protocols.</div>\n<ul>\n<li>🌐 Use <code>print()</code> for HTML pages</li>\n<li>💬 Use it to send sensor messages</li>\n<li>📡 Use it to simulate a real HTTP server</li>\n</ul>",
      "image": "https://i.imgur.com/bGib1oa.png",
      "audio": "https://audio-url-host/server-print-vs-write.mp3"
    },
    {
      "title": "🎮 Game: Will This Work?",
      "content": "<div class='card'>What happens when you write this?</div>\n<pre>\nclient.print(\"<h1>Hello!</h1>\");\n</pre>\n<div class='card'>A. It sends a valid HTML header<br>B. It prints raw data<br>C. It breaks<br>D. It only works in Serial</div>\n<div class='card'><input id='printGame' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! It sends HTML that browsers understand.\")'>Submit</button></div>",
      "image": "https://i.imgur.com/qGoOmMZ.png",
      "audio": "https://audio-url-host/server-print-quiz.mp3"
    },
    {
      "title": "🪄 Pro Tip: Use print() to Serve Anything",
      "content": "<div class='card'>With <code>print()</code>, you can simulate REST APIs too:</div>\n<pre>\nclient.print(\"{\\\"temp\\\": \");\nclient.print(temp);\nclient.print(\"}\");\n</pre>\n<div class='card'>Now you’re serving JSON from Arduino! 📡</div>\n<div class='card'>Browsers, apps, or other microcontrollers can fetch your data!</div>",
      "image": "https://i.imgur.com/bDJWkco.png",
      "audio": "https://audio-url-host/server-print-tip.mp3"
    }
  ]
}
,{
  "title": "server.println() — Send Clean, Line-by-Line Responses Like a Pro",
  "lessons": [
    {
      "title": "🧼 What is println()?",
      "content": "<div class='card'><code>println()</code> works just like <code>print()</code> — but adds a <b>newline character</b> at the end.</div>\n<div class='card'>It's perfect for sending data in a structured, readable format 📑</div>\n<pre>\nclient.println(\"Temperature: 25°C\");\nclient.println(\"Humidity: 52%\");\n</pre>\n<div class='card'>The user sees it line by line — like a terminal or clean browser display.</div>",
      "image": "https://i.imgur.com/34SMPMQ.png",
      "audio": "https://audio-url-host/server-println-intro.mp3"
    },
    {
      "title": "📦 What's Sent Under the Hood?",
      "content": "<div class='card'><code>client.println(\"Hello\")</code> sends this:</div>\n<pre>\nHello\\r\\n\n</pre>\n<div class='card'>That’s a carriage return and newline — most browsers and text parsers understand it as “new line here.”</div>\n<div class='card'>Great for CSVs, sensor dumps, debug logs, or REST-like responses 🧠</div>",
      "image": "https://i.imgur.com/W8WVNzd.png",
      "audio": "https://audio-url-host/server-println-format.mp3"
    },
    {
      "title": "🧪 Example: Streaming Data to Browser",
      "content": "<div class='card'>This example will output sensor data every second to your browser:</div>\n<pre>\nclient.println(\"Temp: 25°C\");\ndelay(1000);\nclient.println(\"Temp: 26°C\");\n</pre>\n<div class='card'>You can even simulate logs or a terminal with this behavior!</div>",
      "image": "https://i.imgur.com/pvEBEGT.png",
      "audio": "https://audio-url-host/server-println-example.mp3"
    },
    {
      "title": "🆚 print() vs. println() — Use Cases",
      "content": "<div class='card'>Use <code>print()</code> when:</div>\n<ul>\n<li>You’re building a full sentence or HTML on one line</li>\n</ul>\n<div class='card'>Use <code>println()</code> when:</div>\n<ul>\n<li>You want readable, line-separated data</li>\n<li>You’re outputting logs, sensor streams, JSON lines</li>\n</ul>\n<pre>\nclient.print(\"Temp: \");\nclient.println(25);\n</pre>",
      "image": "https://i.imgur.com/ydN3P2L.png",
      "audio": "https://audio-url-host/server-println-compare.mp3"
    },
    {
      "title": "🎮 Game: Print or Println?",
      "content": "<div class='card'>You’re building a real-time sensor stream. Which do you choose?</div>\n<pre>\nTemp: 25°C\\n\nTemp: 26°C\\n\n</pre>\n<div class='card'>A. print()<br>B. println()<br>C. write()<br>D. Serial.write()</div>\n<div class='card'><input id='printlnGame' placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! Use println() for line-by-line output.\")'>Submit</button></div>",
      "image": "https://i.imgur.com/Db8Jalv.png",
      "audio": "https://audio-url-host/server-println-quiz.mp3"
    },
    {
      "title": "💬 Bonus: HTML + println() = Cleaner Pages",
      "content": "<div class='card'>When building HTML responses, mixing <code>print()</code> and <code>println()</code> makes code cleaner:</div>\n<pre>\nclient.println(\"<html><body>\");\nclient.print(\"<h1>Temp: \");\nclient.print(temp);\nclient.println(\" °C</h1>\");\nclient.println(\"</body></html>\");\n</pre>\n<div class='card'>Much easier to read and maintain!</div>",
      "image": "https://i.imgur.com/OLqtQ8N.png",
      "audio": "https://audio-url-host/server-println-tip.mp3"
    }
  ]
}
,{
  "title": "What is a Port Number? (Like Port 80, 443, etc.)",
  "lessons": [
    {
      "title": "🛣️ What is a Port in Networking?",
      "content": "<div class='card'>A <b>port</b> is like a virtual doorway into your device 📱</div>\n<div class='card'>Just like a house has many rooms (kitchen, bedroom...), a computer or Arduino has many ports — each for a different kind of communication.</div>\n<div class='card'>For example:\n<ul><li>Port 80 — for websites (HTTP)</li><li>Port 443 — for secure websites (HTTPS)</li><li>Port 22 — for SSH</li></ul></div>\n<div class='card'>When you write <code>WiFiServer server(80);</code>, you're saying: \"Start listening for website requests on port 80\" 🌐</div>",
      "image": "https://i.imgur.com/HOei8vh.png",
      "audio": "https://audio-url-host/port-intro.mp3"
    },
    {
      "title": "🧠 Why You Must Choose the Right Port",
      "content": "<div class='card'>Some ports are globally recognized (like 80 or 443). Using those helps browsers or apps understand how to talk to your device.</div>\n<div class='card'>But you can also use custom ports like 8080, 5000, or 3001 — just make sure the browser knows!</div>\n<pre>\nWiFiServer server(8080);\n</pre>\n<div class='card'>To access it, use: <code>http://192.168.1.47:8080</code></div>",
      "image": "https://i.imgur.com/fovwSVS.png",
      "audio": "https://audio-url-host/port-why.mp3"
    },
    {
      "title": "🎮 Game: Match the Port!",
      "content": "<div class='card'>Which service uses which port?</div>\n<ul>\n<li>HTTP → ?</li>\n<li>HTTPS → ?</li>\n<li>Arduino Server → ?</li>\n</ul>\n<div class='card'><input placeholder='Type like: 80, 443, 8080' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! 80 for HTTP, 443 for HTTPS, and Arduino can use any port!\")'>Submit</button></div>",
      "image": "https://i.imgur.com/9b9dUcl.png",
      "audio": "https://audio-url-host/port-quiz.mp3"
    }
  ]
}
,{
  "title": "What is a Client? Who is Connecting to Arduino?",
  "lessons": [
    {
      "title": "🧍‍♂️ What is a Client in WiFi?",
      "content": "<div class='card'>In networking, a <b>client</b> is the person or device that requests something 📱</div>\n<div class='card'>When your Arduino becomes a server, anything connecting to it (like your phone or browser) becomes the client.</div>\n<div class='card'>This line checks for clients:</div>\n<pre>\nWiFiClient client = server.available();\n</pre>",
      "image": "https://i.imgur.com/lVRQmnU.png",
      "audio": "https://audio-url-host/client-intro.mp3"
    },
    {
      "title": "🔄 Server vs. Client (Who Does What?)",
      "content": "<div class='card'><b>Server:</b> Arduino, hosting the website, sending data</div>\n<div class='card'><b>Client:</b> You — accessing Arduino via a browser or app</div>\n<div class='card'>Your browser says: \"Hey Arduino, give me the temp!\"<br>Arduino replies: \"Sure! Temp is 25°C\"</div>",
      "image": "https://i.imgur.com/I1jWx3J.png",
      "audio": "https://audio-url-host/server-vs-client.mp3"
    },
    {
      "title": "🎮 Game: Client or Server?",
      "content": "<div class='card'>Which is the client?</div>\n<ul>\n<li>A. Arduino sending sensor data to your phone</li>\n<li>B. Phone requesting dashboard page from Arduino</li>\n</ul>\n<div class='card'><input placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ Correct! The phone is the client in both cases.\")'>Submit</button></div>",
      "image": "https://i.imgur.com/FWbbNvC.png",
      "audio": "https://audio-url-host/client-quiz.mp3"
    }
  ]
}
,{
  "title": "What Does “Available” Mean? (server.available & client.available)",
  "lessons": [
    {
      "title": "👀 The Word 'Available' in Arduino",
      "content": "<div class='card'>In Arduino, <code>available()</code> is like asking: \"Is there anything here yet?\" 👀</div>\n<div class='card'>It checks for:</div>\n<ul><li>👂 Has a user connected to the server? (<code>server.available()</code>)</li>\n<li>📩 Has the client sent any data yet? (<code>client.available()</code>)</li></ul>",
      "image": "https://i.imgur.com/2FJkFbH.png",
      "audio": "https://audio-url-host/available-intro.mp3"
    },
    {
      "title": "🔁 Real World Example",
      "content": "<div class='card'>You don’t want to read from an empty connection. So always check:</div>\n<pre>\nif (client.available()) {\n  String msg = client.readString();\n}\n</pre>\n<div class='card'>This prevents bugs, freezes, and weird junk data 🛡️</div>",
      "image": "https://i.imgur.com/U6mAemF.png",
      "audio": "https://audio-url-host/available-check.mp3"
    },
    {
      "title": "🎮 Game: True or False?",
      "content": "<div class='card'>You should always use <code>available()</code> before reading from a client.</div>\n<div class='card'>A. True<br>B. False</div>\n<div class='card'><input placeholder='Your answer...' style='width:100%'>\n<button class='gaming-btn' onclick='alert(\"✅ True! It ensures there’s data to read.\")'>Submit</button></div>",
      "image": "https://i.imgur.com/4QnZuQA.png",
      "audio": "https://audio-url-host/available-quiz.mp3"
    }
  ]
}

  ]
}

  ]
}

  ]
};
