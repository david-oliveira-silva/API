Object.defineProperty(exports, "__esModule", { value: true });
//Importar a biblioteca Express
const express_1 = __importDefault(require("express"));
const AuthService_1 = require("../services/AuthService");
// Criar a Aplicação Express
const router = express_1.default.Router();

router.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({
                message: "Email e senha são obrigatórios!",
            });
            return;
        }
        const authService = new AuthService_1.AuthService();
        const userData = await authService.login(email, password);
        // Retornar erro em caso de falha
        res.status(200).json({
            message: "Login Realizado com Sucesso!",
            user: userData
        });
        return;
    }
    catch (error) {
        // Retornar erro em caso de falha
        res.status(401).json({
            message: error.message || "Erro ao realizar o login!",
        });
        return;
    }