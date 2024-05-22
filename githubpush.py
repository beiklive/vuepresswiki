import subprocess
from openai import OpenAI

def get_git_user_info():
    # 获取用户姓名和邮箱
    user_name = subprocess.check_output(['git', 'config', 'user.name']).strip().decode()
    user_email = subprocess.check_output(['git', 'config', 'user.email']).strip().decode()
    return user_name, user_email

def get_git_status():
    # 获取文件变更信息
    git_status = subprocess.check_output(['git', 'status', '--porcelain', '--untracked-files=all']).strip().decode()
    return git_status

def format_commit_message(user_name, user_email, diff_info):
    # 构造提交信息
    commit_message = f"🚀 Commit by: {user_name} <{user_email}>\n\n"
    commit_message += "📝 Changes:\n"
    commit_message += diff_info
    return commit_message


def kimi_robot(commit_message):
 
    client = OpenAI(
        api_key = "sk-QWBokCyfC7eGQ5DGh9aHRgz18vS4mgpZsztEQhvu1zwXGRij",
        base_url = "https://api.moonshot.cn/v1",
    )

    sys_msg = """
    请你作为AI助手，根据提供的Git提交变更摘要，使用中文润色成一份详略得当的提交信息并添加恰当的emoji表情。
    要求如下
    1. .obsidian/ 下的所有修改请忽略不要润色
    2. ？？ 开头的所有修改请忽略不要润色
    3. 不要出现可能、应该之类推测性质的词汇

    """

    user_msg = commit_message

    completion = client.chat.completions.create(
        model = "moonshot-v1-8k",
        messages = [
            {"role": "system", "content": sys_msg},
            {"role": "user", "content": user_msg}
        ],
        temperature = 0.3,
    )
    
    return completion.choices[0].message.content




def main():
    try:
        # 获取用户姓名和邮箱
        user_name, user_email = get_git_user_info()
        
        # 获取文件变更信息
        diff_info = get_git_status()

        # 格式化提交信息
        final_commit_message = format_commit_message(user_name, user_email, diff_info)

        # 添加所有修改的文件到暂存区
        subprocess.run(['git', 'add', '-A'])

        # 提交到本地仓库
        subprocess.run(['git', 'commit', '-m', kimi_robot(final_commit_message)])

        # 推送到远程仓库
        subprocess.run(['git', 'push'])

        print("提交完成！")
    except subprocess.CalledProcessError as e:
        print(f"出现错误：{e}")

if __name__ == "__main__":
    main()
