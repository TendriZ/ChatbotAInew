# TendriZ AI ChatBot Service

A modern, responsive web-based AI chatbot powered by Google's Gemini API. TendriZ AI provides an intuitive chat interface with real-time responses and a sleek user experience.

![TendriZ AI](https://img.shields.io/badge/AI-Chatbot-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Gemini API](https://img.shields.io/badge/Gemini-API-orange)

## ✨ Features

- **Real-time AI Chat**: Powered by Google's Gemini 2.0 Flash model
- **Modern UI**: Clean, responsive design with gradient backgrounds
- **Typing Indicators**: Visual feedback while AI is processing responses
- **Chat History**: Clear chat functionality to start fresh conversations
- **Mobile Responsive**: Optimized for all device sizes
- **Error Handling**: Graceful error management with user-friendly messages
- **Smooth Animations**: Slide-in message animations and smooth scrolling

## 🚀 Live Demo

Open `index.html` in your browser to start chatting with TendriZ AI!

## 📋 Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for Gemini API access
- Google Gemini API key

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TendriZ/ChatbotAInew.git
   cd ChatbotAInew
   ```

2. **Configure API Key**
   - Open `script.js`
   - Replace the API key in the `geminiChatAi` function:
   ```javascript
   const apiKey = "YOUR_GEMINI_API_KEY_HERE";
   ```

3. **Launch the application**
   ```bash
   # Option 1: Open directly in browser
   open index.html
   
   # Option 2: Use a local server (recommended)
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

## 🔧 Configuration

### Getting a Gemini API Key

1. Visit [Google AI Studio](https://aistudio.google.com/)
2. Sign in with your Google account
3. Create a new API key
4. Replace the placeholder in `script.js` with your key

### Customization Options

#### Modify AI Model
Change the model in the API endpoint:
```javascript
// In script.js, replace:
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`

// With other available models like:
`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`
```

#### Styling Customization
- **Colors**: Modify gradient colors in `style.css`
- **Typography**: Change font family in the Google Fonts import
- **Layout**: Adjust container dimensions and spacing

## 📁 Project Structure

```
ChatbotAInew/
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── script.js           # JavaScript logic and API integration
└── README.md           # Project documentation
```

## 🔍 File Overview

### `index.html`
- Clean HTML5 structure
- Responsive meta tags
- Google Fonts integration (Poppins)
- Chat interface layout

### `style.css`
- Modern gradient design
- Responsive breakpoints for mobile devices
- Smooth animations and transitions
- Custom scrollbar styling

### `script.js`
- Gemini API integration
- Message handling and UI updates
- Typing indicators and animations
- Error handling and validation

## 💡 Usage

1. **Start Chatting**: Type your message in the input field
2. **Send Message**: Click "Send" or press Enter
3. **Clear History**: Use the clear button to reset the conversation
4. **Mobile**: Fully responsive on all devices

### Example Interactions

```
You: What is artificial intelligence?
TendriZ AI: Artificial intelligence (AI) refers to the simulation of human intelligence in machines...

You: Can you help me with coding?
TendriZ AI: Absolutely! I can help you with various programming languages and concepts...
```

## 🔒 Security Notes

- **API Key Security**: Never commit your actual API key to version control
- **Environment Variables**: Consider using environment variables for production
- **Rate Limiting**: Be aware of Gemini API rate limits
- **Input Validation**: The app includes basic input sanitization

## 🐛 Troubleshooting

### Common Issues

1. **No Response from AI**
   - Check your API key is valid
   - Verify internet connection
   - Check browser console for errors

2. **Styling Issues**
   - Clear browser cache
   - Check if all CSS files are loaded properly

3. **Mobile Display Problems**
   - Ensure viewport meta tag is present
   - Test responsive breakpoints

### Error Messages

- "Network error. Please check your connection." - Internet connectivity issue
- "Sorry, I couldn't generate a response." - API response error
- "Sorry, I encountered an error." - General error handling

## 🌟 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Check existing issues for solutions
- Review the troubleshooting section

## 🙏 Acknowledgments

- Google Gemini API for AI capabilities
- Google Fonts for typography
- Modern CSS techniques for responsive design

## 📊 Roadmap

- [ ] Add conversation history persistence
- [ ] Implement user authentication
- [ ] Add file upload capability
- [ ] Voice message support
- [ ] Dark/light theme toggle
- [ ] Multi-language support

---

**Made with ❤️ by [Your Name]**

*TendriZ AI - Your intelligent conversation partner*