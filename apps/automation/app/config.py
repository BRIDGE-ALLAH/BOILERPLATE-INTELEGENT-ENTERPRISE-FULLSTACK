from pathlib import Path

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_prefix="AUTOMATION_",
        env_file=".env",
        extra="ignore",
    )

    app_name: str = "MoonWitness Automation"
    database_path: Path = Path("automation.db")
    api_key: str | None = None
    allow_private_targets: bool = False
    request_timeout_seconds: float = Field(default=10.0, gt=0, le=60)
    max_response_bytes: int = Field(default=8192, ge=256, le=1_048_576)
    cors_origins: str = "http://localhost:3000"

    @property
    def allowed_origins(self) -> list[str]:
        return [
            origin.strip()
            for origin in self.cors_origins.split(",")
            if origin.strip()
        ]
